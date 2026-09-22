import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const demoPage: PageContent = {
  id: "fixed-demo-en-US",
  translationKey: "demo",
  locale: "en-US",
  routeKind: "fixed",
  slug: "demo",
  url: "/demo",
  pageType: "release",
  presentation: { shell: "content" },
  h1: "False Hero Demo: Trial Download Status And Steam Availability",
  seoTitle: "False Hero Demo: Trial Download Status And Steam Availability",
  metaDescription: "False Hero demo and trial download are not announced on Steam AppID 2538870 as of 2026-09-22. The Steam store page is the only official demo status.",
  summary: "Find a False Hero demo or trial download, and confirm whether a demo has been published",
  hero: {
    eyebrow: "Status",
    subtitle: "Find a False Hero demo or trial download, and confirm whether a demo has been published",
    ctas: [{"label":"Steam store page","href":"https://store.steampowered.com/app/2538870"}],
  },
  quickAnswer: "A False Hero demo or trial download is not announced as of 2026-09-22. The Steam listing for AppID 2538870 does not host a demo build, a playtest, or a time-limited trial, and Ytopia has not published a separate demo storefront. Players who want to confirm the latest demo status should refresh the Steam store page and the Steam Community Hub announcements tab, because any future trial build will land there first.",
  keyFacts: [
    { label: "Fact boundary", value: "Current-game fact: A False Hero demo or trial download is not announced as of 2026-09-22. The Steam listing for AppID…" }
  ],
  modules: [
    {
      id: "demo-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "A False Hero demo or trial download is not announced as of 2026-09-22. The Steam listing for AppID 2538870 does not host a demo build, a playtest, or a time-limited trial, and Ytopia has not published a separate demo storefront. Players who want to confirm the latest demo status should refresh the Steam store page and the Steam Community Hub announcements tab, because any future trial build will land there first.\n\n## False Hero",
    },
    {
      id: "demo-section-2",
      type: "prose",
      heading: "False Hero Demo Status: What Is Confirmed",
      body: "The current False Hero demo is a \"not announced\" status. The Steam store page for AppID 2538870 lists the planned release as Sep 22 2026, with the soulslike short description covering the steal-and-chain combat, the corrupted Land of the Gods, boss fights, and the fight-for-the-Gods-versus-apostle-of-Death branching. There is no demo download, no Steam Playtest entry, and no separate demo app ID published on the same developer or publisher a",
    },
    {
      id: "demo-section-3",
      type: "prose",
      heading: "Why A Demo Has Not Shipped",
      body: "",
    },
    {
      id: "demo-section-4",
      type: "prose",
      heading: "What A Future False Hero Demo Could Look Like",
      body: "",
    },
    {
      id: "demo-section-5",
      type: "prose",
      heading: "Where To Watch For A Demo Announcement",
      body: "The Steam store page for AppID 2538870 is the canonical place to watch for any False Hero demo announcement. A new demo entry typically appears as a separate Playtest banner or as an additional app on the developer account, both of which surface in the store page right rail. Refresh the store page at least once per day during the launch window to catch the change as soon as it goes live.\n\nThe Steam Community Hub for AppID 2538870 is the second pillar. Developer announcements on the Hub often flag a demo build before the Steam store page updates, and Hub threads will surface unofficial timing rumors that help you plan your pre-order decisions. Any external demo URL not linked from one of those channels should be treated as unverified until the Steam store confirms it.",
    }
  ],
  faqIds: ["faq-demo-1", "faq-demo-2", "faq-demo-3"],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
