import type { PageContent } from "@/types/content";

export const privacy_policyPage: PageContent = {
  id: "privacy-policy",
  translationKey: "privacy-policy",
  locale: "en-US",
  routeKind: "fixed",
  slug: "privacy-policy",
  url: "/privacy-policy",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Privacy Policy",
  seoTitle: "Privacy Policy | False Hero Guide",
  metaDescription: "Privacy Policy page for the False Hero guide hub.",
  summary: "Privacy Policy for the False Hero guide hub.",
  hero: {
    eyebrow: "Privacy Policy",
    subtitle: "Privacy Policy page for the False Hero guide hub.",
    ctas: [{ label: "Home", href: "/" }],
  },
  quickAnswer: "Privacy Policy content for the False Hero guide hub.",
  keyFacts: [
    { label: "Page", value: "Privacy Policy" },
    { label: "Site", value: "False Hero Guide" },
  ],
  modules: [
    {
      id: "privacy-policy-module-1",
      type: "prose",
      heading: "Privacy Policy",
      body: "Privacy Policy page for the False Hero guide hub. This page is part of the site's trust surface.",
    },
  ],
  faqIds: [],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-09-22",
};
