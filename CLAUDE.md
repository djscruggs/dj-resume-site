# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # compile TypeScript, then start Next.js dev server
npm run build     # compile TypeScript, then build for production
npm run lint      # Prettier + ESLint with auto-fix (zero warnings enforced)
npm run compile   # TypeScript type-check only (tsc --build)
npm run clean     # remove build-tsc and .next directories
```

No test suite is configured (Jest is installed but no test files exist).

## Architecture

This is a Next.js 15 personal resume/portfolio site with a single home page (`src/pages/index.tsx`) that composes all sections in order.

### Data flow

All content lives in two files:

- **`src/data/dataDef.ts`** — TypeScript interfaces for every section (Hero, About, SkillGroup, PortfolioItem, TimelineItem, TestimonialSection, RatesSection, ContactSection, etc.)
- **`src/data/data.tsx`** — Exports all content constants (`heroData`, `aboutData`, `skills`, `portfolioItems`, `experience`, `education`, `testimonial`, `rates`, `contact`, `socialLinks`) and the `SectionId` const object

To add or change content, edit `data.tsx`. To change shape/types, edit `dataDef.ts`.

### Section pattern

Every page section follows the same pattern:
1. Import data constant(s) and `SectionId` from `../../data/data`
2. Wrap in `<Section sectionId={SectionId.Foo}>` from `../Layout/Section`
3. Use `bg-neutral-100` (light) or `bg-neutral-800/900` (dark) alternating backgrounds
4. Export a `memo()`-wrapped FC with `ComponentName.displayName` set

The `Section` component applies `px-4 py-16 md:py-24 lg:px-8` and `mx-auto max-w-screen-lg` by default. Pass `noPadding` to take full control.

### Resume/Work section layout convention

Subsections within the Resume section use `ResumeSection` (`src/components/Sections/Resume/ResumeSection.tsx`):
- Parent wrapper: `divide-y-2 divide-neutral-300` — draws divider lines between children
- Each child: `py-8 first:pt-0 last:pb-0` — collapses padding on first/last items
- Title: `text-xl font-bold uppercase text-neutral-800` with `border-b-2 border-orange-400` underline accent
- Layout: 4-column grid, title in col 1, content in cols 2–4

The `PredictiveIndex` section (`src/components/Sections/PredictiveIndex.tsx`) mirrors this exact pattern.

### Page render order

`src/pages/index.tsx` composes sections in this order: `Hero → About → Personality → Resume → Portfolio → Testimonials → Rates → Contact → Footer`. `Header` is loaded with `dynamic(..., { ssr: false })` to avoid hydration mismatches from its scroll listener.

### Navigation

`src/components/Sections/Header.tsx` drives the nav. To add a section to the menu, add the `SectionId` to the `navSections` array. The nav link label is the raw `SectionId` string value (e.g. `'personality'` renders as "personality"). There is no label override map — rename the `SectionId` value in `data.tsx` if you need a different display name.

Active-section tracking uses a scroll event listener (not `IntersectionObserver`). `useNavObserver` in `src/hooks/useNavObserver.tsx` exists but is unused.

### Portfolio images

Screenshots live in `src/images/portfolio/` numbered sequentially (`portfolio-7.png`, `portfolio-8.png`, …). Import and add to `portfolioItems` in `data.tsx`. Use `npx playwright@latest screenshot --viewport-size="1440,800" <url> <path>` to capture new ones at a width that avoids clipping.

### TypeScript strictness

`noUnusedLocals` and `noUnusedParameters` are enforced. The linter runs Prettier first (`--write`), then ESLint (`--fix --max-warnings=0`). Always run `npm run lint` before committing.
