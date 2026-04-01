# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server (Vite)
npm run build     # Type-check (tsc -b) then build for production
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

No test suite is configured.

## Architecture

This is a personal portfolio site for Bradley Thompson — a React 19 + TypeScript SPA built with Vite, deployed to GitHub Pages at `bradlet.com`.

**Routing:** Uses `HashRouter` (required for GitHub Pages static hosting — no server-side routing). Three routes: `/`, `/experience`, `/projects`, all wrapped in a shared `Layout`.

**Data layer:** All content lives in `src/data/` as typed TypeScript constants — no API calls, no CMS. To update resume content, edit these files:
- `src/data/experience.ts` — work history (`ExperienceEntry[]`) and education (`EducationEntry[]`)
- `src/data/skills.ts` — skill categories (`SkillCategory[]`)
- `src/data/projects.ts` — project showcase (`Project[]`)

**Styling:** CSS Modules per component/page, plus `src/styles/globals.css` for CSS custom properties (design tokens). All spacing, colors, and typography are defined as CSS variables in `src/styles/globals.css` — use those instead of hardcoding values (e.g. `var(--color-accent)`, `var(--spacing-md)`). Fonts: DM Sans (body) and JetBrains Mono (mono).

**Node version:** CI uses Node 20 — match locally for parity.

**Deployment:** Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build`, copies `CNAME` into `dist/`, and deploys to GitHub Pages.

## Feature Flags

Lightweight, dumb feature flagging is configured in `src/config/features.ts`. Toggle boolean flags to enable/disable features without redeployment:

```typescript
export const features = {
  blog: false,  // Set to true to enable blog routes locally
};
```

To test a feature locally, change the flag to `true` and Vite will hot-reload. Commit with the flag set to `false` to keep the feature disabled on the live site.
