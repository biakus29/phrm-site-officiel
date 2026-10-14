# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing / landing page for **PHRM**, an HR management SaaS suite targeting the Cameroon / OHADA market (CNPS-compliant payroll, recruitment, CV verification, employee self-service, OHADA accounting). This repo is **only the public landing site** — the products live on the `phrm.app` domain (main domain `phrm.app`; RH/Paie app at `paie.phrm.app`, accounting at `compta.phrm.app`), and CTAs (`/register-client`, `/client-admin-login`, `/offres`, `/blog`) link out to `paie.phrm.app`. The old `phrmapp.com` domain is obsolete — do not reintroduce it. Scaffolded from a Bolt.new template (`.bolt/`).

Content is written in **French** (the target market); keep new copy in French unless told otherwise.

## Commands

```bash
npm run dev        # Vite dev server
npm run build      # production build to dist/
npm run preview    # serve the production build
npm run lint       # eslint . (flat config in eslint.config.js)
npm run typecheck  # tsc --noEmit -p tsconfig.app.json
```

There is **no test framework** configured. Deployment is Vercel (`vercel.json`): `npm run build` → `dist/`.

## Architecture

- **Single-page composition.** [src/App.tsx](src/App.tsx) renders the whole site as a vertical stack of section components. There is no router (`react-router-dom` is a dependency but unused for page routing). Hero/About/Stats/Features load eagerly for fast first paint; the rest are `React.lazy` + `<Suspense>` for bundle splitting.
- **Component layout:** `src/components/sections/` (one file per landing-page band), `layout/` (Navbar, Footer), `modals/` (FormationModal), `ui/` (shared primitives).
- **PHRM product suite (the "écosystème" section).** PHRM is a multi-product suite; this site is the shared landing page that presents and links out to each product. The "L'écosystème PHRM" section is **data-driven**: edit [src/data/modules.ts](src/data/modules.ts) to add/change a product (RH & Paie, Comptabilité OHADA, …). [Ecosystem.tsx](src/components/sections/Ecosystem.tsx) maps each entry through the reusable [ModuleSection.tsx](src/components/sections/ModuleSection.tsx) (alternating image/text banner). Per-module accent classes in `modules.ts` (`accentGradient`, `badgeBg`, `badgeText`) **must be full literal Tailwind strings** so the JIT detects them. Module images live under `public/img/modules/` and fall back to `/logophrm.png` via `onError` if missing.
- **Data layer = Firebase Firestore, read-only.** [src/lib/firebase.ts](src/lib/firebase.ts) initializes Firestore only (no Auth, no Storage). Two collections are read via hooks in `src/hooks/`:
  - `useBlog` → `blogPosts` collection (ordered by `createdAt`).
  - `useFormations` → `formations` collection (client-side filters `isActive` and sorts by `updatedAt`/`createdAt`).
  
  Both fetch once in `useEffect` and return `{ data, loading }`. Documents are untyped (`any`); fields like `formation.contenu`, `prerequis`, `duree` are accessed defensively.
- The Firebase web config in `src/lib/firebase.ts` is **committed and public** (standard for Firestore web SDK — access is gated by Firestore security rules, not by hiding the config). Do not treat it as a leaked secret.

## Design system (brand)

The unified PHRM brand system lives in [tailwind.config.js](tailwind.config.js) (`theme.extend`) and [src/index.css](src/index.css). See the design brief for rationale (a `CLAUDE.md`-style brief was provided by the brand expert).

- **Colors are Tailwind tokens** (no more hand-written `!important` utilities). Primary = `phrm-navy` (#0F3B67); `phrm-sky` (#9DE8FF) accent; `phrm-dark` (#072537) for navbar/footer/dark sections; plus `phrm-mid/pale/text/muted/bg`. Per-module accents: `module-rh` (navy), `module-compta` (#0EA5E9 cyan). Semantic only: `status-success/warning/error/info`. **Do not use raw Tailwind `blue-*`/`green-*`/`purple-*` as brand colors** — green/etc. are reserved for status. (Historical note: the old `phrm-dark` = #0F3B67 was renamed to `phrm-navy`; `phrm-light` → `phrm-sky`.)
- **Fonts**: headings = `DM Sans` (`font-display`), body/numbers = `Inter` (default `font-sans`/`font-body`), loaded via `<link>` in [index.html](index.html). Base rules in `index.css` (`@layer base`) set `h1–h6` to DM Sans and body to Inter.
- **Component classes** in `index.css` `@layer components`: `.btn-primary` / `.btn-accent` / `.btn-outline`, `.card` (+ `.card-rh` / `.card-compta`), `.badge-compliance`. Reach for these when refactoring sections toward the design system.
- **Lottie animations.** Heavy JSON animations live in `public/animations/` (not bundled in JS). Use [src/components/ui/LottieAnimation.tsx](src/components/ui/LottieAnimation.tsx) which fetches the JSON at runtime via `lottie-react`. The library ships with `lottie-web` (~324 KB / 84 KB gzipped) which is loaded only with the section that uses it, so always place Lottie consumers in lazy-loaded sections (the `Suspense` wrappers in `App.tsx`). Vite emits an `eval` warning from `lottie-web` — it's expected and harmless.
- **`useRealTimeStats` is fake.** [src/hooks/useRealTimeStats.ts](src/hooks/useRealTimeStats.ts) seeds hardcoded numbers and increments them with `Math.random()` on a timer to simulate live activity. It does not read from any backend.
- **i18n is scaffolded but not wired up.** [src/i18n/index.js](src/i18n/index.js) configures i18next, but `main.tsx` never imports it, nothing calls `useTranslation`, and the `./locales/{en,fr}.json` files it imports do not exist. The site is effectively French-only hardcoded strings — don't assume translation works.
- **`src/components/ReceiptGenerator.tsx` is orphaned** — not imported anywhere in the app.
- Icons come from `lucide-react` only (per the Bolt template prompt); avoid adding other icon/UI-theme packages.

## TypeScript / lint config

- Strict mode is on, plus `noUnusedLocals` / `noUnusedParameters` — unused imports and vars fail the typecheck.
- Project references split config: `tsconfig.app.json` (app, the one `typecheck` uses) and `tsconfig.node.json` (Vite config). `allowImportingTsExtensions` is enabled, so app imports use explicit `.tsx`/`.ts` paths where present.
