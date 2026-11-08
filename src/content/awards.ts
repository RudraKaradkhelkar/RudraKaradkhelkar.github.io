// Awards page copy and the single list of every award on the site.
// Source: assets-incoming/PROFILE.md ("Awards") and design-handoff/CHANGES.md section 2.
//
// Every award has a stable `id`. It is the anchor on /awards (for example /awards/#deans-list-2025),
// and every other page links to an award through <AwardLink id="..."> so the anchors never drift.
// To add an award, add an entry to `awards` under its level; it shows up in the full list.
import type { Link, PageMeta, PosterHeroContent } from './types';

export type AwardLevel = 'international' | 'national' | 'state' | 'regional' | 'district' | 'school' | 'press';

export interface Award {
  /** Anchor on /awards. Never change it once published; other pages link to it. */
  id: string;
  title: string;
  /** Who gave it, or the event. */
  org: string;
  date: string;
  level: AwardLevel;
  /** One short line of detail. */
  note?: string;
  /** Outside link (press release, episode, article). */
  link?: Link;
}

export const meta: PageMeta = {
  title: 'Awards',
  description:
    "Rudra Karadkhelkar's awards: the 2025 FIRST Dean's List Award (1 of 10 worldwide), the Congressional App Challenge, two MITES Semester awards, National Merit Commended Scholar, and more.",
};

export const hero: PosterHeroContent = {
  subtitle: 'HONORS',
  headline: 'AWARDS',
  headlineLabel: 'Awards',
  captionsLeft: ["FIRST Dean's List", 'Congressional App Challenge'],
  captionsRight: ['MITES Semester', 'National Merit'],
  sideLabelLeft: "2025 FIRST DEAN'S LIST AWARD / 1 OF 10",
  sideLabelRight: '30.2241° N · 92.0198° W / LAFAYETTE, LA',
  about: {
    label: 'About',
    text: "Led by the 2025 FIRST Dean's List Award: 1 of 10 winners worldwide from more than 95,000 students.",
  },
  badges: [
    { value: '1/10', label: 'Worldwide', filled: true, href: '/awards/#deans-list-2025' },
    { value: '95K+', label: 'FRC students' },
    { value: "'25", label: "Dean's List" },
  ],
};

/** The gold medal in the hero (moved here from High School). */
export const heroArt = {
  alt: "Gold medal for the 2025 FIRST Dean's List Award, one of ten worldwide",
  medalValue: '1/10',
  medalRing: 'OF 95,000+ STUDENTS',
  ringText: "FIRST DEAN'S LIST AWARD / 2025 / ONE OF TEN WORLDWIDE / FIRST DEAN'S LIST /",
};

/** The episode with Rudra (EP8 S2; he is also on S3). */
export const podcastEpisode: Link = {
  label: 'Listen: EP8, Dean\'s List w/ Michelle Long and Rudra Karadkhelkar',
  href: 'https://podcasts.apple.com/us/podcast/ep8-s2-deans-list-w-michelle-long-and-rudra-karadkhelkar/id1836262141?i=1000741147238',
  external: true,
};

/** The headline section. */
export const deansList = {
  id: 'deans-list-2025',
  label: "FIRST · APRIL 2025 · FIRST CHAMPIONSHIP, HOUSTON",
  heading: "DEAN'S LIST",
  title: '2025 FIRST Robotics Competition Dean\'s List Award Winner',
  stat: { value: '1 OF 10', label: 'WINNERS WORLDWIDE' },
  facts: [
    { value: '95,000+', label: 'FRC STUDENTS IN THE RUNNING' },
    { value: '1st', label: 'WINNER FROM LAFAYETTE' },
    { value: 'Since 2017', label: 'FIRST FROM LOUISIANA' },
  ],
  text: 'Chosen as 1 of 10 winners from more than 95,000 FRC students at the FIRST Championship in Houston: the first winner from Lafayette, and the first from Louisiana since 2017.',
  steps: [
    { label: 'MAR 2025', title: "Dean's List Finalist", text: 'Named a finalist first.', anchor: 'deans-list-finalist-2025' },
    { label: 'APR 2025', title: 'Winner, FIRST Championship', text: '1 of 10 worldwide, in Houston.', anchor: 'deans-list-2025' },
    {
      label: 'GLOBAL SUMMIT',
      title: "Global Dean's List Summit",
      text: "FIRST flew him in: a tour of MIT, the Dean's List celebration dinner at Dean Kamen's house, and a tour of DEKA.",
    },
    {
      label: 'PODCAST',
      title: "FIRST's Outside the Bot",
      text: 'Guest on the episode about the award, the only Dean\'s List winner on it.',
      anchor: 'outside-the-bot-2025',
    },
  ],
};

export const featured = {
  label: 'MAJOR AWARDS',
  heading: 'HONORS',
  /** In this order (CHANGES.md section 2). The science fair set is one card with three awards. */
  ids: [
    'congressional-app-challenge-2024',
    'mites-science-writing-2025',
    'mites-neuroscience-2025',
    'national-merit-2025',
    'fbla-state-computer-applications-2025',
    'state-rally-computer-science-2023',
  ],
  scienceFair: {
    title: 'Science and Engineering Fair',
    text: 'Machine learning to predict Louisiana shoreline erosion from satellite imagery.',
    ids: ['region6-robotics-2025', 'region6-yale-2025', 'lssef-carbon-2025'],
    link: { label: 'The research', href: '/research/#shoreline' },
  },
};

export const allAwards = {
  label: 'EVERY AWARD',
  heading: 'THE FULL LIST',
};

export const levelLabels: Record<AwardLevel, string> = {
  international: 'INTERNATIONAL',
  national: 'NATIONAL',
  state: 'STATE',
  regional: 'REGIONAL',
  district: 'DISTRICT',
  school: 'SCHOOL',
  press: 'PRESS',
};

/** Every award, grouped by level, in PROFILE.md order. */
export const awards: Award[] = [
  // International
  {
    id: 'deans-list-2025',
    title: "2025 FIRST Robotics Competition Dean's List Award Winner",
    org: 'FIRST',
    date: 'Apr 2025',
    level: 'international',
    note: '1 of 10 winners worldwide, from 95,000+ FRC students.',
  },
  {
    id: 'outside-the-bot-2025',
    title: "Guest speaker on FIRST's official podcast, Outside the Bot",
    org: 'FIRST',
    date: 'Oct 2025',
    level: 'international',
    link: podcastEpisode,
  },
  {
    id: 'deans-list-finalist-2025',
    title: "FRC Dean's List Finalist",
    org: 'FIRST',
    date: 'Mar 2025',
    level: 'international',
  },
  // National
  {
    id: 'national-merit-2025',
    title: 'National Merit Commended Scholar',
    org: 'National Merit Scholarship Corporation',
    date: 'Oct 2025',
    level: 'national',
  },
  {
    id: 'mites-neuroscience-2025',
    title: 'MITES Semester Achievement Award in Neuroscience',
    org: 'MIT MITES Semester',
    date: 'Aug 2025',
    level: 'national',
    note: 'Top-performing team in the neuroscience project course.',
  },
  {
    id: 'mites-science-writing-2025',
    title: 'MITES Semester Best of Science Writing Award',
    org: 'MIT MITES Semester',
    date: 'Aug 2025',
    level: 'national',
    note: 'Given to 24 students in the national program.',
  },
  {
    id: 'ap-scholar-distinction-2025',
    title: 'AP Scholar with Distinction',
    org: 'College Board',
    date: 'Jul 2025',
    level: 'national',
  },
  {
    id: 'congressional-app-challenge-2024',
    title: "2024 Congressional App Challenge Winner, Louisiana's 3rd District",
    org: 'U.S. House of Representatives',
    date: 'Dec 2024',
    level: 'national',
    note: 'For TownSquare.',
    link: {
      label: 'Announcement',
      href: 'https://clayhiggins.house.gov/2024/12/04/higgins-announces-winners-of-the-2024-congressional-app-challenge/',
      external: true,
    },
  },
  {
    id: 'ap-scholar-2024',
    title: 'AP Scholar',
    org: 'College Board',
    date: 'Jul 2024',
    level: 'national',
  },
  // State
  {
    id: 'fbla-state-computer-applications-2025',
    title: '1st Place Overall, Computer Applications',
    org: 'Louisiana FBLA State Conference',
    date: 'Mar 2025',
    level: 'state',
  },
  {
    id: 'lssef-carbon-2025',
    title: '2nd Place, Carbon/Greenhouse Gas Reduction Award, Robotics and Intelligent Machines',
    org: 'Louisiana State Science and Engineering Fair',
    date: 'Mar 2025',
    level: 'state',
  },
  {
    id: 'state-rally-computer-science-2023',
    title: '1st Place Overall, Computer Science',
    org: 'Louisiana High School State Rally',
    date: 'Apr 2023',
    level: 'state',
  },
  // Regional
  {
    id: 'seaperch-regional-2025',
    title: '1st Place in Presentation and Technical Report',
    org: 'SeaPerch Lafayette Regional',
    date: 'Mar 2025',
    level: 'regional',
  },
  {
    id: 'fbla-regional-computer-applications-2025',
    title: '1st Place Overall, Computer Applications',
    org: 'Louisiana FBLA Regional Conference',
    date: 'Feb 2025',
    level: 'regional',
  },
  {
    id: 'fbla-regional-cybersecurity-2025',
    title: '2nd Place, Cybersecurity',
    org: 'Louisiana FBLA Regional Conference',
    date: 'Feb 2025',
    level: 'regional',
  },
  {
    id: 'region6-robotics-2025',
    title: '1st Place, Robotics and Intelligent Machines Division',
    org: 'Louisiana Region 6 Science and Engineering Fair',
    date: 'Feb 2025',
    level: 'regional',
  },
  {
    id: 'region6-overall-2025',
    title: '3rd Place Overall',
    org: 'Louisiana Region 6 Science and Engineering Fair',
    date: 'Feb 2025',
    level: 'regional',
  },
  {
    id: 'region6-yale-2025',
    title: 'Yale Science and Engineering Association Award',
    org: 'Louisiana Region 6 Science and Engineering Fair',
    date: 'Feb 2025',
    level: 'regional',
  },
  // District
  {
    id: 'district-sef-overall-2024',
    title: '1st Place Overall',
    org: 'Lafayette District Science and Engineering Fair',
    date: 'Dec 2024',
    level: 'district',
  },
  {
    id: 'district-sef-mathematics-2024',
    title: '1st Place Mathematics',
    org: 'Lafayette District Science and Engineering Fair',
    date: 'Dec 2024',
    level: 'district',
  },
  {
    id: 'black-history-month-poster-2024',
    title: '1st Place, LPSS Black History Month Poster Contest, High School Division',
    org: 'Lafayette Parish School System',
    date: 'Mar 2024',
    level: 'district',
  },
  {
    id: 'district-rally-computer-science-2023',
    title: '1st Place Overall, Computer Science',
    org: 'Louisiana High School District Rally',
    date: 'Feb 2023',
    level: 'district',
  },
  // School
  {
    id: 'cshs-gold-service-2025',
    title: 'Computer Science Honor Society Gold Service Award (100+ service hours)',
    org: 'Lafayette High School',
    date: 'Sep 2025',
    level: 'school',
  },
  {
    id: 'teacher-directory-2024',
    title: 'Recognized for building the official Teacher Directory app',
    org: 'Lafayette High School',
    date: 'Sep 2024',
    level: 'school',
  },
  // Press
  {
    id: 'cgi-ecochamps-article',
    title: 'Using gamification to help students become future environmental leaders',
    org: 'CGI, about EcoChamps',
    date: '',
    level: 'press',
    link: {
      label: 'Read the article',
      href: 'https://www.cgi.com/en/article/esg/using-gamification-to-help-students-become-future-environmental-leaders',
      external: true,
    },
  },
];

const byId = new Map(awards.map((a) => [a.id, a]));

/** The award with this id. Throws at build time if it doesn't exist, so a typo never ships. */
export function award(id: string): Award {
  const a = byId.get(id);
  if (!a) throw new Error(`Unknown award id "${id}". Add it to src/content/awards.ts.`);
  return a;
}

/** /awards/#<id> */
export const awardHref = (id: string) => `/awards/#${award(id).id}`;
