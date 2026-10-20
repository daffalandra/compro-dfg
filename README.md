# DFG — Data Fine & Good

Company profile site for **DFG**, an AI data operations firm based in Jakarta, Indonesia, serving enterprise AI teams across Southeast Asia.

> Fine in detail, Good in use.

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** for scroll and entrance animations
- **Lucide React** for icons
- **Oxlint** for linting

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # typecheck + production build
npm run lint      # oxlint
npm run preview   # preview the production build
```

## Project structure

```
src/
├── App.tsx                 # Page shell and section order
├── main.tsx                # Entry point (LanguageProvider + StrictMode)
├── index.css               # Tailwind theme tokens and global base styles
├── components/             # One file per page section
├── data/content.ts         # All bilingual site content (single source of truth)
├── i18n/LanguageContext.tsx # EN/ID language state, persistence, and pick()
└── lib/motion.ts           # Shared Framer Motion presets
```

## Content and i18n

Every user-facing string lives in `src/data/content.ts` as a `Bilingual`
value (`{ en, id }`). Resolve it at render time with `pick(lang, value)`.

Language selection is persisted to `localStorage` under `dfg-lang`, falls back
to the browser locale, and keeps `document.documentElement.lang` in sync.

### Adding a section

1. Add the section component under `src/components/`.
2. Add its bilingual copy to `src/data/content.ts` with stable `id` fields for
   any list items used as React keys.
3. Register it in `src/App.tsx` and add a `navLinks` entry if it needs one.
4. Import shared animation presets from `src/lib/motion.ts` rather than
   redefining them.

## Design conventions

- Single restrained indigo accent (`--color-accent-*`) on a zinc/white base.
- Inter for all type; `-0.02em` tracking on headings.
- Consistent section rhythm: `max-w-6xl`, `px-6`, `py-32 md:py-40`.
- Motion respects `prefers-reduced-motion` (CSS-level baseline).
- Interactive elements must have visible focus states and accessible names.

## Deployment

Deployed with the [Vercel CLI](https://vercel.com/docs/cli). Build output goes
to `dist/`.
