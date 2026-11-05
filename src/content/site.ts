// Shared, site-wide content: identity, links, navigation, footer, accent, and default theme.
// Edit copy here; layout components never hard-code it.
import type { Link } from './types';

export type Theme = 'dark' | 'light';

/** Tested accents (DESIGN.md section 2). Any hex works; the text color on top is picked automatically. */
export const ACCENTS = {
  red: '#F2382E',
  orange: '#FF6A1A',
  lime: '#C6FF3D',
  cobalt: '#3D5AFE',
} as const;

export const site = {
  name: 'Rudra Karadkhelkar',
  shortName: 'R/K',
  url: 'https://rudrakaradkhelkar.github.io',
  /** The only email shown on the site (DESIGN.md section 9). */
  email: 'rudrak@mit.edu',

  /** The one accent color. Swap for any value in ACCENTS or any hex. */
  accent: ACCENTS.red as string,
  /** Theme for first-time visitors. Returning visitors get whatever they last picked. */
  defaultTheme: 'dark' as Theme,

  links: {
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rudra-karadkhelkar', external: true },
    github: { label: 'GitHub', href: 'https://github.com/RudraKaradkhelkar', external: true },
    resume: { label: 'Resume', href: '/resume/' },
  } satisfies Record<string, Link>,

  /** Section links in the nav, in order. The Resume pill is separate. */
  nav: [
    { label: 'Research', href: '/research/' },
    { label: 'Experience', href: '/experience/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Clubs', href: '/clubs/' },
    { label: 'High School', href: '/high-school/' },
    { label: 'Drawings & Life', href: '/drawings/' },
  ] satisfies Link[],

  /** Accessible labels for the nav controls. */
  navLabels: {
    home: 'Home',
    replayIntro: 'Replay intro',
    sections: 'Sections',
    menuOpen: 'Menu',
    menuClose: 'Close',
    menuTitle: 'Menu',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    /** Toggle button with aria-pressed, so the label stays the same in both states. */
    sound: 'Selection sound',
    skipToContent: 'Skip to content',
  },

  footer: {
    /** Repeats in the tilted accent stripe. Confirm "Open to Summer 2027" with Rudra before launch. */
    marquee: ['Open to Summer 2027 roles', 'rudrak@mit.edu', 'Cambridge, MA'],
    label: 'OPEN TO',
    headline: 'SUMMER 2027',
    text: 'Looking for a research or internship role in AI security for Summer 2027. Email is the fastest way to reach me.',
    copyright: '© 2026 RUDRA KARADKHELKAR',
    route: 'LAFAYETTE, LA → CAMBRIDGE, MA',
  },
};

/** localStorage key for the visitor's theme choice. scripts/shoot.mjs uses the same key. */
export const THEME_STORAGE_KEY = 'rk-theme';
