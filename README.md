# albertollamass.github.io — Portfolio

Personal portfolio of **Alberto Llamas González**, Software Engineer in Madrid.
Built with **React + Vite** (static output, no server needed).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build & preview

```bash
npm run build    # outputs to dist/
npm run preview
```

## Deploy (GitHub Pages)

Pushes to the `source` branch auto-deploy via `.github/workflows/deploy.yml`
(build → upload `dist/` → GitHub Pages). One-time setup in the repo:

1. Settings → Pages → **Source: GitHub Actions**.
2. Push to `source` and wait ~1 min. The site goes live at
   `https://albertollamass.github.io/`.

The old `main` branch (Gatsby build output) is no longer needed and can be deleted.

## Content

- All CV data lives in `src/data/cv.js` (profile, skills, experience, education, languages, uses).
- Images live in `public/images/` and are served as `/images/...`.

## Pending assets

- `public/Alberto_Llamas_Gonzalez_CV.pdf` — export your CV to PDF with exactly
  this name. The Header, hero and Education buttons link to it.
- Photos (see previous guide): replace files in `public/images/`
  (`me.jpg` avatar 400x400, `orla.jpg` portrait 800x1000,
  `bbal.jpg` / `bow.jpg` lifestyle 800x1000, project screenshots 1200x800).
