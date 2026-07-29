# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`yilin-11.github.io` — a GitHub Pages **user site**. Everything is static, hand-written HTML/CSS/JS. There is no build step, no package manager, no test suite, and no dependencies to install. Files in `main` at the repo root are what gets served; pushing to `main` deploys.

Local preview (needed because pages use relative paths and `fetch`):

```bash
python3 -m http.server 8000    # then open http://localhost:8000
```

## Layout

| Path | Status | What it is |
| --- | --- | --- |
| `index.html` | **active** | The portfolio's markup — head, sidebar, workspace shell and the empty viewer dialog (~130 lines) |
| `styles.css` | **active** | Every style on the site (~215 lines) |
| `app.js` | **active** | The `CASES` data and everything that renders it (~420 lines) |
| `prototypes/*.html` | **active** | Three self-contained interactive prototypes linked from the first three case studies |

The old CUNY coursework (`mmp210/`, `mmp240/`, `citymail/`) used to sit at the repo root. It now lives only on the `archive/coursework` branch and is no longer served, since Pages publishes `main`. Treat it as a frozen artifact: don't restore it to `main`, and don't "modernize" it if you are asked to work on that branch — it contains intentional oddities (e.g. the misspelled `mmp240/craigslist_redesign/stlyes.css`, p5.js 0.5.6 from CDN in `mmp210/memes` and `mmp210/self-portrait` vs. a vendored `p5.js` in `mmp210/midterm-project`).

## Architecture

Three files, no build step: `index.html` links `styles.css` in the head and `app.js` at the end of the body. The one exception is a short inline script in `<head>` that resolves the theme into `data-theme` before the body paints — it stays inline on purpose, since an external file would paint first and flash.

**All case-study content lives in the `CASES` array** at the top of `app.js`, and the DOM is generated from it. To add or edit a case, edit that array — never the generated markup.

Each case object:

- `key`, `plain` (plain-text name), `name` (may contain `<span class="thin">` for the two-tone title treatment)
- `acc` — the case's accent color, always a CSS var (`var(--cuny)`, `var(--nolimit)`, `var(--shelfie)`, `var(--mutuo)`, `var(--foredge)`), defined for both themes in `:root`
- `type`, `stack` — shown in card footers and the viewer meta row
- `proto` / `protoNote` — the CTA target plus the caveat text under it. For cases 01–03 that's a relative path to a `prototypes/*.html` file; for Mutuo and Foredge it's an absolute URL to the deployed app, and `protoNote` carries an inline `<a>` to the GitHub repo.
- `protoLabel` — optional, overrides the default CTA text `Open the live prototype ↗`
- `role` — optional, overrides the default `Solo designer` in the viewer meta row
- `build` — optional. Its presence is what marks a case as AI-built: it adds a `Built with AI` chip to the card footer and a third `Built with` column to the viewer meta row, whose value is this string.
- `shots[]` — optional `{src, cap}` pairs rendered as a figure grid between the CTA and the chapter nav. `src` is a filename inside `assets/shots/` (JPEG, ≤1100px wide, quality ~82); each image links to `proto`. Captures live in that directory only — the prototypes and the two apps are screenshotted, not mocked up.
- `hook`, `lede[]` — one-liner and intro paragraphs
- `motif` — inline SVG hero/thumbnail
- `chapters[]` — five HTML strings, positionally matched to `CHAPS = ['Research','Pain points','IA','Wireframes','Validation']`. Adding a chapter means extending both `CHAPS` and every case's `chapters`.

Rendering flow (`app.js`):

- `renderWorkspace()` builds the grid and list views from the same `CASES` data; `setView('grid'|'list')` just flips `[data-view]` on `#workspace` and CSS shows/hides the right container.
- `openCase(i)` fills the full-screen `#viewer` dialog; `stepCase(±1)` wraps around the array; Esc / ← / → are wired globally but only while the viewer is open.
- View changes go through `document.startViewTransition?…:…` — keep the fallback branch when adding transitions.
- The accent color is threaded by setting `style="--acc:${c.acc}"` on a wrapper element; child CSS reads `var(--acc)`. Follow this rather than inlining color values.

Chapter HTML uses a fixed set of styled blocks — reuse them instead of inventing new ones:

- `.statgrid` with `<div><b>number</b><span>caption</span></div>` — audit metrics
- `.iablock` — preformatted information-architecture tree (whitespace is significant). It is set in Space Grotesk, a **proportional** font, so space-padded columns do not line up across rows whose labels differ in width or weight. Align on the left edge with indentation only, and let the rest of each line run inline after a `·` separator (see the Foredge block); do not build multi-column tables out of spaces.
- `.tasklist` > `.trow` > `.tn` + `.tb` (`.task` + `.crit`) — usability test tasks and success criteria
- plain `<ul><li><b>Lead-in.</b> …</li></ul>` — pain points and design decisions

### Head assets

`og.png` (1200×630), `favicon.svg`, and `apple-touch-icon.png` sit at the repo root and are referenced from `<head>` with absolute `https://yilin-11.github.io/…` URLs for the Open Graph tags (relative URLs are not resolved by most crawlers). `og.png` bakes in the name, the tagline, and a dot-and-label for every case, so **if the `<title>`, the sidebar `.disc` line, or the case list changes, the image is now stale** — it is generated with Pillow from the site's own tokens (paper/ink/line colors, the `.reg-mini` corner mark, each case accent color) and has to be redrawn, not edited. No generator script is checked in; redraw it at 1200×630 with Pillow using Arial Bold and Times New Roman Italic from `/System/Library/Fonts/Supplemental/`, and keep `og:image:alt` in sync with the names on the card.

### Conventions to preserve

- **Theming:** every color comes from a custom property — light values on `:root`, dark values on `:root[data-theme="dark"]`, written once each. There is **no `@media (prefers-color-scheme:dark)` block**: an inline script in `<head>` (before the stylesheet) resolves a stored `yl-theme` choice, or failing that the system preference, into the `data-theme` attribute before the body paints. `toggleTheme()` flips and stores it; the `☀`/`☾` button in `.ws-head` shows where a press would take you, and the page keeps following the system for anyone who has never pressed it. New UI must not hardcode colors, and `motif` SVGs must use `var(--ink)`, `var(--paper)`, `var(--line-2)` and the case accent so they invert correctly in dark mode.
- **Accessibility:** interactive targets are kept at `min-height/min-width:44px`; toggles carry `aria-pressed`; the viewer is `role="dialog" aria-modal="true"` with `aria-labelledby`, saves `lastFocus` and restores it on close; `motif` SVGs have `role="img"` + `aria-label`; focus styling goes through `:focus-visible`.

## Prototypes

`prototypes/cuny-arts.html`, `no-limit.html`, `shelfie.html` are each a standalone single file with its **own** design system, fonts, and tokens — they deliberately do not share `index.html`'s CSS variables, since each is meant to look like a different product. Same internal pattern in all three: a data constant near the top of the `<script>` (`D` for the CUNY partner list, `DATA` for No Limit's chart series, etc.), string-template `render()` functions, and a `go(view)` / modal helper for navigation. State is in module-level `let`s, with `esc()` applied to any interpolated user or data text.

`shelfie.html` is the only page that calls a network API: four `fetch` calls to `https://api.anthropic.com/v1/messages` for grocery photo recognition, recipe generation, and recipe import from text/URL/screenshot. Notes if you touch them:

- The requests are sent **without any auth header**, so they cannot succeed from a plain browser — the page expects to sit behind an authenticating proxy. This is why `protoNote` for the case says the AI features need an API backend. Don't "fix" this by embedding a key in the page.
- Prompts ask for bare JSON and the parsers strip ``` fences and regex out the first `{…}` — keep both guards if editing a prompt. `RECIPE_SCHEMA` is the shared shape for all three recipe-import paths.
- Every AI call has a designed failure path with user-facing copy (`showImpErr`, `#snapErr`) — that graceful degradation is part of the case study's argument, so preserve it rather than letting errors surface as blank UI.
