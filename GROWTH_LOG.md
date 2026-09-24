# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-24 - Adsterra integration for False Hero

- Task: Populate the fixed six Adsterra unit values in `src/data/ads.ts` (Native Banner, Banner 728x90, 468x60, 320x50, 160x600, Smartlink) so the V3 ad components begin requesting real Adsterra placements after launch.
- Files changed: `src/data/ads.ts`.
- URLs affected: All fixed V3 routes now load the fixed Adsterra placements through the shared ad components (`native-banner` after the second article module, responsive 728x90/468x60/320x50 banner shell, right-rail 160x600, footer Smartlink).
- Ad baseline: All six Adsterra values are now non-empty and match the private platform codes captured for `falsehero-pro`.
- Verification: `npm run verify` (typecheck, lint, template/content/rendered-seo validators, IndexNow local tests, full build) passes.
- Follow-up: None.

### 2026-09-24 - Demo availability and installation

- Task: Replace the pre-launch 'no demo announced' stub on /demo with the actual demo status on Steam.
- Files changed: `src/data/pages/demo.ts`, `src/data/faq.ts`, `CONTENT_INDEX.md`.
- URLs affected: `/demo`; FAQ answers for demo availability, demo release date, and demo download location.
- SEO/GEO changed: Demo H1, seoTitle, and metaDescription now point at Steam AppID 4702340 instead of an AppID 2538870 'not announced' framing. Demo `relatedPageIds` now cross-link to `/` and `/wiki` so the demo entry point reaches the rest of the launch surface.
- Sources: Steam store pages for AppID 4702340 and AppID 2538870, Steam Community Hub for AppID 2538870, ixbt.games launch coverage (2026-06-05), Culture Combine review.

### 2026-09-23 - Temple Walls progression walkthrough and gameplay pointer

- Task: Replace the 'no walkthrough exists yet' stub on /walkthrough with a developer-anchored Temple Walls sub-section, and add a first-30-minute pointer from /gameplay.
- Files changed: `src/data/pages/walkthrough.ts`, `src/data/pages/gameplay.ts`, `src/data/faq.ts`, `CONTENT_INDEX.md`.
- URLs affected: `/walkthrough`, `/gameplay`; FAQ answers for Temple Walls progression and the Plant Knight encounter.
- SEO/GEO changed: Walkthrough H1, seoTitle, and metaDescription now reflect the Temple Walls progression route rather than a pre-launch status stub. Walkthrough `relatedPageIds` now point to `/gameplay`, `/characters`, and `/steam`.
- Source: Steam Community Hub thread 'Need Help Progressing from Temple Walls' (developer reply by Torchlight Games): https://steamcommunity.com/app/2538870/discussions/0/3782878667988490094/
- Gameplay change: Added a 'First 30 Minutes' callout linking to the Temple Walls walkthrough so new launch-window players can find the route from the gameplay overview.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
