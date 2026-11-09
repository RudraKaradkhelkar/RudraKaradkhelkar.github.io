// Research page copy. Source: design-handoff/reference/Research.html, updated from
// assets-incoming/PROFILE.md and design-handoff/CHANGES.md section 6. Rudra, Nov 8: the agentic AI
// and deepfake voice project is off the page (he's no longer on it), and MITES moved to High School.
// Privacy (DESIGN.md section 9): never name the UROP's partner organization ("a CAMS partner
// organization" is the approved wording). The tool, CARMA, is named with Dr. Pal's approval.
// UROP progress stays a placeholder until Rudra says it is cleared.
import type { Chip, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Research',
  description:
    "Graph-based cyber risk research for infrastructure networks at MIT. Before that: a machine learning study of Louisiana's coastline, from satellite imagery.",
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
    text: "Graph-based cyber risk research for infrastructure networks at MIT. Before that: a machine learning study of Louisiana's coastline.",
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
