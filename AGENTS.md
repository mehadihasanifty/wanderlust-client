<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wanderlust

Next.js 16 (App Router) + React 19 app. All source lives under `src/` (`src/app`, `src/components`, `src/hooks`, `src/lib`); there is no top-level `app/` despite README hints.

## Commands

- `npm run dev` — dev server (Turbopack is default in Next 16; port 3000)
- `npm run lint` — the only check configured; there are no tests, CI workflows, formatters, or typecheck script. For type checking run `npx tsc --noEmit`.
- Verify changes with `npm run lint` + `npx tsc --noEmit`; `npm run build` when touching routes/config/RSC boundaries.

## Framework quirks (breaking-change territory)

- Experimental Next flags enabled in `next.config.ts`: `cacheComponents`, `partialPrefetching`, `reactCompiler` (React Compiler via `babel-plugin-react-compiler`). This means: do not reach for manual `useMemo`/`useCallback`/`React.memo`; do not use legacy `$` cache-hoisting or mixing dynamic data access patterns with cacheComponents.
- Tailwind is v4, CSS-first: all theme config lives in `src/app/globals.css` (`@theme` variables). There is no `tailwind.config.*` file — do not create one or reference one.

## shadcn/ui v4 (@base-ui, NOT Radix)

- `components.json` uses style `base-nova`. Generated components in `src/components/ui/*` import primitives from `@base-ui/react/*`, not `radix-ui`. When adding or editing components, follow Base UI import paths.
- The `cn` helper comes from the `cn` npm package (`import { cn } from "cn"`), not from `@/lib/utils` re-exports in older shadcn setups; `src/lib/utils.ts` exists for other utils.
- Add new components with the shadcn CLI (`npx shadcn add <name>`); aliases: `@/components`, `@/components/ui`, `@/hooks`, `@/lib` (see `components.json`).

