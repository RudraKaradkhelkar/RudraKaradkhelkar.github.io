#!/usr/bin/env node
// Screenshots every route at every test size from DESIGN.md section 11, in both themes, into
// review/<route>/<theme>-<width>.png, and fails loudly if any page scrolls sideways or a
// headline leaves the screen.
//
//   npm run shoot                                  build, then shoot everything
//   npm run shoot -- --route=projects              one route (repeatable; name or path)
//   npm run shoot -- --width=390 --width=1440      some widths (844 is the 844 x 390 landscape)
//   npm run shoot -- --theme=light                 one theme
//   npm run shoot -- --no-build                    reuse the existing dist/
//   npm run shoot -- --viewport                    first screen only, saved as <theme>-<width>-viewport.png
//   npm run shoot -- --motion                      keep animations on (default shoots reduced motion,
//                                                  so every element shows its final state)
//
// Exit code 1 means at least one check failed; the summary at the end lists them.
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { serveDist } from './serve-dist.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'review');
const ASTRO = path.join(ROOT, 'node_modules', 'astro', 'bin', 'astro.mjs');
/** Must match THEME_STORAGE_KEY in src/content/site.ts. */
const THEME_KEY = 'rk-theme';

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'research', path: '/research/' },
  { name: 'experience', path: '/experience/' },
  { name: 'projects', path: '/projects/' },
  { name: 'awards', path: '/awards/' },
  { name: 'clubs', path: '/clubs/' },
  { name: 'high-school', path: '/high-school/' },
  { name: 'life', path: '/life/' },
  { name: 'resume', path: '/resume/' },
  { name: '404', path: '/this-page-does-not-exist/' },
];

/** DESIGN.md section 11 test matrix. `touch` emulates a phone or tablet (coarse pointer, no hover). */
const VIEWPORTS = [
  { width: 390, height: 844, touch: true },
  { width: 768, height: 1024, touch: true },
  { width: 1024, height: 768, touch: false },
  { width: 1280, height: 800, touch: false },
  { width: 1440, height: 900, touch: false },
  { width: 1920, height: 1080, touch: false },
  { width: 2560, height: 1440, touch: false },
  { width: 844, height: 390, touch: true },
];

const THEMES = ['dark', 'light'];

// ---------- Arguments ----------
const argv = process.argv.slice(2);
const many = (flag) => argv.filter((a) => a.startsWith(`--${flag}=`)).map((a) => a.slice(flag.length + 3));
const has = (flag) => argv.includes(`--${flag}`);

const routeArgs = many('route');
const routes = routeArgs.length
  ? ROUTES.filter((r) => routeArgs.some((a) => a === r.name || a === r.path || `/${a}/` === r.path))
  : ROUTES;
const widthArgs = many('width').map(Number);
const viewports = widthArgs.length ? VIEWPORTS.filter((v) => widthArgs.includes(v.width)) : VIEWPORTS;
const themeArgs = many('theme');
const themes = themeArgs.length ? THEMES.filter((t) => themeArgs.includes(t)) : THEMES;
const viewportOnly = has('viewport');
const motion = has('motion');

if (!routes.length || !viewports.length || !themes.length) {
  console.error('Nothing to shoot. Check --route, --width, and --theme values.');
  process.exit(2);
}

// ---------- Helpers ----------
function run(args, label) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [ASTRO, ...args], { cwd: ROOT, stdio: 'inherit' });
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${label} failed with exit code ${code}`))));
  });
}


async function pool(items, size, fn) {
  const queue = [...items];
  const workers = Array.from({ length: Math.min(size, queue.length) }, async () => {
    while (queue.length) await fn(queue.shift());
  });
  await Promise.all(workers);
}

/** Runs inside the page. Returns layout problems at the current viewport. */
function inspect() {
  const doc = document.documentElement;
  const cw = doc.clientWidth;
  const problems = [];

  if (doc.scrollWidth > cw) {
    // Find the elements that stick out without an ancestor clipping them.
    const clipped = (el) => {
      for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
        const o = getComputedStyle(p).overflowX;
        if (o !== 'visible') return true;
      }
      return false;
    };
    const culprits = [];
    for (const el of document.body.querySelectorAll('*')) {
      const r = el.getBoundingClientRect();
      if ((r.right > cw + 1 || r.left < -1) && r.width > 0 && !clipped(el)) {
        const id = el.id ? `#${el.id}` : '';
        const cls = typeof el.className === 'string' && el.className ? `.${el.className.trim().split(/\s+/).join('.')}` : '';
        culprits.push(`${el.tagName.toLowerCase()}${id}${cls} [${Math.round(r.left)}..${Math.round(r.right)}]`);
        if (culprits.length >= 5) break;
      }
    }
    problems.push({
      kind: 'HORIZONTAL SCROLL',
      detail: `scrollWidth ${doc.scrollWidth} > viewport ${cw}${culprits.length ? `; sticking out: ${culprits.join(', ')}` : ''}`,
    });
  }

  // Text and art in the poster hero must not overlap (DESIGN.md section 11). Elements marked
  // data-box="name" inside a [data-hero] are compared pairwise. Home's figure in front of RUDRA is
  // the one intended overlap, so its art is not marked.
  for (const hero of document.querySelectorAll('[data-hero]')) {
    const boxes = [...hero.querySelectorAll('[data-box]')]
      .map((el) => ({ name: el.dataset.box, r: el.getBoundingClientRect(), el }))
      .filter((b) => b.r.width > 0 && b.r.height > 0 && getComputedStyle(b.el).visibility !== 'hidden');
    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        const a = boxes[i];
        const b = boxes[j];
        if (a.el.contains(b.el) || b.el.contains(a.el)) continue;
        const x = Math.min(a.r.right, b.r.right) - Math.max(a.r.left, b.r.left);
        const y = Math.min(a.r.bottom, b.r.bottom) - Math.max(a.r.top, b.r.top);
        if (x > 2 && y > 2) {
          problems.push({ kind: 'HERO OVERLAP', detail: `${a.name} and ${b.name} overlap by ${Math.round(x)}x${Math.round(y)}px` });
        }
      }
    }
  }

  const h1s = document.querySelectorAll('h1');
  if (h1s.length !== 1) problems.push({ kind: 'H1 COUNT', detail: `${h1s.length} h1 elements (want exactly 1)` });
  for (const h1 of h1s) {
    const r = h1.getBoundingClientRect();
    if (r.left < -1 || r.right > cw + 1) {
      problems.push({ kind: 'HEADLINE OFF SCREEN', detail: `h1 spans ${Math.round(r.left)}..${Math.round(r.right)} of ${cw}` });
    }
    if (h1.scrollWidth > h1.clientWidth + 1 && getComputedStyle(h1).overflowX !== 'visible') {
      problems.push({ kind: 'HEADLINE CLIPPED', detail: `h1 content ${h1.scrollWidth}px in a ${h1.clientWidth}px box` });
    }
  }
  return problems;
}

// ---------- Main ----------
const failures = [];
const consoleErrors = [];
let preview;

try {
  if (!has('no-build')) await run(['build'], 'astro build');

  // Serves dist/ itself, so this also runs while `astro preview` is open in another terminal.
  preview = await serveDist();
  const base = preview.base;

  const browser = await chromium.launch();
  const jobs = [];
  for (const route of routes) for (const vp of viewports) for (const theme of themes) jobs.push({ route, vp, theme });

  console.log(`\nShooting ${jobs.length} screenshots (${routes.length} routes x ${viewports.length} sizes x ${themes.length} themes)...`);
  let done = 0;

  await pool(jobs, 4, async ({ route, vp, theme }) => {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      isMobile: vp.touch,
      hasTouch: vp.touch,
      reducedMotion: motion ? 'no-preference' : 'reduce',
      colorScheme: theme,
    });
    await context.addInitScript(
      ([key, value]) => {
        try {
          localStorage.setItem(key, value);
        } catch {
          // ignore
        }
      },
      [THEME_KEY, theme],
    );
    const page = await context.newPage();
    const tag = `${route.name} ${theme} ${vp.width}x${vp.height}`;
    page.on('console', (msg) => {
      if (msg.type() !== 'error') return;
      // The 404 route is supposed to answer with status 404; that is not an error on the page.
      const expected404 = route.name === '404' && msg.location().url === base + route.path;
      if (!expected404) consoleErrors.push(`${tag}: ${msg.text()}`);
    });
    page.on('pageerror', (err) => consoleErrors.push(`${tag}: ${err.message}`));

    try {
      await page.goto(base + route.path, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(motion ? 2600 : 250);

      const problems = await page.evaluate(inspect);
      for (const p of problems) failures.push(`${tag}  ${p.kind}: ${p.detail}`);

      const dir = path.join(OUT, route.name);
      await mkdir(dir, { recursive: true });
      const file = path.join(dir, `${theme}-${vp.width}${viewportOnly ? '-viewport' : ''}.png`);
      await page.screenshot({ path: file, fullPage: !viewportOnly });
    } catch (err) {
      failures.push(`${tag}  ERROR: ${err.message.split('\n')[0]}`);
    } finally {
      await context.close();
      done += 1;
      if (done % 16 === 0 || done === jobs.length) console.log(`  ${done} / ${jobs.length}`);
    }
  });

  await browser.close();

  // Contact sheet for quick review in a browser: review/index.html
  const suffix = viewportOnly ? '-viewport' : '';
  const sections = routes
    .map((r) => {
      const imgs = themes
        .flatMap((t) =>
          viewports.map(
            (v) =>
              `<figure><a href="${r.name}/${t}-${v.width}${suffix}.png"><img loading="lazy" src="${r.name}/${t}-${v.width}${suffix}.png" alt=""></a><figcaption>${t} ${v.width}x${v.height}</figcaption></figure>`,
          ),
        )
        .join('');
      return `<section><h2>${r.name}</h2><div class="g">${imgs}</div></section>`;
    })
    .join('');
  await writeFile(
    path.join(OUT, 'index.html'),
    `<!doctype html><meta charset="utf-8"><title>Review shots</title><style>body{background:#111;color:#ddd;font:14px system-ui;margin:24px}.g{display:grid;grid-template-columns:repeat(8,1fr);gap:12px;align-items:start}img{width:100%;border:1px solid #333}figure{margin:0}figcaption{font-size:12px;opacity:.7;margin-top:4px}h2{margin:32px 0 12px}</style><h1>Review shots</h1>${sections}`,
  );
} catch (err) {
  failures.push(`SETUP ERROR: ${err.message}`);
} finally {
  await preview?.close();
}

if (consoleErrors.length) {
  console.log(`\nConsole errors (${consoleErrors.length}):`);
  for (const e of [...new Set(consoleErrors)].slice(0, 40)) console.log(`  ${e}`);
}

if (failures.length) {
  console.error(`\nFAILED: ${failures.length} problem(s)`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}

console.log(`\nAll checks passed. Screenshots in ${path.relative(ROOT, OUT)}${path.sep} (open review/index.html for a contact sheet).`);
