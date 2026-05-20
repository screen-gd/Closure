# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router project. Main route code lives in `app/`, with `app/page.tsx` containing the landing page and `app/globals.css` holding the site styling. Shared React components live in `components/`, including shadcn/ui primitives in `components/ui/`. Utility helpers belong in `lib/`. Prisma configuration is in `prisma/schema.prisma`. Static assets should go in `public/`; design and reference images currently live in `Roadmap Nexus-images/`, and product planning notes are in `Documents/`.

## Stack

The active stack is Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Prisma, PostgreSQL, Lucide Icons, and `@thesvg/react` for brand SVGs. Pretext is being considered for future text rendering; verify its current package/API before adding it, and keep hero text semantic and SSR-safe.

## Goal

Roadmap Nexus is a premium website for selling an open-source, self-hostable product-ops starter. The website must feel minimalist, professional, grid-based, SaaS-ready, and conversion-focused. It should make buyers understand that they can own their roadmap, changelog, and feedback layer instead of renting separate SaaS tools.

## Website Information

The current work is the marketing website only, not the full product. Use the files in `Documents/` for product and positioning context: `Codex Project Brief.md`, `Free Version Website Draft.md`, and `Roadmap Nexus – Market, Product, and Website Blueprint (2026).md`. Preserve the current visual direction: subtle off-white grid background, generous whitespace, clean typography, premium SaaS hierarchy, and polished product imagery.

## Future Webapp Information

The later webapp will include three public modules: roadmap, changelog, and feedback board. It should support a single self-hosted project first, with Prisma/PostgreSQL as the data layer. Do not add dashboard/product functionality to the marketing site unless explicitly requested; keep app-specific code isolated when it is introduced.

## Routing & Image Assets

Use App Router routes under `app/`. Keep the landing page at `/` unless a route change is requested. Do not rename or move existing image assets without updating every reference. Current reference assets live in `Roadmap Nexus-images/`, including `Logo.webp`, `Logo + Text.webp`, `Hero Section Inspiration.png`, `Hero section asset 2 upscaled.png`, `Hero Section aset.webp`, `Icon 1.png`, `icon 2.png`, `Icon 3.png`, `Icon 4.png`, and numbered section references (`01 Hero-2.png` through `08Footer.png`). For production-safe image paths, prefer copying final assets into `public/brand/` or another `public/` subfolder, then reference them from the site with root-relative paths such as `/brand/logo.webp`.

## Build, Test, and Development Commands

- `npm run dev` starts the local Next.js development server.
- `npm run build` creates a production build and catches type/build issues.
- `npm run lint` runs Next/ESLint checks.

Run `npm install` after pulling dependency changes. Prisma is installed, but no database workflow scripts are currently defined; add explicit scripts before relying on migrations in automation.

## Coding Style & Naming Conventions

Use TypeScript, React function components, and Tailwind/shadcn patterns already present in the repo. Prettier is configured for 2-space indentation, semicolons, single quotes, trailing commas, and `printWidth: 100`. Prefer type-only imports where appropriate; ESLint warns on inconsistent type imports and unused variables. Name components in PascalCase, functions and variables in camelCase, and keep CSS class names descriptive and feature-scoped.

## Testing Guidelines

No test framework is currently configured. Until one is added, treat `npm run lint` and `npm run build` as required verification before opening a PR. For future tests, colocate focused tests near the module or use a `__tests__/` folder, and name files with `.test.ts` or `.test.tsx`.

## Commit & Pull Request Guidelines

Existing commits use clear imperative summaries, for example: `Add environment variables example, ESLint config, and Prettier config`. Keep commits scoped and descriptive. Pull requests should include a short summary, verification steps, linked issues when applicable, and screenshots or screen recordings for UI changes. Call out any asset, schema, or environment variable changes explicitly.

## Security & Configuration Tips

Do not commit real secrets. Use `.env.example` for documented variables and local `.env` files for private values. Keep generated build output such as `.next/` and dependency folders out of version control.
