# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-10-01 - Authored copy filled in and Markdown rendered everywhere it is displayed

- Task: Write the missing module bodies and fold states from each page's own facts, and stop authored Markdown from being printed as literal text in the hero, the Quick Answer, the status callout and the FAQ answers.
- Filled in: 26 module bodies that shipped empty, and 2 prose bodies that ended mid-sentence. Every sentence comes from a fact the same page already states (its own quick answer, meta description, key facts or a sibling module); where a value is genuinely not announced, the body says so instead of guessing. 10 pages had their Key Facts replaced with real facts, 6 CTA labels lost their authoring hyphens, 8 homepage module ids were namespaced, and the duplicate Quick Answer module on `/demo` was removed.
- Rendering changed: `StatusCallout`, `HomePage`, `HubPage`, `WorkspacePage`, `PageHero` and `FAQBlock` now render through `renderInlineMarkdown`/`renderMarkdown`, so a link in any of those fields is a link rather than `[label](url)` text. `FAQPage` structured data uses a new `stripInlineMarkdown` so the JSON-LD answer carries the sentence instead of the link syntax. `src/lib/markdown.tsx` imports React explicitly because the static export runs the classic JSX runtime.
- URLs affected: None. No title, H1, canonical, page type, keyword, CTA or internal-link role changed, so `CONTENT_INDEX.md` is not revised.
- Verification: `npm run verify` (typecheck, lint, template, content, IndexNow, static export, rendered SEO for 17 pages / 17 sitemap URLs / 17 manifest routes) passes, and a sweep of the 19 exported HTML files, excluding the React flight payload, finds no unrendered Markdown link, bold marker or internal path.

### 2026-10-01 - Public page render-quality repair

- Task: Repair the homepage and inner pages so the first screen carries a positioning line, key facts and priority entry points, and so authoring-pipeline artifacts never reach a public page.
- Defects found: raw_markdown_module, duplicated_quick_answer, placeholder_module (144 finding(s)) across 17 page(s).
- Files changed: `src/data/pages/*.ts` and `src/data/faq.ts` (fold and module data), `src/components/content/ModuleRenderer.tsx` (prose body now renders Markdown), `src/components/pages/ContentPage.tsx` (Quick Answer renders inline Markdown), `src/lib/markdown.tsx` (new minimal Markdown-to-React renderer, including tables), `src/styles/modules.css` (prose body and table rules), `scripts/validate-render-integrity.ts` (new regression), `package.json` (new `validate:render` step in the `verify` chain).
- URLs affected: None. Titles, H1s, canonicals, CTAs, page types and internal-link roles are unchanged, so `CONTENT_INDEX.md` is not revised.
- SEO/GEO changed: FAQ entries that previously existed only as a Markdown module are now real entries in `src/data/faq.ts` and render through the accessible FAQ block, so FAQPage schema coverage is no longer limited to the pre-existing entries. `hero.subtitle` is now a positioning line and `quickAnswer` is the concise answer, so the fold is a summary rather than a duplicate of the article.
- Copy changed: Reader copy no longer refers to the build-now brief, the game-check brief, the research cut-off date or the source-tier labels. Game facts, URLs, keyword intent, ad units and analytics are unchanged.
- Verification: `npm run verify` (typecheck, lint, template, content, render integrity, IndexNow tests, static export, rendered SEO) passes; a full-text scan of every exported page finds no raw heading markers, raw Markdown links, tables or bold markers, pipeline headings, research metadata or literal question/answer labels; a content-conservation check against the previous commit confirms no reader copy, page identity or SEO field was lost.


## 2026-10-01 — shared Worker deployment maintenance

User-authorized routing migration to `guide-pool-07` / Worker `dragonshelter-pro`; source push is connected to the shared Cloudflare Git build via the repository deploy hook. Content and public URL identities are unchanged. Completion is tracked by the central group migration report and live source/version verification.
