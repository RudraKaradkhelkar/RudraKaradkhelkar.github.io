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
| `projects.ts` | Projects (level select, Cyberdefender, Drone Glove, next level) |
| `clubs.ts` | Clubs |
| `high-school.ts` | High School |
| `drawings.ts` | Drawings & Life |
| `resume.ts` | Resume |
| `not-found.ts` | The 404 page |
| `slots.ts` | Image slot shapes and placeholder labels |

Change a string, save, and the dev server updates. Headlines are fitted to the screen at build time, so a new headline word fits automatically.

Rules for copy (DESIGN.md sections 9 and 10): no phone number, no em dashes (use a slash, comma, or period), and anything not yet known stays as a visible `[bracketed placeholder]`. `npm run audit` catches em dashes and phone-number-like strings.

## Common changes

**Add a drawing.** Add an entry to the `drawings` list in `src/content/drawings.ts`, for example `{ slot: 'drawing-07', medium: 'PENCIL', title: '<title>', year: '<year>' }`, and put the scan at `src/assets/slots/drawing-07.jpg`. The sketchbook fills its three columns in order; the first three drawings also appear on the hero polaroids. Update `sketchbook.count` (for example `'07 PIECES'`).

**Add a milestone.**
- Projects: add `{ title: '...', status: '...' }` to `cyberdefender.milestones.items` in `src/content/projects.ts`. Replace a `[STATUS]` placeholder with the real status the same way.
- High School timeline: add `{ date: '<DATE>', title: '...', text: '...' }` to `team.milestones` in `src/content/high-school.ts`, in date order.

**Add a club, place, or hobby.** Add an entry to `clubs` (`clubs.ts`), `places`, or `hobbies` (`drawings.ts`). The open club slot always stays last.

**Update project progress.** In `projects.ts`, each level's `detail.progress` (0 to 100) fills the bar; keep `progressLabel` (for example `'20% BUILT'`) in step.

**Swap the accent.** In `src/content/site.ts`, set `accent` to one of the tested values (`ACCENTS.orange`, `ACCENTS.lime`, `ACCENTS.cobalt`) or any hex. Everything accent-colored follows: halo, glow, rim light, bands, buttons. The text color on the accent and the small accent-colored labels are recalculated so they stay readable in both themes.

**Change the default theme.** In `site.ts`, set `defaultTheme` to `'light'` or `'dark'`. Visitors who used the theme toggle keep their own choice.

**Add the resume PDF.** Only once it has no phone number: save it as `public/resume.pdf`, then set `pdf.href` to `'/resume.pdf'` in `src/content/resume.ts`. The Download buttons become real links and the viewer on the Resume page shows the PDF. Until then the buttons show but do nothing.

**Add the podcast link.** Set `deansList.podcast.link` in `src/content/high-school.ts` to `{ label: '<link text>', href: 'https://...' }`. Until the `href` is filled in, the row is plain text, not a link.

## Add images to slots

Every photo on the site has a named slot. Until a photo exists, the slot shows a placeholder at the same shape, so dropping a photo in never moves anything else.

1. Process the photo (crop, strip location metadata) following `assets-incoming/README.md`.
2. Save it in `src/assets/slots/` named after the slot, as `.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif`.
3. Rebuild. Astro makes the responsive sizes.

| Slot file | Where it shows | Shape |
| - | - | - |
| `hero-photo.png` | Home hero, replacing the stand-in figure (cut-out, transparent background) | 640 x 760 |
| `headshot.jpg` | Home nav avatar | 1:1 |
| `research-shoreline-1.png` | Research, shoreline figure | 7:5 |
| `experience-ecochamps-1.png` | Experience, inside the phone frame (only if CGI is OK with it) | phone screen |
| `hs-robot.jpg`, `hs-team.jpg`, `hs-outreach.jpg` | High School, community service | 16:9, 4:5, 4:5 |
| `place-home.jpg`, `place-school.jpg`, `place-draw.jpg` | Drawings & Life, places | 3:2 |
| `drawing-01.jpg` and up | Sketchbook (natural shape) and the first three on the hero polaroids | natural |
| `project-cyberdefender-1.jpg`, `project-drone-glove-1.jpg`, ... | Reserved for project progress photos | 16:10 |

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
