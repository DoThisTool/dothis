# DoThis

**Everyday tech, step by step.**

Free, plain-English guides for people who never got a patient walkthrough — saving photos, sharing Wi‑Fi, printing, quieting notifications, and more.

No account. No ads. No obligation to pay or hand over personal data.

## Live site

**https://policysnapadmin.github.io/dothis/**

## Three separate projects

DoThis is its **own** product. It shares values with two sister tools, but they are not the same app:

| Project | What it does | Home |
|--------|----------------|------|
| **[PolicySnap](https://github.com/PolicySnapAdmin/PolicySnap)** | Privacy / policy clarity | [Repo](https://github.com/PolicySnapAdmin/PolicySnap) |
| **[CalmClick](https://calmclicktool.github.io/calmclick/)** | Check links, messages, and errors in plain English | [calmclicktool.github.io/calmclick](https://calmclicktool.github.io/calmclick/) |
| **DoThis** (this repo) | Everyday digital errands, step by step | [policysnapadmin.github.io/dothis](https://policysnapadmin.github.io/dothis/) |

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

15 short guides with:

- Plain steps (device tabs when needed)
- **You’re done when…** so success is obvious
- **Good to know** tips without jargon
- Search + categories
- Print-friendly layout

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
  downloads/          # generated offline zip
  scripts/pack.ps1
  .nojekyll           # GitHub Pages: serve static files as-is
  README.md
  OFFLINE-README.txt
  robots.txt
```

## Add a guide

Edit `data/guides.js`. Copy an existing object in `DOTHIS_GUIDES` and set `id`, `title`, `summary`, `category`, `steps`, `doneWhen`, etc.

## GitHub Pages

Static site. Settings:

1. Settings → Pages  
2. Source: **Deploy from a branch**  
3. Branch: `main` / folder: `/ (root)`  
4. Site URL: `https://policysnapadmin.github.io/dothis/`

All asset links are relative so project pages work at `/dothis/`.

## Privacy

See [privacy.html](privacy.html). Guides and search run in the browser. Larger-text preference may use `localStorage` on the device only.

## License

Content and code are free to host and improve for public good. Prefer keeping redistributions free and tracker-free.
