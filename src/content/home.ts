// Home page copy. Source: design-handoff/reference/Main.html, updated from
// assets-incoming/ANSWERS.md (approved About blurb) and design-handoff/CHANGES.md (8 chapters).
import type { PageMeta, PosterHeroContent } from './types';
import { awardHref } from './awards';

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
    { value: "'25", label: "Dean's List", href: awardHref('deans-list-2025') },
  ],
};

/** The accent stripe behind the figure. Items repeat with " / " between them. */
export const heroBand = ['AI security', 'Machine learning', 'Cyber defense', 'Robotics', 'Satellites'];

export const heroArt = {
  /** Shown only if src/assets/slots/hero-photo.webp is missing. */
  standInLabel: 'STAND-IN FOR PHOTO',
  standInAlt: 'Stand-in figure for the hero photo, arms crossed and backlit',
  photoAlt: 'Rudra Karadkhelkar, arms crossed',
  /** Nav avatar, shown after scrolling past the hero. Uses the headshot slot once it exists. */
  avatarAlt: 'Rudra Karadkhelkar',
};

/**
 * Rudra's approved About text (ANSWERS.md), used exactly. The first sentence is the big
 * statement (its end in the accent); the other two run below it as a lead paragraph.
 */
export const about = {
  label: 'ABOUT',
  statement: "I'm a first-year at MIT studying computer science and AI,",
  /** Set in the accent color, at the end of the statement. */
  statementHighlight: 'focused on AI security.',
  body: "This fall I'm researching cyber risk in infrastructure networks with MIT Sloan's CAMS and building CyberDefender, a team of AI agents that detects and contains attacks on my own home lab. Before MIT: three summers at CGI, two years on a NASA-partnered CubeSat team, and five seasons on FRC Team 3616.",
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
  count: '8 PAGES',
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
      tag: 'CGI · CAPE · LPSS',
      title: 'Experience',
      text: 'Three summers at CGI, a CubeSat ground station, and the skills from each.',
      href: '/experience/',
      watermark: 'EXPERIENCE',
    },
    {
      index: '03',
      tag: '3 UNLOCKED',
      title: 'Projects',
      text: 'CyberDefender, Jarvis, and a gesture-controlled drone glove.',
      href: '/projects/',
      watermark: 'PROJECTS',
    },
    {
      index: '04',
      tag: '1 OF 10',
      title: 'Awards',
      text: "The 2025 FIRST Dean's List Award, and every honor since 2023.",
      href: '/awards/',
      watermark: 'AWARDS',
    },
    {
      index: '05',
      tag: 'FALL 2026',
      title: 'Clubs',
      text: 'The MIT Satellite Team, MAIA, AI@MIT, and the Global Security Technology Club.',
      href: '/clubs/',
      watermark: 'CLUBS',
    },
    {
      index: '06',
      tag: 'FRC 3616',
      title: 'High School',
      text: 'FRC Team 3616, three apps, and student leadership in Lafayette.',
      href: '/high-school/',
      watermark: 'HIGH SCHOOL',
    },
    {
      index: '07',
      tag: 'OUTSIDE CLASS',
      title: 'Life',
      text: 'Zeta Beta Tau, drawing, fantasy football, and poker.',
      href: '/life/',
      watermark: 'LIFE',
    },
    {
      index: '08',
      tag: 'ONE PAGE · PDF',
      title: 'Resume',
      text: 'The one-page resume, to download or skim.',
      href: '/resume/',
      watermark: 'RESUME',
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
      title: 'CyberDefender',
      text: 'A team of AI agents that detects and contains attacks on my own home lab.',
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
