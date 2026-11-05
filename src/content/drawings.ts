// Drawings & Life page copy. Source: design-handoff/reference/Drawings.html.
// `drawings`, `places`, and `hobbies` are lists: add an entry to add an item.
// A drawing's photo goes in src/assets/slots/ named after its slot (drawing-01.jpg, drawing-02.jpg, ...).
import type { PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Drawings & Life',
  description: 'Pencil, paint, and charcoal, mostly drawn outside. Plus the places Rudra Karadkhelkar comes from.',
};

export const hero: PosterHeroContent = {
  subtitle: '& LIFE',
  headline: 'DRAWINGS',
  headlineLabel: 'Drawings and life',
  captionsLeft: ['Pencil', 'Paint'],
  captionsRight: ['Charcoal', 'Nature'],
  sideLabelLeft: 'PENCIL · PAINT · CHARCOAL',
  sideLabelRight: 'LAFAYETTE, LA → CAMBRIDGE, MA',
  about: {
    label: 'About',
    text: 'Pencil, paint, and charcoal. Most of it drawn outside.',
  },
  badges: [],
};

/** The three taped polaroids in the hero. They show the first three drawings once their scans exist. */
export const heroPolaroids = {
  placeholderTag: 'PLACEHOLDER',
  pencilAlt: '',
};

export const sketchbook = {
  label: 'DRAWINGS',
  heading: 'SKETCHBOOK',
  /** Count shown next to the heading. Placeholder until the real scans are in. */
  count: '[06 PIECES]',
};

export const drawings = [
  { slot: 'drawing-01', medium: 'CHARCOAL', title: '[Title]', year: '[YEAR]' },
  { slot: 'drawing-02', medium: 'PENCIL', title: '[Title]', year: '[YEAR]' },
  { slot: 'drawing-03', medium: 'PAINT', title: '[Title]', year: '[YEAR]' },
  { slot: 'drawing-04', medium: 'PENCIL', title: '[Title]', year: '[YEAR]' },
  { slot: 'drawing-05', medium: 'CHARCOAL', title: '[Title]', year: '[YEAR]' },
  { slot: 'drawing-06', medium: 'PAINT', title: '[Title]', year: '[YEAR]' },
];

export const life = {
  label: 'LIFE',
  heading: 'PLACES',
};

export const places = [
  {
    slot: 'place-home',
    coords: '30.2241° N · 92.0198° W',
    label: 'HOMETOWN',
    title: 'Lafayette, Louisiana',
    text: 'Where I grew up and spent five seasons on an FRC team.',
    alt: 'Lafayette, Louisiana',
  },
  {
    slot: 'place-school',
    coords: '42.3601° N · 71.0942° W',
    label: 'SCHOOL',
    title: 'MIT, Cambridge',
    text: 'Class of 2030, studying computer science and AI.',
    alt: 'MIT in Cambridge, Massachusetts',
  },
  {
    slot: 'place-draw',
    coords: '[LOCATION]',
    label: 'WHERE I DRAW',
    title: 'Outside',
    text: '[A favorite place to draw, and why.]',
    alt: 'A favorite place to draw',
  },
];

export const outsideClass = {
  label: 'OUTSIDE CLASS',
};

/** Hobby pills. `highlight` fills the pill with the accent; `placeholder` renders muted. */
export const hobbies = [
  { label: 'Fantasy football · 12-team PPR' },
  { label: "Poker · No-Limit Hold'em" },
  { label: 'Drawing outside', highlight: true },
  { label: '[Add more]', placeholder: true },
];
