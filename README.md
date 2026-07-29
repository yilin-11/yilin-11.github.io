# yilin-11.github.io

Portfolio of **Yi Lin** — UX/UI & product designer, New York.

**→ [yilin-11.github.io](https://yilin-11.github.io)**


## Selected work

Five case studies, each following the same spine — Research → Pain points → IA → Wireframes → Validation — and none of them stopping at static frames.

| Case | What it is | Try it |
| --- | --- | --- |
| **CUNY Arts** | Responsive redesign of a page that buried free museum access for CUNY students in an 8,000-word long-read. Restructured into a filterable partner index with a map view. | [`prototypes/cuny-arts.html`](prototypes/cuny-arts.html) |
| **No Limit** | Intermittent-fasting app collapsing timer, body metrics, and community into one place, rebuilt in a v2 around frequency-first IA and non-shaming copy. | [`prototypes/no-limit.html`](prototypes/no-limit.html) |
| **Shelfie** | AI-native pantry app: photograph groceries instead of typing them, then cook from what's about to expire. | [`prototypes/shelfie.html`](prototypes/shelfie.html) |
| **Mutuo** | Skill-swapping directory — teach one thing, learn another. An early full-stack project, re-read end to end and repaired against a test suite. | [live app](https://mutuo-demo.vercel.app/) · [repo](https://github.com/yilin-11/mutuo) |
| **Foredge** | Personal reading log. Open Library fills in the author, cover and ISBN; you supply the rating, the date and the notes. | [live app](https://foredge.onrender.com/) · [repo](https://github.com/yilin-11/foredge) |

The first three are single self-contained prototype files, each with its own design system — meant to look like three different products, not three pages of one site. **Mutuo and Foredge are full-stack apps, designed and built with an AI coding agent and deployed** — Express + Sequelize and Express + PostgreSQL respectively, both live and both with their source in the open.

> **Note on Shelfie:** its AI features (photo recognition, recipe generation, recipe import) call the Anthropic API and expect a credentialed backend, so they don't run from a static host. The UI and all flows are fully explorable; the AI paths surface their designed error states instead.
>
> **Note on the two live apps:** both run on free tiers that sleep when idle, so a first visit can take up to a minute to wake up. Mutuo's login page offers a seeded demo account and fills the form in for you.

## Repository layout

```
index.html          the page: head, sidebar, workspace shell, empty viewer dialog
styles.css          every style on the site
app.js              the case-study data and everything that renders it
assets/shots/       screenshots shown inside each case study
prototypes/         the three interactive prototypes (Mutuo and Foredge live in their own repos)
og.png              social share card
favicon.svg         also apple-touch-icon.png
```

Old CUNY coursework — `mmp210/` (p5.js sketches), `mmp240/` (HTML/CSS exercises
and a Craigslist redesign) and `citymail/` (a CCNY CityMail redesign) — no longer
lives on `main`. It is kept as-is on the
[`archive/coursework`](https://github.com/yilin-11/yilin-11.github.io/tree/archive/coursework)
branch, with its history intact. Since Pages serves `main`, those paths are no
longer published.

## Running locally

A plain file open won't work — the pages use relative paths, so serve the directory:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Contact

[artyilin.com](https://artyilin.com) · [LinkedIn](https://www.linkedin.com/in/yilin11/)
