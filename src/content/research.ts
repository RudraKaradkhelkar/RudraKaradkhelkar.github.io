// Research page copy. Source: design-handoff/reference/Research.html.
// Privacy (DESIGN.md section 9): never name the UROP's industry partner or its internal tool.
// "A CAMS partner organization" is the approved wording. UROP progress stays a placeholder
// until Rudra says it is cleared.
import type { Chip, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'Research',
  description:
    "Graph-based cyber risk research for infrastructure networks at MIT, and a machine learning study of Louisiana's coastline before that.",
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
    text: "Graph-based cyber risk research for infrastructure networks at MIT, and a machine learning study of Louisiana's coastline before that.",
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
  title: 'Agentic AI security and deepfakes',
  text: 'Apprenticing under a graduate student on agentic AI cybersecurity research related to deepfakes, working up to direct contributions.',
  status: 'IN PROGRESS',
};

export const shoreline = {
  label: 'BEFORE MIT · INDEPENDENT',
  title: 'Predicting Louisiana shoreline erosion from satellite imagery',
  text: "An independent machine learning project on Louisiana's coastline.",
  /** Placeholder until Rudra fills it in. */
  textPlaceholder: '[Data, method, and result in two lines.]',
  chips: [{ label: 'Python' }, { label: 'Satellite imagery' }, { label: 'Machine learning' }] satisfies Chip[],
  also: 'Also: a chess bot built to learn neural network fundamentals, with a NumPy board representation.',
  figure: {
    slot: 'research-shoreline-1',
    alt: 'Illustration of a coastline with contour lines and a highlighted erosion band',
    label: 'SHORELINE',
    tag: 'ILLUSTRATION · NOT DATA',
  },
};
