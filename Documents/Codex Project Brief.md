## Roadmap Nexus Codex Project Brief

This file is the working handoff for Codex to understand `Roadmap Nexus` and start building it correctly.

## Project Identity

Project name:

- `Roadmap Nexus`

Current vault note:

- `Roadmap-Nexus-Template.md`

Project type:

- OSS income project
- self-hostable web product template

Primary idea:

- a modern Next.js starter for a public roadmap, changelog, and feedback board

## What The Project Is

Roadmap Nexus is meant to be:

- open-source core first
- self-hostable
- single-project in v1
- product-focused, not enterprise-focused

It is not supposed to start as:

- a hosted SaaS
- a multi-tenant platform
- a full Canny competitor
- a billing-heavy product

The free version is the only version being built right now.

## Product Goal

Let a founder, indie builder, OSS maintainer, or agency quickly launch:

- a public roadmap
- a changelog
- a feedback board
- a simple admin area to manage them

The core promise is:

"Ship a real public updates portal without paying for another roadmap SaaS and without rebuilding the same stack from scratch."

## Current Product Scope

Build only the `free/open-source core`.

Included:

- public roadmap
- public changelog
- public feedback board
- basic admin management
- single-project setup
- basic branding/settings

Not included right now:

- multi-project support
- premium themes
- advanced integrations
- email systems
- billing
- enterprise auth
- advanced analytics
- AI features

## Product Positioning

This should feel like:

- a serious developer product
- a credible open-source starter
- minimal but useful
- clean enough to ship

It should not feel like:

- a fake SaaS landing page
- a bloated dashboard template
- an enterprise PM suite

## Stack Direction

Preferred stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma
- PostgreSQL

Keep the first build as one app unless there is a strong reason to split it later.

## Core Routes

Start with these:

- `/`
- `/roadmap`
- `/changelog`
- `/feedback`
- `/admin`
- `/admin/roadmap`
- `/admin/changelog`
- `/admin/feedback`
- `/admin/settings`

Do not start with docs, blog, pricing, or SaaS account flows unless explicitly requested later.

## What The First Usable Version Must Do

1. Show public roadmap items
2. Show public changelog entries
3. Show feedback posts
4. Accept feedback submissions
5. Let admin manage roadmap, changelog, and feedback

If these 5 things work well, the project has a valid foundation.

## Data Model Direction

Minimum models:

- `Project`
- `RoadmapItem`
- `ChangelogEntry`
- `FeedbackPost`
- `Vote`
- `AdminUser`

Minimum shape:

### Project

- name
- slug
- description
- logo
- primaryColor

### RoadmapItem

- title
- slug
- summary
- content
- status
- category
- isPublic

### ChangelogEntry

- title
- slug
- summary
- content
- publishedAt
- isPublic

### FeedbackPost

- title
- content
- status
- authorName
- authorEmail
- votesCount

### Vote

- feedbackPostId
- voterKey

### AdminUser

- email
- role

Keep the schema narrow. Do not design for future enterprise needs yet.

## UI Direction

Public side:

- clean
- product-led
- developer-first
- readable
- restrained

Admin side:

- compact
- operational
- clear for scanning

Avoid:

- purple-heavy gradients
- bloated marketing sections
- fake testimonials
- fake metrics
- generic AI SaaS styling

The product visuals should carry the design more than decorative marketing.

## Recommended Build Order

### Phase 1

- lock free-version scope
- lock route structure
- lock UI direction

### Phase 2

- scaffold Next.js app
- create layouts and navigation
- build static UI shell

### Phase 3

- define Prisma schema
- connect Postgres
- seed sample data

### Phase 4

- render real data in public pages
- add admin CRUD
- add feedback submission and voting

### Phase 5

- add basic settings/branding
- refine empty states, loading states, and content clarity

## Immediate Next Step

The first thing Codex should build is the `static UI shell` for:

- `/roadmap`
- `/changelog`
- `/feedback`
- `/admin`
- `/admin/roadmap`
- `/admin/changelog`
- `/admin/feedback`
- `/admin/settings`

Use static data first.

Do not start with backend complexity before the product structure is visible.

## Files In This Folder That Matter

- `Roadmap-Nexus-Template.md`
  Main project note

- `Roadmap Nexus – Market, Product, and Website Blueprint (2026).md`
  Main research file

- `Free Version Website Draft.md`
  Expanded website structure for the free version

- `Free Version Website Draft - Compressed.md`
  Shorter website structure for UI/design generation

- `Build Start Draft.md`
  Practical build-start sequence

## Working Rules For Codex

- Keep all generated project files inside this project folder.
- Prefer new files over overwriting existing project notes.
- Stay inside the free-version scope unless explicitly told to expand.
- Optimize for a real shippable core, not future theoretical architecture.
- Keep the product narrow and polished instead of broad and unfinished.
