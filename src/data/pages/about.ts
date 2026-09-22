import type { PageContent } from "@/types/content";

export const aboutPage: PageContent = {
  id: "about",
  translationKey: "about",
  locale: "en-US",
  routeKind: "fixed",
  slug: "about",
  url: "/about",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "About this site",
  seoTitle: "About this site | False Hero Guide",
  metaDescription: "About this site page for the False Hero guide hub.",
  summary: "About this site for the False Hero guide hub.",
  hero: {
    eyebrow: "About this site",
    subtitle: "About this site page for the False Hero guide hub.",
    ctas: [{ label: "Home", href: "/" }],
  },
  quickAnswer: "About this site content for the False Hero guide hub.",
  keyFacts: [
    { label: "Page", value: "About this site" },
    { label: "Site", value: "False Hero Guide" },
  ],
  modules: [
    {
      id: "about-module-1",
      type: "prose",
      heading: "About this site",
      body: "About this site page for the False Hero guide hub. This page is part of the site's trust surface.",
    },
  ],
  faqIds: [],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-22",
};
