// High School page copy. Source: design-handoff/reference/HighSchool.html.
// `milestones` is a list: add one by adding an entry in date order.
import type { PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'High School',
  description:
    "On FRC Team 3616 from new member to president to project manager, writing the robot code along the way. 2025 FIRST Dean's List Award winner.",
};

export const hero: PosterHeroContent = {
  subtitle: 'BEFORE MIT',
  headline: 'HIGH SCHOOL',
  headlineLabel: 'High School',
  captionsLeft: ['FRC Team 3616', 'Phenomena'],
  captionsRight: ['Lafayette, LA', '2021 to 2026'],
  sideLabelLeft: '30.2241° N · 92.0198° W / LAFAYETTE, LA',
  sideLabelRight: 'FRC TEAM 3616 PHENOMENA / 5 SEASONS',
  about: {
    label: 'About',
    text: 'On FRC Team 3616 from new member to president to project manager, writing the robot code along the way.',
  },
  badges: [
    { value: '20+', label: 'Members led' },
    { value: '5', label: 'Subteams', filled: true },
    { value: '300+', label: 'Service hours' },
  ],
};

export const heroArt = {
  alt: "Gold medal for the 2025 FIRST Dean's List Award, one of ten worldwide",
  medalValue: '1/10',
  medalRing: 'OF 95,000+ STUDENTS',
  /** Runs around the medal's rim. */
  ringText: "FIRST DEAN'S LIST AWARD / 2025 / ONE OF TEN WORLDWIDE / FIRST DEAN'S LIST /",
};

export const team = {
  label: 'FRC TEAM 3616 PHENOMENA',
  heading: '2021 TO 2026',
  milestones: [
    { date: 'MAY 2021', title: 'Joined 3616', text: 'First season on the team.' },
    { date: 'AUG 2023', title: 'President', text: 'Elected for two terms.' },
    { date: '2024', title: 'Lead programmer', text: 'Intake, climber, and arm code in C++. Also head driver.' },
    {
      date: '2025',
      title: "Dean's List",
      text: "Elevator, swerve drive, and PID tuning in C++. Named a FIRST Dean's List winner.",
      highlight: true,
    },
    { date: 'AUG 2025', title: 'Project manager', text: "The team's highest leadership role." },
    { date: '2026', title: 'Autonomy', text: 'Autonomous period and vision tracking, in Java.' },
  ],
};

export const deansList = {
  label: "2025 FIRST DEAN'S LIST AWARD",
  heading: '1 OF 10',
  text: 'Selected as one of 10 winners from more than 95,000 FRC students worldwide.',
  podcast: {
    label: 'PODCAST GUEST',
    title: "FIRST's Outside the Bot podcast",
    text: "A conversation with the Louisiana/Mississippi Regional Director and FIRST's global Director of Alumni Relations.",
    /** Placeholder until Rudra sends the episode link. */
    link: { label: '[LINK TO EPISODE]', href: '' },
  },
};

export const leadership = {
  label: 'LEADING THE TEAM',
  heading: '5 SUBTEAMS · 20+ PEOPLE',
  subteams: ['Mechanical', 'Programming', 'Electrical', 'CAD/CAM', 'Business & outreach'],
  text: "As president and then project manager, I directed all five subteams and co-led the team's core values initiative. Build season meant about 30 hours a week; the off-season, about 10.",
};

export const service = {
  label: 'COMMUNITY SERVICE',
  heading: '300+ HOURS',
  text: 'Mentoring and outreach through robotics.',
  textPlaceholder: '[Add other service work: organization, role, hours.]',
  photos: [
    { slot: 'hs-robot', alt: 'The team robot on the competition field' },
    { slot: 'hs-team', alt: 'FRC Team 3616 Phenomena' },
    { slot: 'hs-outreach', alt: 'A robotics outreach event' },
  ],
};
