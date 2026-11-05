// Resume page copy. Source: design-handoff/reference/Resume.html.
// The PDF goes at public/resume.pdf only after Rudra confirms it has no phone number.
// Until then `pdf.href` stays empty and the download buttons point nowhere useful.
import type { Chip, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Resume',
  description: "Rudra Karadkhelkar's resume: MIT computer science and AI, CGI, the CAPE Satellite Program, MIT UROP, and FRC Team 3616.",
};

export const hero: PosterHeroContent = {
  subtitle: 'TWO PAGES · PDF',
  headline: 'RESUME',
  headlineLabel: 'Resume',
  captionsLeft: ['Updated [Month 2026]', "MIT '30"],
  captionsRight: ['rudrak@mit.edu', 'LinkedIn'],
  sideLabelLeft: 'RESUME · 2 PAGES · PDF',
  sideLabelRight: 'RUDRAK@MIT.EDU / LINKEDIN',
  about: {
    label: 'About',
    text: 'The full resume in two pages. Download it, or skim the highlights below.',
  },
  badges: [],
};

export const pdf = {
  /** Set to '/resume.pdf' once public/resume.pdf exists. */
  href: '',
  fileName: 'RESUME_RUDRA_KARADKHELKAR.PDF',
  downloadLabel: 'Download PDF',
  toolbarDownload: 'DOWNLOAD',
  pageLabel: 'PAGE 1 / 2',
  zoomLabel: '100%',
  placeholder: '[EMBEDDED RESUME PDF]',
};

/** The paper sheet in the hero art. A summary drawn as a page, not the PDF itself. */
export const heroSheet = {
  name: 'RUDRA KARADKHELKAR',
  contact: 'rudrak@mit.edu · linkedin.com/in/rudra-karadkhelkar',
  sections: [
    {
      heading: 'EDUCATION',
      entries: [
        {
          title: 'Massachusetts Institute of Technology',
          date: 'Class of 2030',
          lines: ['Computer science and AI · [Course number]'],
          plain: true,
        },
      ],
    },
    {
      heading: 'EXPERIENCE',
      entries: [
        {
          title: 'CGI · Software Intern, 3 summers',
          date: '2024 to 2026',
          lines: [
            'Technical lead on EMS/IMS, a SharePoint data hub for the CSR STEM team',
            'Built EcoChamps, a gamified sustainability app used by CGI nationally',
            'Power BI license tracking across 8 CGI Federal business units',
          ],
        },
        {
          title: 'CAPE Satellite Program · Backend Developer',
          date: '2024 to 2026',
          lines: ['Django endpoints for the ESG Grid ground station', 'PostgreSQL schemas for satellite telemetry'],
        },
      ],
    },
    {
      heading: 'RESEARCH',
      entries: [
        {
          title: 'MIT UROP · Cybersecurity at MIT Sloan',
          date: 'Fall 2026',
          lines: ['Two-dimensional centrality metrics for infrastructure cyber risk'],
        },
      ],
    },
    {
      heading: 'LEADERSHIP',
      entries: [
        {
          title: 'FRC Team 3616 · President, Project Manager',
          date: '2021 to 2026',
          lines: ["2025 FIRST Dean's List Award, 1 of 10 worldwide"],
        },
      ],
    },
  ],
};

export const highlights = {
  education: {
    label: 'EDUCATION',
    title: 'Massachusetts Institute of Technology',
    text: 'Computer science and AI · Class of 2030 · [Exact course and degree wording]',
  },
  experience: {
    label: 'EXPERIENCE',
    items: [
      { title: 'CGI', text: 'Software intern, three summers · 2024 to 2026' },
      { title: 'CAPE Satellite Program, UL Lafayette', text: 'Backend developer · 2024 to 2026' },
      { title: 'LPSS', text: 'Software intern · 2024 to 2025' },
    ],
  },
  research: {
    label: 'RESEARCH',
    title: 'MIT UROP, Cybersecurity at MIT Sloan',
    text: 'Critical asset cyber risk in infrastructure networks · Fall 2026',
  },
  leadership: {
    label: 'LEADERSHIP',
    title: 'FRC Team 3616 Phenomena',
    text: "President, then project manager · 2025 FIRST Dean's List Award",
  },
  skills: {
    label: 'SKILLS',
    chips: [
      'Python',
      'C++',
      'Java',
      'SQL',
      'PowerShell',
      'Django',
      'Django Ninja',
      'PostgreSQL',
      'Power Apps',
      'Power Automate',
      'SharePoint',
      'Power BI',
      'Kali Linux',
      'Scapy',
    ].map((label) => ({ label })) satisfies Chip[],
  },
  contact: {
    label: 'CONTACT',
  },
};
