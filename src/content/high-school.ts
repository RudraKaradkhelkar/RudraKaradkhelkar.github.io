// High School page copy. Source: assets-incoming/PROFILE.md ("High School page") and
// design-handoff/CHANGES.md section 3. Lists (milestones, seasons, projects, roles) are arrays:
// add an entry to add an item. Awards link to /awards through their ids in awards.ts.
// Never publish the ham radio call sign.
import type { Chip, Link, PageMeta, PosterHeroContent } from './types';

export const meta: PageMeta = {
  title: 'High School',
  description:
    "Lafayette High School, 2022 to 2026: FRC Team 3616 president, project manager, and lead programmer, 2025 FIRST Dean's List Award winner, three apps including a Congressional App Challenge winner, and student leadership in Lafayette.",
};

export const hero: PosterHeroContent = {
  subtitle: 'BEFORE MIT',
  headline: 'HIGH SCHOOL',
  headlineLabel: 'High School',
  captionsLeft: ['Lafayette High School', 'FRC Team 3616'],
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

/** The FRC robot in the hero: a bumper with the team number. */
export const heroArt = {
  alt: 'Illustration of an FRC robot with team number 3616 on its red bumper',
  teamNumber: '3616',
};

// ---------- FRC Team 3616 ----------

export const frc = {
  id: 'frc',
  label: 'FRC TEAM 3616 PHENOMENA · MAY 2021 TO JUL 2026',
  heading: 'TEAM 3616',
  intro:
    'Five seasons on FIRST Robotics Competition Team 3616 "Phenomena": from new member to lead programmer, two terms as president, then project manager, the team\'s highest role.',
  roles: {
    label: 'ROLES',
    milestones: [
      { date: 'MAY 2021', title: 'Joined 3616', text: 'First season on the team.' },
      { date: 'AUG 2023', title: 'President', text: 'Elected for two terms, through Aug 2025.' },
      { date: '2024', title: 'Lead programmer', text: 'Intake, climber, and arm code in C++. Also head driver.' },
      { date: 'APR 2025', title: "Dean's List", text: "Named a 2025 FIRST Dean's List Award winner.", award: 'deans-list-2025' },
      { date: 'AUG 2025', title: 'Project manager', text: "The team's highest role." },
      { date: '2026', title: 'Autonomy', text: 'Autonomous period and vision tracking, in Java.' },
    ],
  },
  seasons: {
    label: 'TECHNICAL WORK BY SEASON',
    items: [
      { year: '2024', lang: 'C++', text: 'Intake, climber, and arm subsystems.' },
      { year: '2025', lang: 'C++', text: 'Elevator, command automation, PID tuning, and swerve drive updates.' },
      { year: '2026', lang: 'JAVA', text: 'The autonomous period, swerve drive, and vision tracking.' },
    ],
    note: 'Also electrical work, and source control in GitHub and Sourcetree.',
  },
  leadership: {
    label: 'LEADING THE TEAM',
    heading: '5 SUBTEAMS · 20+ PEOPLE',
    subteams: ['Mechanical', 'Programming', 'Electrical', 'CAD/CAM', 'Business & outreach'],
    text: "As president and then project manager, I directed all five subteams and co-led the team's core values initiative. Build season meant about 30 hours a week; the off-season, about 10.",
    roles: ['President, 2 terms', 'Project Manager', 'Co-head of the core values team', 'Head Driver'],
  },
  outreach: {
    label: 'OUTREACH AND ADVOCACY',
    heading: 'ACROSS LOUISIANA',
    text: 'Directed team-wide STEM outreach across Louisiana: FIRST LEGO League qualifiers, NASA AstroCamps, the LA STEM Summit, museum, school, and industry events, and regional math tournaments.',
    stat: { value: '350+', label: 'OUTREACH VOLUNTEER HOURS' },
    advocacy: {
      label: 'INDUSTRY DAY · LOUISIANA STATE CAPITOL',
      /** Rudra's LinkedIn wording, used as written. */
      quote:
        'Took the initiative at Industry Day at the Louisiana State Capitol and advocated before Louisiana state legislators to increase STEM education in the form of more technical classes; my words sparked conversations that, in collaboration with STEM educators, led to the passage of Louisiana Act 211, requiring computer science as a graduation requirement statewide.',
    },
  },
  mentoring: {
    label: 'MENTORING NEW TEAMS',
    teams: [
      { number: '9699', text: 'Helped establish and mentor this rookie team.' },
      { number: '10497', text: 'Supported its programming.' },
      { number: '10566', text: 'Supported its programming.' },
    ],
  },
  deansList: {
    label: "2025 FIRST DEAN'S LIST AWARD",
    heading: '1 OF 10',
    text: 'Selected as one of 10 winners from more than 95,000 FRC students worldwide.',
    award: 'deans-list-2025',
    link: { label: 'The full story on Awards', href: '/awards/#deans-list-2025' } satisfies Link,
    podcast: {
      label: 'PODCAST GUEST',
      title: "FIRST's Outside the Bot podcast",
      text: "A conversation with the Louisiana/Mississippi Regional Director and FIRST's global Director of Alumni Relations.",
      link: {
        label: 'Listen to the episode',
        href: 'https://podcasts.apple.com/us/podcast/ep8-s2-deans-list-w-michelle-long-and-rudra-karadkhelkar/id1836262141?i=1000741147238',
        external: true,
      } satisfies Link,
    },
  },
  skills: {
    label: 'SKILLS',
    chips: [
      'C++',
      'Java',
      'Object-oriented programming',
      'Robotics',
      'Autonomous vehicles',
      'Electrical',
      'Robotics repair',
      'Troubleshooting',
      'Autodesk Fusion 360',
      'GitHub',
      'Sourcetree',
      'Slack',
      'Team leadership',
      'Project management',
      'Public speaking',
      'Community outreach',
    ].map((label) => ({ label })) satisfies Chip[],
  },
};

// ---------- Projects from high school ----------

export const projects = {
  label: 'BUILT IN HIGH SCHOOL',
  heading: 'PROJECTS',
  items: [
    {
      label: 'POWER APPS · 2024',
      title: 'TownSquare',
      text: "Connects local businesses with each other and with residents. Built with a teammate in Power Apps; I was project manager and built the app. Winner of the 2024 Congressional App Challenge for Louisiana's 3rd district.",
      award: 'congressional-app-challenge-2024',
      awardText: '2024 Congressional App Challenge Winner',
      link: {
        label: 'Announcement',
        href: 'https://clayhiggins.house.gov/2024/12/04/higgins-announces-winners-of-the-2024-congressional-app-challenge/',
        external: true,
      } as Link | undefined,
    },
    {
      label: 'SOLE DEVELOPER · 80+ HOURS',
      title: 'Lafayette High School Teacher Directory',
      text: "Students, parents, and staff look up teachers' off periods, rooms, and emails, and can email a teacher from the app. Used schoolwide.",
      award: 'teacher-directory-2024',
      awardText: 'Recognized by Lafayette High School',
      link: undefined as Link | undefined,
    },
    {
      label: 'APR 2025 TO PRESENT',
      title: "FIRST Dean's List Alumni Organization site",
      text: "Leading development of a resource website for students applying for the Dean's List award.",
      award: undefined as string | undefined,
      awardText: undefined as string | undefined,
      link: undefined as Link | undefined,
    },
  ],
};

// ---------- Leadership and community ----------

export const community = {
  label: 'LEADERSHIP AND COMMUNITY',
  heading: 'CLUBS AND CIVIC ROLES',
  groups: [
    {
      title: 'CLUBS AND HONOR SOCIETIES',
      items: [
        {
          name: 'Computer Science Honor Society',
          role: 'Founder and President',
          text: 'Founded the third chapter in Louisiana and grew it to 22 members. Started a CS tutoring service (Python, HTML/CSS, machine learning) with about 16 students, and organized Computer Science Week with Code.org\'s Hour of Code.',
          award: 'cshs-gold-service-2025',
        },
        {
          name: 'Louisiana Mu Alpha Theta',
          role: 'State Webmaster',
          text: 'Leading the redesign of the state website teachers use to register for the State Convention.',
        },
        {
          name: 'FBLA',
          role: 'Executive Board Data Chair and Webmaster',
          text: 'Built the chapter website with service-hour tracking for 150+ members.',
          award: 'fbla-state-computer-applications-2025',
        },
        {
          name: 'Beta Club',
          role: 'Vice President, Junior Secretary, Webmaster',
          text: 'Built the service-hour tracking site for 120+ members.',
        },
        {
          name: 'SeaPerch Underwater Robotics',
          role: 'Founder and Project Manager',
          text: 'Founded and ran the team.',
          award: 'seaperch-regional-2025',
        },
      ],
    },
    {
      title: 'CIVIC ROLES',
      items: [
        {
          name: "Lafayette Mayor-President's Youth Advisory Council",
          role: '1 of 40 students · two terms',
          text: 'On the team that passed an ordinance creating youth civic engagement programs. Built a homelessness resource page for the Lafayette Consolidated Government website, and led a drive collecting 200+ hygiene kits, clothing, and food items.',
        },
        {
          name: "LPSS Superintendent's Student Advisory Panel",
          role: '1 of 20 students',
          text: 'Represented Lafayette High School, about 1,800 students.',
        },
        {
          name: 'Parish Proud Senior Leadership Board',
          role: '1 of 15 students',
          text: '',
        },
        {
          name: 'Brent Henley Youth Leadership Program',
          role: '1 of 30 students',
          text: '',
        },
        {
          name: 'Acadiana Amateur Radio Association',
          role: 'Licensed ham radio technician',
          text: 'The youngest member.',
        },
      ],
    },
  ],
};

// ---------- Service ----------

export const service = {
  label: 'COMMUNITY SERVICE',
  heading: '300+ HOURS',
  text: 'Mentoring and outreach through robotics.',
  other: 'Other service: CGI STEM lessons and mentoring, NHS, Beta Club, FBLA, and the Computer Science Honor Society.',
  photos: [
    { slot: 'hs-robot', alt: 'The team robot on the competition field' },
    { slot: 'hs-team', alt: 'FRC Team 3616 Phenomena' },
    { slot: 'hs-outreach', alt: 'A robotics outreach event' },
  ],
};

// ---------- Awards teaser ----------

export const awardsTeaser = {
  label: 'FROM THESE YEARS',
  heading: 'AWARDS',
  text: "The 2025 FIRST Dean's List Award leads a list that runs from district science fairs to the Congressional App Challenge.",
  ids: ['deans-list-2025', 'congressional-app-challenge-2024', 'fbla-state-computer-applications-2025', 'region6-robotics-2025'],
  link: { label: 'All awards', href: '/awards/' } satisfies Link,
};
