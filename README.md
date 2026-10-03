# Sajitha Madugalle Portfolio Starter

A React + Vite + TypeScript starter for a long, scrollable engineering/research portfolio.

## Sections

- About
- Education
- Experience
- Publications
- Research & Projects
- Skills
- Awards
- Life Outside the Lab
- Contact

## Features

- Fixed, collapsible left sidebar
- Light / dark themes
- Smooth section navigation
- News carousel that advances every 3 seconds
- Hero profile that docks into the sidebar after scrolling past the top section
- Responsive layout
- Placeholder images and content ready to replace

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
```

The generated site will be in `dist/`.

## GitHub Pages

If deploying as a project repository, change the `base` in `vite.config.ts`.

Example for:

`https://USERNAME.github.io/sajitha-portfolio/`

use:

```ts
base: "/sajitha-portfolio/",
```

If deploying as `USERNAME.github.io`, keep:

```ts
base: "/",
```

## Replace placeholders

Replace files inside:

- `public/images/profile/`
- `public/images/affiliations/`
- `public/images/projects/`
- `public/images/news/`
- `public/images/life/`
- `public/documents/`

The current images are intentionally generic placeholders.
