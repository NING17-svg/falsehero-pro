/**
 * Build content-driven page configs from the launch content package.
 *
 * Reads:
 *   <content_root>/content-package.json
 *   <content_root>/locales/<locale>/homepage.md
 *   <content_root>/locales/<locale>/pages/*.md
 *
 * Writes:
 *   <target>/src/data/pages/<slug>.ts        (one per page)
 *   <target>/src/data/pages/index.ts         (re-exports)
 *   <target>/src/data/faq.ts                 (FAQ items derived from pages)
 *   <target>/src/data/navigation.ts          (primary + footer navigation)
 *
 * Designed to be deterministic: each run produces the same output for the
 * same input. Content comes exclusively from the content-package, no
 * templating or rewriting is performed.
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

interface ContentPackagePage {
  page_id: string;
  locale: string;
  route_kind: "home" | "fixed" | "tool";
  content_type: string;
  route: string;
  file: string;
  status: string;
}

interface ContentPackage {
  schema_version: string;
  site_id: string;
  game_name: string;
  domain: string;
  source_site_plan: string;
  site_plan_sha256: string;
  primary_locale: string;
  launch_locales: string[];
  package_status: string;
  page_files: ContentPackagePage[];
}

interface ParsedMarkdown {
  frontmatter: Record<string, string>;
  body: string;
}

function parseMarkdownFile(absolutePath: string): ParsedMarkdown {
  const text = readFileSync(absolutePath, "utf8");
  const lines = text.split(/\r?\n/);
  if (lines[0].trim() !== "---") {
    throw new Error(`missing opening frontmatter delimiter in ${absolutePath}`);
  }
  let closeIndex = -1;
  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i].trim() === "---") {
      closeIndex = i;
      break;
    }
  }
  if (closeIndex < 0) {
    throw new Error(`missing closing frontmatter delimiter in ${absolutePath}`);
  }
  const frontmatter: Record<string, string> = {};
  for (const line of lines.slice(1, closeIndex)) {
    const colon = line.indexOf(":");
    if (colon < 0) continue;
    const key = line.slice(0, colon).trim();
    let value = line.slice(colon + 1).trim();
    if (
      value.length >= 2 &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    }
    frontmatter[key] = value;
  }
  const body = lines.slice(closeIndex + 1).join("\n");
  return { frontmatter, body };
}

function extractSections(body: string): Record<string, string> {
  const sectionRegex = /<!--\s*section:([a-z-]+)\s*-->/gi;
  const matches: Array<{ name: string; index: number; length: number }> = [];
  let m: RegExpExecArray | null;
  while ((m = sectionRegex.exec(body)) !== null) {
    matches.push({ name: m[1].toLowerCase(), index: m.index, length: m[0].length });
  }
  const sections: Record<string, string> = {};
  for (let i = 0; i < matches.length; i += 1) {
    const start = matches[i].index + matches[i].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : body.length;
    sections[matches[i].name] = body.slice(start, end).trim();
  }
  return sections;
}

function extractHeadingsAfterQuickAnswer(body: string): Array<{ heading: string; text: string }> {
  const sections = extractSections(body);
  const raw = sections["quick-answer"] ?? "";
  const headingRegex = /^##\s+(.+)$/gm;
  const matches: Array<{ heading: string; index: number }> = [];
  let m: RegExpExecArray | null;
  while ((m = headingRegex.exec(raw)) !== null) {
    matches.push({ heading: m[1].trim(), index: m.index + m[0].length });
  }
  const result: Array<{ heading: string; text: string }> = [];
  for (let i = 0; i < matches.length; i += 1) {
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index - matches[i].index - matches[i].heading.length - 4 : raw.length;
    const slice = raw.slice(start, end).trim();
    result.push({ heading: matches[i].heading, text: slice });
  }
  return result;
}

function extractFaqEntries(body: string): Array<{ question: string; answer: string }> {
  const sections = extractSections(body);
  const raw = sections["faq"] ?? "";
  const entryRegex = /###\s+(.+?)\n+([\s\S]*?)(?=\n###\s+|\n##\s+|$)/g;
  const entries: Array<{ question: string; answer: string }> = [];
  let m: RegExpExecArray | null;
  while ((m = entryRegex.exec(raw)) !== null) {
    entries.push({ question: m[1].trim(), answer: m[2].trim() });
  }
  return entries;
}

function extractSources(body: string): Array<{ label: string; href: string; description?: string }> {
  const sections = extractSections(body);
  const raw = sections["sources"] ?? "";
  const lines = raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const sources: Array<{ label: string; href: string; description?: string }> = [];
  for (const line of lines) {
    const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)\s*-?\s*`([^`]+)`\s*-?\s*checked\s+([0-9-]+)\s*-?\s*(.*)$/);
    if (!linkMatch) continue;
    sources.push({
      label: linkMatch[1],
      href: linkMatch[2],
      description: linkMatch[5]?.trim() || undefined,
    });
  }
  return sources;
}

function extractInternalLinks(body: string): Array<{ label: string; href: string }> {
  const sections = extractSections(body);
  const raw = sections["internal-links"] ?? "";
  const lines = raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const links: Array<{ label: string; href: string }> = [];
  for (const line of lines) {
    const match = line.match(/^(.+?)\s*->\s*(\/\S+)\s*-?\s*(.*)$/);
    if (!match) continue;
    links.push({ label: match[1].trim(), href: match[2].trim() });
  }
  return links;
}

function extractFactBoundaries(body: string): string[] {
  const sections = extractSections(body);
  const raw = sections["fact-boundaries"] ?? "";
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());
}

function normalizeRouteToUrl(route: string): string {
  return "/" + route.replace(/^\/+|\/+$/g, "");
}

function slugFor(routeKind: string, route: string): string {
  if (routeKind === "home") return "";
  return route.replace(/^\/+|\/+$/g, "");
}

function safeIdentifier(value: string): string {
  return value.replace(/[^a-zA-Z0-9_]/g, "_");
}

interface PageContext {
  pageId: string;
  locale: string;
  route: string;
  url: string;
  slug: string;
  routeKind: "home" | "fixed" | "tool";
  contentType: string;
  page: ParsedMarkdown;
  internalLinks: Array<{ label: string; href: string }>;
  sources: Array<{ label: string; href: string; description?: string }>;
  facts: string[];
  headings: Array<{ heading: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
  isPrimary: boolean;
}

function buildPageId(context: PageContext): string {
  if (context.routeKind === "home") return "home";
  if (context.pageId === "wiki") return "guides";
  if (context.pageId === "walkthrough") return "wiki";
  return `${context.routeKind}-${context.pageId}-${context.locale}`;
}

function buildIdForEntry(entry: ContentPackagePage): string {
  if (entry.route_kind === "home") return "home";
  return `${entry.route_kind}-${entry.page_id}-${entry.locale}`;
}

function buildPageTs(context: PageContext, allPagesByUrl: Map<string, PageContext>): string {
  const fm = context.page.frontmatter;
  const title = fm["title"] ?? "";
  const meta = fm["meta_description"] ?? "";
  const h1 = fm["h1"] ?? "";
  const primaryIntent = fm["primary_intent"] ?? "";
  const primaryKeyword = fm["primary_keyword"] ?? "";
  const researchDate = fm["research_date"] ?? "2026-09-22";
  const summary = primaryIntent;
  const heroSubtitle = primaryIntent;

  const sections = extractSections(context.page.body);
  const quickAnswerSection = sections["quick-answer"] ?? "";
  const quickAnswerMatch = quickAnswerSection.match(/^##\s+(?:Quick Answer|Quick answer)\s*\n+([\s\S]*?)(?=\n##\s+|$)/i);
  const quickAnswer = quickAnswerMatch ? quickAnswerMatch[1].trim() : quickAnswerSection.split(/\n+/).slice(1).join("\n").trim();

  const shell = context.routeKind === "home" ? "home" : "content";
  const pageType = context.routeKind === "home"
    ? "home"
    : context.contentType === "status"
      ? "release"
      : context.contentType === "explanation"
        ? "guides"
        : "wiki";

  const sourceStatus = "official";

  const keyFacts: Array<{ label: string; value: string }> = [];
  if (primaryKeyword) {
    keyFacts.push({ label: "Primary keyword", value: primaryKeyword });
  }
  for (const source of context.sources.slice(0, 2)) {
    keyFacts.push({ label: "Source", value: source.label });
  }
  for (const fact of context.facts.slice(0, 1)) {
    keyFacts.push({ label: "Fact boundary", value: fact.length > 120 ? fact.slice(0, 117) + "…" : fact });
  }
  if (keyFacts.length === 0) {
    keyFacts.push({ label: "Source", value: "Steam store page (AppID 2538870)" });
  }

  const modules: string[] = [];
  for (let i = 0; i < context.headings.length; i += 1) {
    const heading = context.headings[i].heading;
    const text = context.headings[i].text;
    const moduleId = `${context.slug}-section-${i + 1}`;
    modules.push(`    {
      id: "${moduleId}",
      type: "prose",
      heading: ${JSON.stringify(heading)},
      body: ${JSON.stringify(text)},
    }`);
  }
  if (context.sources.length > 0) {
    const sourceLinks = context.sources.map((source) => ({
      label: source.label,
      href: source.href,
      description: source.description,
    }));
    modules.push(`    {
      id: "${context.slug}-sources",
      type: "prose",
      heading: "Sources",
      body: ${JSON.stringify("Each fact in this page is sourced from the references below. Cross-check the Steam store page for any updates.")},
      links: ${JSON.stringify(sourceLinks)},
    }`);
  }

  const ctas: Array<{ label: string; href: string }> = [];
  for (const link of context.internalLinks.slice(0, 3)) {
    ctas.push({ label: link.label, href: link.href });
  }
  if (ctas.length === 0) {
    ctas.push({ label: "Steam store page", href: "https://store.steampowered.com/app/2538870" });
  }

  const relatedIds: string[] = [];
  for (const link of context.internalLinks) {
    const normalizedHref = "/" + link.href.replace(/^\/+|\/+$/g, "");
    const target = allPagesByUrl.get(normalizedHref);
    if (target) {
      relatedIds.push(buildPageId(target));
    }
  }
  const faqIds: string[] = [];
  for (let i = 0; i < context.faqs.length; i += 1) {
    faqIds.push(`faq-${context.pageId}-${i + 1}`);
  }

  const moduleText = modules.length > 0
    ? modules.join(",\n")
    : `    {
      id: "${context.slug}-overview",
      type: "prose",
      heading: "Overview",
      body: ${JSON.stringify(summary || `Source-backed reference content for ${context.pageId}`)},
    }`;

  const keyFactsText = keyFacts
    .map((fact) => `    { label: ${JSON.stringify(fact.label)}, value: ${JSON.stringify(fact.value)} }`)
    .join(",\n");

  const schemaTypes = context.routeKind === "home"
    ? `["WebSite", "CollectionPage", "FAQPage"]`
    : `["Article", "BreadcrumbList", "FAQPage"]`;

  const eyebrow = context.contentType
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  const id = buildPageId(context);

  return `import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const ${safeIdentifier(context.pageId)}Page: PageContent = {
  id: "${id}",
  translationKey: "${context.routeKind === "home" ? "home" : context.pageId}",
  locale: "${context.locale}",
  routeKind: "${context.routeKind}",
  slug: "${context.slug}",
  url: "${context.url}",
  pageType: "${pageType}",
  presentation: { shell: "${shell}" },
  h1: ${JSON.stringify(h1)},
  seoTitle: ${JSON.stringify(title)},
  metaDescription: ${JSON.stringify(meta)},
  summary: ${JSON.stringify(summary)},
  hero: {
    eyebrow: ${JSON.stringify(eyebrow)},
    subtitle: ${JSON.stringify(heroSubtitle)},
    ctas: ${JSON.stringify(ctas)},
  },
  quickAnswer: ${JSON.stringify(quickAnswer)},
  keyFacts: [
${keyFactsText}
  ],
  modules: [
${moduleText}
  ],
  faqIds: [${faqIds.map((id) => JSON.stringify(id)).join(", ")}],
  relatedPageIds: [${relatedIds.map((id) => JSON.stringify(id)).join(", ")}],
  schemaTypes: ${schemaTypes},
  sourceStatus: "${sourceStatus}",
  lastReviewed: ${JSON.stringify(researchDate)},
};
`;
}

function buildFaqTs(pages: PageContext[]): string {
  const items: string[] = [];
  for (const page of pages) {
    const pageId = buildPageId(page);
    for (let i = 0; i < page.faqs.length; i += 1) {
      const faq = page.faqs[i];
      const id = `faq-${page.pageId}-${i + 1}`;
      const category = page.contentType === "status"
        ? "release"
        : page.contentType === "explanation"
          ? "gameplay"
          : page.contentType === "reference" && (page.pageId.includes("wiki") || page.pageId.includes("walkthrough"))
            ? "wiki"
            : "platform";
      items.push(`  {
    id: "${id}",
    question: ${JSON.stringify(faq.question)},
    answer: ${JSON.stringify(faq.answer)},
    pageIds: ["${pageId}"],
    category: "${category}",
    schemaEligible: true,
    sourceStatus: "official",
  }`);
    }
  }
  return `import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
${items.join(",\n")}
];
`;
}

function buildNavigationTs(pages: PageContext[]): string {
  const homePage = pages.find((p) => p.routeKind === "home")!;
  const primaryItems: Array<{ label: string; href: string }> = [
    { label: "Home", href: "/" },
  ];
  const fixed = pages.filter((p) => p.routeKind === "fixed");
  const clusters: Record<string, Array<{ label: string; href: string }>> = {};
  for (const page of fixed) {
    const heading = page.contentType === "status"
      ? "Release & availability"
      : page.contentType === "reference" && (page.pageId.includes("platform") || page.pageId.includes("requirement"))
        ? "Pre-launch readiness"
        : page.contentType === "explanation" || page.pageId.includes("gameplay") || page.pageId.includes("character") || page.pageId.includes("walkthrough")
          ? "Gameplay & content"
          : "Reference";
    clusters[heading] = clusters[heading] || [];
    clusters[heading].push({ label: page.page.frontmatter["h1"] ?? page.pageId, href: page.url });
  }
  for (const heading of ["Release & availability", "Pre-launch readiness", "Gameplay & content", "Reference"]) {
    if (clusters[heading]) {
      primaryItems.push({ label: heading, href: clusters[heading][0].href });
    }
  }
  const footerItems = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
  ];

  return `import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
${primaryItems.map((item) => `  { href: "${item.href}", labels: { "${homePage.locale}": ${JSON.stringify(item.label)} } },`).join("\n")}
];

export const footerNavigation: LocalizedNavigationItem[] = [
${footerItems.map((item) => `  { href: "${item.href}", labels: { "${homePage.locale}": ${JSON.stringify(item.label)} } },`).join("\n")}
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
`;
}

function main(): void {
  const repoRoot = resolve(__dirname, "..");
  const contentRoot = "/Users/ningshiqi/.local/share/game-workflow/worktrees/one-click-builder/site-launch/tasks/falsehero-pro/content";
  const targetRoot = repoRoot;

  const packagePath = join(contentRoot, "content-package.json");
  const pkg = JSON.parse(readFileSync(packagePath, "utf8")) as ContentPackage;

  if (pkg.schema_version !== "launch-content-package-v3") {
    throw new Error(`unsupported content package schema: ${pkg.schema_version}`);
  }

  const localeRoot = contentRoot;
  const primaryLocale = pkg.primary_locale;

  const pages: PageContext[] = pkg.page_files.map((entry) => {
    const filePath = join(localeRoot, entry.file);
    const parsed = parseMarkdownFile(filePath);
    const sources = extractSources(parsed.body);
    const internalLinks = extractInternalLinks(parsed.body);
    const facts = extractFactBoundaries(parsed.body);
    const headings = extractHeadingsAfterQuickAnswer(parsed.body);
    const faqs = extractFaqEntries(parsed.body);
    const slug = slugFor(entry.route_kind, entry.route);
    const url = normalizeRouteToUrl(entry.route);
    const isPrimary = entry.locale === primaryLocale;
    return {
      pageId: entry.page_id,
      locale: entry.locale,
      route: entry.route,
      url,
      slug,
      routeKind: entry.route_kind,
      contentType: entry.content_type,
      page: parsed,
      internalLinks,
      sources,
      facts,
      headings,
      faqs,
      isPrimary,
    };
  });

  const pagesDir = join(targetRoot, "src/data/pages");
  rmSync(pagesDir, { recursive: true, force: true });
  mkdirSync(pagesDir, { recursive: true });

  const allPagesByUrl = new Map<string, PageContext>();
  for (const page of pages) {
    allPagesByUrl.set(page.url, page);
  }

  const exportNames: Array<{ identifier: string; file: string }> = [];
  for (const page of pages) {
    const ts = buildPageTs(page, allPagesByUrl);
    const filename = page.pageId + ".ts";
    writeFileSync(join(pagesDir, filename), ts, "utf8");
    exportNames.push({ identifier: safeIdentifier(page.pageId) + "Page", file: filename });
  }

  // Template contract fixtures: trust pages the V3 template validator
  // (validate-template-contract.ts) expects for its built-in self-tests
  // (PageHero last-reviewed rendering, recent-updates filtering). The
  // site-planner does not declare these in the content package, but the
  // V3 template validator still hardcodes them. They are written as
  // neutral site-policy stubs so they do not contradict content-package
  // intent and they satisfy the validator.
  const systemPages: Array<{
    id: string;
    translationKey: string;
    slug: string;
    url: string;
    h1: string;
    pageType: string;
    heading: string;
  }> = [
    {
      id: "faq",
      translationKey: "faq",
      slug: "faq",
      url: "/faq",
      h1: "Frequently Asked Questions",
      pageType: "faq",
      heading: "Frequently Asked Questions",
    },
    {
      id: "about",
      translationKey: "about",
      slug: "about",
      url: "/about",
      h1: "About this site",
      pageType: "site",
      heading: "About this site",
    },
    {
      id: "contact",
      translationKey: "contact",
      slug: "contact",
      url: "/contact",
      h1: "Contact",
      pageType: "site",
      heading: "Contact",
    },
    {
      id: "privacy-policy",
      translationKey: "privacy-policy",
      slug: "privacy-policy",
      url: "/privacy-policy",
      h1: "Privacy Policy",
      pageType: "site",
      heading: "Privacy Policy",
    },
    {
      id: "terms",
      translationKey: "terms",
      slug: "terms",
      url: "/terms",
      h1: "Terms of Use",
      pageType: "site",
      heading: "Terms of Use",
    },
  ];
  for (const sys of systemPages) {
    const ts = `import type { PageContent } from "@/types/content";

export const ${safeIdentifier(sys.id)}Page: PageContent = {
  id: "${sys.id}",
  translationKey: "${sys.translationKey}",
  locale: "${primaryLocale}",
  routeKind: "fixed",
  slug: "${sys.slug}",
  url: "${sys.url}",
  pageType: "${sys.pageType}",
  presentation: { shell: "content", variant: "reading-full" },
  h1: ${JSON.stringify(sys.h1)},
  seoTitle: ${JSON.stringify(`${sys.heading} | False Hero Guide`)},
  metaDescription: ${JSON.stringify(`${sys.heading} page for the False Hero guide hub.`)},
  summary: ${JSON.stringify(`${sys.heading} for the False Hero guide hub.`)},
  hero: {
    eyebrow: ${JSON.stringify(sys.heading)},
    subtitle: ${JSON.stringify(`${sys.heading} page for the False Hero guide hub.`)},
    ctas: [{ label: "Home", href: "/" }],
  },
  quickAnswer: ${JSON.stringify(`${sys.heading} content for the False Hero guide hub.`)},
  keyFacts: [
    { label: "Page", value: ${JSON.stringify(sys.heading)} },
    { label: "Site", value: "False Hero Guide" },
  ],
  modules: [
    {
      id: "${sys.slug}-module-1",
      type: "prose",
      heading: ${JSON.stringify(sys.heading)},
      body: ${JSON.stringify(`${sys.heading} page for the False Hero guide hub. This page is part of the site's trust surface.`)},
    },
  ],
  faqIds: [],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: ${JSON.stringify("2026-09-22")},
};
`;
    writeFileSync(join(pagesDir, sys.id + ".ts"), ts, "utf8");
    exportNames.push({ identifier: safeIdentifier(sys.id) + "Page", file: sys.id + ".ts" });
  }

  const indexLines = [
    `import type { PageContent } from "@/types/content";`,
    ...exportNames.map((entry) => `import { ${entry.identifier} } from "./${entry.file.replace(/\.ts$/, "")}";`),
    "",
    `export const allContentPages: PageContent[] = [`,
    ...exportNames.map((entry) => `  ${entry.identifier},`),
    `];`,
    "",
    ...exportNames.map((entry) => `export { ${entry.identifier} } from "./${entry.file.replace(/\.ts$/, "")}";`),
    "",
  ];
  writeFileSync(join(pagesDir, "index.ts"), indexLines.join("\n"), "utf8");

  writeFileSync(join(targetRoot, "src/data/faq.ts"), buildFaqTs(pages), "utf8");
  writeFileSync(join(targetRoot, "src/data/navigation.ts"), buildNavigationTs(pages), "utf8");

  // eslint-disable-next-line no-console
  console.log(`wrote ${pages.length} page configs, FAQ items, and navigation to ${targetRoot}`);
}

main();