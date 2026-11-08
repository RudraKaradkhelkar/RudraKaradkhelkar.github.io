# Overnight build prompt

You're building my personal portfolio site from a finished design. The look is final. Your job is a faithful, fully responsive, fast, accessible production build. My real photos and remaining text come later, so build everything around placeholders that can be swapped without touching layout.

This runs in two parts. Phase 0 happens now while I watch. Phases 1 to 4 run overnight with nobody available to answer questions, so from Phase 1 on you log questions in `PROGRESS.md` and keep going.

## Read first

1. `CLAUDE.md` (standing rules; they apply the whole run).
2. `design-handoff/DESIGN.md`, all of it. Section 11 (responsive rules) is required, not optional.
   Then `design-handoff/CHANGES.md`, which overrides DESIGN.md and the reference pages where they conflict (new Awards page, Life page instead of Drawings, restructured Experience and High School).
3. `design-handoff/screenshots/dark/`, `light/`, and `known-issues/`.
4. `design-handoff/reference/*.html`. Open them with the Playwright MCP to inspect exact spacing, type sizes, and SVG art. Copy the SVG art from these files; don't redraw it.
5. `design-handoff/design/*.dc.html` for `renderVals()` (accent-derived colors) and the Projects selection logic.
6. `assets-incoming/README.md` for the image slot names and shapes.

## Stack

- Astro, static output, TypeScript strict. Use the Astro Docs and Context7 MCP servers for current setup steps rather than memory.
- Plain CSS: port `reference/assets/poster3.css` into global tokens and classes, then make it fluid per DESIGN.md section 11. No Tailwind, no UI kits, no React.
- GSAP with ScrollTrigger for scroll effects, Lenis for smooth scroll on mouse and trackpad, wired together the way the GSAP docs recommend. Vanilla TypeScript in Astro `<script>` tags.
- Fonts self-hosted with Fontsource: `@fontsource-variable/archivo` (import `wdth.css`; the family name is `'Archivo Variable'`) and `@fontsource/courier-prime` (400 and 700). Preload the Archivo file.
- Images through `astro:assets` with explicit sizes.

## Structure

- Routes: `/`, `/research`, `/experience`, `/projects`, `/awards`, `/clubs`, `/high-school`, `/life`, `/resume`, plus a styled 404. CHANGES.md defines the Awards and Life pages.
- Components: `Layout`, `Nav` (with the under-1100 px menu), `PosterHero` (slots for subtitle, headline letters, top captions, side labels, art, About text, badges), `Footer`, `Marquee`, `Surface`, `Chip`, `RowLink`, `ImageSlot`.
- All copy and links in typed files under `src/content/`, one per page plus `site.ts` for shared items (name, email, links, footer line, accent, default theme). The GitHub link is https://github.com/RudraKaradkhelkar and the site URL is https://rudrakaradkhelkar.github.io. Lists I'll add to (milestones, drawings, clubs, places, hobbies) are arrays.
- `ImageSlot` takes a slot name from `assets-incoming/README.md`, holds that slot's aspect ratio, and shows a styled placeholder (the design's `.media` look with the slot label) until a real image exists in `src/assets/slots/`. Swapping in a photo must never move anything else.
- `scripts/shoot.mjs`: takes Playwright screenshots of every route at every width in DESIGN.md section 11, in both themes, into `review/<route>/<theme>-<width>.png`, and fails loudly if any page has horizontal scroll. Add `"shoot": "node scripts/shoot.mjs"` to `package.json`.
- A `.gitignore` already exists. Keep every entry in it (especially the `assets-incoming/` rules, which keep my raw photos and answers out of git) and add anything else Astro needs.

## Phase 0 (now, while I watch)

1. Confirm the `playwright`, `context7`, and `astro-docs` MCP servers and the frontend-design and GSAP skills are available. If any is missing, tell me before doing anything else.
2. Scaffold the Astro project in the repo root without overwriting `design-handoff/`, `assets-incoming/`, `.claude/`, or `CLAUDE.md`. Install dependencies.
3. Build tokens, fonts, grain overlay, `Layout`, `Nav`, `Footer`, the `src/content/` skeleton seeded with the real copy from the reference pages, `ImageSlot`, and `scripts/shoot.mjs`.
4. Run the build and the shoot script once and make sure both work.
5. Create `PROGRESS.md` with sections: Status, Done, Decisions, Questions for Rudra, Placeholders, Known issues, Next. Commit.
6. Tell me "Phase 0 done, ready for the overnight run" and stop.

## Phase 1 (overnight): pages

Order: Home, Projects, Research, Experience, Awards, High School, Clubs, Life, Resume. Build `src/content/awards.ts` and the `AwardLink` component before High School so every award mention links to its anchor on `/awards`. For each page:

1. Build the desktop composition to match the reference at 1440.
2. Make it responsive per DESIGN.md section 11, including that page's phone composition.
3. Run `npm run shoot` for that route. Look at every screenshot yourself and check it against the pass criteria below. Fix and re-shoot until it passes or you've made three attempts on the same problem.
4. Commit, then update `PROGRESS.md` (done, decisions, questions, placeholders on that page).

Pass criteria for every page and width: no horizontal scroll; headline on one line inside the padding; no text overlapping text or art (Home's photo in front of RUDRA is the one intended overlap); nothing important cut off at the bottom of the hero; the 1440 render reads as the same poster as the reference screenshot; light theme readable.

## Phase 2 (overnight): motion and theme

- Intro animations from DESIGN.md section 7, played once on load.
- ScrollTrigger effects: hero headline drifts up and fades, hero art sinks and fades, hero captions fade, the Home nav avatar fades in after the hero, the nav gets its blurred background after 260 px, blocks reveal on enter, big headings drift sideways on desktop only.
- Projects level select: click, arrow keys, and swipe on phones select a cover with the squash-and-grow pop, the accent ring and pulse, the detail strip swap, and a short Web Audio tick. Keep the nav sound toggle, off until the visitor clicks it.
- Theme toggle with dark and light tokens, saved in localStorage, no flash of the wrong theme on load. Dark is the default.
- `prefers-reduced-motion: reduce` turns all motion and Lenis off and shows final states.
- Re-shoot everything, commit, update `PROGRESS.md`.

## Phase 3 (overnight): quality pass

- `npx astro check` and the production build pass with no errors or warnings you can fix.
- Accessibility: run axe through Playwright (`@axe-core/playwright`) on every route in both themes and fix what it finds. One `h1` per page (the poster word with an `aria-label`), real buttons and links, visible focus rings, alt text on every image, decorative SVGs `aria-hidden`, WCAG AA contrast for body text.
- No console errors on any route. No broken internal links.
- Grep the source and built output for banned things: em dashes, sparkle glyphs, "Inter", `backdrop-filter` outside the nav, gradient text outside the hero headline, and anything that looks like a phone number. Fix anything found.
- Performance: no layout shift from fonts or images, the hero photo slot preloaded on Home, JavaScript only where needed.
- Commit, update `PROGRESS.md`.

## Phase 4 (overnight): ready to deploy, but don't

- Write `.github/workflows/deploy.yml` using Astro's official GitHub Pages action, with versions checked against the Astro Docs MCP. This is a GitHub Pages user site: the repo is `RudraKaradkhelkar.github.io`, so set `site: 'https://rudrakaradkhelkar.github.io'` in `astro.config.mjs` and leave `base` unset (the site is served from the root).
- Write `README.md` explaining how to: run it locally, edit copy in `src/content/`, add a drawing or a milestone, swap the accent, change the default theme, add images to slots, and deploy.
- Final `PROGRESS.md` update: a short "Morning review" section listing what to look at first, every open question, and every placeholder still showing. Commit. Do not push.

If you finish early, spend the remaining time on polish passes: re-shoot every page, compare the 1440 renders against the reference screenshots side by side, and fix the biggest visual differences first.
