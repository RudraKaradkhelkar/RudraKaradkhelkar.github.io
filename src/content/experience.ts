// Experience page copy. Source: assets-incoming/PROFILE.md ("Experience page") and
// design-handoff/CHANGES.md section 5. Layout follows design-handoff/reference/Experience.html.
// Rudra, Nov 8: skills live inside each role (no skills bank), CGI runs newest first, CAPE and
// LPSS are separate sections, and the CGI volunteering moved to High School.
import type { Chip, Link, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Experience',
  description:
    'Three summers at CGI, newest first, plus two years writing backend code for a CubeSat ground station and a school district internship, each with the skills it used.',
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
  /** Newest first (Rudra, Nov 8). */
  chapters: [
    {
      year: '2026',
      label: 'JUN TO AUG 2026',
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
    {
      year: '2025',
      label: 'JUN TO OCT 2025',
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
      year: '2024',
      label: 'JUN TO OCT 2024',
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
  ] as Chapter[],
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
    /**
     * The article's header photo (slot cgi-article), cropped from Rudra's screenshot. It sits
     * inside the link, whose text already says where it goes, so it is decorative (alt="").
     */
    photo: { slot: 'cgi-article' },
  },
};

export interface Role {
  /** Anchor on the page (Clubs links to /experience/#cape). */
  id: string;
  label: string;
  heading: string;
  kicker: string;
  title: string;
  points: string[];
  skillsLabel: string;
  skills: Chip[];
}

export const cape: Role = {
  id: 'cape',
  label: 'CAPE SATELLITE PROGRAM · MAR 2024 TO MAR 2026',
  heading: 'CAPE',
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
  ].map((label) => ({ label })),
};

export const lpss: Role = {
  id: 'lpss',
  label: 'LAFAYETTE PARISH SCHOOL SYSTEM · SEP 2024 TO FEB 2025',
  heading: 'LPSS',
  kicker: 'Lafayette Parish School System',
  title: 'Software Intern',
  points: [
    'Worked with the School Board Community Coordinator to build data collection forms that catalog partnerships and volunteer opportunities and measure the impact of outside organizations supporting LPSS.',
    "Revived the district's partnership-tracking effort by proposing solutions in weekly meetings, giving the district a working framework to manage community engagement.",
  ],
  skillsLabel: 'SKILLS',
  skills: ['HTML', 'CSS', 'JavaScript', 'Google Forms', 'Data management', 'Communication'].map((label) => ({ label })),
};
