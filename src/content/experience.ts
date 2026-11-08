// Experience page copy. Source: assets-incoming/PROFILE.md ("Experience page") and
// design-handoff/CHANGES.md section 5. Layout follows design-handoff/reference/Experience.html.
import type { Chip, Link, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Experience',
  description:
    'Three summers at CGI, told as three chapters, plus two years writing backend code for a CubeSat ground station and a school district internship. Every skill, and where it was used.',
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

/** The five ID badges on the rail, in order. The filled one is the most recent CGI role. */
export const heroBadges = [
  { org: 'CAPE', name: 'Rudra K.', role: 'BACKEND DEV', year: "'24" },
  { org: 'CGI', name: 'Rudra K.', role: 'BRIDGE INTERN', year: "'24" },
  { org: 'CGI', name: 'Rudra K.', role: 'DATA/SOFTWARE', year: "'25" },
  { org: 'CGI', name: 'Rudra K.', role: 'TECH LEAD & AI', year: "'26", filled: true },
  { org: 'LPSS', name: 'Rudra K.', role: 'SOFTWARE INTERN', year: "'24" },
];

/** The roles, as short tags shown next to each skill. */
export const roles = {
  cgi24: "CGI '24",
  cgi25: "CGI '25",
  cgi26: "CGI '26",
  cape: 'CAPE',
  lpss: 'LPSS',
} as const;
export type RoleKey = keyof typeof roles;

/**
 * Every skill from every role (PROFILE.md "Skills learned" and the LinkedIn skills lists),
 * grouped as in CHANGES.md section 5, with the roles that used it.
 */
export const skills = {
  label: 'ACROSS FIVE ROLES',
  heading: 'SKILLS',
  text: 'Every skill from every role, and where it was used.',
  groups: [
    {
      title: 'Languages',
      items: [
        { name: 'PowerFX', roles: ['cgi24', 'cgi26'] },
        { name: 'PowerShell', roles: ['cgi25'] },
        { name: 'JavaScript', roles: ['cape', 'lpss'] },
        { name: 'HTML and CSS', roles: ['lpss'] },
        { name: 'Angular', roles: ['cape'] },
      ],
    },
    {
      title: 'Backend and data',
      items: [
        { name: 'Django and Django Ninja', roles: ['cape'] },
        { name: 'PostgreSQL', roles: ['cape'] },
        { name: 'SQLite', roles: ['cape'] },
        { name: 'Oracle', roles: ['cape'] },
        { name: 'Microsoft Graph API', roles: ['cgi25'] },
        { name: 'Data extraction', roles: ['cgi25'] },
        { name: 'Solution architecture and data modeling', roles: ['cgi26'] },
        { name: 'Data management', roles: ['lpss'] },
        { name: 'Google Forms', roles: ['lpss'] },
        { name: 'CWE security research', roles: ['cape'] },
      ],
    },
    {
      title: 'Microsoft Power Platform and Microsoft 365',
      items: [
        { name: 'Power Apps', roles: ['cgi24', 'cgi26'] },
        { name: 'Power Automate', roles: ['cgi24', 'cgi25', 'cgi26'] },
        { name: 'SharePoint', roles: ['cgi24', 'cgi25', 'cgi26'] },
        { name: 'Power BI', roles: ['cgi25'] },
        { name: 'Power Pages', roles: ['cgi24'] },
        { name: 'Microsoft 365', roles: ['cgi25'] },
      ],
    },
    {
      title: 'DevOps and collaboration',
      items: [
        { name: 'Agile development', roles: ['cgi24', 'cape', 'cgi26'] },
        { name: 'Kanban', roles: ['cgi26'] },
        { name: 'Azure DevOps', roles: ['cgi25'] },
        { name: 'Docker', roles: ['cape'] },
        { name: 'GitHub', roles: ['cape'] },
        { name: 'Bitbucket and Sourcetree', roles: ['cape'] },
        { name: 'Jira', roles: ['cape'] },
        { name: 'Vikunja', roles: ['cape'] },
      ],
    },
    {
      title: 'Hardware and electronics',
      items: [
        { name: 'Soldering and circuit repair', roles: ['cgi24'] },
        { name: 'Arduino', roles: ['cape'] },
        { name: 'Altium Designer', roles: ['cape'] },
      ],
    },
    {
      title: 'AI and agents',
      items: [
        { name: 'AI agents', roles: ['cgi26'] },
        { name: 'Microsoft Copilot Studio', roles: ['cgi26'] },
      ],
    },
    {
      title: 'Leadership and consulting',
      items: [
        { name: 'Technical leadership', roles: ['cgi26'] },
        { name: 'Client consulting', roles: ['cgi26'] },
        { name: 'Research', roles: ['cgi25'] },
        { name: 'Communication', roles: ['lpss'] },
      ],
    },
  ] satisfies { title: string; items: { name: string; roles: RoleKey[] }[] }[],
};

export interface Chapter {
  year: string;
  label: string;
  role: string;
  team: string;
  /** One line of context (for example "First high school student on the team"). */
  context?: string;
  built: string[];
  skills: Chip[];
  recognition: { text: string; link?: Link }[];
  /** Rudra's own words, from his LinkedIn posts. */
  quote: string;
}

const ecoArticle: Link = {
  label: 'CGI article',
  href: 'https://www.cgi.com/en/article/esg/using-gamification-to-help-students-become-future-environmental-leaders',
  external: true,
};

export const cgi = {
  id: 'cgi',
  label: 'CGI · CGI FEDERAL · LAFAYETTE, LA',
  heading: 'CGI 2024 TO 2026',
  intro: 'Three summers and three roles, from bridge intern to technical lead.',
  throughLine: {
    label: 'THE THROUGH-LINE',
    steps: [
      {
        year: '2024',
        text: "Added a reservation and overdue-notice system to CGI's Inventory Management System, which ships STEM items to outreach events nationwide.",
      },
      {
        year: '2026',
        text: "Led its redesign into the Education Management System, CGI CSR's nationwide hub.",
      },
    ],
  },
  chapters: [
    {
      year: '2024',
      label: 'CHAPTER 01 · JUN TO OCT 2024',
      role: 'Software Bridge Intern',
      team: 'CGI · junior year of high school',
      built: [
        'Designed and built EcoChamps from scratch: a gamified sustainability app used nationally by CGI employees, rewarding eco-friendly habits (biking, reusable mugs) toward CGI\'s net-zero goals.',
        "Built an automated reservation and overdue-notice system for the Inventory Management System that ships STEM items to outreach events nationwide, replacing manual tracking.",
        'Diagnosed and repaired circuitry in 15 SeaPerch underwater robots for STEM outreach.',
      ],
      skills: [
        { label: 'Power Apps' },
        { label: 'PowerFX' },
        { label: 'Power Automate' },
        { label: 'Power Pages' },
        { label: 'Microsoft Power Platform' },
        { label: 'SharePoint (as a database)' },
        { label: 'Agile development' },
        { label: 'Soldering and circuit repair' },
      ],
      recognition: [
        { text: "EcoChamps earned a 3-month internship extension." },
        { text: 'CGI featured EcoChamps in an article.', link: ecoArticle },
      ],
      quote: 'EcoChamps started as a simple idea but was able to grow into something a lot bigger through hard work and dedication.',
    },
    {
      year: '2025',
      label: 'CHAPTER 02 · JUN TO OCT 2025',
      role: 'Data Analysis/Software Intern',
      team: 'IS/IT project team, CGI Federal',
      context: "First high school student on CGI Federal's IS/IT team.",
      built: [
        'Centralized tracking of 10 to 15 licenses (Azure, GitHub, Copilot, and others) across 8 business units into one executive Power BI dashboard, replacing hours of manual reconciliation.',
        'Built SharePoint Online sites used across CGI Federal, researched branding issues and found technical fixes, and built Power Automate flows to speed data migration from legacy systems to SharePoint Online.',
        'Built Power Apps prototypes for leadership, such as an event schedule form for a new organization-wide calendar.',
      ],
      skills: [
        { label: 'Microsoft Power BI' },
        { label: 'PowerShell' },
        { label: 'Microsoft Graph API' },
        { label: 'Data extraction' },
        { label: 'SharePoint Online' },
        { label: 'Power Automate' },
        { label: 'Azure DevOps' },
        { label: 'Microsoft 365' },
        { label: 'Research' },
      ],
      recognition: [{ text: 'The license dashboard earned a 2-month extension to expand its scope.' }],
      quote: 'I am grateful for all of the various skills I learned in data extraction, PowerShell, API use, and Microsoft Power Platform.',
    },
    {
      year: '2026',
      label: 'CHAPTER 03 · JUN TO AUG 2026',
      role: 'Technical/Project Lead and AI Intern',
      team: 'CGI Federal',
      context: 'Technical lead on a 2-person team.',
      built: [
        'Took the platform from storyboarding through full development, consolidating 3 systems into 1 nationwide data hub that tracks 150+ initiatives and events a year. Drove the rename from Inventory Management System to Education Management System as its scope grew to beneficiary and event data.',
        'Owned it end to end: SharePoint-based database design, 5+ screens (calendar and reservations, shipping requests, beneficiaries dashboard, past shipments), and automated scheduling logic in Power Automate and PowerFX that removed manual coordination on shipment requests.',
        "Built a Copilot Studio AI agent that lives in Microsoft Teams conversations and drafts EMS request forms from Q&A, and tested CGI's internal CSR chatbot against other tools during its move to Copilot Studio.",
        'Ran weekly Agile sprints with Kanban boards, and used consulting-style discovery with the STEM@CGI program leads to audit shipping and bridge-internship processes and automate the slow parts.',
      ],
      skills: [
        { label: 'AI agents' },
        { label: 'Microsoft Copilot Studio' },
        { label: 'Technical leadership' },
        { label: 'Solution architecture and data modeling' },
        { label: 'Power Apps and PowerFX' },
        { label: 'Power Automate' },
        { label: 'SharePoint' },
        { label: 'Agile and Kanban' },
        { label: 'Client consulting' },
      ],
      recognition: [{ text: '3 systems consolidated into 1 hub tracking 150+ initiatives and events a year.' }],
      quote: "Three internships in, and I'm walking away with more expertise in enterprise solutions than I expected.",
    },
  ] as Chapter[],
  volunteering: {
    label: 'CGI VOLUNTEERING · JUN 2024 TO NOV 2025',
    title: 'Teaching and mentoring',
    items: [
      { value: '4', text: "2-hour lessons at CGI's Region 4 Summer STEM Camp, for 200+ students." },
      { value: '30+', text: 'students mentored for the Congressional App Challenge, over 8 weeks.' },
    ],
    note: 'Also led lessons on cryptography and consulting for middle and early high school students, and volunteered at Take Your Child to Work Day STEM events.',
  },
};

export const ecochamps = {
  label: 'SPOTLIGHT · CGI 2024',
  heading: 'ECOCHAMPS',
  text: "A gamified sustainability app I designed and built from scratch. CGI employees nationwide earn points for eco-friendly habits, like biking or bringing a reusable mug, that roll up to CGI's net-zero goals.",
  facts: [
    { value: 'Nationwide', label: 'USED ACROSS CGI' },
    { value: '+3 months', label: 'INTERNSHIP EXTENSION' },
  ],
  press: {
    label: 'IN THE PRESS · CGI',
    title: 'Using gamification to help students become future environmental leaders',
    link: { label: 'Read the article', href: ecoArticle.href, external: true },
  },
};

export const more = {
  label: 'BEFORE AND ALONGSIDE CGI',
  heading: 'CAPE · LPSS',
  cases: [
    {
      watermark: 'CAPE',
      label: 'MAR 2024 TO MAR 2026',
      kicker: 'University of Louisiana at Lafayette',
      title: 'Backend Developer, CAPE Satellite Program',
      points: [
        'The only high school student on the CubeSat team, working with NASA engineers to develop and launch picosatellites into orbit.',
        'Taught myself Django and Django Ninja to build backend endpoints for the Experimental Smart Ground Station Grid (ESG Grid), which talks to satellites over radio, and designed the PostgreSQL databases for satellite telemetry.',
        'Researched Common Weakness Enumerations (CWEs) for secure communications.',
        "Wrote the team's Django onboarding plan, still used to onboard new members, and trained on Angular toward full-stack work.",
      ],
      skillsLabel: 'SKILLS',
      skills: [
        'Django',
        'Django Ninja',
        'PostgreSQL',
        'SQLite',
        'Oracle',
        'JavaScript',
        'Angular',
        'Docker',
        'GitHub',
        'Bitbucket',
        'Sourcetree',
        'Jira',
        'Vikunja',
        'Agile development',
        'Arduino',
        'Altium Designer',
        'CWE security research',
      ].map((label) => ({ label })) satisfies Chip[],
    },
    {
      watermark: 'LPSS',
      label: 'SEP 2024 TO FEB 2025',
      kicker: 'Lafayette Parish School System',
      title: 'Software Intern',
      points: [
        'Worked with the School Board Community Coordinator to build data collection forms that catalog partnerships and volunteer opportunities and measure the impact of outside organizations supporting LPSS.',
        "Revived the district's partnership-tracking effort by proposing solutions in weekly meetings, giving the district a working framework to manage community engagement.",
      ],
      skillsLabel: 'SKILLS',
      skills: ['HTML', 'CSS', 'JavaScript', 'Google Forms', 'Data management', 'Communication'].map((label) => ({ label })) satisfies Chip[],
    },
  ],
};
