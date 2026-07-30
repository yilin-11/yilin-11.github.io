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
| `index.html` | **active** | The work page — head, sidebar shell, workspace and the empty viewer dialog (~110 lines) |
| `about/index.html` | **active** | The About page, served at `/about/` (~115 lines) |
| `404.html` | **active** | Not-found page. GitHub Pages serves it for any unmatched path (~75 lines) |
| `styles.css` | **active** | Every style on the site (~290 lines) |
| `app.js` | **active** | The `CASES` data and everything that renders it (~595 lines) |
| `prototypes/*.html` | **active** | Three self-contained interactive prototypes linked from the first three case studies |

**There are three HTML pages and they share one shell.** The `<head>`, the theme
script and the sidebar markup are duplicated in each — there is no build step to
factor them out, and the theme script *must* stay inline in every page or that
page flashes. Keep them in sync by hand. What is deliberately **not** duplicated
is the sidebar's contents: `renderSidebar()` builds it from `CASES`, so adding a
case is still a one-line edit to that array.

Assets in `about/index.html` and `404.html` are referenced root-absolute
(`/styles.css`, `/app.js`, `/favicon.svg`) because `/about/` is a directory —
relative paths there would resolve to `/about/styles.css`. This is safe because
the site is a **user site** served from the domain root; it would break if the
repo ever became a project site served from `/repo/`.

The old CUNY coursework (`mmp210/`, `mmp240/`, `citymail/`) used to sit at the repo root. It now lives only on the `archive/coursework` branch and is no longer served, since Pages publishes `main`. Treat it as a frozen artifact: don't restore it to `main`, and don't "modernize" it if you are asked to work on that branch — it contains intentional oddities (e.g. the misspelled `mmp240/craigslist_redesign/stlyes.css`, p5.js 0.5.6 from CDN in `mmp210/memes` and `mmp210/self-portrait` vs. a vendored `p5.js` in `mmp210/midterm-project`).

## Architecture

Three files, no build step: `index.html` links `styles.css` in the head and `app.js` at the end of the body. The one exception is a short inline script in `<head>` that resolves the theme into `data-theme` before the body paints — it stays inline on purpose, since an external file would paint first and flash.

**All case-study content lives in the `CASES` array** at the top of `app.js`, and the DOM is generated from it. To add or edit a case, edit that array — never the generated markup. That now includes the sidebar: `renderSidebar()` writes the "Selected work" list into `#worknav` on every page, so the case list is not written down anywhere else.

Each page declares itself with `<body data-page="home|about|404">`, read once into `PAGE`. It decides two things: whether the sidebar's case links open the viewer or navigate, and whether the `?case=` deep link is honoured. Anything that only exists on the work page — `renderWorkspace()`, the viewer keydown handler — guards on the element being present rather than on `PAGE`, so a new page cannot break by forgetting a branch.

Each case object:

- `key`, `plain` (plain-text name), `name` (may contain `<span class="thin">` for the two-tone title treatment)
- `acc` — the case's accent color, always a CSS var (`var(--cuny)`, `var(--nolimit)`, `var(--shelfie)`, `var(--mutuo)`, `var(--foredge)`), defined for both themes in `:root`
- `type`, `stack` — shown in card footers and the viewer meta row
- `proto` / `protoNote` — the CTA target plus the caveat text under it. For cases 01–03 that's a relative path to a `prototypes/*.html` file; for Mutuo and Foredge it's an absolute URL to the deployed app, and `protoNote` carries an inline `<a>` to the GitHub repo.
- `protoLabel` — optional, overrides the default CTA text `Open the live prototype ↗`
- `role` — optional, overrides the default `Solo designer` in the viewer meta row
- `build` — optional. Its presence is what marks a case as AI-built: it adds a `Built with AI` chip to the card footer and a third `Built with` column to the viewer meta row, whose value is this string.
- `shots[]` — optional `{src, cap}` pairs rendered as a figure grid between the CTA and the chapter nav. `src` is a filename inside `assets/shots/` (JPEG, ≤1100px wide, quality ~82); each image links to `proto`. Captures live in that directory only — the prototypes and the two apps are screenshotted, not mocked up.
- `wires[]` — optional low-fidelity wireframes rendered at the top of chapter 04. Each is `{k:'page'|'phone', t:'01 Home', cap:'…', p:[tokens]}`; `renderWires()` maps each token through `WIRE`, where `name:5` repeats a part and `note:Some text` draws an accent-ruled callout. They are markup and CSS, never images, so they inherit the theme and the case accent — extend the `WIRE` map and the `.w-*` rules rather than shipping a picture.
- `hook`, `lede[]` — one-liner and intro paragraphs
- `motif` — inline SVG hero/thumbnail
- `chapters[]` — five HTML strings, positionally matched to `CHAPS = ['Research','Pain points','IA','Wireframes','Validation']`. Adding a chapter means extending both `CHAPS` and every case's `chapters`.

Rendering flow (`app.js`):

- `renderWorkspace()` builds the grid and list views from the same `CASES` data; `setView('grid'|'list')` just flips `[data-view]` on `#workspace` and CSS shows/hides the right container.
- `openCase(i)` fills the full-screen `#viewer` dialog; `stepCase(±1)` wraps around the array; Esc / ← / → are wired globally but only while the viewer is open.
- **`/?case=N` opens a case on load**, which is what the sidebar links from `/about/` and `/404.html` rely on, and it gives a case a shareable URL. `closeCase()` strips the parameter with `history.replaceState` so a refresh does not reopen what was just closed. Watch the guard: `URLSearchParams.get()` returns `null` when absent and `Number(null)` is `0`, so testing the number alone opens case 01 on every plain visit — the null check is the whole thing.
- View changes go through **`withTransition(fn)`**, which keeps the no-support fallback in one place and swallows the rejection a *skipped* transition produces. Transitions get skipped routinely — another starts, or one fires while the page is still loading, which is exactly what `/?case=N` does — and an unhandled rejection logs an `AbortError` for something that is not a fault. Use the helper rather than calling `document.startViewTransition` directly.
- The accent color is threaded by setting `style="--acc:${c.acc}"` on a wrapper element; child CSS reads `var(--acc)`. Follow this rather than inlining color values.

Chapter HTML uses a fixed set of styled blocks — reuse them instead of inventing new ones:

- `.statgrid` with `<div><b>number</b><span>caption</span></div>` — audit metrics
- `.iablock` — preformatted information-architecture tree (whitespace is significant). It is set in Space Grotesk, a **proportional** font, so space-padded columns do not line up across rows whose labels differ in width or weight. Align on the left edge with indentation only, and let the rest of each line run inline after a `·` separator (see the Foredge block); do not build multi-column tables out of spaces.
- `.tasklist` > `.trow` > `.tn` + `.tb` (`.task` + `.crit`) — usability test tasks and success criteria
- plain `<ul><li><b>Lead-in.</b> …</li></ul>` — pain points and design decisions

### Head assets

`/about/` sets its own `og:title`, `og:description` and `og:url` but **reuses the
same `og.png`** — the card is the site's, not the page's. `404.html` is
`noindex` and carries no OG tags at all.

`og.png` (1200×630), `favicon.svg`, and `apple-touch-icon.png` sit at the repo root and are referenced from `<head>` with absolute `https://yilin-11.github.io/…` URLs for the Open Graph tags (relative URLs are not resolved by most crawlers). `og.png` bakes in the name, the tagline, and a dot-and-label for every case, so **if the `<title>`, the sidebar `.disc` line, or the case list changes, the image is now stale** — it is generated with Pillow from the site's own tokens (paper/ink/line colors, the `.reg-mini` corner mark, each case accent color) and has to be redrawn, not edited. No generator script is checked in; redraw it at 1200×630 with Pillow using Arial Bold and Times New Roman Italic from `/System/Library/Fonts/Supplemental/`, and keep `og:image:alt` in sync with the names on the card.

### Where the info content lives

**Contact is not a page.** It was sixteen words at the bottom of the home page's scroll, and as a destination it made someone navigate away at the exact moment they had decided to get in touch. It now sits in the sidebar footer (`.foot-status` / `.foot-links` / `.foot-place`) on every page, plus a fuller section on `/about/`. If you add a channel, add it to the footer in all three pages **and** to the About section.

**About is a page because its value is the prose.** `/about/` carries its own `<title>`, `description`, `canonical` and OG tags, and its content is written as markup rather than generated from JS — it is the one page a crawler is served that is worth indexing on its own. Do not move it into `CASES` or render it from JavaScript.

The old `#about` / `#contact` anchors redirect to `/about/` from `app.js`. Keep that until nothing links to them.

### Conventions to preserve

- **Theming:** every color comes from a custom property — light values on `:root`, dark values on `:root[data-theme="dark"]`, written once each. There is **no `@media (prefers-color-scheme:dark)` block**: an inline script in `<head>` (before the stylesheet) resolves a stored `yl-theme` choice, or failing that the system preference, into the `data-theme` attribute before the body paints. `toggleTheme()` flips and stores it; the `☀`/`☾` button in `.ws-head` shows where a press would take you, and the page keeps following the system for anyone who has never pressed it. New UI must not hardcode colors, and `motif` SVGs must use `var(--ink)`, `var(--paper)`, `var(--line-2)` and the case accent so they invert correctly in dark mode.
- **Accessibility:** interactive targets are kept at `min-height/min-width:44px`; toggles carry `aria-pressed`; the viewer is `role="dialog" aria-modal="true"` with `aria-labelledby`, saves `lastFocus` and restores it on close; `motif` SVGs have `role="img"` + `aria-label`; focus styling goes through `:focus-visible`.

## Prototypes

`prototypes/cuny-arts.html`, `no-limit.html`, `shelfie.html` are each a standalone single file with its **own** design system, fonts, and tokens — they deliberately do not share `index.html`'s CSS variables, since each is meant to look like a different product. Same internal pattern in all three: a data constant near the top of the `<script>` (`D` for the CUNY partner list, `DATA` for No Limit's chart series, etc.), string-template `render()` functions, and a `go(view)` / modal helper for navigation. State is in module-level `let`s, with `esc()` applied to any interpolated user or data text.

`shelfie.html` is the only page that calls a network API: five `fetch` calls to `https://api.anthropic.com/v1/messages` for receipt parsing, grocery photo recognition, recipe generation, and recipe import from text/URL/screenshot. Notes if you touch them:

- The pantry has **three entrances — receipt scan, food photo, typed entry — and all three land in the same editable `detected[]` review list**; `commitReview()` is the only writer into `pantry`. Keep that funnel: adding a fourth source means feeding the same review, not a second path into `pantry`. `addErr()` renders every scan failure with a "type it in instead" button, which is what keeps the AI paths from being dead ends — don't reduce it to a plain message.
- The Pantry tab is **two segments of one inventory**: `What I have` (`#pantryList`) and `What I need` (`#needList`), switched by `setPanTab()`. The shopping list is `list[]` of `{name, why, forRecipe, got}`. Only `addToList(names, why, restock)` writes to it — it refuses duplicates (`onList()`) and anything already owned (`haveIngredient()`), and `restock` is the opt-out that makes "running low" and typed entries work at all. **`commitReview()` calls `tickOffList()`**, so a receipt clears what it matched with no user action; that call is the thing that makes the four features one loop, so don't drop it when touching the intake.
- `isAssumed()` in the missing-ingredient engine matches `PANTRY_ASSUMED` **per token, and only when every token is a staple word** — "salt and pepper" and "olive oil" are assumed present, "sesame oil" is not. It used to substring-match, which meant a card could say "buy sesame oil" while the shopping list silently skipped it. Keep the whole-name semantics if you extend the word list.
- Photos live in `prototypes/assets/shelfie/` and are matched by **keyword, not by filename lookup**: `dishPhoto()` walks the `PHOTO` regex table for recipe cards (`dish.jpg`), `ingPhoto()` walks `ING` for pantry and review rows (`i-dish.jpg`), each falling back to `generic`/`i-generic`. Both are wrapped by `dishThumb()`/`ingThumb()`, which layer the `<img>` over the item's emoji so a missing file degrades to the emoji rather than a blank box. Add a category by adding a regex row *and* the file; don't hardcode a path at a call site. Every one of these `<img>`s is `loading="lazy"` with empty `alt` — the row text already names the thing.
- `prototypes/assets/shelfie/CREDITS.md` records the photographer and Unsplash link for every file. The photos are Unsplash-License (free, commercial use, no attribution required); **Unsplash+ results were excluded on purpose**, so if you swap an image, check the API's `plus`/`premium` flags first — that pair is the only thing distinguishing a free photo from a licensed one.

- The requests are sent **without any auth header**, so they cannot succeed from a plain browser — the page expects to sit behind an authenticating proxy. This is why `protoNote` for the case says the AI features need an API backend. Don't "fix" this by embedding a key in the page.
- Prompts ask for bare JSON and the parsers strip ``` fences and regex out the first `{…}` — keep both guards if editing a prompt. `RECIPE_SCHEMA` is the shared shape for all three recipe-import paths.
- Every AI call has a designed failure path with user-facing copy (`showImpErr`, `#snapErr`) — that graceful degradation is part of the case study's argument, so preserve it rather than letting errors surface as blank UI.
