# Site changes after the design (November 8, 2026)

Rudra made these decisions after the design files were drawn. Where this file conflicts with DESIGN.md, the reference pages, or the screenshots, this file wins. Build new pages and sections in the same poster system (tokens, type, hero anatomy, motion, banned patterns, responsive rules). Facts and copy come from `assets-incoming/PROFILE.md` and `assets-incoming/ANSWERS.md`.

## 1. Pages and navigation

Routes, in nav order: `/research`, `/experience`, `/projects`, `/awards` (new), `/clubs`, `/high-school`, `/life` (replaces `/drawings`), plus the Resume pill and Home. Redirect `/drawings` to `/life` if it was already built. Update the Home "Chapters" grid to match (8 cards: Research, Experience, Projects, Awards, Clubs, High School, Life, Resume).

## 2. New Awards page (`/awards`)

- Hero: subtitle "HONORS", poster word "AWARDS". The art is the gold Dean's List medal and ribbon, moved here from the High School hero (reuse that SVG from `reference/HighSchool.html`).
- First section, the biggest one on the page: the 2025 FIRST Robotics Competition Dean's List Award. 1 of 10 winners worldwide from 95,000+ students, first winner from Louisiana since 2017, flown to the Global Dean's List Summit, guest on FIRST's Outside the Bot podcast (link the episode). Use PROFILE.md for details.
- Second: a featured grid of the other major awards, in this order: Congressional App Challenge Winner (LA-03), MITES Best of Science Writing, MITES Achievement Award in Neuroscience, National Merit Commended Scholar, 1st Place Overall Computer Applications (Louisiana FBLA State), 1st Place Overall Computer Science (Louisiana State Rally), the science fair set (Region 6 Robotics and Intelligent Machines 1st, Yale Science and Engineering Association Award, Louisiana State 2nd Carbon/Greenhouse Gas Reduction).
- Third: every award from PROFILE.md in a compact list grouped by level (international, national, state, regional, district, school), plus the CGI press article.
- Keep all awards in one data file, `src/content/awards.ts`. Every award has a stable id used as its anchor, for example `/awards#deans-list-2025`.
- Cross-linking rule: wherever any other page mentions an award, it links to that award's anchor on `/awards` (build one small `AwardLink` component and use it everywhere). The Home badge for Dean's List links there too.

## 3. High School page

- FRC Team 3616 is the lead and the largest section: roles timeline, technical work by season, leadership, outreach and advocacy, mentoring of FRC 9699, 10497, and 10566, and the Dean's List (linked to `/awards`).
- Advocacy line, in Rudra's LinkedIn wording (quoted in PROFILE.md), about Industry Day at the Louisiana State Capitol and Louisiana Act 211. Put it inside the FRC section.
- New hero art, because the medal moved to Awards: an FRC-themed SVG in the same lit, rim-lighted style, built around a robot bumper with the team number 3616. Keep the headline clear of the art.
- New "Projects" part: TownSquare (Congressional App Challenge winner), the Lafayette High School Teacher Directory app, and the FIRST Dean's List Alumni Organization resource site.
- Then leadership and community: Computer Science Honor Society, Louisiana Mu Alpha Theta, FBLA, Beta Club, SeaPerch, and the civic roles (Mayor-President's Youth Advisory Council, Superintendent's Student Advisory Panel, Parish Proud, Brent Henley Youth Leadership), plus amateur radio (no call sign).
- Service hours section stays. End with a short awards teaser that links to `/awards`.

## 4. Life page (`/life`, replaces Drawings & Life)

- Hero: subtitle "OUTSIDE CLASS", poster word "LIFE". Keep the three taped polaroids and the pencil: polaroid 1 is Rudra's real drawing (`assets-incoming/drawings/drawing-01.jpg`); polaroids 2 and 3 become SVG illustrations in the polaroid frame (a poker hand with a chip stack, and a football with a draft-board scrawl).
- Sections: Zeta Beta Tau (joined at MIT, fall 2026), Drawing (the featured drawing shown large with its caption), Fantasy football (ESPN, 12-team PPR league), Poker (No-Limit Hold'em). Use the facts in PROFILE.md only.
- Drop the old sketchbook grid and Places section. No drawing placeholders beyond the one real drawing.

## 5. Experience page: skills and the three CGI chapters

- Hero badges: five, in order: CAPE '24, CGI '24, CGI '25, CGI '26, LPSS '24. Titles from PROFILE.md. Badge photos use `hero/headshot-dark.jpg`.
- Right under the hero, add a skills overview: the skills from all roles grouped (languages, backend and data, Microsoft Power Platform and Microsoft 365, DevOps and collaboration tools, hardware and electronics, AI and agents, leadership and consulting), each skill showing which roles used it. This section is meant to carry real weight, not be a footnote.
- CGI becomes its own large section titled with the years, presented as three chapters (2024, 2025, 2026). Each chapter gets: role and team, what Rudra built, "skills learned" chips, recognition (article, extensions), and one short line in his own words from his LinkedIn posts (quotes in PROFILE.md). Show the through-line: in 2024 he added the reservation and overdue-notice system to CGI's Inventory Management System; in 2026 he led its redesign into the Education Management System. Also include his CGI volunteering (STEM camp lessons, Congressional App Challenge mentoring, cryptography and consulting lessons).
- CAPE and LPSS each get a full skills block too (lists in PROFILE.md), not just a sentence.
- The EcoChamps spotlight links to CGI's article; no screenshots.

## 6. Research page

- UROP: name the tool. "CARMA, a Critical Asset Risk Management Dashboard for enterprise networks." Never name the partner organization.
- Add the MITES Semester 2025 section (science writing on quantum computing and cybersecurity with the interviews; the Cogniview neuroscience team project).
- Shoreline project: expanded copy and skills from PROFILE.md. Awards link to `/awards`.
- Remove the chess bot.

## 7. Clubs page

- Four clubs: MIT Satellite Team, MAIA (AI Safety Fundamentals), AI@MIT, MIT Sloan Global Security Technology Club. The hero shows four patches.
- Logos: use `assets-incoming/logos/mit-satellite-team.png` (white mark on transparent) inside the Satellite Team patch and `logos/maia-mark.png` (purple mark on transparent) inside the MAIA patch. `logos/maia.png` is the full lockup with near-white text for dark backgrounds; in the light theme use the mark alone. AI@MIT and the Global Security Technology Club keep drawn patches with their names.

## 8. Home

- The About text uses Rudra's approved blurb from ANSWERS.md once it exists; until then keep the current text.
- The hero photo is `hero/hero-cutout.png` (see ANSWERS.md for placement notes).
