import type { PageContent } from "@/types/content";

export const termsPage: PageContent = {
  id: "terms",
  translationKey: "terms",
  locale: "en-US",
  routeKind: "fixed",
  slug: "terms",
  url: "/terms",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Terms of Use",
  seoTitle: "Terms of Use | False Hero Guide",
  metaDescription: "Terms of Use page for the False Hero guide hub.",
  summary: "Terms of Use for the False Hero guide hub.",
  hero: {
    eyebrow: "Terms of Use",
    subtitle: "Terms of Use page for the False Hero guide hub.",
    ctas: [{ label: "Home", href: "/" }],
  },
  quickAnswer: "Terms of Use content for the False Hero guide hub.",
  keyFacts: [
    { label: "Page", value: "Terms of Use" },
    { label: "Site", value: "False Hero Guide" },
  ],
  modules: [
    {
      id: "terms-module-1",
      type: "prose",
      heading: "Terms of Use",
      body: "Terms of Use page for the False Hero guide hub. This page is part of the site's trust surface.",
    },
  ],
  faqIds: [],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-22",
};
