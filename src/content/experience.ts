// Experience page copy. Source: design-handoff/reference/Experience.html.
import type { Chip, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Experience',
  description:
    'Three summers at CGI building internal tools people still use, and two years writing backend code for a CubeSat ground station.',
};

export const hero: PosterHeroContent = {
  subtitle: 'WORK HISTORY',
  headline: 'EXPERIENCE',
  headlineLabel: 'Experience',
  captionsLeft: ['CGI · 3 summers', 'CAPE Satellite'],
  captionsRight: ['LPSS', 'Since 2024'],
  sideLabelLeft: '2024 TO 2026',
  sideLabelRight: 'LAFAYETTE, LA',
  about: {
    label: 'About',
    text: 'Three summers at CGI building internal tools people still use, and two years writing backend code for a CubeSat ground station.',
  },
  badges: [
    { value: '150+', label: 'STEM events tracked' },
    { value: '8', label: 'Business units', filled: true },
    { value: '15', label: 'ROVs repaired' },
  ],
};

/** The four ID badges hanging from the rail, left to right. The last one is accent-filled. */
export const heroBadges = [
  { org: 'CAPE', name: 'Rudra K.', role: 'BACKEND DEV', year: "'24" },
  { org: 'CGI', name: 'Rudra K.', role: 'BRIDGE INTERN', year: "'24" },
  { org: 'CGI', name: 'Rudra K.', role: 'SOFTWARE INTERN', year: "'25" },
  { org: 'CGI', name: 'Rudra K.', role: 'TECH LEAD', year: "'26", filled: true },
];

export const work = {
  label: 'WORK',
  heading: 'CGI · CAPE · LPSS',
  cases: [
    {
      watermark: 'CGI',
      label: 'CASE 01 · 2024 → 2026',
      kicker: '3 summers',
      title: 'Software intern, three summers running',
      chips: [{ label: 'Power Apps' }, { label: 'Power Automate' }, { label: 'SharePoint' }, { label: 'Power BI' }] satisfies Chip[],
      timeline: [
        {
          label: '2026 · JUN → AUG · TECHNICAL LEAD',
          current: true,
          text: "Technical lead on EMS/IMS, a SharePoint-based inventory and data hub for CGI's CSR STEM team.",
        },
        {
          label: '2025 · JUN → OCT · SOFTWARE INTERN',
          text: 'Built SharePoint portals and Power Automate workflows, plus a Power BI dashboard that centralizes license tracking (10 to 15 licenses) across 8 CGI Federal business units.',
        },
        {
          label: '2024 · JUN → OCT · SOFTWARE BRIDGE INTERN',
          text: 'Built EcoChamps from scratch, a gamified sustainability app now used by CGI employees nationally, which earned a 3-month extension. Also built a STEM inventory reservation and overdue-notice system tracking 150+ initiatives a year, and repaired circuitry in 15 SeaPerch ROVs.',
        },
      ],
    },
    {
      watermark: 'CAPE',
      label: 'CASE 02 · 2024 → 2026',
      kicker: 'UL Lafayette · Mar 2024 to Mar 2026',
      title: 'Backend Developer, CAPE Satellite Program',
      chips: [{ label: 'Django' }, { label: 'Django Ninja' }, { label: 'PostgreSQL' }] satisfies Chip[],
      paragraphs: [
        'The only high school student on the team, working with NASA engineers on CubeSat and picosatellite launches.',
        'Taught myself Django and Django Ninja to build backend endpoints for the ESG Grid ground station, which talks to satellites over RF. Designed the PostgreSQL databases for satellite telemetry and researched CWEs for secure communications.',
      ],
      note: "Wrote the team's Django onboarding plan, which new members still use.",
    },
    {
      watermark: 'LPSS',
      label: 'CASE 03 · 2024 → 2025',
      kicker: 'School district · Sep 2024 to Feb 2025',
      title: 'Software Intern',
      chips: [] satisfies Chip[],
      paragraphs: [
        "Built data collection forms cataloging 30 to 40 community partnerships and volunteer opportunities for the district's Community Coordinator.",
      ],
    },
  ],
};

export const ecochamps = {
  label: 'SPOTLIGHT · CGI 2024',
  heading: 'ECOCHAMPS',
  text: "A gamified sustainability app I built from scratch. CGI employees earn points for eco-friendly habits that roll up to the company's net-zero goals.",
  facts: [
    { value: 'Nationwide', label: 'USED ACROSS CGI' },
    { value: '+3 months', label: 'INTERNSHIP EXTENSION' },
  ],
  figure: {
    /** Only filled once CGI is OK with the screen being public. */
    slot: 'experience-ecochamps-1',
    alt: 'EcoChamps app screen',
    label: 'ECOCHAMPS',
    tag: 'POWER APPS · 2024',
  },
};
