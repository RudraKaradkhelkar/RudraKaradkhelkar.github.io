// Research page copy. Source: design-handoff/reference/Research.html, updated from
// assets-incoming/PROFILE.md and design-handoff/CHANGES.md section 6.
// Privacy (DESIGN.md section 9): never name the UROP's partner organization ("a CAMS partner
// organization" is the approved wording). The tool, CARMA, is named with Dr. Pal's approval.
// UROP progress stays a placeholder until Rudra says it is cleared.
import type { Chip, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Research',
  description:
    "Graph-based cyber risk research for infrastructure networks at MIT. Before that: MITES Semester science writing and neuroscience, and a machine learning study of Louisiana's coastline.",
};

export const hero: PosterHeroContent = {
  subtitle: 'MIT SLOAN · CAMS',
  headline: 'RESEARCH',
  headlineLabel: 'Research',
  captionsLeft: ['Network centrality', 'Cyber risk'],
  captionsRight: ['Satellite imagery', 'Machine learning'],
  sideLabelLeft: 'ILLUSTRATION, NOT DATA',
  sideLabelRight: 'CYBERSECURITY AT MIT SLOAN / FALL 2026',
  about: {
    label: 'About',
    text: "Graph-based cyber risk research for infrastructure networks at MIT. Before that: MITES Semester, and a machine learning study of Louisiana's coastline.",
  },
  badges: [
    { value: '2D', label: 'New metric' },
    { value: "'26", label: 'MIT UROP', filled: true },
    { value: 'LA', label: 'Coast study' },
  ],
};

export const heroArt = {
  alt: 'Network graph where the most central node is highlighted and data moves toward it',
  hubCaption: 'Highest centrality',
  hubTag: 'HUB',
};

export const urop = {
  label: 'MIT UROP · FALL 2026',
  headingLine1: 'CRITICAL ASSET',
  headingLine2: 'CYBER RISK',
  title: 'Critical Asset Cyber Risk Management in Digital Infrastructure Networks',
  people: [
    { label: 'Dr. Ranjan Pal · Direct supervisor' },
    { label: 'Dr. Michael Siegel · Faculty supervisor' },
    { label: 'Cybersecurity at MIT Sloan (CAMS)' },
  ] satisfies Chip[],
  blocks: [
    {
      label: 'QUESTION',
      text: 'Which assets in a power grid or a transit network matter most for cyber risk? Standard centrality metrics score nodes or edges, one at a time.',
    },
    {
      label: 'APPROACH',
      text: "Derive new centrality metrics that weigh node and edge importance together, in two dimensions, which the literature doesn't have yet. Then test them on real network topologies from a CAMS partner organization.",
    },
    {
      label: 'THE TOOL',
      text: 'CARMA, a Critical Asset Risk Management Dashboard for enterprise networks.',
    },
    {
      label: 'STATUS',
      /** Placeholder until Rudra clears UROP progress for sharing. */
      text: '[One or two lines on progress, once cleared to share.]',
      placeholder: true,
    },
  ],
  figure: {
    label: 'ONE AXIS VS. TWO',
    tag: 'ILLUSTRATION',
    alt: 'Scatter of assets by node importance and edge importance; the assets high on both are highlighted',
    axisX: 'NODE IMPORTANCE →',
    axisY: 'EDGE IMPORTANCE →',
    highlight: 'HIGH ON BOTH',
  },
};

export const alsoAtUrop = {
  label: 'ALSO AT THE UROP',
  title: 'Agentic AI security and deepfake voice threats',
  text: 'Apprenticing under a graduate researcher on agentic AI cybersecurity research targeting deepfake voice threats.',
  status: 'IN PROGRESS',
};

export const mites = {
  id: 'mites',
  label: 'MITES SEMESTER 2025 · JUN TO DEC 2025',
  heading: 'MITES',
  title: 'MIT Introduction to Technology, Engineering, and Science',
  text: 'Selected as 1 of about 250 students nationwide from 5,100+ applicants.',
  stats: [
    { value: '~250', label: 'SCHOLARS NATIONWIDE' },
    { value: '5,100+', label: 'APPLICANTS' },
  ],
  tracks: [
    {
      label: 'SCIENCE WRITING',
      title: "Quantum computing's implications for cybersecurity",
      text: 'Researched and wrote an article on what quantum computing means for cybersecurity, interviewing Dr. Peter Shor, Dean Kamen, and NIST mathematicians Dr. Lily Chen and Dr. Dustin Moody.',
      award: 'mites-science-writing-2025',
      awardText: 'MITES Semester Best of Science Writing Award',
      chips: [{ label: 'Scientific writing' }, { label: 'Quantum computing' }, { label: 'Cybersecurity' }] satisfies Chip[],
    },
    {
      label: 'NEUROSCIENCE',
      title: 'Cogniview',
      text: "Project manager for a team of 4 building Cogniview, a neural-network-based tool to help doctors and medical students diagnose and track Alzheimer's progression, using data from the Alzheimer's Disease Neuroimaging Initiative (ADNI). Wrote a scientific paper on the findings.",
      award: 'mites-neuroscience-2025',
      awardText: 'MITES Semester Achievement Award in Neuroscience',
      chips: [{ label: 'Neuroscience' }, { label: 'Neural networks' }, { label: 'Project management' }] satisfies Chip[],
    },
  ],
};

export const shoreline = {
  id: 'shoreline',
  label: 'SCIENCE AND ENGINEERING FAIR · SEP 2024 TO MAY 2025',
  title: 'Predicting Louisiana shoreline erosion from satellite imagery',
  paragraphs: [
    'A machine learning model that predicts Louisiana shoreline erosion from Harmonized Landsat Sentinel satellite imagery (2013 to present), plus wind and water data.',
    'Linear regression and random forest regression, evaluated with mean squared error and mean absolute percent error, with automated coastline extraction.',
  ],
  chips: [
    { label: 'Python' },
    { label: 'Machine learning' },
    { label: 'Linear regression' },
    { label: 'Random forest regression' },
    { label: 'Predictive modeling' },
    { label: 'Error analysis' },
    { label: 'Environmental data analysis' },
    { label: 'Scholarly research' },
  ] satisfies Chip[],
  awardsLabel: 'AWARDS',
  /** Ids in src/content/awards.ts; each links to its entry on /awards. */
  awards: [
    'district-sef-overall-2024',
    'district-sef-mathematics-2024',
    'region6-robotics-2025',
    'region6-overall-2025',
    'region6-yale-2025',
    'lssef-carbon-2025',
  ],
  figure: {
    slot: 'research-shoreline-1',
    alt: 'Illustration of a coastline with contour lines and a highlighted erosion band',
    label: 'SHORELINE',
    tag: 'ILLUSTRATION · NOT DATA',
  },
};
