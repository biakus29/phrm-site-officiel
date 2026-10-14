# Prompt — Migration vers la charte graphique PHRM

> Copie-colle tout ce qui suit dans Claude Code (ou autre IA) lancée à la racine du repo cible (paie.phrm.app, recrutement.phrm.app, blog.phrm.app, compta.phrm.app, st-therese-hospital, etc.).
> Adapte juste la phrase d'introduction selon le repo.

---

## Mission

Migre l'ensemble du site vers la **charte graphique PHRM** (système de marque unifié partagé avec phrm.app et tous les sous-domaines). Le but est une cohérence visuelle 100 % entre tous les produits PHRM : mêmes couleurs, mêmes polices, même logo, même loader, même règle « zéro mélange de couleurs hors brand ».

Tu dois :

1. Remplacer le système de couleurs Tailwind générique (`gray-*`, `blue-*`, `green-*`, `purple-*`, etc.) par les **tokens PHRM** définis ci-dessous.
2. Charger les **polices Montserrat (titres) + Inter (corps)** depuis Google Fonts.
3. Remplacer le logo existant par le **SVG officiel PHRM** (fourni ci-dessous, en 4 variantes : couleur / dark / mono / favicon).
4. Implémenter le **loader animé PHRM** (reconstruction du logo P → H → R → M) en pur CSS, avec une copie inline dans `index.html` pour qu'il joue **avant le mount React/Vue/etc.**
5. N'utiliser **que** les tokens brand. Pas de mélange de couleurs (status-success/warning/error réservés à la sémantique réelle, pas à la décoration).

## 1. Palette officielle (5 ancres + modules + status)

Configure dans `tailwind.config.js` (ou équivalent) :

```js
colors: {
  phrm: {
    navy:   '#123A6D', // Primaire — bleu corporate
    sky:    '#A8D6F4', // Accent global — bleu clair
    mid:    '#1E5A9E', // Bleu intermédiaire (hover boutons)
    pale:   '#E6E9EE', // Gris neutre — surfaces légères
    dark:   '#0A1D34', // Bleu profond — navbar, footer, sections sombres
    text:   '#0A1D34', // Texte principal
    muted:  '#4A6B89', // Texte secondaire
    bg:     '#F8FAFC', // Fond de page — blanc cassé
    stroke: '#0A1D34',
  },
  module: {
    rh:     '#123A6D', // PHRM Paie & RH (= phrm.navy)
    compta: '#0EA5E9', // PHRM Comptabilité (cyan distinct)
  },
  status: {
    success: '#16A34A',
    warning: '#D97706',
    error:   '#DC2626',
    info:    '#0EA5E9',
  },
},
borderRadius: { card: '12px', btn: '8px', badge: '20px' },
fontFamily: {
  sans:    ['Inter', 'system-ui', 'sans-serif'],
  body:    ['Inter', 'system-ui', 'sans-serif'],
  display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
},
```

## 2. Typographie

Dans `index.html` (ou équivalent), ajoute dans `<head>` :

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
```

Dans le CSS global (`@layer base` ou équivalent) :

```css
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #0A1D34;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', 'Inter', system-ui, sans-serif;
  letter-spacing: -0.01em;
}
```

## 3. Logo officiel PHRM (SVG)

Crée 4 fichiers dans `public/` (ou équivalent) :

### `public/logo.svg` (version standard, fond clair)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="PHRM">
  <title>PHRM</title>
  <rect x="15" y="15" width="110" height="110" rx="3" fill="#A8D6F4"/>
  <rect x="75" y="75" width="110" height="110" rx="3" fill="#0A1D34"/>
  <g font-family="Montserrat, Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" font-weight="700" font-size="44" text-anchor="middle" dominant-baseline="central">
    <text x="60" y="55" fill="#0A1D34">P</text>
    <text x="105" y="105" fill="#FFFFFF">H</text>
    <text x="130" y="130" fill="#FFFFFF">R</text>
    <text x="158" y="158" fill="#FFFFFF">M</text>
  </g>
</svg>
```

**Spec :** carré clair `#A8D6F4` (15,15→125,125), carré marine `#0A1D34` (75,75→185,185) qui le recouvre en bas-droite. `rx=3` (arrondi subtil). P en marine dans la zone visible du carré clair, H/R/M en blanc **sur la diagonale** du carré marine (105,105 / 130,130 / 158,158). Police Montserrat 700, taille 44.

### `public/logo-dark.svg` (pour fonds sombres)

Identique sauf carré avant blanc, lettres marine :

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="PHRM">
  <title>PHRM</title>
  <rect x="15" y="15" width="110" height="110" rx="3" fill="#A8D6F4"/>
  <rect x="75" y="75" width="110" height="110" rx="3" fill="#FFFFFF"/>
  <g font-family="Montserrat, Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" font-weight="700" font-size="44" text-anchor="middle" dominant-baseline="central">
    <text x="60" y="55" fill="#0A1D34">P</text>
    <text x="105" y="105" fill="#0A1D34">H</text>
    <text x="130" y="130" fill="#0A1D34">R</text>
    <text x="158" y="158" fill="#0A1D34">M</text>
  </g>
</svg>
```

### `public/logo-mono.svg` (monochrome — print, embroidery, currentColor)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="PHRM" fill="currentColor">
  <title>PHRM</title>
  <rect x="15" y="15" width="110" height="110" rx="3" fill="none" stroke="currentColor" stroke-width="4"/>
  <rect x="75" y="75" width="110" height="110" rx="3" fill="currentColor"/>
  <g font-family="Montserrat, Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" font-weight="700" font-size="44" text-anchor="middle" dominant-baseline="central">
    <text x="60" y="55" fill="currentColor">P</text>
    <text x="105" y="105" fill="#FFFFFF">H</text>
    <text x="130" y="130" fill="#FFFFFF">R</text>
    <text x="158" y="158" fill="#FFFFFF">M</text>
  </g>
</svg>
```

### `public/favicon.svg` (lisibilité optimisée pour onglets)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="PHRM">
  <title>PHRM</title>
  <rect x="15" y="15" width="110" height="110" rx="4" fill="#A8D6F4"/>
  <rect x="75" y="75" width="110" height="110" rx="4" fill="#0A1D34"/>
  <g font-family="Montserrat, Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" font-weight="800" text-anchor="middle" dominant-baseline="central">
    <text x="60" y="55" font-size="50" fill="#0A1D34">P</text>
    <text x="105" y="105" font-size="48" fill="#FFFFFF">H</text>
    <text x="130" y="130" font-size="48" fill="#FFFFFF">R</text>
    <text x="158" y="158" font-size="48" fill="#FFFFFF">M</text>
  </g>
</svg>
```

Référence le favicon dans `<head>` :

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="theme-color" content="#123A6D" />
```

## 4. Loader animé (composant + boot inline)

### 4a. Composant React (ou équivalent Vue/Svelte) — `LogoLoader`

Crée un composant qui rend le SVG du logo avec une animation 2,8 s en boucle infinie reconstruisant le logo : carré clair glisse depuis la gauche → carré marine glisse depuis le bas-droite → P → H → R → M descendent en cascade.

CSS keyframes (à inliner via `<style>` dans le SVG ou dans le CSS global) :

```css
.phrm-l-sq { transform-box: fill-box; transform-origin: center; }
.phrm-l-sq-back  { animation: phrmLSqBack  2.8s ease-out infinite; }
.phrm-l-sq-front { animation: phrmLSqFront 2.8s ease-out infinite; }
.phrm-l-letter {
  transform-box: fill-box;
  transform-origin: center;
  animation-duration: 2.8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}
.phrm-l-letter-p { animation-name: phrmLLp; }
.phrm-l-letter-h { animation-name: phrmLLh; }
.phrm-l-letter-r { animation-name: phrmLLr; }
.phrm-l-letter-m { animation-name: phrmLLm; }

@keyframes phrmLSqBack {
  0%        { opacity: 0; transform: translateX(-18px); }
  18%, 100% { opacity: 1; transform: translateX(0); }
}
@keyframes phrmLSqFront {
  0%, 10%   { opacity: 0; transform: translate(14px, 14px); }
  28%, 100% { opacity: 1; transform: translate(0, 0); }
}
@keyframes phrmLLp {
  0%, 28%   { opacity: 0; transform: translateY(-8px); }
  38%, 100% { opacity: 1; transform: translateY(0); }
}
@keyframes phrmLLh {
  0%, 38%   { opacity: 0; transform: translateY(-8px); }
  48%, 100% { opacity: 1; transform: translateY(0); }
}
@keyframes phrmLLr {
  0%, 48%   { opacity: 0; transform: translateY(-8px); }
  58%, 100% { opacity: 1; transform: translateY(0); }
}
@keyframes phrmLLm {
  0%, 58%   { opacity: 0; transform: translateY(-8px); }
  68%, 100% { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .phrm-l-sq-back, .phrm-l-sq-front, .phrm-l-letter {
    animation: none; opacity: 1; transform: none;
  }
}
```

SVG du loader (à utiliser dans le composant) :

```html
<svg viewBox="0 0 200 200" aria-hidden="true">
  <rect class="phrm-l-sq phrm-l-sq-back"  x="15" y="15" width="110" height="110" rx="3" fill="#A8D6F4" />
  <rect class="phrm-l-sq phrm-l-sq-front" x="75" y="75" width="110" height="110" rx="3" fill="#0A1D34" />
  <g font-family="Montserrat, Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" font-weight="700" font-size="44" text-anchor="middle" dominant-baseline="central">
    <text class="phrm-l-letter phrm-l-letter-p" x="60"  y="55"  fill="#0A1D34">P</text>
    <text class="phrm-l-letter phrm-l-letter-h" x="105" y="105" fill="#FFFFFF">H</text>
    <text class="phrm-l-letter phrm-l-letter-r" x="130" y="130" fill="#FFFFFF">R</text>
    <text class="phrm-l-letter phrm-l-letter-m" x="158" y="158" fill="#FFFFFF">M</text>
  </g>
</svg>
```

3 tailles via classes utilitaires : `w-12 h-12` (sm, Suspense de section), `w-24 h-24` (md, défaut), `w-40 h-40` (lg, plein écran).

### 4b. Boot loader inline dans `index.html`

**Critique** : ce loader doit jouer **avant que le framework JS ne soit téléchargé** (premier paint). Place-le directement dans `<div id="root">` (ou `#app`) — il sera remplacé naturellement quand React/Vue prend la main au premier render.

Dans `<head>` de `index.html`, ajoute :

```html
<style>
  html, body { margin: 0; padding: 0; }
  body { background: #F8FAFC; }

  .phrm-boot {
    position: fixed; inset: 0;
    display: flex; align-items: center; justify-content: center; flex-direction: column;
    gap: 1.25rem; background: #F8FAFC; z-index: 9999;
  }
  .phrm-boot__logo { width: 140px; height: 140px; }
  .phrm-boot__label {
    font-family: 'Montserrat', 'Inter', system-ui, sans-serif;
    font-size: 11px; font-weight: 600;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: #4A6B89;
  }

  .phrm-boot-sq { transform-box: fill-box; transform-origin: center; }
  .phrm-boot-sq-back  { animation: phrmBootSqBack  2.8s ease-out infinite; }
  .phrm-boot-sq-front { animation: phrmBootSqFront 2.8s ease-out infinite; }
  .phrm-boot-l {
    animation-duration: 2.8s; animation-iteration-count: infinite; animation-timing-function: ease-out;
    transform-box: fill-box; transform-origin: center;
  }
  .phrm-boot-l-p { animation-name: phrmBootLP; }
  .phrm-boot-l-h { animation-name: phrmBootLH; }
  .phrm-boot-l-r { animation-name: phrmBootLR; }
  .phrm-boot-l-m { animation-name: phrmBootLM; }

  @keyframes phrmBootSqBack  { 0% { opacity: 0; transform: translateX(-18px); } 18%,100% { opacity: 1; transform: translateX(0); } }
  @keyframes phrmBootSqFront { 0%,10% { opacity: 0; transform: translate(14px,14px); } 28%,100% { opacity: 1; transform: translate(0,0); } }
  @keyframes phrmBootLP { 0%,28% { opacity: 0; transform: translateY(-8px); } 38%,100% { opacity: 1; transform: translateY(0); } }
  @keyframes phrmBootLH { 0%,38% { opacity: 0; transform: translateY(-8px); } 48%,100% { opacity: 1; transform: translateY(0); } }
  @keyframes phrmBootLR { 0%,48% { opacity: 0; transform: translateY(-8px); } 58%,100% { opacity: 1; transform: translateY(0); } }
  @keyframes phrmBootLM { 0%,58% { opacity: 0; transform: translateY(-8px); } 68%,100% { opacity: 1; transform: translateY(0); } }

  @media (prefers-reduced-motion: reduce) {
    .phrm-boot-sq, .phrm-boot-l { animation: none; opacity: 1; transform: none; }
  }
</style>
```

Dans le `<body>`, ouvre `#root` (ou `#app`) avec le SVG du loader à l'intérieur. React/Vue remplacera ce contenu au premier render :

```html
<div id="root">
  <div class="phrm-boot" role="status" aria-live="polite" aria-label="Chargement de PHRM">
    <svg class="phrm-boot__logo" viewBox="0 0 200 200" aria-hidden="true">
      <rect class="phrm-boot-sq phrm-boot-sq-back"  x="15" y="15" width="110" height="110" rx="3" fill="#A8D6F4" />
      <rect class="phrm-boot-sq phrm-boot-sq-front" x="75" y="75" width="110" height="110" rx="3" fill="#0A1D34" />
      <g font-family="Montserrat, Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" font-weight="700" font-size="44" text-anchor="middle" dominant-baseline="central">
        <text class="phrm-boot-l phrm-boot-l-p" x="60"  y="55"  fill="#0A1D34">P</text>
        <text class="phrm-boot-l phrm-boot-l-h" x="105" y="105" fill="#FFFFFF">H</text>
        <text class="phrm-boot-l phrm-boot-l-r" x="130" y="130" fill="#FFFFFF">R</text>
        <text class="phrm-boot-l phrm-boot-l-m" x="158" y="158" fill="#FFFFFF">M</text>
      </g>
    </svg>
    <span class="phrm-boot__label">Chargement…</span>
  </div>
</div>
```

## 5. Migration des classes Tailwind hors-brand vers les tokens PHRM

Applique ce mapping de remplacement (utilisable via `sed`, regex IDE, ou Edit en masse) sur **tous** les fichiers `.tsx`, `.ts`, `.jsx`, `.vue`, `.html`, `.svelte` du projet :

```text
text-gray-700/800/900     → text-phrm-text
text-gray-500/600         → text-phrm-muted
text-gray-400             → text-phrm-muted/60
text-gray-300             → text-phrm-pale
bg-gray-50                → bg-phrm-bg
bg-gray-100/200           → bg-phrm-pale
bg-gray-800/900           → bg-phrm-dark
border-gray-100/200       → border-phrm-pale
border-gray-800           → border-phrm-dark

text-blue-600/700/800/900 → text-phrm-navy
text-blue-500             → text-phrm-mid
text-blue-200/300/400     → text-phrm-sky
bg-blue-50                → bg-phrm-sky/20
bg-blue-100               → bg-phrm-sky/30
bg-blue-500               → bg-phrm-mid
bg-blue-600/700           → bg-phrm-navy
border-blue-100           → border-phrm-sky/40
border-blue-200           → border-phrm-sky/50
from-blue-* / to-blue-*   → équivalents phrm-navy / phrm-mid / phrm-sky

text-green-*              → text-status-success (UNIQUEMENT si sémantique : checkmark, validation, statut OK)
bg-green-50/100           → bg-status-success/10
bg-green-400/500/600/700  → bg-status-success
border-green-*            → border-status-success/30

text-red-600/700          → text-status-error
bg-red-50                 → bg-status-error/10
bg-red-400                → bg-status-error

text-yellow-400/600/700   → text-status-warning
bg-yellow-100             → bg-status-warning/15
bg-yellow-400             → bg-status-warning

text-purple-600/700       → text-module-compta
bg-purple-50              → bg-module-compta/10
bg-purple-100             → bg-module-compta/20
bg-purple-500/600         → bg-module-compta
border-purple-100/200     → border-module-compta/30

text-indigo-700           → text-phrm-navy
bg-indigo-100             → bg-phrm-sky/30

text-orange-600           → text-status-warning
bg-orange-50              → bg-status-warning/10
bg-orange-100             → bg-status-warning/15
border-orange-200         → border-status-warning/30
```

**Règle d'or** : après migration, `grep -rE "(bg|text|border|from|to|via|ring)-(gray|blue|green|red|yellow|purple|indigo|pink|orange|cyan|teal|emerald|lime|amber|fuchsia|violet|slate|zinc|neutral|stone|rose)-[0-9]+"` doit retourner **zéro match**.

**Attention au sed greedy** : `bg-green-500` peut être matché par le pattern `bg-green-50` si tu ordonnes les substitutions n'importe comment. **Traite toujours les patterns avec suffixe plus long en premier** (`-500` avant `-50`).

**Status colors = sémantique uniquement** :
- `status-success` (vert) : checkmark de validation, indicateur "OK / conforme", delta positif. **Pas pour la déco**.
- `status-warning` (orange) : alerte, étoiles de notation, avis.
- `status-error` (rouge) : erreurs réelles, suppression, likes (red heart).
- `status-info` (cyan) : info neutre, badges informatifs.

Tout le reste (cards décoratives, icônes brand, accents) → **`phrm-navy` / `phrm-sky` / `phrm-mid` / `phrm-pale` / `module-compta`**.

## 6. Composants Tailwind `@layer components` (boutons + cards + badge)

Ajoute dans le CSS global :

```css
@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 bg-phrm-navy text-white font-semibold rounded-btn px-5 py-2.5 transition-colors;
  }
  .btn-primary:hover { @apply bg-phrm-mid; }

  .btn-accent {
    @apply inline-flex items-center justify-center gap-2 bg-phrm-sky text-phrm-dark font-semibold rounded-btn px-5 py-2.5 transition-colors;
  }

  .btn-outline {
    @apply inline-flex items-center justify-center gap-2 bg-transparent text-phrm-navy font-semibold rounded-btn px-5 py-2.5 border-[1.5px] border-phrm-navy transition-colors hover:bg-phrm-pale;
  }

  .card {
    @apply bg-white rounded-card p-6 border border-phrm-navy/15;
  }
  .card-rh    { border-top: 3px solid #123A6D; }
  .card-compta { border-top: 3px solid #0EA5E9; }

  .badge-compliance {
    @apply inline-flex items-center gap-1.5 rounded-badge px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-phrm-navy;
    background: rgba(157, 232, 255, 0.15);
    border: 0.5px solid rgba(157, 232, 255, 0.4);
  }
}
```

## 7. Liens externes inter-produits (cross-linking PHRM)

Utilise ces URLs canoniques pour les liens entre produits PHRM :

| Cible | URL canonique |
|---|---|
| Landing principale | `https://phrm.app` |
| Paie & RH | `https://paie.phrm.app` |
| Comptabilité OHADA | `https://compta.phrm.app` |
| Recrutement / offres | `https://recrutement.phrm.app` |
| Blog | `https://blog.phrm.app` |
| Login admin | `https://paie.phrm.app/client-admin-login` |
| Inscription client | `https://paie.phrm.app/register-client` |
| Email contact | `contact@phrm.app` |

L'ancien domaine `phrmapp.com` est **obsolète** — ne le reintroduit jamais.

## 8. Livrables attendus

À la fin du chantier, dans le repo cible :

1. ✅ `tailwind.config.js` (ou équivalent) contient les tokens phrm/module/status, les fontFamily Montserrat+Inter, les borderRadius card/btn/badge.
2. ✅ `index.html` charge Google Fonts (Montserrat 500/600/700 + Inter 400/500/600), favicon SVG, et contient le boot loader inline `.phrm-boot-*`.
3. ✅ `public/logo.svg` + `public/logo-dark.svg` + `public/logo-mono.svg` + `public/favicon.svg` créés.
4. ✅ Composant `LogoLoader` créé et utilisé dans tous les `<Suspense>` / écrans de chargement.
5. ✅ CSS global avec `@layer base` (typo) + `@layer components` (btn / card / badge).
6. ✅ `grep -rE "(bg|text|border|from|to)-(gray|blue|green|red|yellow|purple|indigo|orange|pink|cyan|teal|slate|...)-[0-9]+"` retourne **zéro match** dans `src/`.
7. ✅ Build de production passe sans erreur (`npm run build`).
8. ✅ Visuel : le site a une apparence **identique** au landing phrm.app — mêmes nuances de bleu corporate, même typo Montserrat sur les titres, même logo, même séquence de chargement.

## 9. Rappel important — règles à respecter

- ❌ **Ne pas** réintroduire `phrm-light`, `phrm-dark` (ancienne version #0F3B67), ou d'autres tokens hérités. La palette ci-dessus est définitive.
- ❌ **Ne pas** ajouter de couleurs hors-brand pour la décoration (vert pour "OK", orange pour différencier des cards, etc.) — utilise les nuances de `phrm-*` pour cela.
- ❌ **Ne pas** utiliser DM Sans, Poppins, Roboto ou autres polices — uniquement Montserrat (titres) et Inter (corps).
- ❌ **Ne pas** modifier les coordonnées du logo (P=60,55 / H=105,105 / R=130,130 / M=158,158) — c'est la position officielle de la marque.
- ✅ **Toujours** garder la diagonale HRM dans le carré marine et le P dans le carré clair.
- ✅ **Toujours** conserver `@media (prefers-reduced-motion: reduce)` qui désactive les animations du loader.

---

**Quand tu as fini**, fais un commit avec le message :
`feat(brand): align with PHRM design system (palette, fonts, logo, loader)`

Et confirme-moi visuellement (`npm run dev` + screenshot ou description) que le résultat matche le landing phrm.app.
