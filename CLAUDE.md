# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # start dev server (Turbopack)
npm run build     # production build (Turbopack)
npm run start     # serve production build
npm run lint      # run ESLint directly (eslint CLI, not next lint)
```

There are no tests configured yet.

## Stack

- **Next.js 16.2.7** — App Router only; Pages Router is not used
- **React 19.2** with canary features (View Transitions, `useEffectEvent`, Activity)
- **Tailwind CSS v4** — configured via CSS (`@import "tailwindcss"` in `globals.css`), no `tailwind.config.*` file
- **TypeScript 5**
- **Turbopack** — default for both `dev` and `build` (no `--turbopack` flag needed)

## Next.js 16 breaking changes

### Async-only Request APIs
`cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` are **async only** — the synchronous fallback was removed in v16. Always `await` them:

```tsx
// page.tsx
export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const query = await props.searchParams
}
```

Run `npx next typegen` to generate `PageProps`, `LayoutProps`, and `RouteContext` helpers.

### No `next lint` command
`next lint` is removed. Use `eslint` directly (already in `package.json` scripts). `next build` no longer runs linting automatically.

### `revalidateTag` requires a second argument
```ts
revalidateTag('posts', 'max')  // second arg is a cacheLife profile
```
Use `updateTag` (Server Actions only) for immediate cache invalidation.

### Stable cache APIs
Import without the `unstable_` prefix:
```ts
import { cacheLife, cacheTag } from 'next/cache'
```

### PPR / caching flags
`experimental.dynamicIO` and `experimental.useCache` are replaced by the top-level `cacheComponents` flag in `next.config.ts`.

### Turbopack config
`experimental.turbopack` is now top-level `turbopack` in `next.config.ts`. Custom webpack configs will cause `next build` to fail — migrate to Turbopack or pass `--webpack` explicitly.

### Removed APIs
- AMP (`next/amp`, `useAmp`, `amp` config) — fully removed
- `serverRuntimeConfig` / `publicRuntimeConfig` — use `process.env` / `NEXT_PUBLIC_` instead
- `next/config` (`getConfig`) — removed

## Tailwind v4 notes

Tailwind v4 is configured through CSS, not a JS config file. Theme tokens use `@theme inline { ... }` blocks in `globals.css`. The PostCSS plugin is `@tailwindcss/postcss`.

## Design System

These rules apply to **every** page and component written in this project. Read and follow them before writing any UI code.

### Personality & Aesthetic
- **Tactile Maximalism** — bold, layered, rich textures; never flat or sterile
- **Magazine layout** — editorial hierarchy, oversized type, deliberate whitespace as a design element
- **Chrome color typography** — headings and accent text use CSS `background-clip: text` gradient treatments (metallic/chrome feel)

### Motion
- Animations must have intention — every motion communicates state or guides attention; no decorative spin/pulse
- AWWWARDS-quality entrance animations: staggered reveals, clip-path wipes, smooth `transform` + `opacity` transitions
- Use `View Transitions` (React 19.2 / Next.js 16 built-in) for page-to-page transitions
- Respect `prefers-reduced-motion` — wrap all animations in a media query check

### Typography
- Chrome / iridescent gradient on display headings via Tailwind utilities + inline CSS
- Tight tracking on large type (`tracking-tighter`), generous leading on body
- Font: Geist Sans (already loaded in layout) for sans; Geist Mono for code/labels

### Layout & Spacing
- Responsive breakpoints: mobile → tablet → laptop → desktop (sm / md / lg / xl)
- **Section gap** is always `py-24 md:py-32` — never deviate, keep it consistent sitewide
- Max content width: `max-w-7xl mx-auto px-6 md:px-12`

### Performance
- Keep the bundle lightweight: no heavy animation libraries unless necessary; prefer CSS transitions and the Web Animations API
- Images: always use `next/image` with correct `width`/`height` or `fill`
- No layout shift — reserve space for dynamic content
