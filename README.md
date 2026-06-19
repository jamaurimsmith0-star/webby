# SmithSites — Redesign

A full dark-mode rebuild of the SmithSites landing page (React + TanStack Start + Tailwind v4).

## What changed
- **Dark theme everywhere** — deep navy/near-black background, warm gold accent, soft off-white text (previously a light theme with just a dark hero).
- **Animations added, kept restrained** — hero entrance sequence, scroll-triggered fade/slide-up reveals per section, hover micro-interactions on cards/buttons, a slow ambient glow behind the hero. All respect `prefers-reduced-motion`.
- **"Demo Sites" section removed and replaced** with a "Why Local Businesses Choose Us" section: 3 testimonial cards + an FAQ accordion (the old fake mock-website preview cards/modals are gone).
- Services, Pricing, How It Works, Contact form, and Footer were rebuilt with the same content/offer ($150 setup, $50/month) in the new dark style.

## Run it locally
```bash
npm install
npm run dev
```
Then open the local URL it prints (usually `http://localhost:3000`).

To build for production:
```bash
npm run build
npm run preview
```

## Project structure
```
src/
  routes/
    __root.tsx     -> HTML shell, fonts, meta tags
    index.tsx       -> the entire homepage (nav, hero, sections, footer)
  styles.css        -> theme tokens (colors/fonts) + animation keyframes
  router.tsx        -> TanStack Router setup
  server.ts         -> SSR entry
  lib/              -> small error-handling utilities (safe to ignore/remove)
vite.config.ts
package.json
tsconfig.json
```

The page content lives almost entirely in `src/routes/index.tsx` — that's the file to edit for copy/section changes. Colors and fonts live in `src/styles.css`.
