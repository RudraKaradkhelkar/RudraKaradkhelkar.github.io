# Rudra Karadkhelkar portfolio

Personal portfolio site: Astro static site, deployed to GitHub Pages from the repo `RudraKaradkhelkar.github.io` at https://rudrakaradkhelkar.github.io. The visual design is finished. The job is a faithful, fully responsive production build of it.

## Read before working

- `design-handoff/DESIGN.md` is the spec. It overrides your defaults.
- `design-handoff/reference/*.html` and `design-handoff/screenshots/` show the look at 1440 px. They are references for look and composition, not pixel specs. `screenshots/known-issues/` shows what the fixed-width design files get wrong at other widths; don't repeat those.
- `PROGRESS.md` at the repo root is the running log. Read it at the start of every session and again after any context compaction, then continue from "Next".

## Never

- Push, deploy, open pull requests, or change GitHub settings. No `git push`, no `gh` commands. Rudra pushes after reviewing.
- Edit anything in `design-handoff/`, `assets-incoming/`, `.claude/`, or this file. They are read-only inputs.
- Invent facts, numbers, dates, quotes, names, or links. Unknowns stay as visible `[bracketed placeholders]`.
- Put a phone number on the site, name the UROP industry partner or the UROP tool, or show UROP progress (it stays a placeholder until Rudra says it's cleared).
- Use the banned patterns in DESIGN.md section 10: glassmorphism, gradient text outside the hero headline, glow blobs in cards, sparkle glyphs or emoji, em dashes, numbered section eyebrows, fake IDs or counters, slogan copy, Inter or the other banned fonts.
- Add third-party scripts, analytics, trackers, embeds, or Google Fonts requests.
- Add Tailwind, UI kits, or React. If something truly can't be done without one, log why in PROGRESS.md first.
- Hide hero art on small screens to dodge a layout problem. Re-compose it (DESIGN.md section 11).

## Always

- Build responsive by construction (DESIGN.md section 11). Check every page with Playwright at 390, 768, 1024, 1280, 1440, 1920, and 2560 px wide, plus 844 x 390 landscape. No horizontal scroll, no overlapping text, no clipped headlines.
- Keep all copy, links, and image references in `src/content/`. Layout components never hard-code copy.
- Commit after each finished unit of work with a clear message. Small commits, so a stopped run loses nothing.
- Keep `PROGRESS.md` current: done (with commit hashes), decisions and why, questions for Rudra, placeholders left, known issues, next step.
- When unsure, choose the option closest to the design, log the question, and keep going. If one problem resists three attempts, log it under Known issues and move on.
- Check current APIs with the Context7 and Astro Docs MCP servers before using Astro, GSAP, ScrollTrigger, or Lenis features. Use the frontend-design and GSAP skills.
- Respect `prefers-reduced-motion` everywhere.
