# DoThis

**Everyday tech, step by step.**

Free, plain-English guides for people who never got a patient walkthrough — saving photos, sharing Wi‑Fi, printing, quieting notifications, and more.

No account. No ads. No obligation to pay or hand over personal data.

## Live site

**https://dothistool.github.io/dothis/**

Repo: [DoThisTool/dothis](https://github.com/DoThisTool/dothis)

## Three separate projects

DoThis lives under its **own** GitHub organization (`DoThisTool`), separate from PolicySnap and CalmClick:

| Project | Organization / home | What it does |
|--------|----------------------|--------------|
| **[PolicySnap](https://github.com/PolicySnapAdmin/PolicySnap)** | PolicySnapAdmin | Privacy / policy clarity |
| **[CalmClick](https://calmclicktool.github.io/calmclick/)** | [CalmClickTool](https://github.com/CalmClickTool) | Check links, messages, and errors in plain English |
| **DoThis** (this repo) | [DoThisTool](https://github.com/DoThisTool) | Everyday digital errands, step by step |

## Open locally

1. Open `index.html` in any modern browser (Chrome, Edge, Firefox).
2. Search or pick a category → open a guide → follow the steps.
3. Use **Print this guide** for a paper copy, or the **AA** button for larger text.

Works fully offline once the folder is on your computer.

### Offline zip

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\pack.ps1
```

Creates `downloads/dothis-offline.zip` for the site download button.

## What’s included

15 short guides with plain steps, device tabs when needed, **You’re done when…**, search, categories, and print-friendly layout.

## Project layout

```
dothis/
  index.html
  guide.html
  privacy.html
  styles.css
  app.js
  config.js
  data/guides.js
  downloads/
  scripts/pack.ps1
  .nojekyll
  README.md
  OFFLINE-README.txt
  robots.txt
```

## Add a guide

Edit `data/guides.js`. Copy an existing object in `DOTHIS_GUIDES` and set `id`, `title`, `summary`, `category`, `steps`, `doneWhen`, etc.

## GitHub Pages

1. Settings → Pages  
2. Source: **Deploy from a branch**  
3. Branch: `main` / folder: `/ (root)`  
4. Site URL: `https://dothistool.github.io/dothis/`

## Privacy

See [privacy.html](privacy.html). Guides and search run in the browser.

## License

Content and code are free to host and improve for public good. Prefer keeping redistributions free and tracker-free.
