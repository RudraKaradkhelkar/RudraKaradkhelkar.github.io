#!/usr/bin/env node
// Quality audit for the built site (PROMPT-OVERNIGHT.md Phase 3):
//   1. axe (WCAG 2.1 A and AA) on every route, in both themes, at desktop and phone sizes
//   2. every internal link and asset reference in dist/ resolves to a file
//   3. banned patterns in src/ and dist/: em dashes, sparkle glyphs, emoji, banned fonts,
//      backdrop-filter outside the nav, gradient text outside the hero headline, phone numbers
//
//   npm run audit                 build, then audit everything
//   npm run audit -- --no-build   reuse the existing dist/
//
// Exit code 1 means at least one check failed.
import { spawn } from 'node:child_process';
import { readFile, readdir, stat } from 'node:fs/promises';
import net from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const ASTRO = path.join(ROOT, 'node_modules', 'astro', 'bin', 'astro.mjs');
const THEME_KEY = 'rk-theme';
const argv = process.argv.slice(2);

const ROUTES = ['/', '/research/', '/experience/', '/projects/', '/awards/', '/clubs/', '/high-school/', '/life/', '/resume/', '/this-page-does-not-exist/'];
const SIZES = [
  { name: 'desktop', width: 1440, height: 900, touch: false },
  { name: 'phone', width: 390, height: 844, touch: true },
];
const failures = [];

function run(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [ASTRO, ...args], { cwd: ROOT, stdio: 'inherit' });
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`astro ${args[0]} failed (${code})`))));
  });
}

function freePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.unref();
    srv.on('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

async function walk(dir, exts) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p, exts)));
    else if (exts.some((e) => entry.name.endsWith(e))) out.push(p);
  }
  return out;
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

// ---------- 1. axe ----------
async function axe() {
  const port = await freePort();
  const base = `http://127.0.0.1:${port}`;
  const preview = spawn(process.execPath, [ASTRO, 'preview', '--host', '127.0.0.1', '--port', String(port)], { cwd: ROOT, stdio: 'ignore' });
  try {
    for (let i = 0; i < 120; i++) {
      try {
        await fetch(base);
        break;
      } catch {
        await new Promise((r) => setTimeout(r, 250));
      }
    }
    const browser = await chromium.launch();
    for (const route of ROUTES) {
      for (const theme of ['dark', 'light']) {
        for (const size of SIZES) {
          const context = await browser.newContext({
            viewport: { width: size.width, height: size.height },
            isMobile: size.touch,
            hasTouch: size.touch,
            reducedMotion: 'reduce',
            colorScheme: theme,
          });
          await context.addInitScript(([k, v]) => localStorage.setItem(k, v), [THEME_KEY, theme]);
          const page = await context.newPage();
          await page.goto(base + route, { waitUntil: 'networkidle' });
          await page.evaluate(() => document.fonts.ready);
          const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
          for (const v of result.violations) {
            const targets = v.nodes.slice(0, 4).map((n) => n.target.join(' ')).join(' | ');
            failures.push(`axe ${route} ${theme} ${size.name}: ${v.id} (${v.impact}) x${v.nodes.length}: ${v.help}\n      ${targets}`);
          }
          await context.close();
        }
      }
      console.log(`  axe ${route} done`);
    }
    await browser.close();
  } finally {
    preview.kill();
  }
}

// ---------- 2. internal links ----------
async function links() {
  const pages = await walk(DIST, ['.html']);
  const seen = new Set();
  for (const file of pages) {
    const html = await readFile(file, 'utf8');
    const refs = [...html.matchAll(/\s(?:href|src|data)="([^"]+)"/g)].map((m) => m[1]);
    for (const ref of refs) {
      if (!ref.startsWith('/') || ref.startsWith('//')) continue;
      const clean = decodeURI(ref.split('#')[0].split('?')[0]);
      if (!clean || seen.has(clean)) continue;
      seen.add(clean);
      const target = path.join(DIST, clean);
      const ok = clean.endsWith('/') ? await exists(path.join(target, 'index.html')) : (await exists(target)) || (await exists(path.join(target, 'index.html')));
      if (!ok) failures.push(`link ${path.relative(DIST, file)}: ${ref} does not resolve`);
    }
    // In-page anchors must have a target.
    for (const m of html.matchAll(/href="#([^"]+)"/g)) {
      if (!new RegExp(`id="${m[1]}"`).test(html)) failures.push(`anchor ${path.relative(DIST, file)}: #${m[1]} has no target`);
    }
    if (/href="#"/.test(html)) failures.push(`link ${path.relative(DIST, file)}: empty href="#"`);
    if (/href=""/.test(html)) failures.push(`link ${path.relative(DIST, file)}: empty href=""`);
  }
  console.log(`  links: ${seen.size} internal references checked across ${pages.length} pages`);
}

// ---------- 3. banned patterns ----------
async function banned() {
  const srcFiles = await walk(path.join(ROOT, 'src'), ['.astro', '.ts', '.css', '.mjs', '.js']);
  const distFiles = await walk(DIST, ['.html', '.css', '.js']);
  const rules = [
    { name: 'em dash', re: /—/ },
    { name: 'sparkle or star glyph', re: /[✦✧✨✩✪✫✬✭✮✯✰]/ },
    { name: 'emoji', re: /\p{Extended_Pictographic}/u, allow: /[©®™←-⇿]/u },
    { name: 'banned font', re: /\b(Inter|Geist|Space Grotesk|Space Mono|JetBrains Mono|IBM Plex|DM Sans|Satoshi|Manrope|Poppins)\b/ },
    { name: 'phone-number-like string', re: /(?<![\d.])(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}(?!\d)/ },
    { name: 'Google Fonts or third-party script', re: /fonts\.googleapis|fonts\.gstatic|googletagmanager|google-analytics/ },
  ];
  for (const file of [...srcFiles, ...distFiles]) {
    const text = await readFile(file, 'utf8');
    const rel = path.relative(ROOT, file);
    for (const rule of rules) {
      const lines = text.split('\n');
      lines.forEach((line, i) => {
        const m = line.match(rule.re);
        if (!m) return;
        if (rule.allow && rule.allow.test(m[0])) return;
        failures.push(`banned ${rule.name}: ${rel}:${i + 1}: ${line.trim().slice(0, 120)}`);
      });
    }
  }
  // backdrop-filter only in the nav; gradient text only in the hero headline (.lit .ch).
  for (const file of srcFiles) {
    const text = await readFile(file, 'utf8');
    const rel = path.relative(ROOT, file).replaceAll('\\', '/');
    if (/backdrop-filter/.test(text) && !rel.endsWith('components/Nav.astro')) {
      failures.push(`banned backdrop-filter outside the nav: ${rel}`);
    }
    const clips = [...text.matchAll(/background-clip:\s*text/g)].length;
    if (clips && !rel.endsWith('styles/global.css')) failures.push(`banned gradient text outside the hero headline: ${rel}`);
  }
  console.log(`  banned patterns: ${srcFiles.length} source and ${distFiles.length} built files scanned`);
}

try {
  if (!argv.includes('--no-build')) await run(['build']);
  console.log('\nAuditing...');
  await links();
  await banned();
  await axe();
} catch (err) {
  failures.push(`SETUP ERROR: ${err.message}`);
}

if (failures.length) {
  console.error(`\nFAILED: ${failures.length} problem(s)`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}
console.log('\nAudit passed: axe, links, and banned patterns.');
