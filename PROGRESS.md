# Progress log

Running log for the portfolio build. Read at the start of every session and after any context compaction, then continue from **Next**.

## Status

Phase 1 in progress (overnight run started 2026-11-05). Home and Projects built and passing `npm run shoot`.

- Astro site builds; every route exists as a temporary stub (subtitle, fitted headline, About text) inside the real Layout, Nav, and Footer.
- `npm run shoot` passes on all 9 routes x 8 sizes x 2 themes (no horizontal scroll, headline on screen, one h1, no console errors).
- `npx astro check`: 0 errors, 0 warnings, 0 hints.

## Done

| Commit | What |
| - | - |
| `28aa990` | Phase 1: `PosterHero` (one scalable stage in grid rows), `Surface`, `Chip`, `RowLink`, `SectionHead`, and the Home page (stand-in figure in front of RUDRA, band and marquee behind, About + badges, statement, stats, chapters, Fall 2026 rows) |
| `68430b8` | Phase 1: Projects page and level select (covers, detail strip, click / arrows / swipe, pop, ring, Web Audio tick), art primitives from `poster3.css`, per-theme accent ink |
| `6805962` | Phase 0 scaffold: Astro 7 + TS strict, Fontsource fonts (Archivo preloaded), tokens and global CSS ported from `poster3.css`, grain overlay, `Layout` (no-flash theme), `Nav` (under-1100 menu, theme toggle, Projects sound toggle, Home avatar and replay button), `Footer`, `Marquee`, `ImageSlot`, `src/content/` seeded with all reference copy, build-time headline fitting (`src/lib/fit.ts`), stub pages for every route, `scripts/shoot.mjs` |

### Phase 0 checks

- MCP servers: astro-docs and context7 respond. Playwright MCP needed Google Chrome, which can't be installed without admin rights, so it was re-registered (local scope, this machine only) to drive Edge: `cmd /c npx -y @playwright/mcp@latest --browser msedge`. `.mcp.json` has the same flag and stays uncommitted.
- Skills: frontend-design and the GSAP skills (core, scrolltrigger, timeline, plugins, utils, performance, frameworks) are available.
- `scripts/shoot.mjs` uses Playwright's own Chromium (`npx playwright install chromium`, already done), not the MCP browser.
- Nav at 1100 px (the tightest desktop width): about 69 px clear on each side of the links on Home (avatar) and Projects (sound toggle).
- Menu dialog: fits one screen at 390x844, 844x390 (two columns), and 1024x768. Opens focused on its first link, Esc closes it and returns focus to the Menu button.
- Theme toggle persists across pages; nav background turns on after 260 px.
- Banned-pattern scan of `src/`, `scripts/`, `dist/`: no em dashes, sparkles, emoji, Inter, or phone-number-like strings; `backdrop-filter` only in `Nav.astro`.

## Decisions

- **Astro 7.4, TypeScript 6.** `@astrojs/check` 0.9 only supports TS 5 or 6, so TypeScript is pinned to `^6`.
- **`compressHTML: true`.** Astro 7 defaults to JSX-style whitespace stripping, which deletes spaces between inline elements. This site is copy-heavy, so HTML whitespace rules are kept.
- **Rust compiler is strict.** Astro 7 no longer fixes invalid nesting (a `div` inside a `p` breaks the layout). Keep markup valid.
- **One max width for the hero stage and the content column: 1760 px.** DESIGN.md section 4 says content max 1440, but section 11 makes the hero stage `min(100vw, 1760px)` and calls the 1440-sized composition at 1920 a failure. Sharing 1760 keeps the hero's edges (About block, badges, captions) aligned with the sections below. Side padding is `clamp(20px, 5vw, 88px)`: exactly 72 at 1440, 20 on phones.
- **Section gap** `clamp(88px, 11.8vw, 208px)`: 170 at 1440, 88 on phones.
- **Headlines are fitted at build time.** `src/lib/fit.ts` measures the word in the real Archivo variable font at the `.huge` settings (width 62, weight 900, tracking -0.01em) and returns its width in em. CSS sets `font-size: calc(100cqi / var(--fit))` inside an `inline-size` container, so the word fills its line exactly at every width, with no client JS and no layout shift. fontkit can't make a variation instance from WOFF2, so the file is decompressed with wawoff2 first (build-time only). PosterHero should use the same helper, capped by height where the hero is short (landscape phones).
- **Accent.** `site.ts` holds one hex. Layout sets `--accent` and `--on-accent` (contrast rule ported from `tone()`) on `<html>`; halo, haloSoft, glow, glowShadow, and the rim light are derived in CSS with `color-mix()`, matching `renderVals()` values exactly. Projects' halo uses 0.42 alpha in the design (others 0.55); handle that per page.
- **The design's `.glass` class is called `.ghost` here.** It's a 1 px outline with no blur, not glassmorphism; the rename avoids confusion with the banned pattern.
- **Sound toggle** has a fixed label ("Selection sound") with `aria-pressed`. The design changed the label and also set `aria-pressed`, which makes screen readers announce contradictory states. It's off on every visit (not remembered). The toggle sets `html[data-sound]` and dispatches `rk:sound`.
- **Events for Phase 2.** Nav dispatches `rk:replay` (Home wordmark), `rk:theme`, `rk:sound`, `rk:menu` (open/close, so Lenis can stop while the menu is open). Footer body has `data-reveal` as a hook.
- **Nav background after 260 px** is a passive scroll listener (works with Lenis, which scrolls the window). Phase 2 can move it to ScrollTrigger if that's simpler alongside the avatar fade.
- **Mobile menu is a native `<dialog>`** (focus trap, Esc, focus return for free). It includes Resume as the seventh link and uses two columns on short landscape screens.
- **Internal links end in `/`** (`/research/`) to match GitHub Pages directory URLs and avoid a redirect hop.
- **Projects progress (Rudra, Phase 0):** Cyberdefender 20%, Drone Glove 5%. Bars fill to those values and the labels read "20% BUILT" and "5% BUILT" (`projects.ts`, `progress` and `progressLabel`).
- **Footer line (Rudra, Phase 0):** the marquee reads "Open to Summer 2027 Internships/Roles". The big "OPEN TO / SUMMER 2027" block is unchanged.
- **Copyright year (Rudra, Phase 0):** updates automatically. `site.ts` uses the build year, so Phase 4's `deploy.yml` must also run on a schedule every January 1 (`cron: '0 6 1 1 *'`) to rebuild even without a push.
- **404 (Rudra, Phase 0):** a full poster page in the same style as the others, not a plain error page. The draft copy stands (subtitle "PAGE NOT FOUND", headline "404", one sentence, then links to every page).
- **Meta descriptions (Rudra, Phase 0):** approved as written.
- **Shoot script** forces reduced motion by default so every element shows its final state in full-page shots (`--motion` turns animation back on). 390, 768, and 844x390 are emulated as touch devices so `hover`/`pointer` media queries behave like real phones and tablets. It writes `review/index.html` as a contact sheet. Landscape is `<theme>-844.png`.
- **Copyright** stays the literal "© 2026" from the design, not the build year. (Superseded by Rudra's Phase 0 answer above: it uses the build year.)
- **PosterHero layout (Phase 1).** The section bleeds; inside it a `min(100%, 1760px)` stage is the `ph` inline-size container. One CSS grid with named rows `sub / caps / head / art / foot / below`. All poster sizes are design px at 1440 converted to `cqi` (`px / 14.4`), with clamp floors and caps. Layers interleave inside the stage's stacking context in the design's order (headline 1, halo 2, art 3, vignette 4, labels 5). Background layers (top light, vignette, floor, Home band) bleed with `left/right: calc(50% - 50vw)`.
- **Headline fit.** Every design headline at 1440 already spans the 1296 px content width (measured: RUDRA 1300, RESEARCH 1283, EXPERIENCE 1270), so all headlines are fitted to the content width. Pages whose design word is narrower pass `headlineSize` (design px) and keep that proportion. A `62svh` cap keeps landscape phones sane.
- **Halo** is a zero-size grid item with a pseudo-element, so it never grows the art row and still blends (`screen`, `multiply` in light) with the headline behind it.
- **Top captions** sit on the subtitle line at 1280+; under 1280 they move to their own row under the subtitle (DESIGN.md section 11). On phones each pair stacks (left aligned and right aligned) under the subtitle, instead of being hidden.
- **Home under 1280:** the About block and badges no longer fit beside the figure (they would touch its arms), so they move under it and the figure grows to 56cqi. The hero runs taller than one screen at 1024x768, but nothing is cut off. On phones the figure is 82% of the width with its head over the D, and the hero fits in 844 px.
- **Projects level select.** Covers are `<button aria-pressed>` in a labelled group; the locked one is disabled. Both detail strips render in one grid cell so swapping never changes height; the inactive one is `inert` and hidden. Arrow keys work while focus is on a cover or the strip controls. Phones: a scroll-snap row; when swiping settles, the centered unlocked cover is selected (the locked one can be scrolled to but not selected). First charm 1.3 s after load, as in the design. Sound toggle plays one tick when switched on, as in the design.
- **Accent ink.** Small accent-colored text (rim-light labels, row labels) uses `--accent-ink` / `--rim-ink`, computed in `src/lib/accent.ts` per theme so it reaches 4.5:1 on cards for any accent. In light mode the red rim labels (`#F77E77`, about 2:1) become a darker red. Big accent type (Home statement) keeps the true accent.
- **Meta descriptions** are built from each page's existing About copy, not new claims.

## Questions for Rudra

None open. The five Phase 0 questions were answered; see Decisions.

## Placeholders

Still showing (from DESIGN.md section 8 and the reference pages). All live in `src/content/`.

| Page | Placeholder |
| - | - |
| Home | Hero cut-out photo (slot `hero-photo`, stand-in figure until then); nav avatar (slot `headshot`) |
| Research | UROP status "[One or two lines on progress, once cleared to share.]"; shoreline "[Data, method, and result in two lines.]"; shoreline figures (slot `research-shoreline-1`) |
| Experience | EcoChamps screen (slot `experience-ecochamps-1`, only if CGI is OK with it) |
| Projects | Four milestone `[STATUS]` values; LVL 03 "[What's next, in one line.]"; progress photos (slots `project-cyberdefender-N`, `project-drone-glove-N`) |
| Clubs | Third club `[ROLE · TERM]`, `[Next club]`, "[Add a club here once it's official.]" |
| High School | Three photos (slots `hs-robot`, `hs-team`, `hs-outreach`); podcast `[LINK TO EPISODE]`; "[Add other service work: organization, role, hours.]" |
| Drawings | Six scans (slots `drawing-01` to `drawing-06`) with `[Title]` and `[YEAR]`; `[06 PIECES]`; third place `[LOCATION]` and "[A favorite place to draw, and why.]"; place photos (slots `place-home`, `place-school`, `place-draw`); hobbies "[Add more]" |
| Resume | PDF (`public/resume.pdf`, only once confirmed phone-free; `pdf.href` in `resume.ts`); "Updated [Month 2026]"; "[Course number]"; "[Exact course and degree wording]" |

## Known issues

- This interactive session's Playwright MCP process still targets Chrome until it's reconnected (`/mcp`, playwright, Reconnect). New sessions pick up the Edge config automatically.
- On short landscape screens the menu's bottom corner brackets sit close to the email row. Cosmetic; revisit in the Phase 2 polish.
- Archivo uses `font-display: swap` (Fontsource default). It's preloaded, but check for headline shift in Phase 3 and add a metric-matched fallback if it shows.

## Next

**Phase 1, page 3: Research.** Then Experience, High School, Clubs, Drawings, Resume, and the styled 404.

1. Build `PosterHero` (DESIGN.md sections 5 and 11): a container stage `min(100vw, 1760px)` with `container-type: inline-size`, laid out in grid rows (subtitle, headline, art, bottom row), headline fitted with `emWidth()` and `cqi`, art box with a fixed aspect ratio, corner brackets, top captions, vertical side labels (hidden under 1100), halo, vignette, floor, and the About + badges row. Background, halo, band, and vignette bleed to the screen edges above 1760. Use `svh` heights on phones.
2. Also build `Surface`, `Chip`, `RowLink` from the reference markup.
3. Home: copy the stand-in figure SVG from `reference/Main.html` (don't redraw), put it in an `ImageSlot`-aware wrapper so the `hero-photo` slot replaces it, red band with `Marquee` behind it, phone composition per DESIGN.md section 11 (figure's head overlapping RUDRA, hero within one screen).
4. The 404 is a full poster page (Rudra's answer): `PosterHero` with subtitle "PAGE NOT FOUND", the fitted "404" headline, captions, side labels, corner brackets, halo, vignette, and a bottom row; below it, every page as `RowLink` rows (same look as Home's "Fall 2026" list), then the footer. Copy lives in `not-found.ts`. Build it after Resume.
5. Delete `StubHero.astro` once the last page is built.
6. Phase 4 reminder: `deploy.yml` needs a `schedule` trigger every January 1 so the copyright year rebuilds.
