// Clubs page copy. Source: assets-incoming/PROFILE.md ("Clubs page") and ANSWERS.md;
// design-handoff/CHANGES.md section 7. `clubs` is a list: add a club by adding an entry.
import type { Chip, Link, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Clubs',
  description:
    'Flight software on the MIT Satellite Team, the MAIA AI Safety Fundamentals reading group, AI@MIT, and the MIT Sloan Global Security Technology Club.',
};

export const hero: PosterHeroContent = {
  subtitle: 'MIT · FALL 2026',
  headline: 'CLUBS',
  headlineLabel: 'Clubs',
  captionsLeft: ['Satellite Team', 'MAIA'],
  captionsRight: ['AI@MIT', 'Global Security'],
  sideLabelLeft: 'MIT / FALL 2026',
  sideLabelRight: '42.3601° N · 71.0942° W / CAMBRIDGE, MA',
  about: {
    label: 'About',
    text: 'Flight software on the MIT Satellite Team, AI safety with MAIA, AI@MIT, and the MIT Sloan Global Security Technology Club.',
  },
  badges: [
    { value: '4', label: 'Clubs', filled: true },
    { value: "'26", label: 'Fall term' },
  ],
};

/**
 * The four patches in the hero, left to right. `logo` uses a file in src/assets/logos/;
 * the others are drawn with their names.
 */
export const heroPatches = [
  {
    id: 'satellite',
    alt: 'MIT Satellite Team patch',
    logo: 'mit-satellite-team',
    ring: 'MIT SATELLITE TEAM / FLIGHT SOFTWARE / FALL 2026 / MIT SATELLITE TEAM /',
  },
  {
    id: 'maia',
    alt: 'MIT AI Alignment (MAIA) patch',
    logo: 'maia-mark',
    ring: 'MIT AI ALIGNMENT / AI SAFETY FUNDAMENTALS / FALL 2026 /',
  },
  {
    id: 'aiatmit',
    alt: 'AI@MIT patch',
    text: 'AI@MIT',
    ring: 'AI@MIT / MEMBER / FALL 2026 / AI@MIT / MEMBER / FALL 2026 /',
  },
  {
    id: 'gstc',
    alt: 'MIT Sloan Global Security Technology Club patch',
    ring: 'MIT SLOAN GLOBAL SECURITY TECHNOLOGY CLUB / FALL 2026 /',
  },
];

export const current = {
  label: 'CURRENT',
  heading: 'MIT CLUBS',
};

export interface Club {
  role: string;
  name: string;
  chips: Chip[];
  paragraphs: string[];
  link?: Link;
}

export const clubs: Club[] = [
  {
    role: 'SOFTWARE DEVELOPER · SINCE SEP 2026',
    name: 'MIT Satellite Team',
    chips: [{ label: 'F Prime' }, { label: 'C++' }, { label: 'Flight software' }],
    paragraphs: [
      "Learning NASA JPL's F Prime (F′) C++ flight software framework, which the team is adopting for its next satellite launch.",
    ],
    link: { label: 'BEFORE THIS: 2 YEARS ON THE CAPE CUBESAT TEAM', href: '/experience/#cape' },
  },
  {
    role: 'AI SAFETY FUNDAMENTALS · SINCE SEP 2026',
    name: 'MIT AI Alignment (MAIA)',
    chips: [{ label: 'AI safety' }, { label: 'Alignment' }],
    paragraphs: ['The AI Safety Fundamentals (AISF) reading group, on AI safety and alignment.'],
  },
  {
    role: 'MEMBER',
    name: 'AI@MIT',
    chips: [],
    paragraphs: [],
  },
  {
    role: 'MEMBER',
    name: 'MIT Sloan Global Security Technology Club',
    chips: [],
    paragraphs: [],
  },
];
