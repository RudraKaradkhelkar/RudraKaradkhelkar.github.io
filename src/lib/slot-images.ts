// Finds processed photos in src/assets/slots/ by slot name (the file name without its extension).
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/slots/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

const byName = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const stem = path.split('/').pop()?.replace(/\.[^.]+$/, '');
  if (stem) byName.set(stem, mod.default);
}

/** The image for a slot, or undefined while the slot still shows its placeholder. */
export function getSlotImage(name: string): ImageMetadata | undefined {
  return byName.get(name);
}
