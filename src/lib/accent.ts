// Port of tone() from design-handoff/design/*.dc.html (renderVals()).
// The alpha variants (halo, haloSoft, glow, glowShadow) and the rim light are derived in CSS
// with color-mix() from --accent (see src/styles/tokens.css), so only the text color that sits
// on the accent needs computing here.

function rgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '').trim();
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h.slice(0, 6);
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return [242, 56, 46];
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16)) as [number, number, number];
}

function luminance(hex: string): number {
  const lin = rgb(hex).map((v) => {
    const x = v / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * lin[0]! + 0.7152 * lin[1]! + 0.0722 * lin[2]!;
}

/** White or near-black, whichever reads better on the accent (same rule as the design files). */
export function onAccent(accent: string): '#FFFFFF' | '#0B0B0C' {
  const L = luminance(accent);
  return 1.05 / (L + 0.05) >= (L + 0.05) / 0.0535 ? '#FFFFFF' : '#0B0B0C';
}

/** Inline style for <html>: the two accent values every other accent token is derived from. */
export function accentStyle(accent: string): string {
  return `--accent:${accent};--on-accent:${onAccent(accent)}`;
}
