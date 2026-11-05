// Clubs page copy. Source: design-handoff/reference/Clubs.html.
// `clubs` is a list: add a club by adding an entry; the open slot stays last.
import type { Chip, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Clubs',
  description: 'Flight software on the MIT Satellite Team and an AI safety reading group.',
};

export const hero: PosterHeroContent = {
  subtitle: 'MIT · FALL 2026',
  headline: 'CLUBS',
  headlineLabel: 'Clubs',
  captionsLeft: ['Satellite Team', 'AISF'],
  captionsRight: ['Flight software', 'AI safety'],
  sideLabelLeft: 'MIT / FALL 2026',
  sideLabelRight: '42.3601° N · 71.0942° W / CAMBRIDGE, MA',
  about: {
    label: 'About',
    text: 'Flight software on the MIT Satellite Team and an AI safety reading group.',
  },
  badges: [
    { value: '2', label: 'Active', filled: true },
    { value: '+1', label: 'Open slot' },
  ],
};

/** The three embroidered patches in the hero, left to right. */
export const heroPatches = [
  { alt: 'MIT Satellite Team patch' },
  { alt: 'AI Safety Fundamentals reading group patch', text: 'AISF' },
  { alt: 'Empty patch for a future club', text: '?' },
];

export const current = {
  label: 'CURRENT',
  heading: 'MIT CLUBS',
};

export const clubs = [
  {
    role: 'SOFTWARE DEVELOPER · SINCE FALL 2026',
    name: 'MIT Satellite Team',
    chips: [{ label: 'F Prime' }, { label: 'Flight software' }] satisfies Chip[],
    paragraphs: [
      "The team is working through F Prime, NASA JPL's flight software framework, which it will use for its next satellite launch. I joined as a software developer and I'm still ramping up.",
    ],
    link: { label: 'BEFORE THIS: 2 YEARS ON THE CAPE CUBESAT TEAM', href: '/experience/' },
  },
  {
    role: 'MEMBER · FALL 2026',
    name: 'AI Safety Fundamentals',
    chips: [{ label: 'AI safety' }, { label: 'Alignment' }] satisfies Chip[],
    paragraphs: ["A reading group on AI safety and alignment, and my path into MAIA, MIT's AI alignment group."],
  },
];

/** The open slot after the real clubs. */
export const openSlot = {
  role: '[ROLE · TERM]',
  name: '[Next club]',
  text: "[Add a club here once it's official.]",
};
