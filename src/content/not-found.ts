// 404 page copy. Not in the design files; built from the same poster parts (Rudra, Phase 0:
// a full poster page, subtitle "PAGE NOT FOUND", headline "404", one sentence, then every page).
// Captions, side labels, and the page list reuse copy that already appears elsewhere on the site.
import type { PageMeta, PosterHeroContent } from './types';
import { chapters, hero as homeHero } from './home';
import { hero as resumeHero } from './resume';
import { site } from './site';

export const meta: PageMeta = {
  title: 'Page not found',
  description: 'This page does not exist.',
};

export const notFound = {
  subtitle: 'PAGE NOT FOUND',
  headline: '404',
  headlineLabel: 'Page not found',
  text: "There's no page at this address. Every page on the site is listed below.",
  homeLink: { label: 'Back to home', href: '/' },
};

export const hero: PosterHeroContent = {
  subtitle: notFound.subtitle,
  headline: notFound.headline,
  headlineLabel: notFound.headlineLabel,
  captionsLeft: [site.name, "MIT '30"],
  captionsRight: ['Lafayette, LA', 'Cambridge, MA'],
  sideLabelLeft: homeHero.sideLabelLeft,
  sideLabelRight: homeHero.sideLabelRight,
  about: {
    label: notFound.headlineLabel,
    text: notFound.text,
    link: notFound.homeLink,
  },
  badges: [],
};

export const list = {
  label: chapters.label,
};

/** Every page, in nav order, with the same one-line descriptions used on Home. */
export const pages = [
  { label: 'HOME', title: site.name, text: homeHero.about!.text, href: '/' },
  ...chapters.items.map((c) => ({ label: c.tag, title: c.title, text: c.text, href: c.href })),
  { label: 'PDF', title: site.links.resume.label, text: resumeHero.about!.text, href: site.links.resume.href },
];
