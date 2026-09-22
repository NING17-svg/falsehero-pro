import type { PageContent } from "@/types/content";

export const contactPage: PageContent = {
  id: "contact",
  translationKey: "contact",
  locale: "en-US",
  routeKind: "fixed",
  slug: "contact",
  url: "/contact",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Contact",
  seoTitle: "Contact | False Hero Guide",
  metaDescription: "Contact page for the False Hero guide hub.",
  summary: "Contact for the False Hero guide hub.",
  hero: {
    eyebrow: "Contact",
    subtitle: "Contact page for the False Hero guide hub.",
    ctas: [{ label: "Home", href: "/" }],
  },
  quickAnswer: "Contact content for the False Hero guide hub.",
  keyFacts: [
    { label: "Page", value: "Contact" },
    { label: "Site", value: "False Hero Guide" },
  ],
  modules: [
    {
      id: "contact-module-1",
      type: "prose",
      heading: "Contact",
      body: "Contact page for the False Hero guide hub. This page is part of the site's trust surface.",
    },
  ],
  faqIds: [],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-22",
};
