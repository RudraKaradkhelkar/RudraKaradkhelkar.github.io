// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages user site: served from the root of https://rudrakaradkhelkar.github.io,
// so `base` stays unset.
export default defineConfig({
  site: 'https://rudrakaradkhelkar.github.io',
  // Astro 7 defaults to JSX-style whitespace stripping, which deletes the spaces
  // between inline elements. This site is copy-heavy, so keep HTML whitespace rules.
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
