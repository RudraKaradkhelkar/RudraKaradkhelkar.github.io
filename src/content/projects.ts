// Projects page copy. Source: assets-incoming/PROFILE.md ("Projects page") and ANSWERS.md.
// Layout follows design-handoff/reference/Projects.html and design/Projects.dc.html.
//
// Jarvis: only the two facts Rudra cleared. Never publish hostnames, IP addresses, ports,
// Tailscale names, account names, or anything else that maps the server.
import type { Chip, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Projects',
  description:
    'CyberDefender, an autonomous AI network defense agent; Jarvis, a self-hosted AI automation system; and a gesture-controlled drone glove.',
};

export const hero: PosterHeroContent = {
  subtitle: 'SELECT A LEVEL',
  headline: 'PROJECTS',
  headlineLabel: 'Projects',
  captionsLeft: ['3 unlocked', '1 locked'],
  captionsRight: ['Pick a cover', 'Fall 2026'],
  sideLabelLeft: 'PRESS A COVER TO SELECT / 3 OF 4 UNLOCKED',
  badges: [],
};

export interface LevelDetail {
  label: string;
  title: string;
  text: string;
  /** Bar fill, 0 to 100. Leave out for a project that is running (no bar, just the status). */
  progress?: number;
  /** "15% BUILT", or the status for a running project. */
  progressLabel: string;
  enter: { label: string; href: string };
}

export interface Level {
  id: string;
  level: string;
  status: string;
  locked: boolean;
  coverTitle: string[];
  coverTag: string;
  coverYear: string;
  detail: LevelDetail | null;
}

/** Covers in the level select, in order. Keep `progressLabel` in step with `progress`. */
export const levels: Level[] = [
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
      title: 'CyberDefender',
      text: 'An autonomous AI network defense agent: a team of AI agents that detects and contains attacks on my own home lab. Research done; MVP targeted for December 2026.',
      progress: 15,
      progressLabel: '15% BUILT',
      enter: { label: 'Enter level', href: '#lvl1' },
    },
  },
  {
    id: 'jarvis',
    level: 'LVL 02',
    status: 'RUNNING',
    locked: false,
    coverTitle: ['JARVIS'],
    coverTag: 'AUTOMATION',
    coverYear: '2026',
    detail: {
      label: 'LVL 02 · RUNNING',
      title: 'Jarvis',
      text: 'A self-hosted AI automation system: a Linux server running 4+ specialized AI subagents that handle daily productivity tasks on their own.',
      progressLabel: 'RUNNING',
      enter: { label: 'Enter level', href: '#lvl2' },
    },
  },
  {
    id: 'glove',
    level: 'LVL 03',
    status: 'IN PROGRESS',
    locked: false,
    coverTitle: ['DRONE', 'GLOVE'],
    coverTag: 'ML · EMBEDDED',
    coverYear: '2026',
    detail: {
      label: 'LVL 03 · IN PROGRESS',
      title: 'Drone Gesture Glove',
      text: 'A wearable glove that reads hand gestures and turns them into flight commands for a drone.',
      progress: 5,
      progressLabel: '5% BUILT',
      enter: { label: 'Enter level', href: '#lvl3' },
    },
  },
  {
    // Grayed out until Rudra sends the details after the tournament.
    id: 'poker',
    level: 'LVL 04',
    status: 'LOCKED',
    locked: true,
    coverTitle: ['POKER', 'BOT'],
    coverTag: 'NO LIMIT',
    coverYear: 'NEXT BUILD',
    detail: null,
  },
];

export const controls = {
  groupLabel: 'Select a level',
  previous: 'Previous level',
  next: 'Next level',
  hint: 'PRESS A COVER TO SELECT / 3 OF 4 UNLOCKED',
};

export const cyberdefender = {
  id: 'lvl1',
  label: 'LVL 01 / IN PROGRESS',
  heading: 'CYBER DEFENDER',
  title: 'CyberDefender: Autonomous AI Network Defense Agent',
  intro:
    'A multi-agent security operations center on an isolated Linux home lab. Three read-only agents monitor logs, network traffic, and file activity, and an overseer agent with admin rights classifies threats and contains them. Self-proposed, and approved and supervised by my UROP advisor, Dr. Ranjan Pal (MIT CAMS). MVP targeted for December 2026.',
  pipeline: [
    { label: '01 / THE ATTACKER', title: 'Attacker VM', text: 'Red-teaming from a Kali Linux VM.' },
    { label: '02 / THE TARGET', title: 'Home lab', text: 'An isolated Linux home lab.' },
    { label: '03 / THE WATCHERS', title: 'Monitor agents', text: 'Three read-only agents: logs, network traffic, and file activity.' },
    { label: '04 / THE OVERSEER', title: 'Overseer agent', text: 'Admin rights: classifies threats and contains them.' },
    { label: '05 / THE FIX', title: 'Clone VM', text: 'Candidate fixes are tested on an isolated clone before going live.' },
  ],
  designChoices: {
    label: 'DESIGN CHOICES',
    items: [
      'A model-agnostic harness, so frontier and local LLMs can swap in and out.',
      'A typed-decision layer that validates every action before it runs.',
      'A self-healing loop: candidate fixes are tested on an isolated clone VM before they deploy to the live system.',
      'Red-teamed from a Kali Linux attacker VM, with a benchmark for detection rate, false positive rate, fix success rate, and system degradation.',
    ],
  },
  milestones: {
    label: 'MILESTONES',
    items: [
      { title: 'Research and design', status: 'DONE', done: true },
      { title: 'Home lab and Kali attacker VM', status: 'UP NEXT' },
      { title: 'Three monitor agents', status: 'UP NEXT' },
      { title: 'Overseer classifies and contains', status: 'UP NEXT' },
      { title: 'Self-healing on a clone VM', status: 'UP NEXT' },
      { title: 'Benchmark', status: 'UP NEXT' },
    ],
  },
};

export const jarvis = {
  id: 'lvl2',
  label: 'LVL 02 / RUNNING',
  heading: 'JARVIS',
  title: 'Jarvis: Self-Hosted AI Automation System',
  facts: [
    {
      label: 'WHAT IT DOES',
      title: '4+ specialized AI subagents',
      text: 'A self-hosted Linux server running 4+ specialized AI subagents that autonomously handle daily productivity tasks.',
    },
    {
      label: 'HOW IT IS LOCKED DOWN',
      title: 'Hardened by default',
      text: 'Full-disk encryption, zero exposed remote ports, secret scanning, and hard safety gates on every agent.',
    },
  ],
  status: 'RUNNING',
  figure: {
    alt: 'Illustration of a server with four AI subagents connected around it',
    label: 'SUBAGENTS',
    tag: 'SELF-HOSTED',
  },
};

export const droneGlove = {
  id: 'lvl3',
  label: 'LVL 03 / IN PROGRESS',
  heading: 'DRONE GLOVE',
  intro:
    'A glove that flies a drone. Motion sensors on every finger feed a model that recognizes hand poses, and each pose maps to a flight command. It pulls together machine learning, embedded systems, CAD, and circuit design.',
  /** Each part's status. All up next for now. */
  parts: [
    { title: 'An IMU on every finger', status: 'UP NEXT' },
    { title: 'A back-of-hand board, designed in KiCad', status: 'UP NEXT' },
    { title: 'A CAD hand harness to hold it all', status: 'UP NEXT' },
    { title: 'A PyTorch model that classifies hand poses', status: 'UP NEXT' },
    { title: 'A simple drone that follows the gestures', status: 'UP NEXT' },
  ],
  chips: [{ label: 'PyTorch' }, { label: 'KiCad' }, { label: 'CAD' }, { label: 'Embedded' }] satisfies Chip[],
  progressLabel: '5% BUILT',
  figure: {
    alt: 'Schematic of the glove: a motion sensor on each finger wired to a board on the back of the hand',
    label: 'SENSOR LAYOUT',
    tag: '5 × IMU · 1 × BOARD',
  },
};

/** The locked level, grayed out until Rudra sends the details. */
export const nextLevel = {
  label: 'LVL 04 / LOCKED',
  heading: 'POKER BOT',
  text: 'A No Limit poker bot. Unlocks after the tournament.',
};
