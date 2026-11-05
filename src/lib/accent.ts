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

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}

function mix(hex: string, toward: [number, number, number], t: number): string {
  const c = rgb(hex);
  return (
    '#' +
    c
      .map((v, i) => Math.round(v + (toward[i]! - v) * t))
      .map((v) => v.toString(16).padStart(2, '0'))
      .join('')
  );
}

/**
 * The accent as small-text color on a background: the accent itself if it already reaches
 * WCAG AA (4.5:1), otherwise the closest step toward black (light theme) or white (dark theme)
 * that does. `start` is how far toward white the color already sits (the rim light is 35%).
 */
export function accentInk(accent: string, bg: string, theme: 'dark' | 'light', start = 0): string {
  const target: [number, number, number] = theme === 'dark' ? [255, 255, 255] : [0, 0, 0];
  const base = start ? mix(accent, [255, 255, 255], start) : accent;
  for (let t = 0; t <= 1; t += 0.02) {
    const c = t === 0 ? base : mix(base, target, t);
    if (contrast(c, bg) >= 4.5) return c;
  }
  return theme === 'dark' ? '#FFFFFF' : '#000000';
}

/** Backgrounds the small accent text sits on, per theme (tokens.css --bg and --card). */
const BG = { dark: '#121214', light: '#E8E7E1' } as const;

/**
 * Inline style for <html>: the accent, the text color that sits on it, and the accent and rim
 * light as readable small-text colors for each theme. Every other accent token is derived in CSS.
 */
export function accentStyle(accent: string): string {
  return [
    `--accent:${accent}`,
    `--on-accent:${onAccent(accent)}`,
    `--accent-ink-dark:${accentInk(accent, BG.dark, 'dark')}`,
    `--accent-ink-light:${accentInk(accent, BG.light, 'light')}`,
    `--rim-ink-dark:${accentInk(accent, BG.dark, 'dark', 0.35)}`,
    `--rim-ink-light:${accentInk(accent, BG.light, 'light')}`,
  ].join(';');
}
