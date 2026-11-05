// Shared content shapes. Every page file in src/content/ exports data in these shapes,
// and layout components only render what they are given.
//
// Copy rules (DESIGN.md sections 8 to 10): no em dashes, no phone numbers, no invented facts.
// Anything unknown stays as a visible [bracketed placeholder].

export interface Link {
  label: string;
  href: string;
  /** Points off-site. Links open in the same tab; this only marks them (rel="noopener"). */
  external?: boolean;
}

export interface PageMeta {
  /** Shown in the browser tab as "<title> / Rudra Karadkhelkar". The home page uses the name alone. */
  title: string;
  description: string;
}

/** Round badge in the hero's bottom-right row. */
export interface Badge {
  value: string;
  label: string;
  /** The middle badge is filled with the accent. */
  filled?: boolean;
  /** Dashed, muted outline for an open slot (Clubs "+1"). */
  dashed?: boolean;
}

/** Every page's poster hero (DESIGN.md section 5). */
export interface PosterHeroContent {
  /** Wide, letter-spaced subtitle centered above the headline. */
  subtitle: string;
  /** The giant poster word. Rendered one span per letter. */
  headline: string;
  /** Accessible name for the h1 (the poster word as a person would read it). */
  headlineLabel: string;
  /** Two short facts at the top left and top right. */
  captionsLeft: string[];
  captionsRight: string[];
  /** Vertical Courier Prime labels at the left and right edges. */
  sideLabelLeft?: string;
  sideLabelRight?: string;
  /** Bottom-left "About" caption plus one or two sentences. Projects has a detail strip instead. */
  about?: {
    label: string;
    text: string;
    link?: Link;
  };
  /** Bottom-right round badges. Empty when the page uses buttons instead (Resume). */
  badges: Badge[];
}

export interface Chip {
  label: string;
  /** Renders in the muted placeholder style (for example "[X]% BUILT"). */
  placeholder?: boolean;
}
