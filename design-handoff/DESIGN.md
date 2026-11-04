# Rudra Karadkhelkar portfolio: design spec

This is the source of truth for the build.

- `screenshots/dark/` and `screenshots/light/` show the target look at 1440 px wide.
- `reference/` has the same designs as plain HTML you can open in Chrome. Scroll effects work there; buttons don't, since they're static. Copy SVG art and exact values from these files rather than redrawing.
- `screenshots/known-issues/` shows the design files at 390, 1024, and 1920 px. They were drawn on fixed 1440 px boards with absolutely positioned art, so they break at other widths. Section 11 says how the real build must behave instead.

Treat the screenshots as the reference for look, composition, and proportion, not as pixel coordinates to copy.

## 1. Concept

Every page is a movie poster. One giant headline word per page, art underneath it, credits-style captions around the edges, and a single accent color on black. The look comes from an Instagram reel of a cinematic Deadpool fan site (thenickcornelius). Think one-sheet poster, not SaaS landing page.

Rules that define the look:

- Black background, warm off-white ink, one accent. Nothing else gets color.
- The hero headline is the only text with a metallic gradient. Every other heading is solid ink.
- On inner pages the hero art sits below the headline and never covers it. Home is the one exception: the stand-in figure (later, Rudra's cut-out photo) stands in front of RUDRA on purpose, like a poster.
- Real content only. Anything unknown stays as a visible `[bracketed placeholder]`.

## 2. Color tokens

Accent default `#F2382E` (red). Alternates already tested: `#FF6A1A` orange, `#C6FF3D` lime, `#3D5AFE` cobalt.

Derived from the accent (see `renderVals()` in any `design/*.dc.html`):

| Token | Value |
| - | - |
| onAccent | `#FFFFFF` or `#0B0B0C`, whichever has more contrast on the accent |
| halo | accent at 55% alpha (radial glow behind hero art) |
| haloSoft | accent at 16% alpha |
| glowShadow | `0 14px 36px -10px` accent at 75% alpha (accent buttons only) |
| rimLight | accent mixed 35% toward white (rim light, packets, small highlights) |

Dark mode (default):

| Token | Dark | Light |
| - | - | - |
| --bg | #09090A | #F1F0EB |
| --ink | #F4F2EE | #0B0B0C |
| --ink2 | #A1A1A6 | #55555A |
| --ink3 | #6E6E74 | #8A8A90 |
| --line | #26262A | #D6D5CF |
| --line2 | #3A3A40 | #BDBCB6 |
| --card | #121214 | #E8E7E1 |
| --card2 | #1C1C20 | #DDDCD6 |
| --paper | #EFEDE7 | same |
| grain opacity | .085 | .12 |

Film grain: `reference/assets/grain.png` (220 px tile) laid over the whole page with `mix-blend-mode: overlay`. The full token set lives in `reference/assets/poster3.css`.

## 3. Type

Two families, both free (SIL Open Font License), both self-hosted:

- **Archivo** (variable, weight 100 to 900, width 62% to 125%). Use the width axis. Fontsource package: `@fontsource-variable/archivo`, import `wdth.css`. Fontsource names the family `'Archivo Variable'`, so the CSS stack is `'Archivo Variable', 'Archivo', system-ui, sans-serif`.
- **Courier Prime** (400 and 700). The screenplay typewriter face, used for every small label. Fontsource package: `@fontsource/courier-prime`.

| Role | Class | Spec |
| - | - | - |
| Poster headline | `.huge` | Archivo 900, width 62%, line-height .8, tracking -.01em, nowrap |
| Condensed heading | `.cond` | Archivo 800, width 75% |
| Wide subtitle | `.wide` | Archivo 700, width 125%, tracking .3em, uppercase |
| Caption | `.cap` | Archivo 600, 11 px, tracking .16em, uppercase |
| Label | `.mono` | Courier Prime 700, 12 px, tracking .03em, uppercase in markup |
| Body | (none) | Archivo 400, 15 to 19 px, line-height about 1.5 |

Banned fonts for this project: Inter, Geist, Space Grotesk, Space Mono, JetBrains Mono, IBM Plex, DM Sans, Satoshi, Manrope, Poppins. They read as AI defaults.

## 4. Layout

These are the 1440 px values from the design. Section 11 turns them into fluid rules.

- Content max width 1440, side padding 72 px at 1440 (scale it down fluidly; 20 px on phones).
- Hero heights at 1440: Home 900, Research 1060, Experience 1080, Projects 1060, Clubs 1100, High School 1080, Drawings 1120, Resume 1020. The headline sits about 150 px from the top; on inner pages the art starts below the headline's bottom edge.
- Sections below the hero are separated by about 150 to 170 px at 1440, scaling down to about 88 px on phones.

## 5. Poster hero anatomy (every page)

1. Fixed nav: R/K wordmark (Home adds a round avatar that fades in after scrolling past the hero), section links with an accent underline on the current page, outline Resume pill, outline round theme toggle. Nav background turns blurred and gets a bottom border after 260 px of scroll.
2. Corner brackets inset 40 px.
3. Top captions left and right (two short facts each, `.cap`, ink2).
4. Wide subtitle centered at top 100.
5. Giant headline word, one span per letter for the intro rise.
6. Accent halo (radial gradient, `mix-blend-mode: screen`) behind the art.
7. The art (per page, below).
8. Vignette plus a floor gradient into the page background.
9. Vertical side labels in Courier Prime at the left and right edges.
10. Bottom left: "About" caption plus one or two sentences. Bottom right: three round badges (middle one filled with the accent).

Per-page art:

| Page | Art |
| - | - |
| Home | Backlit arms-crossed figure in front of RUDRA, accent rim light, red stripe band with a marquee behind it. Replace the figure with Rudra's cut-out photo. |
| Research | Network graph; the most central node pulses in the accent, packets travel toward it along edges. |
| Experience | Four ID badges hanging from short accent lanyards on a metal rail, each swinging gently. Last badge is accent-filled. |
| Projects | Three game-box covers (Cyberdefender, Drone Glove, locked ???) as a PS5-style level select; detail strip underneath. |
| Clubs | Three embroidered patches; ring text spins slowly. |
| High School | Gold Dean's List medal on an accent ribbon, ring text, slow shine sweep. |
| Drawings | Three taped polaroids with placeholder sketches and a pencil lying across them. |
| Resume | Paper-clipped resume sheet over a second sheet, rising out of the bottom of the frame. |

## 6. Components below the hero

- `.surface` card: card color, faint top sheen, 1 px line border, long soft shadow, radius 18 to 20.
- `.media` placeholder: card gradient with an inset 1 px frame; replace with real images.
- `.chip`: 30 px pill, 1 px border.
- Row list (Home "Fall 2026"): grid of label / title / description / arrow, hover nudges right.
- Outline numerals (`.huge.outline`) as watermarks inside cards.
- Footer on every page: accent stripe tilted -1.2 deg with a marquee ("Open to Summer 2027 roles / rudrak@mit.edu / Cambridge, MA"), then "OPEN TO" label, giant "SUMMER 2027", one sentence, email link, LinkedIn / GitHub / Resume links, copyright and "Lafayette, LA → Cambridge, MA".

## 7. Motion

Intro (on load, once): letters rise from below in sequence (1.05 s, expo out), art fades up, band scales in from the left, captions fade in, cards deal in, graph edges draw, nodes pop.

Scroll: headline drifts up and fades to 10% over the first 900 px; hero art sinks and fades; hero captions fade; body blocks reveal 60 px upward as they enter; big section headings drift sideways a few percent.

Projects selection charm (the Switch-style moment): clicking a cover scales it to 1.05 with a quick squash (.46 s), draws an accent ring with a pulse, swaps the detail strip, and plays a short Web Audio tick. Arrow buttons and keyboard arrows move the selection. Sound has an on/off toggle in the nav.

Ambient: badge swing (6 to 7 s), patch ring spin (48 s), medal shine (every 4.5 s), radar sweep, drone rotors, marquee (34 s).

`prefers-reduced-motion: reduce` turns all of it off and shows final states.

The design files implement scroll effects with CSS scroll-driven animations. In the real build use GSAP ScrollTrigger with Lenis smooth scroll so it works in every browser.

Deferred to phase 2: pencil page transitions (the current page gets scribbled out, a sketch of the next page draws in, then the Switch selection charm reveals it). Also deferred: a 3D version of the hero photo.

## 8. Content and placeholders

Facts on the pages came from Rudra. Don't invent anything new. Placeholders that need Rudra's input:

| Page | Placeholder |
| - | - |
| Home | Cut-out hero photo (PNG with transparent background, arms crossed, at least 2000 px tall) |
| Research | UROP status line "[One or two lines on progress, once cleared to share.]"; shoreline project "[Data, method, and result in two lines.]" |
| Projects | Four milestone `[STATUS]` values, two `[X]% BUILT` values, LVL 03 "[What's next, in one line.]" |
| Clubs | Third club `[ROLE · TERM]`, `[Next club]` |
| High School | Three photos (robot on the field, team, outreach), podcast `[LINK TO EPISODE]`, other service work |
| Drawings | Six drawing scans with titles and years, the third place card, extra hobbies |
| Resume | Resume PDF, update month, exact course and degree wording |
| All | Nothing: the footer GitHub link is https://github.com/RudraKaradkhelkar |

Confirm with Rudra before launch: the "Open to Summer 2027" footer line.

## 9. Privacy and safety rules (do not break)

- No phone number anywhere.
- Don't name the UROP's industry partner or the internal tool used on the project. "A CAMS partner organization" is the approved wording.
- UROP progress stays a placeholder until Rudra says it's cleared to share.
- Email shown is rudrak@mit.edu only.

## 10. Banned patterns (the "looks AI-made" list)

These were removed in the audit. Don't bring them back:

- Glassmorphism (frosted blur panels). Buttons are 1 px outlines.
- Gradient text on anything except the hero headline.
- Glow orbs or radial blobs in card corners.
- Sparkle separators (✦), emoji, and blinking "live" dots.
- Em dashes anywhere in copy or labels. Use a slash, a comma, or a period.
- Numbered section eyebrows (§ 01, 02 /), fake document IDs, page counters ("001 / HOME").
- Rhetorical-question openers and slogans like "Let's build something", "Let's talk", "Crafting experiences", "Where X meets Y".
- Bento grids, pastel gradients, purple-to-blue anything, generic stock 3D blobs.
- Inter or any font in the banned list above.

## 11. Responsive rules (required)

The site has to look designed at every width, not just 1440. The design files fail this (see `screenshots/known-issues/`): headlines shrink with the viewport while the art stays at fixed pixel positions, so they drift apart, run off the screen, or collide.

### Known failures to fix

- 390 px: EXPERIENCE and PROJECTS headlines overflow the screen. The Experience badges are hidden. The Projects covers run off the right edge. On Home the figure swallows RUDRA.
- 1024 px: nav links collide with the R/K wordmark. KARADKHELKAR collides with the top captions. Hero art and the About block are cut off at the bottom.
- 1920 px and wider: the composition stays 1440-sized and looks small in empty black.

### The poster hero is one scalable stage

- Make each hero a container (`container-type: inline-size`) whose width is `min(100vw, 1760px)`. Size the headline, the art box, the gaps, and the badges in container units (`cqi`) with `clamp()` floors and caps, so the whole composition scales as one unit from 1024 to 2560. Above 1760 the stage stops growing; the background, halo, band, and vignette keep bleeding to the screen edges.
- Lay the hero out in flow (CSS grid rows: subtitle, headline, art, bottom row), not with absolute `top` values. Absolute positioning is fine inside the art box.
- Give every art box a fixed aspect ratio so it scales without distortion.
- Use `svh` for hero heights on phones so the mobile browser bar doesn't make the layout jump.
- The headline must always fit on one line inside the side padding. Fit it to the container, not the viewport.

### Breakpoints

| Width | Behavior |
| - | - |
| 1280 and up | Full desktop poster, as designed. |
| 1100 to 1279 | Same poster, scaled. Top captions get shorter or wrap under the subtitle. |
| Under 1100 | Nav links collapse into a menu button that opens a full-screen poster-style menu. Vertical side labels hidden. |
| 768 to 1099 | Tablet: headline full width, art scaled, bottom row keeps About on the left and badges on the right if they fit, otherwise stacks. |
| Under 768 | Phone stack: subtitle, headline filling the width, art, About text, badges in a row, then the page. |

### Phone composition per page (never hide the art)

| Page | Phone hero |
| - | - |
| Home | KARADKHELKAR above, RUDRA at full width, the photo in front so the head overlaps the letters the way it does on desktop, red band behind, About and badges below. Hero fits within one screen height. |
| Research | Graph scaled to the width under the headline; the "Highest centrality" label stays inside the frame. |
| Experience | All four badges on a shorter rail, smaller and overlapping like a fanned hand, still swinging. |
| Projects | Covers become a horizontal scroll-snap row with the selected cover centered. Swiping selects with the same charm animation. Detail strip below. |
| Clubs | Three patches overlapping in one row, smaller. |
| High School | Medal and ribbon scaled down, centered. |
| Drawings | Polaroids fanned and overlapping, pencil scaled with them. |
| Resume | Whole sheet visible (not cut off by the frame), download button full width. |

### Below the hero

- Grids step down 3 to 2 to 1 columns; the four stats become 2 by 2; row lists stack label, title, description.
- Big section headings scale with `clamp()` and may wrap onto two lines on phones instead of overflowing.
- Outline watermark words stay clipped inside their cards.
- The footer's SUMMER 2027 fits the width at every size.

### Input and motion

- Tap targets at least 44 by 44 px. Hover effects only under `@media (hover: hover)`.
- Body text at least 16 px on phones.
- Native scrolling on touch devices (Lenis for mouse and trackpad only). Lighter scroll effects on phones: keep the hero fade and the reveals, drop the sideways drift.

### Test matrix

Every page at 390 x 844, 768 x 1024, 1024 x 768, 1280 x 800, 1440 x 900, 1920 x 1080, 2560 x 1440, and 844 x 390 landscape, in both themes. Pass criteria: no horizontal scroll (`scrollWidth` equals the viewport width), no text overlapping text or art on inner pages, no clipped headlines, nothing important cut off at the bottom of the hero, and the page still reads as the same poster.
