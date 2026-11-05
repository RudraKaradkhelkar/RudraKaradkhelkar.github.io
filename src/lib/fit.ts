// Build-time text measurement for headlines that must fill a line exactly (DESIGN.md section 11:
// "The headline must always fit on one line inside the side padding. Fit it to the container").
//
// We measure the word in the real Archivo variable font at the .huge settings (width 62%,
// weight 900) and return its width in em. CSS then sets
//   font-size: calc(100cqi / var(--fit))
// so the word spans its container exactly at every size, with no client-side JavaScript and no
// layout shift. Change a headline in src/content/ and the fit updates on the next build.
//
// fontkit cannot build a variation instance from WOFF2 directly, so the file is decompressed to
// TTF first (wawoff2). Both run only at build time.
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import * as fontkit from 'fontkit';
import { decompress } from 'wawoff2';

const require = createRequire(import.meta.url);
const ARCHIVO = require.resolve('@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2');

let fontPromise: Promise<fontkit.Font> | undefined;

async function archivo(): Promise<fontkit.Font> {
  fontPromise ??= (async () => {
    const ttf = await decompress(await readFile(ARCHIVO));
    const font = fontkit.create(Buffer.from(ttf));
    if (!('getVariation' in font)) throw new Error('Expected a single variable font, got a collection.');
    return font;
  })();
  return fontPromise;
}

export interface MeasureOptions {
  /** font-stretch as a percentage (.huge uses 62). */
  wdth?: number;
  /** font-weight (.huge uses 900). */
  wght?: number;
  /** letter-spacing in em (.huge uses -0.01). Browsers add it after every character. */
  tracking?: number;
}

const cache = new Map<string, number>();

/** Width of `text` in em at the given axes, including letter-spacing. */
export async function emWidth(text: string, { wdth = 62, wght = 900, tracking = -0.01 }: MeasureOptions = {}): Promise<number> {
  const key = `${text}|${wdth}|${wght}|${tracking}`;
  const hit = cache.get(key);
  if (hit !== undefined) return hit;
  const instance = (await archivo()).getVariation({ wdth, wght });
  const run = instance.layout(text);
  const em = run.advanceWidth / instance.unitsPerEm + tracking * [...text].length;
  const rounded = Math.round(em * 10000) / 10000;
  cache.set(key, rounded);
  return rounded;
}
