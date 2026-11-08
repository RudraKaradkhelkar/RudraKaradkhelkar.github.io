// Resume page copy. Source: assets-incoming/docs/resume.pdf (November 2026, one page) and
// ANSWERS.md. The PDF is public/resume.pdf: confirmed to have no phone number.
import type { Chip, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Resume',
  description:
    "Rudra Karadkhelkar's one-page resume: MIT computer science and AI, the MIT UROP at CAMS, CGI Federal, CyberDefender and Jarvis, the MIT Satellite Team, FRC Team 3616, and the CAPE Satellite Program.",
};

export const hero: PosterHeroContent = {
  subtitle: 'ONE PAGE · PDF',
  headline: 'RESUME',
  headlineLabel: 'Resume',
  captionsLeft: ['Updated November 2026', "MIT '30"],
  captionsRight: ['rudrak@mit.edu', 'LinkedIn'],
  sideLabelLeft: 'RESUME · 1 PAGE · PDF',
  sideLabelRight: 'RUDRAK@MIT.EDU / LINKEDIN',
  about: {
    label: 'About',
    text: 'The full resume on one page. Download it, or skim the highlights below.',
  },
  badges: [],
};

export const pdf = {
  /** public/resume.pdf (no phone number). */
  href: '/resume.pdf',
  fileName: 'RESUME_RUDRA_KARADKHELKAR.PDF',
  downloadLabel: 'Download PDF',
  toolbarDownload: 'DOWNLOAD',
  pageLabel: 'PAGE 1 / 1',
  zoomLabel: 'NOV 2026',
  placeholder: '[EMBEDDED RESUME PDF]',
  /** Accessible title for the embedded PDF viewer. */
  viewerTitle: 'Resume PDF',
  /** Shown inside the viewer if the browser cannot display PDFs inline. */
  viewerFallback: 'Open the PDF',
};

/** The paper sheet in the hero art: a summary of the one-page resume, drawn as a page. */
export const heroSheet = {
  alt: 'A paper-clipped resume sheet over a second page',
  name: 'RUDRA KARADKHELKAR',
  contact: 'rudrak@mit.edu · linkedin.com/in/rudra-karadkhelkar · Cambridge, MA',
  sections: [
    {
      heading: 'EDUCATION',
      entries: [
        {
          title: 'Massachusetts Institute of Technology',
          date: 'Expected June 2030',
          lines: ['B.S. in Computer Science and Artificial Intelligence'],
          plain: true,
        },
      ],
    },
    {
      heading: 'RESEARCH & EXPERIENCE',
      entries: [
        {
          title: 'MIT UROP, Cybersecurity at MIT Sloan (CAMS)',
          date: 'Aug 2026 to Present',
          lines: ['Two-dimensional graph centrality metrics for critical assets in infrastructure networks'],
        },
        {
          title: 'CGI Federal · Technical/Project Lead & AI Intern',
          date: 'Jun to Aug 2026',
          lines: ['Consolidated 3 systems into 1 nationwide data hub', 'Built an AI agent that drafts requests from Microsoft Teams Q&A'],
        },
      ],
    },
    {
      heading: 'PROJECTS',
      entries: [
        {
          title: 'CyberDefender: Autonomous AI Network Defense Agent',
          date: 'In Progress',
          lines: ['Multi-agent SOC on an isolated Linux home lab'],
        },
        {
          title: 'Jarvis: Self-Hosted AI Automation System',
          date: '',
          lines: ['4+ specialized AI subagents on a hardened Linux server'],
        },
      ],
    },
    {
      heading: 'LEADERSHIP & ACTIVITIES',
      entries: [
        {
          title: 'FIRST Robotics, Team 3616 · Lead Programmer, President, PM',
          date: 'May 2021 to Jul 2026',
          lines: ["2025 FIRST Dean's List Award Winner, 1 of 10 worldwide"],
        },
      ],
    },
  ],
};

export interface HighlightCard {
  label: string;
  items: { title: string; text: string }[];
}

/** The cards beside the viewer, in the resume's order. */
export const highlights: HighlightCard[] = [
  {
    label: 'EDUCATION',
    items: [
      {
        title: 'Massachusetts Institute of Technology',
        text: 'B.S. in Computer Science and Artificial Intelligence · Expected June 2030 · Coursework: 6.100A, 18.02, 8.01, 3.091',
      },
    ],
  },
  {
    label: 'RESEARCH & EXPERIENCE',
    items: [
      { title: 'MIT UROP, Cybersecurity at MIT Sloan (CAMS)', text: 'Undergraduate Researcher · Aug 2026 to present' },
      { title: 'CGI Federal', text: 'Technical/Project Lead and AI Intern · 2026; Data Analysis/Software Intern · 2025' },
      { title: 'CAPE Satellite Program, UL Lafayette', text: 'Backend Developer · Mar 2024 to Mar 2026' },
    ],
  },
  {
    label: 'PROJECTS',
    items: [
      { title: 'CyberDefender', text: 'Autonomous AI network defense agent · in progress, MVP targeted December 2026' },
      { title: 'Jarvis', text: 'Self-hosted AI automation system · running' },
    ],
  },
  {
    label: 'LEADERSHIP & ACTIVITIES',
    items: [
      { title: 'MIT Satellite Team', text: 'Software Developer · Sep 2026 to present' },
      { title: 'MIT AI Alignment (MAIA)', text: 'AI Safety Fundamentals reading group · Sep 2026 to present' },
      { title: 'FRC Team 3616 Phenomena', text: "Lead Programmer, President, Project Manager · 2025 FIRST Dean's List Award Winner" },
    ],
  },
];

/** Skills, grouped as on the resume. */
export const skills = {
  label: 'SKILLS',
  groups: [
    { title: 'Languages', chips: ['Python', 'C++', 'Java', 'SQL', 'PowerShell'] },
    { title: 'Security & Systems', chips: ['Linux', 'Kali Linux', 'VirtualBox', 'Tailscale', 'Git'] },
    { title: 'Backend', chips: ['Django', 'Django Ninja', 'PostgreSQL', 'SQLite'] },
    {
      title: 'AI & Automation',
      chips: ['LLM agents', 'Local LLMs', 'Claude Code', 'n8n', 'Copilot Studio', 'Power Automate', 'Power Apps', 'Power BI', 'SharePoint'],
    },
  ].map((g) => ({ ...g, chips: g.chips.map((label) => ({ label })) satisfies Chip[] })),
};

export const contact = {
  label: 'CONTACT',
};
