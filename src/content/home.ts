// Home page copy. Source: design-handoff/reference/Main.html.
import type { PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Rudra Karadkhelkar',
  description:
    'Rudra Karadkhelkar studies computer science and AI at MIT, class of 2030. From Lafayette, Louisiana. Working toward a career in AI security.',
};

export const hero: PosterHeroContent = {
  subtitle: 'KARADKHELKAR',
  headline: 'RUDRA',
  headlineLabel: 'Rudra Karadkhelkar',
  captionsLeft: ['CGI · 3 summers', 'CAPE Satellite'],
  captionsRight: ['FRC Team 3616', 'MIT UROP'],
  sideLabelLeft: '30.2241° N · 92.0198° W / LAFAYETTE, LA',
  sideLabelRight: '42.3601° N · 71.0942° W / CAMBRIDGE, MA',
  about: {
    label: 'About',
    text: 'Computer science and AI at MIT, class of 2030. From Lafayette, Louisiana. Working toward a career in AI security.',
    link: { label: 'See my research', href: '/research/' },
  },
  badges: [
    { value: "'30", label: 'MIT class' },
    { value: '3×', label: 'CGI summers', filled: true },
    { value: "'25", label: "Dean's List" },
  ],
};

/** The accent stripe behind the figure. Items repeat with " / " between them. */
export const heroBand = ['AI security', 'Machine learning', 'Cyber defense', 'Robotics', 'Satellites'];

export const heroArt = {
  /** Shown until src/assets/slots/hero-photo.png exists. */
  standInLabel: 'STAND-IN FOR PHOTO',
  standInAlt: 'Stand-in figure for the hero photo, arms crossed and backlit',
  photoAlt: 'Rudra Karadkhelkar, arms crossed',
  /** Nav avatar, shown after scrolling past the hero. Uses the headshot slot once it exists. */
  avatarAlt: 'Rudra Karadkhelkar',
};

export const about = {
  label: 'ABOUT',
  statement: 'I study computer science and AI at MIT. This fall that means cyber risk research with CAMS and an AI agent that guards',
  /** Set in the accent color, at the end of the statement. */
  statementHighlight: 'my home-lab server.',
  stats: [
    { value: '3×', label: 'SUMMERS AT CGI' },
    { value: '2 YRS', label: 'NASA-PARTNERED CUBESAT TEAM' },
    { value: '1/10', label: "FIRST DEAN'S LIST, WORLDWIDE" },
    { value: '300+', label: 'SERVICE HOURS' },
  ],
};

export const chapters = {
  label: 'INDEX',
  heading: 'CHAPTERS',
  count: '6 PAGES',
  items: [
    {
      index: '01',
      tag: 'MIT UROP',
      title: 'Research',
      text: 'Cyber risk in critical infrastructure, measured with graph theory.',
      href: '/research/',
      watermark: 'RESEARCH',
    },
    {
      index: '02',
      tag: 'CGI · CAPE',
      title: 'Experience',
      text: 'Three summers at CGI and a CubeSat ground station before college.',
      href: '/experience/',
      watermark: 'EXPERIENCE',
    },
    {
      index: '03',
      tag: '2 IN PROGRESS',
      title: 'Projects',
      text: 'An AI cyberdefender agent and a gesture-controlled drone glove.',
      href: '/projects/',
      watermark: 'PROJECTS',
    },
    {
      index: '04',
      tag: 'FALL 2026',
      title: 'Clubs',
      text: 'The MIT Satellite Team and an AI safety reading group.',
      href: '/clubs/',
      watermark: 'CLUBS',
    },
    {
      index: '05',
      tag: 'FRC 3616',
      title: 'High School',
      text: "Robotics president, lead programmer, and the Dean's List award.",
      href: '/high-school/',
      watermark: 'HIGH SCHOOL',
    },
    {
      index: '06',
      tag: 'SKETCHBOOK',
      title: 'Drawings & Life',
      text: 'Pencil, paint, charcoal, and the places I come from.',
      href: '/drawings/',
      watermark: 'DRAWINGS',
    },
  ],
};

export const now = {
  label: 'NOW',
  heading: 'FALL 2026',
  rows: [
    {
      tag: 'UROP',
      title: 'Critical asset cyber risk',
      text: 'New two-dimensional centrality metrics for infrastructure networks, with Dr. Ranjan Pal.',
      href: '/research/',
    },
    {
      tag: 'BUILDING',
      title: 'Cyberdefender Agent',
      text: 'An AI agent that spots intrusions on a home-lab server and responds.',
      href: '/projects/',
    },
    {
      tag: 'BUILDING',
      title: 'Drone Gesture Glove',
      text: 'An IMU on every finger, a PyTorch pose classifier, and a drone that follows your hand.',
      href: '/projects/',
    },
    {
      tag: 'LEARNING',
      title: 'F Prime flight software',
      text: 'With the MIT Satellite Team, ahead of its next satellite launch.',
      href: '/clubs/',
    },
  ],
};
