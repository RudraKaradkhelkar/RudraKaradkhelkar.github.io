// Life page copy (replaces Drawings & Life). Source: assets-incoming/PROFILE.md ("Life page"),
// ANSWERS.md, and design-handoff/CHANGES.md section 4. The drawing's title, medium, and year stay
// [bracketed placeholders] until Rudra names them.
import type { Link, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Life',
  description: 'Outside class: Zeta Beta Tau at MIT, drawing in pencil, paint, and charcoal, a 12-team PPR fantasy football league, and No-Limit Hold\'em.',
};

export const hero: PosterHeroContent = {
  subtitle: 'OUTSIDE CLASS',
  headline: 'LIFE',
  headlineLabel: 'Life',
  captionsLeft: ['Zeta Beta Tau', 'Drawing'],
  captionsRight: ['Fantasy football', 'Poker'],
  sideLabelLeft: 'PENCIL · PAINT · CHARCOAL',
  sideLabelRight: 'LAFAYETTE, LA → CAMBRIDGE, MA',
  about: {
    label: 'About',
    text: 'Zeta Beta Tau at MIT, drawing, fantasy football, and poker.',
  },
  badges: [],
};

/** The featured drawing (src/assets/slots/drawing-01.jpg, 753 x 989). */
export const drawing = {
  slot: 'drawing-01',
  /** PROFILE.md alt text. */
  alt: 'Pencil drawing: a flying saucer beams the MIT beaver and the letter I out of a giant M-I-T sign above the number 2030, with two cows floating in the beam.',
  title: '[Title]',
  medium: '[Medium]',
  year: '[Year]',
};

/** The three taped polaroids in the hero. The first is the real drawing; the others are drawn. */
export const heroPolaroids = [
  { kind: 'drawing', caption: drawing.title, tag: drawing.medium },
  { kind: 'poker', caption: 'Poker', tag: "NO-LIMIT HOLD'EM" },
  { kind: 'football', caption: 'Fantasy football', tag: '12-TEAM PPR' },
] as const;

export const zbt = {
  label: 'MIT · FALL 2026',
  heading: 'ZETA BETA TAU',
  text: 'Joined the Zeta Beta Tau fraternity at MIT in fall 2026.',
};

export const drawingSection = {
  label: 'DRAWING',
  heading: 'DRAWING',
  paragraphs: [
    'I draw in pencil, paint, and charcoal.',
    "Part of Lafayette High School's Talented Art Program.",
  ],
  award: 'black-history-month-poster-2024',
  awardText: '1st Place, LPSS Black History Month Poster Contest, High School Division',
};

export const games = {
  label: 'GAMES',
  heading: 'FOOTBALL · POKER',
  items: [
    {
      id: 'football',
      label: 'FANTASY FOOTBALL',
      title: 'ESPN, 12-team PPR',
      text: 'A 12-team PPR fantasy football league on ESPN.',
      link: undefined as Link | undefined,
    },
    {
      id: 'poker',
      label: 'POKER',
      title: "No-Limit Hold'em",
      text: "No-Limit Hold'em. A poker bot is the locked level on Projects.",
      link: { label: 'The locked level', href: '/projects/#lvl4' } as Link | undefined,
    },
  ],
};
