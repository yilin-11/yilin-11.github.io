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
| `index.html` | **active** | The entire portfolio — single self-contained file (~530 lines, inline `<style>` + `<script>`) |
| `prototypes/*.html` | **active** | Three self-contained interactive prototypes linked from the case studies |
| `mmp210/`, `mmp240/`, `citymail/` | archived | Old CUNY coursework, kept as-is for links that may exist in the wild |

Treat the archived directories as frozen artifacts: fix them only if asked, and don't "modernize" or refactor them. They contain intentional oddities (e.g. the misspelled `mmp240/craigslist_redesign/stlyes.css`, p5.js 0.5.6 from CDN in `mmp210/memes` and `mmp210/self-portrait` vs. a vendored `p5.js` in `mmp210/midterm-project`).

## `index.html` architecture

Content and presentation are separated inside the one file: **all case-study content lives in the `CASES` array** (starts ~line 297) and the DOM is generated from it. To add or edit a case, edit that array — never the generated markup.

Each case object:

- `key`, `num` (`'01'`), `plain` (plain-text name), `name` (may contain `<span class="thin">` for the two-tone title treatment)
- `acc` — the case's accent color, always a CSS var (`var(--cuny)`, `var(--nolimit)`, `var(--shelfie)`), defined for both themes in `:root`
- `type`, `year`, `stack` — shown in card footers and the viewer meta row
- `proto` / `protoNote` — relative path to the prototype file, plus the caveat text under the CTA
- `hook`, `lede[]` — one-liner and intro paragraphs
- `motif` — inline SVG hero/thumbnail
- `chapters[]` — five HTML strings, positionally matched to `CHAPS = ['Research','Pain points','IA','Wireframes','Validation']`. Adding a chapter means extending both `CHAPS` and every case's `chapters`.

Rendering flow:

- `renderWorkspace()` builds the grid and list views from the same `CASES` data; `setView('grid'|'list')` just flips `[data-view]` on `#workspace` and CSS shows/hides the right container.
- `openCase(i)` fills the full-screen `#viewer` dialog; `stepCase(±1)` wraps around the array; Esc / ← / → are wired globally but only while the viewer is open.
- View changes go through `document.startViewTransition?…:…` — keep the fallback branch when adding transitions.
- The accent color is threaded by setting `style="--acc:${c.acc}"` on a wrapper element; child CSS reads `var(--acc)`. Follow this rather than inlining color values.

Chapter HTML uses a fixed set of styled blocks — reuse them instead of inventing new ones:

- `.statgrid` with `<div><b>number</b><span>caption</span></div>` — audit metrics
- `.iablock` — preformatted information-architecture tree (whitespace is significant)
- `.tasklist` > `.trow` > `.tn` + `.tb` (`.task` + `.crit`) — usability test tasks and success criteria
- plain `<ul><li><b>Lead-in.</b> …</li></ul>` — pain points and design decisions

### Head assets

`og.png` (1200×630), `favicon.svg`, and `apple-touch-icon.png` sit at the repo root and are referenced from `<head>` with absolute `https://yilin-11.github.io/…` URLs for the Open Graph tags (relative URLs are not resolved by most crawlers). `og.png` bakes in the name and the tagline, so **if the `<title>` or the sidebar `.disc` line changes, the image is now stale** — it was generated with Pillow from the site's own tokens (paper/ink/line colors, the `.reg-mini` corner mark, the three case accent colors) and has to be redrawn, not edited.

### Conventions to preserve

- **Theming:** every color comes from a custom property in `:root`, with a `@media (prefers-color-scheme:dark)` override. New UI must not hardcode colors, and `motif` SVGs must use `var(--ink)`, `var(--paper)`, `var(--line-2)` and the case accent so they invert correctly in dark mode.
- **Accessibility:** interactive targets are kept at `min-height/min-width:44px`; toggles carry `aria-pressed`; the viewer is `role="dialog" aria-modal="true"` with `aria-labelledby`, saves `lastFocus` and restores it on close; `motif` SVGs have `role="img"` + `aria-label`; focus styling goes through `:focus-visible`.

## Prototypes

`prototypes/cuny-arts.html`, `no-limit.html`, `shelfie.html` are each a standalone single file with its **own** design system, fonts, and tokens — they deliberately do not share `index.html`'s CSS variables, since each is meant to look like a different product. Same internal pattern in all three: a data constant near the top of the `<script>` (`D` for the CUNY partner list, `DATA` for No Limit's chart series, etc.), string-template `render()` functions, and a `go(view)` / modal helper for navigation. State is in module-level `let`s, with `esc()` applied to any interpolated user or data text.

`shelfie.html` is the only page that calls a network API: four `fetch` calls to `https://api.anthropic.com/v1/messages` for grocery photo recognition, recipe generation, and recipe import from text/URL/screenshot. Notes if you touch them:

- The requests are sent **without any auth header**, so they cannot succeed from a plain browser — the page expects to sit behind an authenticating proxy. This is why `protoNote` for the case says the AI features need an API backend. Don't "fix" this by embedding a key in the page.
- Prompts ask for bare JSON and the parsers strip ``` fences and regex out the first `{…}` — keep both guards if editing a prompt. `RECIPE_SCHEMA` is the shared shape for all three recipe-import paths.
- Every AI call has a designed failure path with user-facing copy (`showImpErr`, `#snapErr`) — that graceful degradation is part of the case study's argument, so preserve it rather than letting errors surface as blank UI.
