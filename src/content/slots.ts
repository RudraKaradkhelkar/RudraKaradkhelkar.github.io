// Image slots from assets-incoming/README.md.
//
// A processed photo for a slot goes in src/assets/slots/ named after the slot, for example
// src/assets/slots/hs-robot.jpg or src/assets/slots/project-cyberdefender-1.jpg.
// Until that file exists, <ImageSlot> shows the design's .media placeholder at the same shape,
// so swapping a photo in never moves anything else.

export interface SlotSpec {
  /** Width / height. */
  ratio: number;
  /** Ratio as printed on the placeholder, for example "16:9". */
  ratioLabel: string;
  /** Placeholder label, shown until the photo exists. */
  label: string;
}

export const slots = {
  /** The cut-out hero photo (hero/hero-cutout.png): 2275 x 2181, transparent background. */
  'hero-photo': { ratio: 2275 / 2181, ratioLabel: 'CUT OUT', label: '[PHOTO: HERO, ARMS CROSSED]' },
  /** Light-theme headshot (wood background) and dark-theme headshot (dark background). */
  headshot: { ratio: 1, ratioLabel: '1:1', label: '[HEADSHOT]' },
  'headshot-dark': { ratio: 1, ratioLabel: '1:1', label: '[HEADSHOT]' },
  /**
   * High School media (Rudra, Nov 8). hs-video is the poster for the FUN Robotics Network video:
   * YouTube's thumbnail cropped to the vertical video inside it. The photos are 4:3 landscape.
   */
  'hs-video': { ratio: 9 / 16, ratioLabel: '9:16', label: '[VIDEO POSTER]' },
  'hs-team': { ratio: 4 / 3, ratioLabel: '4:3', label: '[PHOTO: TEAM]' },
  'hs-outreach': { ratio: 4 / 3, ratioLabel: '4:3', label: '[PHOTO: OUTREACH]' },
  'place-home': { ratio: 3 / 2, ratioLabel: '3:2', label: '[PHOTO: LAFAYETTE]' },
  'place-school': { ratio: 3 / 2, ratioLabel: '3:2', label: '[PHOTO: MIT]' },
  'place-draw': { ratio: 3 / 2, ratioLabel: '3:2', label: '[PHOTO: WHERE I DRAW]' },
  /** Drawings keep their natural shape; pages pass a ratio for crops (the hero polaroids are near square). */
  drawing: { ratio: 4 / 5, ratioLabel: 'NATURAL', label: '[DRAWING SCAN]' },
  'research-shoreline': { ratio: 7 / 5, ratioLabel: '7:5', label: '[FIGURE: SHORELINE]' },
  'project-cyberdefender': { ratio: 16 / 10, ratioLabel: '16:10', label: '[CYBERDEFENDER PROGRESS]' },
  'project-drone-glove': { ratio: 16 / 10, ratioLabel: '16:10', label: '[DRONE GLOVE PROGRESS]' },
  'project-jarvis': { ratio: 16 / 10, ratioLabel: '16:10', label: '[JARVIS]' },
  /** The photo from CGI's EcoChamps article (gamification.jpg from Rudra, 620 x 380). Experience press card. */
  'cgi-article': { ratio: 620 / 380, ratioLabel: 'PHOTO', label: '[PHOTO: CGI ARTICLE]' },
} satisfies Record<string, SlotSpec>;

export type SlotBase = keyof typeof slots;

/**
 * A slot name is a base name plus an optional number: "hs-robot", "drawing-01", "project-cyberdefender-2".
 * Returns the base slot it belongs to.
 */
export function slotBase(name: string): SlotBase {
  if (name in slots) return name as SlotBase;
  const base = name.replace(/-\d+$/, '');
  if (base in slots) return base as SlotBase;
  throw new Error(`Unknown image slot "${name}". Add it to src/content/slots.ts.`);
}
