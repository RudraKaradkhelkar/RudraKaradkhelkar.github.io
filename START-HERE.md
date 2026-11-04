# Start here

Everything in this package goes in the root of your website repo. Follow the steps in order. Every command has a line saying what it does and what each flag means.

| File or folder | What it is |
| - | - |
| `START-HERE.md` | This guide |
| `CLAUDE.md` | Standing rules Claude Code reads every session (and re-reads after it compacts its memory mid-run) |
| `.claude/settings.json` | Permissions: what Claude Code may do without asking, and what it can never do |
| `.gitignore` | Keeps build files, screenshots, and your raw photos out of git |
| `design-handoff/` | The design spec, reference pages, screenshots, and the two prompts |
| `assets-incoming/` | Where your photos and answers go later |

## 1. Check your tools

```bash
node -v
git --version
claude --version
```

- `node -v` prints your Node.js version. You need 22.23 or newer (the current Astro requires it). If it's older, install the LTS from nodejs.org.
- `git --version` confirms Git is installed.
- `claude --version` prints the Claude Code version. You need 2.1.259 or newer for the overnight flags. If it's older, run `claude update`, which downloads and installs the latest release.

## 2. Create and clone the repo

Your repo is `RudraKaradkhelkar.github.io`. Because the name is your username plus `.github.io`, the site will live at `https://rudrakaradkhelkar.github.io` with no extra path (GitHub lowercases the address). Two things to check on github.com before cloning:

- The repo is **public**. Free GitHub Pages only publishes public repos.
- It has at least one file. If it's empty, open it on github.com and click "Add a README".

```bash
mkdir -p ~/code
cd ~/code
git clone https://github.com/RudraKaradkhelkar/RudraKaradkhelkar.github.io.git
cd RudraKaradkhelkar.github.io
```

- `mkdir -p ~/code` makes a `code` folder in your home folder. `-p` means "don't complain if it already exists."
- `cd ~/code` moves into it.
- `git clone <url>` downloads the repo into a new folder with the repo's name and links it to GitHub as `origin`.
- `cd RudraKaradkhelkar.github.io` moves into the repo. Run every later command from here.

## 3. Copy this package in

Assuming you unzipped this package to your Downloads folder:

```bash
cp -R ~/Downloads/portfolio-overnight/. .
ls -a
```

- `cp -R` copies folders and everything inside them (`-R` means recursive).
- The `/.` at the end of the source means "the contents of this folder, including hidden files." That matters because `.claude` and `.gitignore` start with a dot, and Finder hides dot files (press Cmd+Shift+. in Finder to show them).
- The final `.` is the destination: the folder you're in, which is the repo.
- `ls -a` lists the folder including hidden files (`-a` means all). You should see `.claude`, `.gitignore`, `CLAUDE.md`, `START-HERE.md`, `design-handoff`, and `assets-incoming`.

Save a clean starting point:

```bash
git add .
git commit -m "Add design handoff and build rules"
```

- `git add .` stages everything in the folder. Your future photos and `assets-incoming/ANSWERS.md` are skipped on purpose because `.gitignore` excludes them.
- `git commit -m "..."` saves the snapshot with that message. Everything Claude Code does later can be compared against this commit or rolled back to it.

## 4. Install the plugins

Start Claude Code in the repo:

```bash
claude
```

- Opens an interactive session in this folder. It asks whether you trust the folder the first time. Say yes.

Inside the session:

```
/plugin install frontend-design@claude-plugins-official
```

- `/plugin install` opens the plugin's details so you can review it. `frontend-design` is Anthropic's design skill, and `@claude-plugins-official` is the marketplace it comes from (built in, no setup). Pick **Install for you (user scope)** so you have it in every project.

```
/plugin marketplace add greensock/gsap-skills
```

- Registers GreenSock's plugin catalog. `greensock/gsap-skills` is shorthand for github.com/greensock/gsap-skills. Then run `/plugin`, open the **Discover** tab, type `gsap`, and install it at user scope. If that route fails, quit and run `npx skills add https://github.com/greensock/gsap-skills` in your normal terminal instead (`npx` runs a package once without installing it globally).

Run `/reload-plugins` so the session loads them, then `/exit`.

## 5. Add the MCP servers

In your normal terminal, still in the repo:

```bash
claude mcp add --transport stdio playwright -- npx -y @playwright/mcp@latest
claude mcp add --transport http context7 https://mcp.context7.com/mcp
claude mcp add --transport http astro-docs https://mcp.docs.astro.build/mcp
claude mcp list
```

- `claude mcp add` registers an MCP server, a tool Claude Code can call. These are saved for this project only by default.
- `--transport stdio` means the server runs as a local program. `--transport http` means it's hosted online and reached over HTTPS.
- The word after the transport (`playwright`, `context7`, `astro-docs`) is the name you're giving it.
- In the first command, `--` ends Claude Code's own flags and everything after it is the command that starts the server. `npx -y` runs the package and auto-answers "yes" to the download prompt. `@playwright/mcp@latest` is Microsoft's Playwright MCP, newest version. It lets Claude Code open the site in a real browser and screenshot it.
- Context7 gives Claude Code current library docs. Astro Docs is Astro's official documentation server. Neither needs an API key.
- `claude mcp list` shows each server and whether it connected.

## 6. Kick it off (about 20 minutes, while you're awake)

```bash
claude --permission-mode auto
```

- `--permission-mode auto` has a separate safety model review each action instead of asking you every time. It blocks anything that goes beyond the task or looks driven by hostile content. The deny rules in `.claude/settings.json` apply on top, in every mode: no `git push`, no `gh`, no `sudo`, no edits to the design files or the rules, no reading `.env` files or SSH keys.

Paste this:

```
Read CLAUDE.md and design-handoff/PROMPT-OVERNIGHT.md, then do Phase 0.
```

Phase 0 checks that the plugins and MCP servers loaded, sets up the Astro project, installs packages, builds the shared pieces, and makes its first commit. Answer any prompts. When it says "Phase 0 done, ready for the overnight run", type `/exit`.

## 7. Start the overnight run

Plug in your laptop and leave the lid open. On a Mac:

```bash
caffeinate -is claude -p "Continue the overnight build: do Phases 1 to 4 of design-handoff/PROMPT-OVERNIGHT.md. Nobody can answer questions until morning, so log them in PROGRESS.md and keep going." --continue --permission-mode auto --permission-prompts none > overnight.log 2>&1
```

- `caffeinate` keeps the Mac awake while the command after it runs. `-i` blocks idle sleep and `-s` blocks system sleep while plugged in.
- `claude -p "..."` runs Claude Code non-interactively with that message. It works until the job is done instead of waiting at a chat prompt.
- `--continue` picks up the most recent conversation in this folder, which is your Phase 0 session, so it keeps everything it already read and decided.
- `--permission-mode auto` is the same safety-model mode as before.
- `--permission-prompts none` means anything that would need your approval gets refused, and Claude is told to work around it instead of waiting all night for an answer.
- `> overnight.log` writes the output to a file, and `2>&1` sends error messages to the same file.

On Windows, skip `caffeinate -is`, set Settings > System > Power > Sleep to "Never" while plugged in, and run the rest of the command as is.

Leave the terminal window open. The log stays mostly empty until the run ends. To watch progress, open a second terminal in the repo and run `git log --oneline`, which lists each commit on one line. A new commit appears after every finished page.

## 8. In the morning

1. Open `PROGRESS.md`. The "Morning review" section lists what to look at, its questions for you, and every placeholder still showing.
2. Run `git log --oneline` to see what it finished.
3. Look at the screenshots in `review/`. There's one per page, width, and theme.
4. See it live:

   ```bash
   npm run dev
   ```

   - Starts Astro's local preview server. Open the address it prints (usually http://localhost:4321). Press Ctrl+C to stop it.

If it stopped before Phase 4 (it can hit your plan's usage limit and pause until the limit resets), run the step 7 command again. `--continue` picks up where it left off. To talk to it about changes, run `claude --continue`, which reopens the same conversation interactively.

## 9. Add your photos and text (whenever you have them)

1. Put files in `assets-incoming/` using the names in `assets-incoming/README.md`.
2. Fill in `assets-incoming/ANSWERS.md`.
3. Run `claude --permission-mode auto` and paste: `Do design-handoff/PROMPT-CONTENT-PASS.md.` This one is interactive; it asks before guessing and shows you photo crops before committing them.

## 10. Go live (after you've reviewed it)

1. On GitHub: repo **Settings > Pages > Build and deployment > Source: GitHub Actions**.
2. Push:

   ```bash
   git push
   ```

   - Uploads your commits to GitHub. Because you cloned the repo, it already knows where `origin` is. The workflow Claude Code wrote builds and deploys the site; watch it under the repo's **Actions** tab. When it turns green, the site is live at https://rudrakaradkhelkar.github.io. Every later push redeploys automatically.

## Optional: security headers

GitHub Pages doesn't let you set response headers like Content-Security-Policy or Strict-Transport-Security. If you later buy a custom domain, putting it behind Cloudflare's free plan lets you add them. The site is built for it: self-hosted fonts, no third-party scripts, no trackers. Ask Claude Code to write the header values once the site is final.
