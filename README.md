# yilin-11.github.io

Portfolio of **Yi Lin** — UX/UI & product designer, New York.

**→ [yilin-11.github.io](https://yilin-11.github.io)**

Static site: hand-written HTML/CSS/JS, no build step, no dependencies, no framework. Pushing to `main` deploys it via GitHub Pages.

## Selected work

Three case studies, each following the same spine — Research → Pain points → IA → Wireframes → Validation — and each shipped as a working prototype rather than static frames.

| Case | What it is | Prototype |
| --- | --- | --- |
| **CUNY Arts** | Responsive redesign of a page that buried free museum access for CUNY students in an 8,000-word long-read. Restructured into a filterable partner index with a map view. | [`prototypes/cuny-arts.html`](prototypes/cuny-arts.html) |
| **No Limit** | Intermittent-fasting app collapsing timer, body metrics, and community into one place, rebuilt in a v2 around frequency-first IA and non-shaming copy. | [`prototypes/no-limit.html`](prototypes/no-limit.html) |
| **Shelfie** | AI-native pantry app: photograph groceries instead of typing them, then cook from what's about to expire. | [`prototypes/shelfie.html`](prototypes/shelfie.html) |

Each prototype is a single self-contained file with its own design system — they're meant to look like three different products, not three pages of one site.

> **Note on Shelfie:** its AI features (photo recognition, recipe generation, recipe import) call the Anthropic API and expect a credentialed backend, so they don't run from a static host. The UI and all flows are fully explorable; the AI paths surface their designed error states instead.

## Repository layout

```
index.html          the portfolio — case study content, styles, and JS in one file
prototypes/         the three interactive prototypes
og.png              social share card
favicon.svg         also apple-touch-icon.png
mmp210/             archived coursework — p5.js sketches
mmp240/             archived coursework — HTML/CSS exercises, Craigslist redesign
citymail/           archived coursework — CCNY CityMail redesign
```

The `mmp*` and `citymail` directories are old CUNY coursework, kept in place so existing links don't break.

## Running locally

A plain file open won't work — the pages use relative paths, so serve the directory:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Contact

[artyilin.com](https://artyilin.com) · [LinkedIn](https://www.linkedin.com/in/yilin11/)
