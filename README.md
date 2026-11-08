# rudrakaradkhelkar.github.io

Rudra Karadkhelkar's portfolio: a static Astro site, deployed to GitHub Pages at https://rudrakaradkhelkar.github.io.

Every page is a movie poster: one giant headline word, art under it, credits around the edges, one accent color on black. The design spec is `design-handoff/DESIGN.md`.

## Run it locally

Needs Node 22.23 or newer (the deploy uses Node 24).

```sh
npm install
npm run dev        # http://localhost:4321, reloads as you edit
npm run build      # production build into dist/
npm run preview    # serve dist/ locally
```

Checks:

```sh
npm run check      # TypeScript and Astro diagnostics
npm run shoot      # screenshots of every page at 8 sizes x 2 themes into review/ (open review/index.html)
npm run audit      # accessibility (axe), internal links, and banned patterns (em dashes, phone numbers, ...)
```

`npm run shoot` fails if any page scrolls sideways, a headline leaves the screen, hero text overlaps the art, or the console logs an error. Options: `--route=projects`, `--width=390`, `--theme=light`, `--viewport` (first screen only), `--motion` (animations on), `--no-build`.

## Edit the copy

All text, links, and image references live in `src/content/`, one file per page:

| File | Page |
| - | - |
| `site.ts` | Shared: name, email, LinkedIn / GitHub / Resume links, nav, footer line, accent, default theme |
| `home.ts` | Home |
| `research.ts` | Research |
| `experience.ts` | Experience |
| `projects.ts` | Projects (level select: CyberDefender, Jarvis, Drone Glove, the locked poker bot) |
| `awards.ts` | Awards: every award, each with a stable id that is its anchor on /awards |
| `clubs.ts` | Clubs |
| `high-school.ts` | High School |
| `life.ts` | Life (Zeta Beta Tau, the drawing, fantasy football, poker) |
| `resume.ts` | Resume |
| `not-found.ts` | The 404 page |
| `slots.ts` | Image slot shapes and placeholder labels |

Change a string, save, and the dev server updates. Headlines are fitted to the screen at build time, so a new headline word fits automatically.

Rules for copy (DESIGN.md sections 9 and 10): no phone number, no em dashes (use a slash, comma, or period), and anything not yet known stays as a visible `[bracketed placeholder]`. `npm run audit` catches em dashes and phone-number-like strings.

## Common changes

**Name the drawing.** In `src/content/life.ts`, replace `[Title]`, `[Medium]`, and `[Year]` in `drawing`. The scan is `src/assets/slots/drawing-01.jpg`; it shows whole in the Drawing section and cropped on the first hero polaroid.

**Add an award.** Add an entry to `awards` in `src/content/awards.ts` under its level, with a new `id` (lowercase words and a year, for example `'fbla-state-cybersecurity-2026'`). It appears in the full list on /awards. To link to it from another page, use `<AwardLink id="..." />`; an unknown id fails the build, so links can't break. Never change an id once it's published.

**Add a milestone.**
- Projects: add `{ title: '...', status: 'UP NEXT' }` to `cyberdefender.milestones.items` in `src/content/projects.ts`; mark one finished with `status: 'DONE', done: true`. Drone glove parts work the same way.
- High School timeline: add `{ date: '<DATE>', title: '...', text: '...' }` to `team.milestones` in `src/content/high-school.ts`, in date order.

**Add a club.** Add an entry to `clubs` in `clubs.ts`.

**Update project progress.** In `projects.ts`, each level's `detail.progress` (0 to 100) fills the bar; keep `progressLabel` (for example `'15% BUILT'`) in step. A running project (Jarvis) leaves out `progress` and shows its status instead.

**Unlock the poker bot.** In `projects.ts`, the `poker` level is `locked: true`. Give it a `detail` like the others, set `locked: false`, add its cover art in `src/components/art/ProjectsArt.astro`, and give it a section on `src/pages/projects.astro`.

**Swap the accent.** In `src/content/site.ts`, set `accent` to one of the tested values (`ACCENTS.orange`, `ACCENTS.lime`, `ACCENTS.cobalt`) or any hex. Everything accent-colored follows: halo, glow, rim light, bands, buttons. The text color on the accent and the small accent-colored labels are recalculated so they stay readable in both themes.

**Change the default theme.** In `site.ts`, set `defaultTheme` to `'light'` or `'dark'`. Visitors who used the theme toggle keep their own choice.

**Replace the resume PDF.** Only a version with no phone number: put it at `assets-incoming/docs/resume.pdf` and run `node scripts/process-images.mjs` (or copy it to `public/resume.pdf`). Update `pdf.zoomLabel` and the "Updated" caption in `src/content/resume.ts`.

## Add images to slots

Every photo on the site has a named slot. Until a photo exists, the slot shows a placeholder at the same shape, so dropping a photo in never moves anything else.

1. Put the original in `assets-incoming/` (see its README for names and photo rules).
2. Add a line for it to `JOBS` in `scripts/process-images.mjs` and run `node scripts/process-images.mjs`. It re-encodes the file with no metadata (no GPS) into `src/assets/slots/` under the slot name, and leaves the original untouched.
3. Rebuild. Astro makes the responsive sizes.

| Slot file | Where it shows | Shape |
| - | - | - |
| `hero-photo.webp` | Home hero (the cut-out, transparent background) | 2275 x 2181 |
| `headshot.jpg`, `headshot-dark.jpg` | Home nav avatar (wood background in the light theme, dark in the dark theme); the dark one is on the Experience ID badges | 1:1 |
| `drawing-01.jpg` | Life: the Drawing section and the first hero polaroid | natural |
| `research-shoreline-1.png` | Research, shoreline figure (empty) | 7:5 |
| `hs-robot.jpg`, `hs-team.jpg`, `hs-outreach.jpg` | High School, community service (empty) | 16:9, 4:5, 4:5 |
| `project-cyberdefender-1.jpg`, `project-jarvis-1.png`, `project-drone-glove-1.jpg`, ... | Reserved for project progress photos (no spot on the page yet) | 16:10 |

Club logos live in `src/assets/logos/` and are used by `src/components/art/ClubsArt.astro`.

Slot shapes and placeholder labels are in `src/content/slots.ts`; a new slot needs an entry there.

## Deploy

GitHub Actions builds and deploys on every push to `main` (`.github/workflows/deploy.yml`, using Astro's official action). It also rebuilds every January 1 so the copyright year rolls over, and can be run by hand from the Actions tab.

One-time setup: on GitHub, open the repository's **Settings > Pages** and set **Source** to **GitHub Actions**.

Then:

```sh
npm run check && npm run shoot && npm run audit   # optional, before pushing
git push
```

## How it's built

- Astro (static output), TypeScript strict, plain CSS. No UI framework.
- Fonts are self-hosted with Fontsource: Archivo (variable width) and Courier Prime.
- `src/components/PosterHero.astro` is the poster on every page: one scalable stage (`min(100vw, 1760px)`, sized in container units) laid out in grid rows. Each page's art is in `src/components/art/`.
- Motion: the intro is CSS (`src/styles/motion.css`); scroll effects use GSAP ScrollTrigger, with Lenis smooth scrolling for mouse and trackpad (`src/scripts/motion.ts`). `prefers-reduced-motion` turns all of it off.
- Design tokens are in `src/styles/tokens.css`; the global poster classes are in `src/styles/global.css`.
- `PROGRESS.md` is the build log: decisions, open questions, and placeholders still showing.
