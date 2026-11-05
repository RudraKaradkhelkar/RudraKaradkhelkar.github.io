# Progress log

Running log for the portfolio build. Read at the start of every session and after any context compaction, then continue from **Next**.

## Morning review

Everything from the overnight run is committed on `main` and **not pushed**. Start here:

1. **Look at the pages.** `npm run build && npm run preview`, then open each page at desktop and phone width (or open `review/index.html` after `npm run shoot` for every size and theme side by side). Home and Projects carry the most design weight.
2. **Try the motion with motion turned on in your OS:** the intro on load, the hero drifting and fading as you scroll, the Home avatar appearing after the hero, the Projects level select (click, arrow keys, swipe on a phone, the sound toggle in the nav), and the R/K wordmark replaying the Home intro.
3. **Answer the four questions** under "Questions for Rudra" below (each already has a working default).
4. **Fill placeholders** as you're ready (table below). The README says where each one lives.
5. **Deploy** when happy: one-time **Settings > Pages > Source: GitHub Actions**, then `git push`. The workflow also rebuilds every January 1.

Checks at the end of the run: `npx astro check` 0 errors / 0 warnings / 0 hints; `npm run shoot` passes 9 routes x 8 sizes x 2 themes (reduced motion and `--motion`); `npm run audit` passes (axe WCAG 2.1 AA on every route, both themes, desktop and phone; every internal link resolves; no banned patterns).

## Status

All four overnight phases are done (2026-11-05).

- Phase 1: all nine routes built from the design (Home, Research, Experience, Projects, Clubs, High School, Drawings & Life, Resume, styled 404), responsive per DESIGN.md section 11.
- Phase 2: CSS intro, GSAP ScrollTrigger scroll effects, Lenis on mouse and trackpad, Projects selection charm, theme toggle with no flash, reduced motion shows final states.
- Phase 3: axe clean, links and banned patterns audited (`npm run audit`), no font layout shift (CLS 0.0001 with the font delayed 600 ms), one 50 KB gzipped script for the whole site.
- Phase 4: `.github/workflows/deploy.yml` and `README.md`. Not pushed.

## Done

| Commit | What |
| - | - |
| `28aa990` | Phase 1: `PosterHero` (one scalable stage in grid rows), `Surface`, `Chip`, `RowLink`, `SectionHead`, and the Home page (stand-in figure in front of RUDRA, band and marquee behind, About + badges, statement, stats, chapters, Fall 2026 rows) |
| (polish) | Home phone hero fits one screen; resume sheet and polaroid type at design size (container units measure the content box); dark cover shadow in light mode |
| (polish) | Resume viewer and page at the design's proportions; menu bottom brackets no longer touch the email row on phones or short landscape screens |
| `cb47ff5` | Phase 4: deploy workflow (Astro action, January 1 schedule) and README |
| `cde62e6` | Phase 3: `scripts/audit.mjs`, `--ink-faint` text token, wordmark and cover accessible names, metric-matched font fallback, fixed-width headline letters |
| `e9bfab2` | Phase 2: CSS intro (`src/styles/motion.css`), scroll effects and Lenis (`src/scripts/motion.ts`), Home replay, skip link focus with Lenis |
| `0ac6c60` | Phase 1: Research (graph in a size container with slice scaling; hub label tracks its node), hero overlap check in `shoot.mjs` |
| `421c6d1` | Phase 1: Experience (badge rail on a board, fanned hand on phones; case cards; EcoChamps fitted heading and phone-frame slot) |
| `1bf5bec` | Phase 1: High School (medal, timeline, Dean's List and podcast cards, subteams, photo slots sharing one height) |
| `5ade85a` | Phase 1: Clubs (patches, overlapping row on phones; club cards; open slot) |
| `a194d89` | Phase 1: Drawings & Life (polaroids that take the first three scans, staggered sketchbook, places, hobbies) |
| `ddbe491` | Phase 1: Resume (sheet rising out of the frame; whole sheet on phones; viewer; highlight cards) |
| `d9ecb79` | Phase 1: styled 404, stub removed, phone headlines fill the width, per-letter headline measurement |
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
- **Home under 1280:** the About block and badges no longer fit beside the figure (they would touch its arms), so they move under it and the figure grows to 56cqi. The hero runs taller than one screen at 1024x768, but nothing is cut off. On phones the figure is 82% of the width with its head over the D; on shorter phones it shrinks with the screen height (never under 62%), so the whole hero is 830 px at 390x844 and 774 px at 360x780. A 375x667 phone scrolls about 60 px.
- **Projects level select.** Covers are `<button aria-pressed>` in a labelled group; the locked one is disabled. Both detail strips render in one grid cell so swapping never changes height; the inactive one is `inert` and hidden. Arrow keys work while focus is on a cover or the strip controls. Phones: a scroll-snap row; when swiping settles, the centered unlocked cover is selected (the locked one can be scrolled to but not selected). First charm 1.3 s after load, as in the design. Sound toggle plays one tick when switched on, as in the design.
- **Accent ink.** Small accent-colored text (rim-light labels, row labels) uses `--accent-ink` / `--rim-ink`, computed in `src/lib/accent.ts` per theme so it reaches 4.5:1 on cards for any accent. In light mode the red rim labels (`#F77E77`, about 2:1) become a darker red. Big accent type (Home statement) keeps the true accent.
- **Meta descriptions** are built from each page's existing About copy, not new claims.
- **Art boards.** Each inner page's art is a box with a fixed aspect ratio whose children are positioned in "board units" (`--u: calc(100cqi / <board width>)`, the board being a crop of the 1440 design). Badges, covers, polaroids, and the resume sheet are inline-size containers themselves, so the type printed on them scales with them. Phones change only the board's custom properties (sizes, steps, offsets) to get the overlapping compositions from DESIGN.md section 11.
- **Hero overlap check.** Hero text (subtitle, captions, headline, side labels, About, badges) and each page's visible art box carry `data-box`; `shoot.mjs` fails if any two intersect. Home's figure is not marked (the one intended overlap). Bottom rows tucked beside the art with a negative gap (High School, Resume) only do so at 1280+; below that they drop under the art.
- **Headline measurement is per letter** for the hero (`emWidth(text, { perLetter: true })`): the per-letter spans can't kern, so the kerned width was up to 1% short (CLUBS overflowed by 3 px at 390). Footer and in-page fitted headings are plain text and keep kerning.
- **Phones:** every hero headline fills the width (the design proportion `headlineSize` only applies from 768 up).
- **Research graph on narrow screens** keeps its scale and crops the outer edges (`preserveAspectRatio="xMidYMid slice"` in a taller box) instead of shrinking the whole graph to about 120 px tall. The hub label moves under the hub on phones so it stays inside the frame. The halo follows the hub via `--halo-y-at`.
- **Experience fan:** resting angles are the design's first keyframe (-10, -3, 4, 11 deg), so reduced motion still shows a fanned hand rather than straight badges.
- **Projects detail strip** shares the prev/next arrows between levels (the design repeated them inside each strip).
- **EcoChamps heading** is fitted to its column; in the design file it ran past the right edge at 1440.
- **High School photos** sit in columns sized by each slot's ratio (16 : 7.2 : 7.2), so all three share one height and a real photo never changes the layout. The podcast row is plain text, not a link, until the episode URL exists.
- **Resume download buttons** are shown but are not links until `pdf.href` is set (no link to a missing file). Once set, the viewer embeds the same-origin PDF with `<object>` and a fallback link. The sheet in the hero is clipped at the bottom of the poster from 1280 up and shown whole below that.
- **Drawings sketchbook** fills three columns in order from the `drawings` list (ceil(n / 3) per column, so the design's order holds and new drawings append). Placeholders cycle the design's six heights; real scans keep their natural shape. The hero polaroids show the first three scans.
- **404 poster** reuses facts already on the site for its captions and side labels (name, MIT '30, Lafayette, Cambridge, Home's coordinates) and lists every page with Home's one-line descriptions.
- **Nav Resume pill** fills with the accent on the Resume page, as in the design.
- **Badges** can be `dashed` (Clubs' "+1 open slot"); long badge labels wrap like the design.

- **Intro is CSS, scroll is GSAP (Phase 2).** The intro keyframes start with the first paint, so the poster never flashes its final state and then hides it while JavaScript loads, and no-JS visitors still see everything. They animate the individual `translate` / `rotate` / `scale` properties (which compose with each element's own tilt) with `backwards` fill, so after the intro the scroll tweens own the element. Scroll tweens use `fromTo()` with explicit start values for the same reason.
- **Scroll ranges** follow the design's scroll-driven CSS: headline 0 to 900 px (up 160 px, scale .96, opacity .1), art 0 to 860 px (down 90 px, scale .82, fade out), captions and bottom row 0 to 500 px (up 30 px, fade), Home avatar 560 to 860 px. Side labels only fade (they already carry a translate and rotation).
- **Reveals** use `ScrollTrigger.batch` once per block, and only blocks still below the screen at load start hidden, so nothing on screen blinks out. Transforms are cleared afterwards so CSS hover lifts work.
- **Drift** (headings 4% to -4%, or the reverse) runs at 1100 px and up only; phones and tablets keep the fades and reveals.
- **Lenis** runs only on `(pointer: fine)` with reduced motion off (`anchors: true`, `autoRaf: false`, driven by the GSAP ticker with `lagSmoothing(0)` as the Lenis docs show). It stops while the menu dialog is open. Touch devices scroll natively.
- **Home nav avatar** starts hidden through an `html.motion` class set in the head (only when motion is allowed), so it doesn't blink on load.
- **Research hub label** got a solid background so the travelling packets never cross its text.

- **Faint text token (Phase 3).** The design's `--ink3` (`#6E6E74` dark, `#8A8A90` light) is about 3 to 3.9:1 for small text, under WCAG AA. Labels using `.faint` now use `--ink-faint` (`#848489` dark, `#5F5F63` light), at least 4.5:1 on the page and on cards. `--ink3` still draws strokes, outlines, and brackets. In light mode faint labels sit closer to the muted gray than in the design.
- **Accessible names (Phase 3).** The R/K wordmark reads "R/K, Home" (or "R/K, Replay intro" on Home), so the name contains the visible text. Projects covers take their name from their printed text (level, status, title, tag, year).
- **No font shift (Phase 3).** `'Archivo Fallback'` is Arial with `size-adjust` 98.21%, ascent 89.4%, descent 21.38%, measured from Archivo's own file. Hero letters get their exact Archivo width in em, so the headline doesn't move when the font arrives.
- **`npm run audit`** (`scripts/audit.mjs`, uses `@axe-core/playwright` as a dev dependency) is the Phase 3 gate: axe WCAG 2.1 A/AA on every route in both themes at 1440 and 390, every internal `href`/`src` in `dist/` resolves, no `href="#"`, and the banned-pattern scan of `src/` and `dist/`.
- **Deploy workflow (Phase 4).** `actions/checkout@v7`, `withastro/action@v6` (Node 24), `actions/deploy-pages@v5`, as in the current Astro docs. Triggers: push to `main`, `workflow_dispatch`, and `cron: '0 6 1 1 *'` for the copyright year. `concurrency: pages` without cancelling a deploy in progress.

## Questions for Rudra

The five Phase 0 questions were answered; see Decisions. New ones from the overnight run (each already has a working default):

1. **Hero captions on phones.** The design files hide the four top captions on phones. The build shows them as two small stacked pairs under the subtitle instead. Keep them, or hide them on phones?
2. **Research graph on phones** crops its outer edges to stay readable rather than shrinking the whole graph. OK?
3. **Resume buttons before the PDF exists** are visible but inactive. They could be hidden until the PDF is ready instead. Which do you prefer?
4. **404 captions** read "Rudra Karadkhelkar / MIT '30" and "Lafayette, LA / Cambridge, MA". Fine, or something else?

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

- This interactive session's Playwright MCP process targets Chrome until reconnected (`/mcp`, playwright, Reconnect). New sessions use the Edge config. The build's own scripts use Playwright's Chromium and are unaffected.
- Projects progress-photo slots (`project-cyberdefender-N`, `project-drone-glove-N`) exist in `slots.ts` but the design has no place for them on the page yet, so photos dropped there won't show until a spot is designed.
- The hero sheet on Resume and the polaroid captions use very small type on phones (they are art, labelled as images; the same facts are in the text below them).

## Next

Rudra's review (see **Morning review** at the top). After that:

1. Apply answers to the four questions.
2. Content pass with real photos and text (`design-handoff/PROMPT-CONTENT-PASS.md`): drop processed photos into `src/assets/slots/`, replace placeholders in `src/content/`, add `public/resume.pdf` and set `pdf.href`.
3. Re-run `npm run check && npm run shoot && npm run audit`, then push to deploy.
