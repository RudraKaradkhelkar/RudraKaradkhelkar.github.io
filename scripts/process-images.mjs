#!/usr/bin/env node
// Copies Rudra's processed photos from assets-incoming/ (gitignored) into the site.
//
//   node scripts/process-images.mjs
//
// Every file is re-encoded with sharp, which drops all metadata (EXIF, GPS, XMP, ICC), and
// sized for the web. Originals in assets-incoming/ are never modified. Add a line to JOBS for
// each new slot; the slot name is the output file name (see src/content/slots.ts).
import { mkdir, copyFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IN = path.join(ROOT, 'assets-incoming');
const SLOTS = path.join(ROOT, 'src', 'assets', 'slots');
const LOGOS = path.join(ROOT, 'src', 'assets', 'logos');

/** from: path in assets-incoming; to: output path; width: max width; format: output encoding. */
const JOBS = [
  // Cut-out hero photo, transparent background. WebP keeps the alpha at a fraction of the PNG size.
  { from: 'hero/hero-cutout.png', to: path.join(SLOTS, 'hero-photo.webp'), width: 1800, format: 'webp' },
  // Square headshots: the wood background for the light theme, the dark one for the dark theme
  // and the Experience ID badges.
  { from: 'hero/headshot.jpg', to: path.join(SLOTS, 'headshot.jpg'), width: 800, format: 'jpeg' },
  { from: 'hero/headshot-dark.jpg', to: path.join(SLOTS, 'headshot-dark.jpg'), width: 800, format: 'jpeg' },
  // The featured drawing, kept at its full size (753 x 989) so it stays sharp.
  { from: 'drawings/drawing-01.jpg', to: path.join(SLOTS, 'drawing-01.jpg'), width: 753, format: 'jpeg' },
  // Club logos, transparent PNG.
  { from: 'logos/mit-satellite-team.png', to: path.join(LOGOS, 'mit-satellite-team.png'), width: 512, format: 'png' },
  { from: 'logos/maia-mark.png', to: path.join(LOGOS, 'maia-mark.png'), width: 302, format: 'png' },
];

/**
 * Files copied byte for byte. The resume is no longer here: public/resume.pdf is replaced
 * directly (Nov 8: Rudra's November resume, checked for no phone number, metadata stripped), and
 * the old copy in assets-incoming/docs/ would overwrite it with an outdated version.
 */
const COPIES = [];

for (const job of JOBS) {
  const src = path.join(IN, job.from);
  await mkdir(path.dirname(job.to), { recursive: true });
  let img = sharp(src).rotate().resize({ width: job.width, withoutEnlargement: true });
  if (job.format === 'webp') img = img.webp({ quality: 90, alphaQuality: 100 });
  if (job.format === 'jpeg') img = img.jpeg({ quality: 88, mozjpeg: true });
  if (job.format === 'png') img = img.png({ compressionLevel: 9 });
  const info = await img.toFile(job.to);
  const meta = await sharp(job.to).metadata();
  const clean = !meta.exif && !meta.xmp && !meta.iptc;
  console.log(`${job.from} -> ${path.relative(ROOT, job.to)}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB  metadata: ${clean ? 'none' : 'PRESENT'}`);
  if (!clean) process.exitCode = 1;
}

for (const c of COPIES) {
  await mkdir(path.dirname(c.to), { recursive: true });
  await copyFile(path.join(IN, c.from), c.to);
  console.log(`${c.from} -> ${path.relative(ROOT, c.to)}  ${Math.round((await stat(c.to)).size / 1024)} KB (copied)`);
}
