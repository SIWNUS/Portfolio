# Suswin Portfolio

Production-ready developer portfolio built with React, Vite, and Tailwind CSS. The app is structured around reusable sections, theme persistence, and content/data separation so it can grow into a broader personal site later.

## Folder Structure

```text
.
├── index.html
├── netlify.toml
├── package.json
├── portfolio.html
├── postcss.config.js
├── public
│   └── vite.svg
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── AboutSection.jsx
│   │   ├── CertificationsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── Reveal.jsx
│   │   ├── SectionIntro.jsx
│   │   └── ThemeToggle.jsx
│   ├── data
│   │   └── portfolio.js
│   ├── hooks
│   │   ├── useActiveSection.js
│   │   └── useTheme.js
│   ├── main.jsx
│   └── styles
│       └── index.css
├── tailwind.config.js
└── vite.config.js
```

## Run Locally

1. Install Node.js 20+.
2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open the local Vite URL shown in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

The production output will be generated in `dist/`.

## Deploy to Netlify

### Option 1: Netlify UI

1. Push this project to GitHub.
2. In Netlify, choose `Add new site` -> `Import an existing project`.
3. Connect your GitHub repository.
4. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy the site.

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy
netlify deploy --prod
```

## Notes

- Theme state is persisted in `localStorage` under `suswin-portfolio-theme`.
- Portfolio content is centralized in `src/data/portfolio.js` for easier edits.
- `netlify.toml` includes an SPA redirect so section routes continue to work after deployment.
- `portfolio.html` is preserved as the original reference file.
