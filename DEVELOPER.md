# Developer Guide

## Architecture Overview

This is a React 19 + Vite 6 static marketing site. It pre-renders to HTML at build time (SSG) and uses client-side routing for navigation.

### Routing

All routes are defined in `src/config/routes.config.ts` as the single source of truth.

```ts
// routes.config.ts
export const ROUTES: RouteEntry[] = [
  { path: '/', page: 'home', prerender: true, meta: { ... } },
  { path: '/telecommunications', page: 'telecommunications', prerender: true, meta: { ... } },
  // ...
];

// Derived lookups
export const ROUTE_MAP = Object.fromEntries(ROUTES.map(r => [r.path, r.page]));
export const PAGE_PATH_MAP = Object.fromEntries(ROUTES.map(r => [r.page, r.path]));
```

To add a new page:
1. Add the route entry to `ROUTES` in `routes.config.ts`
2. Create the component (lazy-loaded via `ssrSafeLazy` if it's a page)
3. Add a `case` in `App.tsx` for client-side rendering
4. Add the `registerSSRModule` call in `scripts/prerender.ts` for SSG

### Code Splitting

Page components use `ssrSafeLazy()` — a wrapper around `React.lazy()` that works with `renderToString()` (which doesn't support Suspense).

```ts
// ssrSafeLazy.ts
export function ssrSafeLazy<T>(factory: Factory<T>, registryKey: string): React.LazyExoticComponent<T> {
  if (typeof window !== 'undefined') {
    return lazy(factory);  // Browser: use React.lazy
  }
  // SSR: look up pre-registered module
  const SSRPage = (props) => React.createElement(ssrRegistry.get(registryKey), props);
  return SSRPage as unknown as React.LazyExoticComponent<T>;
}
```

In `scripts/prerender.ts`, register modules before rendering:
```ts
registerSSRModule('/telecommunications', TelecommunicationsPage);
```

### Contact Forms

Two forms use Netlify Forms:
- `ContactQuoteForm` (homepage) — form-name: `contact-quote`
- `ContactModal` (global) — form-name: `contact-modal`

Both submit via `fetch('/', { method: 'POST' })` with `application/x-www-form-urlencoded`.

### Testing

Tests use Vitest + React Testing Library. Run with:
```bash
npm test           # Single run
npm run test:watch # Watch mode
```

Test files are co-located: `Component.test.tsx` next to `Component.tsx`.

### Linting

ESLint flat config (`eslint.config.js`) with:
- `@typescript-eslint` for TS rules
- `eslint-plugin-react-hooks` for hook rules
- `eslint-plugin-react-refresh` for fast refresh
- Prettier for formatting

The `react-hooks/set-state-in-effect` rule is disabled (too strict for prop-sync patterns).

### Build Pipeline

```
npm run build
  └── vite build          (outputs to dist/)
  └── prerender.ts        (generates static HTML for 31 routes)
  └── generate-sitemap.ts (generates sitemap.xml)
```

### Performance

- Main bundle: ~266KB (was 394KB before code splitting)
- 14 lazy chunks for page components
- Long-lived cache headers for hashed assets
- Preloads critical fonts and images
