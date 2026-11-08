# Content pass prompt

I've added my photos and files to `assets-incoming/` and filled in `assets-incoming/ANSWERS.md`. Put them into the site. I'm here for this one, so ask me before guessing.

1. Read `CLAUDE.md`, `PROGRESS.md`, `design-handoff/CHANGES.md`, `assets-incoming/README.md`, `assets-incoming/ANSWERS.md`, and `assets-incoming/PROFILE.md`. If the site was built before CHANGES.md existed, apply CHANGES.md first (it restructures pages), then the content. List anything that's missing, unclear, or conflicts with the design, and ask me about it before changing code.
2. Images, for each file in `assets-incoming/`:
   - Check it fits its slot (subject, orientation, resolution). Tell me about any that don't.
   - Strip all metadata, especially GPS location, before it goes into the repo.
   - Crop to the slot's aspect ratio, keeping the subject's face and hands inside the frame. Show me crops of people before committing them.
   - Write the processed file to `src/assets/slots/` under the slot name. Leave the originals in `assets-incoming/` untouched. That folder is gitignored (except its README) so raw photos and my answers never get committed; keep it that way.
3. Hero photo: if `assets-incoming/hero/hero-cutout.png` exists, use it as is. Otherwise cut out the background into a transparent PNG; if the cut-out leaves halos or chopped hair, show me and stop. Then retune the Home hero at every width so the head overlaps RUDRA the way the stand-in did, with the accent rim light along the edge.
4. Text: update `src/content/` from `PROFILE.md` (facts and copy) and `ANSWERS.md` (decisions). Use my wording. Fix spelling and typos only, and keep every rule in DESIGN.md sections 9 and 10 (no em dashes, no phone number, nothing not cleared). Anything marked "not cleared" or left blank stays a placeholder.
5. If `ANSWERS.md` adds a project (for example Jarvis), add it as a new level in the Projects select, built from the same components. For Jarvis, use only what `PROFILE.md` says. Never publish hostnames, IP addresses, ports, Tailscale names, account names, or anything else that maps my own server.
6. Resume: put the PDF at `public/resume.pdf` only if `ANSWERS.md` confirms it has no phone number, then wire up the download and the embedded viewer.
7. Run `npm run shoot`, check every page against the pass criteria in `PROMPT-OVERNIGHT.md`, fix, and commit.
8. Update `PROGRESS.md` with what changed and every placeholder still showing. Don't push.
