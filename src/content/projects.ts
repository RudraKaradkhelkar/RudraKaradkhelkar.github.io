// Projects page copy. Source: design-handoff/reference/Projects.html and design/Projects.dc.html
// (the selection logic and the LVL 02 detail strip only exist in the design source).
import type { Chip, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Projects',
  description: 'An AI cyberdefender agent for a home-lab server and a gesture-controlled drone glove, both in progress.',
};

export const hero: PosterHeroContent = {
  subtitle: 'SELECT A LEVEL',
  headline: 'PROJECTS',
  headlineLabel: 'Projects',
  captionsLeft: ['2 in progress', '1 locked'],
  captionsRight: ['Pick a cover', 'Fall 2026'],
  sideLabelLeft: 'PRESS A COVER TO SELECT / 2 OF 3 UNLOCKED',
  badges: [],
};

/**
 * Covers in the level select, in order. `progress` is the bar fill (0 to 100).
 * It stays null until Rudra gives a real number; the design's 35% and 20% bars were mock-ups.
 */
export const levels = [
  {
    id: 'cyber',
    level: 'LVL 01',
    status: 'IN PROGRESS',
    locked: false,
    coverTitle: ['CYBER', 'DEFENDER'],
    coverTag: 'AI SECURITY',
    coverYear: '2026',
    detail: {
      label: 'LVL 01 · IN PROGRESS',
      title: 'Cyberdefender Agent',
      text: 'An AI agent that monitors a home-lab server, spots intrusions, and responds. Runs on a VM or an old laptop turned server.',
      progress: null as number | null,
      progressLabel: '[X]% BUILT',
      enter: { label: 'Enter level', href: '#lvl1' },
    },
  },
  {
    id: 'glove',
    level: 'LVL 02',
    status: 'IN PROGRESS',
    locked: false,
    coverTitle: ['DRONE', 'GLOVE'],
    coverTag: 'ML · EMBEDDED',
    coverYear: '2026',
    detail: {
      label: 'LVL 02 · IN PROGRESS',
      title: 'Drone Gesture Glove',
      text: 'A wearable glove that reads hand gestures and turns them into flight commands for a drone.',
      progress: null as number | null,
      progressLabel: '[X]% BUILT',
      enter: { label: 'Enter level', href: '#lvl2' },
    },
  },
  {
    id: 'locked',
    level: 'LVL 03',
    status: 'LOCKED',
    locked: true,
    coverTitle: ['???'],
    coverTag: 'NEXT BUILD',
    coverYear: '',
    detail: null,
  },
];

export const controls = {
  previous: 'Previous level',
  next: 'Next level',
  hint: 'PRESS A COVER TO SELECT / 2 OF 3 UNLOCKED',
};

export const cyberdefender = {
  id: 'lvl1',
  label: 'LVL 01 / IN PROGRESS',
  heading: 'CYBER DEFENDER',
  intro:
    'A home-lab server watched by AI. One agent classifies incoming traffic, a second one responds to anything suspicious, and I play the attacker. Approved by my advisor as a semester project alongside my UROP.',
  pipeline: [
    { label: '01 / THE ATTACKER', title: 'Attacker VM', text: 'Attacks launched from a VM on my own laptop.' },
    { label: '02 / THE TARGET', title: 'Home-lab server', text: 'A VM or an old laptop turned server.' },
    { label: '03 / THE WATCHER', title: 'Classifier agent', text: 'Reads incoming traffic and flags what looks wrong.' },
    { label: '04 / THE RESPONDER', title: 'Security agent', text: 'Picks a response from a fixed, typed set of actions.' },
  ],
  designChoices: {
    label: 'DESIGN CHOICES',
    items: [
      "A model-agnostic harness I'm writing myself, so frontier and local models can swap in and out.",
      'A typed decision layer: the agent chooses from defined actions instead of running free-form commands.',
      'Tested by attacking it myself, with every attempt logged.',
    ],
  },
  milestones: {
    label: 'MILESTONES',
    items: [
      { title: 'Server up, with traffic logging', status: '[STATUS]' },
      { title: 'Classifier flags suspicious traffic', status: '[STATUS]' },
      { title: 'Security agent takes a response action', status: '[STATUS]' },
      { title: 'Write-up of the attacks I ran and what held', status: '[STATUS]' },
    ],
  },
};

export const droneGlove = {
  id: 'lvl2',
  label: 'LVL 02 / IN PROGRESS',
  heading: 'DRONE GLOVE',
  intro:
    'A glove that flies a drone. Motion sensors on every finger feed a model that recognizes hand poses, and each pose maps to a flight command. It pulls together machine learning, embedded systems, CAD, and circuit design.',
  parts: [
    'An IMU on every finger',
    'A back-of-hand board, designed in KiCad',
    'A CAD hand harness to hold it all',
    'A PyTorch model that classifies hand poses',
    'A simple drone that follows the gestures',
  ],
  chips: [{ label: 'PyTorch' }, { label: 'KiCad' }, { label: 'CAD' }, { label: 'Embedded' }] satisfies Chip[],
  progressLabel: '[X]% BUILT',
  figure: {
    alt: 'Schematic of the glove: a motion sensor on each finger wired to a board on the back of the hand',
    label: 'SENSOR LAYOUT',
    tag: '5 × IMU · 1 × BOARD',
  },
};

export const nextLevel = {
  label: 'LVL 03 / LOCKED',
  heading: 'NEXT LEVEL',
  text: 'Unlocks when one of the first two ships.',
  textPlaceholder: "[What's next, in one line.]",
};
