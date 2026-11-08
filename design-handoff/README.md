# design-handoff

Read-only inputs for the build. Start with `../START-HERE.md`.

| Path | What it is |
| - | - |
| `PROMPT-OVERNIGHT.md` | The build prompt: Phase 0 while you watch, Phases 1 to 4 overnight |
| `PROMPT-CONTENT-PASS.md` | The later prompt that puts your photos and answers into the site |
| `CHANGES.md` | Decisions made after the design: new Awards page, Life page, restructured Experience and High School. Overrides DESIGN.md where they conflict. |
| `DESIGN.md` | The spec: tokens, type, layout, motion, content, privacy rules, banned patterns, responsive rules |
| `screenshots/dark/` | All 8 pages at 1440 px, dark theme (the look to match) |
| `screenshots/light/` | Home, Research, Projects, Resume in the light theme |
| `screenshots/known-issues/` | The design files at 390, 1024, and 1920 px, showing what breaks on fixed-width boards. Don't repeat these. |
| `reference/` | Static HTML of every page with the real stylesheet, fonts, and grain. Open `reference/Main.html` in Chrome. Scroll effects work; buttons are inert. |
| `design/` | Original design-canvas source files. They point at canvas-hosted assets, so they only render inside the canvas. Useful for `renderVals()` and the Projects selection logic. |
