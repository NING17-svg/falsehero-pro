import type { PageContent } from "@/types/content";

export const faqPage: PageContent = {
  id: "faq",
  translationKey: "faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "faq",
  url: "/faq",
  pageType: "faq",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Frequently Asked Questions",
  seoTitle: "Frequently Asked Questions | False Hero Guide",
  metaDescription: "Frequently Asked Questions page for the False Hero guide hub.",
  summary: "Frequently Asked Questions for the False Hero guide hub.",
  hero: {
    eyebrow: "Frequently Asked Questions",
    subtitle: "Frequently Asked Questions page for the False Hero guide hub.",
    ctas: [{ label: "Home", href: "/" }],
  },
  quickAnswer: "Frequently Asked Questions content for the False Hero guide hub.",
  keyFacts: [
    { label: "Page", value: "Frequently Asked Questions" },
    { label: "Site", value: "False Hero Guide" },
  ],
  modules: [
    {
      id: "faq-module-1",
      type: "prose",
      heading: "Frequently Asked Questions",
      body: "Frequently Asked Questions page for the False Hero guide hub. This page is part of the site's trust surface.",
    },
  ],
  faqIds: [],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-22",
};
