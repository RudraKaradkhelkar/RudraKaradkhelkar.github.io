# Progress log

Running log for the portfolio build. Read at the start of every session and after any context compaction, then continue from **Next**.

## Review round 3 (2026-11-08)

Rudra's review notes (round 2: `fd6c88e` to `d74c2e8`) and his answers and photos (round 3: `2a70a47`) are committed on `main`, **not pushed**. What's left before deploying is under Questions and Placeholders below.

1. **Look at each page:** `npm run build && npm run preview`, or `npm run shoot` and open `review/index.html` (every route, 8 sizes, both themes). Both scripts now run while a preview is open.
2. **Deploy** when happy: one-time **Settings > Pages > Source: GitHub Actions**, then `git push`.

Checks at the end of round 2: `npx astro check` 0 errors / 0 warnings / 0 hints; `npm run shoot` passes 10 routes x 8 sizes x 2 themes, and again with `--motion --viewport`; `npm run audit` passes (axe WCAG 2.1 AA on all 10 routes in both themes at desktop and phone, internal links, links to sections on other pages, every external link opens in a new tab, no banned patterns). Interactive checks (Playwright, scratch script): hero fades, popup menu (opens; closes on a click outside, the button, Esc; 390, 844 x 390, 1024; both themes), badge sway (mouse only, off with reduced motion), and the planned drone glove detail.

## Status

Review round 3 done (2026-11-08). Routes: `/`, `/research/`, `/experience/`, `/projects/`, `/awards/`, `/clubs/`, `/high-school/`, `/life/` (`/drawings/` redirects here), `/resume/`, and the styled 404.

## Done

| Commit | What |
| - | - |
| (docs) | README and PROGRESS for review round 3 |
| `2a70a47` | High School team photo, FUN Robotics Network video (click to play), and outreach photo with Rudra's captions; drawing named (Class of 2030 Design Contest, pencil, 2026); drone glove starts IAP 2027; Rudra's sharper CGI article photo |
| `3ce505d` | README and PROGRESS for review round 2 |
| `d74c2e8` | Audit checks links to sections on other pages; the dist server sends the 404 page as HTML |
| `896beaf` | Experience: skills inside each role (no skills bank), CGI newest first, CAPE and LPSS as separate sections, volunteering moved out, CGI article photo on the EcoChamps press card, mouse sway on the ID badges; shoot loads lazy images |
| `db051f1` | Research: agentic AI and deepfake block removed, MITES moved out. High School: MITES Semester section, CGI volunteering under Community Service, Act 211 quote in regular weight with the phrase in bold |
| `92e0f06` | Projects: Jarvis LVL 01, CyberDefender LVL 02, Drone Glove LVL 03 planned for IAP, poker bot LVL 04; named section anchors. Home: drone glove off the Fall 2026 rows |
| `14ae935` | Popup menu under 1100 px (Popover API, animated, burger to X); external links open in a new tab; footer marquee wording, no location; shoot and audit serve dist/ themselves |
| `fd6c88e` | Hero fades wait until each element reaches the nav (About, badges, and Projects covers stay usable while scrolling) |
| `fb30046` | Content pass: Resume (PDF wired, one page, Nov 2026, degree wording, sheet and cards from the real resume, phone card for the PDF) |
| `a15c689` | Content pass: Life replaces Drawings & Life (real drawing on polaroid 1, drawn poker and football polaroids, ZBT, drawing, games; /drawings redirect) |
| `061c2d0` | Content pass: Clubs (four clubs, four patches, Satellite Team and MAIA logos) |
| `b930844` | Content pass: High School (FRC lead section with Act 211 line, robot bumper hero art, projects, clubs and civic roles, awards teaser) |
| `52b0815` | Content pass: new Awards page (medal moved here, Dean's List headline, featured honors, full list, anchors) |
| `93cddce` | Content pass: Experience (five badges with the headshot, skills overview, CGI in three chapters, CAPE and LPSS skills, EcoChamps press card) |
| `ca58620` | Content pass: Research (CARMA named, MITES Semester 2025, shoreline expanded with award links, chess bot removed) |
| `4023a87` | Content pass: Projects (four covers: CyberDefender 15%, Jarvis running, Drone Glove 5%, locked poker bot) |
| `a80ddbd` | Content pass: nav (Awards, Life), awards.ts and AwardLink, hero photo, Home (approved About text, 8 chapters), footer line, process-images.mjs |
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
- **Events for Phase 2.** Nav dispatches `rk:replay` (Home wordmark), `rk:theme`, `rk:sound`. Footer body has `data-reveal` as a hook. (`rk:menu` was removed in review round 2: the menu is a popup now, so the page keeps scrolling under it.)
- **Nav background after 260 px** is a passive scroll listener (works with Lenis, which scrolls the window). Phase 2 can move it to ScrollTrigger if that's simpler alongside the avatar fade.
- **Mobile menu is a native `<dialog>`** (focus trap, Esc, focus return for free). It includes Resume as the seventh link and uses two columns on short landscape screens. (Superseded in review round 2: a small popup, see below.)
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
- **Scroll ranges** follow the design's scroll-driven CSS: headline 0 to 900 px (up 160 px, scale .96, opacity .1), art 0 to 860 px (down 90 px, scale .82, fade out), captions and bottom row 0 to 500 px (up 30 px, fade), Home avatar 560 to 860 px. Side labels only fade (they already carry a translate and rotation). (Superseded in review round 2: each piece fades as it passes under the nav, see below.)
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

- **Content pass: hero photo (Home).** `hero-cutout.png` is used as is (checked clean on both themes), re-encoded to WebP at 1800 px with no metadata. The figure box is the photo's own shape (2275 x 2181), 46cqi wide at desktop (about 662 px at 1440, roughly 10% under the first preview) so the arms clear the round badges; the head overlaps the D; brightness 0.9 in the dark theme; a soft accent rim light is a CSS `drop-shadow` on the cut-out's alpha. Home's About block is a touch narrower so it clears the left sleeve.
- **Content pass: approved About text.** Used exactly. Its first sentence is the big statement under the hero (end in the accent), the other two run as a lead paragraph below it; the hero's short About line stays.
- **Content pass: awards.** One data file, `src/content/awards.ts`; each award's `id` is its anchor, rendered on exactly one element of /awards (headline section, featured card, or full-list row). `<AwardLink>` throws at build time on an unknown id. The Home Dean's List badge, Research, High School, and Life link through it. The podcast links to the exact episode (EP8 S2 on Apple Podcasts, Dec 13, 2025; the award entry keeps PROFILE's Oct 2025).
- **Content pass: Projects.** Jarvis is LVL 02 (2026, running, no progress bar, only the two cleared facts). The poker bot is a grayed-out locked LVL 04 (cover and card), per Rudra. CyberDefender milestones are the default list Rudra approved. (Order changed in review round 2: Jarvis is LVL 01.)
- **Content pass: Experience skills.** Every skill from the PROFILE lists, grouped as CHANGES.md says, each tagged with the roles that used it. (Removed in review round 2: Rudra wants the skills inside each role, not in a bank at the top.)
- **Content pass: Clubs.** The Satellite Team's white mark is drawn through an SVG luminance mask filled with `--ink`, so it is white on dark and near-black on light. AI@MIT and the Global Security Technology Club show name and "MEMBER" only (no description in PROFILE).
- **Content pass: Life.** Polaroid 1 crops the drawing from the top (UFO, beam, MIT letters); the Drawing section shows it whole at up to 500 px. Drawing title, medium, and year stay placeholders.
- **Content pass: Resume.** The PDF is embedded on desktop; phones and browsers without inline PDF get a paper card with an Open the PDF button.
- **Content pass: footer line** (Rudra, Nov 8): "Open to Summer 2027 roles in software engineering and cybersecurity/AI". (Reworded in review round 2, see below.)
- **Content pass: images.** `scripts/process-images.mjs` re-encodes every incoming file with sharp (no EXIF/GPS/XMP) into `src/assets/slots/` and `src/assets/logos/`, and copies the resume to `public/resume.pdf`. Originals in `assets-incoming/` are untouched and still gitignored.

- **Review round 2: hero fades** (Rudra: everything faded as soon as he scrolled, so he couldn't use it). Each hero piece (art, captions, About, badges, side labels, the Projects detail strip) stays at full opacity while on screen and fades only while it passes under the nav, over at least 220 px of scroll. Positions come from the layout box (`offsetTop`, which ignores transforms), so the tweens never measure their own movement. The headline keeps a slow fade (0 to 1100 px) since it's decoration. At 1440 x 900 the Home About and badges are still at full opacity after 600 px of scroll; the Projects covers at 400 px.
- **Review round 2: popup menu.** Under 1100 px the menu button opens a 320 px panel under it (520 px and two columns on short landscape screens), built on the Popover API: a click outside, Esc, or the button closes it, and focus returns to the button. It grows out of the button (fade, scale .94 to 1, 0.4 s) with the links dropping in one after another, and the two burger bars turn into an X. `aria-expanded` follows the state. Browsers without the Popover API get the same panel toggled by script. Reduced motion: it just appears.
- **Review round 2: new tabs.** Every link off the site (LinkedIn, GitHub, the podcast, the Congressional App Challenge announcement, the CGI article) and the two Open the PDF links open in a new tab (`target="_blank" rel="noopener"`), each with a hidden "(opens in a new tab)" from `site.navLabels.newTab`. Download links stay as downloads. The email link stays a `mailto:`.
- **Review round 2: footer marquee** (Rudra): "Open to Summer 2027 Roles in Software Engineering, Cybersecurity, or AI" and the email, nothing else (no location; he's open to working anywhere, and the site doesn't say so). The "LAFAYETTE, LA → CAMBRIDGE, MA" line under the footer is unchanged; it's where he's from and where he studies, not where he'll work.
- **Review round 2: Projects.** Order: Jarvis (LVL 01), CyberDefender (LVL 02), Drone Glove (LVL 03), poker bot (LVL 04); Jarvis is selected on load. The glove is "a planned project, starting in IAP": status PLANNED, no progress bar (a hollow dot and STARTS IAP), every part PLANNED, cover year "IAP". The year isn't on the site (see Questions). Section anchors became names (`#jarvis`, `#cyberdefender`, `#drone-glove`, `#poker-bot`); Life's poker link was updated.
- **Review round 2: Research.** The agentic AI and deepfake voice block is gone (Rudra is no longer on it), and MITES moved to High School, so Research is the UROP, then the shoreline study. Meta description and About updated to match.
- **Review round 2: High School.** MITES Semester sits right after FRC (MITES was Jun to Dec 2025, senior year), with the same stats, tracks, and award links it had on Research. Community Service now opens with the CGI teaching and mentoring card from Experience; the "Other service" line no longer repeats CGI. The Act 211 quote is regular weight in muted ink, with only "passage of Louisiana Act 211" in bold (the bold phrase is `advocacy.emphasis` in the content file, and the build fails if it isn't in the quote).
- **Review round 2: Experience.** No skills bank; each CGI chapter, CAPE, and LPSS lists its own skills. CGI chapters run 2026, 2025, 2024, labelled by dates (no "CHAPTER 01" numbers, which would also be a numbered eyebrow). The through-line stays 2024 to 2026, since it tells one system's story in order. CAPE and LPSS each get a section of their own, CAPE first (it ran to March 2026). The volunteering card moved to High School.
- **Review round 2: CGI article photo.** Cropped from Rudra's screenshot of CGI's article header: the photo runs from x 769 to 1387, and CGI's red corner shape covers its lower left (x up to 913, y from 231), so the crop is x 914 to 1387 at full height, 474 x 375, re-encoded with no metadata (`src/assets/slots/cgi-article.jpg`, slot `cgi-article`). On the press card it fills a 16:10 frame above the headline, anchored low so both faces and the tablet stay in. It's decorative inside the link (`alt=""`); the link text names the article. The source image is in the session's temp folder, not `assets-incoming/`, so `process-images.mjs` doesn't regenerate it.
- **Review round 2: badge sway.** With a mouse or trackpad, moving the pointer across a hanging badge kicks it into a swing on a damped spring (about 1 s period, settles in about 4 s), on top of the gentle CSS sway. The kick depends on how far and how fast the pointer crosses the badge, up to 26 degrees. Off for touch and with reduced motion.
- **Review round 2: check scripts.** Astro 7 allows one `astro preview` per project, so `shoot` and `audit` failed while Rudra had a preview open. They now serve `dist/` with a small Node server (`scripts/serve-dist.mjs`) that resolves paths the way GitHub Pages does. `shoot` loads lazy images before full-page shots (they were blank below the first screen). `audit` also checks links to sections on other pages.

- **Review round 3: the YouTube video is an exception to "no embeds" (CLAUDE.md).** Rudra asked for the FUN Robotics Network video to be embedded. To keep the rule's intent (no third-party requests or trackers on page load), it's click to play: the page shows a local poster (YouTube's thumbnail, downloaded once and cropped to the vertical video inside it) with a play button, inside a plain link to the video on YouTube. Only when a visitor presses it does a script swap in the player from youtube-nocookie.com (YouTube's privacy-enhanced embed). Checked in Playwright: zero off-site requests before the click, the player loads and plays after it. Without JavaScript the link opens YouTube in a new tab; Ctrl/Cmd-click does too. CLAUDE.md still lists embeds as banned and is read-only for me, so Rudra may want to note this exception there.
- **Review round 3: High School media.** The video is vertical (9:16; YouTube's 16:9 thumbnail is the video with blurred sides), so it can't fill the old 16:9 slot without black bars. Desktop: the team photo, the video, and the outreach photo side by side, the video taller in the middle. Tablet: the video on the left, the two photos stacked beside it. Phones: one column, the video at most 360 px wide. Captions are Rudra's, lightly edited for flow: "The team after an amazing 2026 Magnolia Regional.", "With my best teammate, Xavion, explaining how our robot works on the FUN Robotics Network." (the channel's own name on YouTube), "Comeaux High School outreach event." Xavion's first name is on the site because Rudra asked for it in the caption. The photos are 4:3 (1600 x 1200, no metadata); the `hs-robot` slot is gone.
- **Review round 3: drawing.** Title "Class of 2030 Design Contest", medium Pencil, year 2026 (Rudra). The hero polaroid says "Class of 2030" so the overlapping poker polaroid never cuts it off on phones; the full title is under the drawing.
- **Review round 3: IAP 2027** for the drone glove (Rudra): cover year, detail strip ("STARTS IAP 2027"), section intro, Home card, and meta description.
- **Review round 3: CGI photo.** Rudra's 620 x 380 copy replaces the 474 px crop from the screenshot.
- **Review round 3: UROP status** (Rudra): "Work in progress." Nothing more until the work is public; then a link and a dashboard photo.
- **Reduced motion, verified** (Rudra asked): with `prefers-reduced-motion: reduce`, on all 10 routes at 1440 (mouse) and 390 (touch), after scrolling through each page there are no running CSS animations or transitions, no scroll-driven styles on any element, no Lenis, no badge sway, and the menu popup opens with no transition. The same run with motion allowed shows the marquees, sway, cover spins, and scroll effects, so the check does see motion. How: `global.css` turns off every animation and transition, `motion.css` only animates under `no-preference`, `motion.ts` builds the scroll effects and Lenis inside a `no-preference` media query, and the badge sway and the Projects selection check the setting in script. The video only plays when pressed.

## Questions for Rudra

Each has a working default on the site:

1. **Resume PDF:** `public/resume.pdf` still has "Apprenticing under a graduate researcher on agentic AI cybersecurity research targeting deepfake voice threats." Send a new export without that line and it gets swapped in (`assets-incoming/docs/resume.pdf`, then `node scripts/process-images.mjs`).
2. **Poker bot details**, after the tournament, to unlock LVL 04.
3. **AI@MIT and the Global Security Technology Club:** a one-line description for each, if you want one.

Later: once the UROP work is public, Rudra will send its link and a photo of the dashboard (CARMA) for Research.

## Placeholders

Still showing (from DESIGN.md section 8 and the reference pages). All live in `src/content/`.

| Page | Placeholder |
| - | - |
| Research | Shoreline figure (slot `research-shoreline-1`, an illustration shows until then) |
| Projects | Poker bot (locked LVL 04 until Rudra sends details); progress photos (slots `project-*`, no spot on the page yet) |
| Resume | The PDF still mentions the agentic AI and deepfake project (the page's own copy doesn't) |

The High School photos and video and the Life drawing details are filled.

## Known issues

- This interactive session's Playwright MCP process targets Chrome until reconnected (`/mcp`, playwright, Reconnect). New sessions use the Edge config. The build's own scripts use Playwright's Chromium and are unaffected.
- Projects progress-photo slots (`project-cyberdefender-N`, `project-drone-glove-N`) exist in `slots.ts` but the design has no place for them on the page yet, so photos dropped there won't show until a spot is designed.
- The hero sheet on Resume and the polaroid captions use very small type on phones (they are art, labelled as images; the same facts are in the text below them).
## Next

Rudra reviews round 3. Before deploying: a resume PDF without the deepfake line (the other open items can stay as placeholders). Then re-run `npm run check && npm run shoot && npm run audit`, set **Settings > Pages > Source: GitHub Actions** once, and `git push`.
