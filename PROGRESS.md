# Progress log

Running log for the portfolio build. Read at the start of every session and after any context compaction, then continue from **Next**.

## Status

Phase 0 complete. Phases 1 to 4 (overnight) not started.

- Astro site builds; every route exists as a temporary stub (subtitle, fitted headline, About text) inside the real Layout, Nav, and Footer.
- `npm run shoot` passes on all 9 routes x 8 sizes x 2 themes (no horizontal scroll, headline on screen, one h1, no console errors).
- `npx astro check`: 0 errors, 0 warnings, 0 hints.

## Done

| Commit | What |
| - | - |
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
- **Projects progress bars.** The design's 35% and 20% bar fills were mock-ups next to `[X]% BUILT`. Content stores `progress: null` until Rudra gives real numbers (see Questions).
- **Shoot script** forces reduced motion by default so every element shows its final state in full-page shots (`--motion` turns animation back on). 390, 768, and 844x390 are emulated as touch devices so `hover`/`pointer` media queries behave like real phones and tablets. It writes `review/index.html` as a contact sheet. Landscape is `<theme>-844.png`.
- **Copyright** stays the literal "© 2026" from the design, not the build year.
- **Meta descriptions** are built from each page's existing About copy, not new claims.

## Questions for Rudra

1. **Projects progress:** what percent built are Cyberdefender and the Drone Glove? Until then the bar shows no fill and the label says `[X]% BUILT`. Do you want the bar hidden instead?
2. **Footer:** confirm "Open to Summer 2027" (DESIGN.md asks to confirm before launch).
3. **Copyright year:** keep "© 2026" fixed, or update automatically each year?
4. **404 page copy** isn't in the design. Current draft: subtitle "PAGE NOT FOUND", headline "404", "There's no page at this address. Every page on the site is listed below." OK?
5. **Meta descriptions** (search snippets) were written from each page's About text. Edit in `src/content/<page>.ts` under `meta` if you want different wording.

## Placeholders

Still showing (from DESIGN.md section 8 and the reference pages). All live in `src/content/`.

| Page | Placeholder |
| - | - |
| Home | Hero cut-out photo (slot `hero-photo`, stand-in figure until then); nav avatar (slot `headshot`) |
| Research | UROP status "[One or two lines on progress, once cleared to share.]"; shoreline "[Data, method, and result in two lines.]"; shoreline figures (slot `research-shoreline-1`) |
| Experience | EcoChamps screen (slot `experience-ecochamps-1`, only if CGI is OK with it) |
| Projects | Four milestone `[STATUS]` values; two `[X]% BUILT`; LVL 03 "[What's next, in one line.]"; progress photos (slots `project-cyberdefender-N`, `project-drone-glove-N`) |
| Clubs | Third club `[ROLE · TERM]`, `[Next club]`, "[Add a club here once it's official.]" |
| High School | Three photos (slots `hs-robot`, `hs-team`, `hs-outreach`); podcast `[LINK TO EPISODE]`; "[Add other service work: organization, role, hours.]" |
| Drawings | Six scans (slots `drawing-01` to `drawing-06`) with `[Title]` and `[YEAR]`; `[06 PIECES]`; third place `[LOCATION]` and "[A favorite place to draw, and why.]"; place photos (slots `place-home`, `place-school`, `place-draw`); hobbies "[Add more]" |
| Resume | PDF (`public/resume.pdf`, only once confirmed phone-free; `pdf.href` in `resume.ts`); "Updated [Month 2026]"; "[Course number]"; "[Exact course and degree wording]" |

## Known issues

- This interactive session's Playwright MCP process still targets Chrome until it's reconnected (`/mcp`, playwright, Reconnect). New sessions pick up the Edge config automatically.
- On short landscape screens the menu's bottom corner brackets sit close to the email row. Cosmetic; revisit in the Phase 2 polish.
- Archivo uses `font-display: swap` (Fontsource default). It's preloaded, but check for headline shift in Phase 3 and add a metric-matched fallback if it shows.

## Next

**Phase 1, page 1: Home.** Then Projects, Research, Experience, High School, Clubs, Drawings, Resume, and the styled 404.

1. Build `PosterHero` (DESIGN.md sections 5 and 11): a container stage `min(100vw, 1760px)` with `container-type: inline-size`, laid out in grid rows (subtitle, headline, art, bottom row), headline fitted with `emWidth()` and `cqi`, art box with a fixed aspect ratio, corner brackets, top captions, vertical side labels (hidden under 1100), halo, vignette, floor, and the About + badges row. Background, halo, band, and vignette bleed to the screen edges above 1760. Use `svh` heights on phones.
2. Also build `Surface`, `Chip`, `RowLink` from the reference markup.
3. Home: copy the stand-in figure SVG from `reference/Main.html` (don't redraw), put it in an `ImageSlot`-aware wrapper so the `hero-photo` slot replaces it, red band with `Marquee` behind it, phone composition per DESIGN.md section 11 (figure's head overlapping RUDRA, hero within one screen).
4. Delete `StubHero.astro` once the last page is built.
