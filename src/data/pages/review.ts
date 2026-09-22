import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const reviewPage: PageContent = {
  id: "fixed-review-en-US",
  translationKey: "review",
  locale: "en-US",
  routeKind: "fixed",
  slug: "review",
  url: "/review",
  pageType: "release",
  presentation: { shell: "content" },
  h1: "False Hero Review: Pre-Launch Coverage And Steam Review Status",
  seoTitle: "False Hero Review Status: Pre-Launch Coverage And Steam Reviews",
  metaDescription: "False Hero review coverage is limited pre-launch. Steam AppID 2538870, developer Torchlight Games, and publisher Ytopia anchor the current review status.",
  summary: "Find review coverage for False Hero, including critic and Steam user-review availability",
  hero: {
    eyebrow: "Status",
    subtitle: "Find review coverage for False Hero, including critic and Steam user-review availability",
    ctas: [{"label":"Steam store page","href":"https://store.steampowered.com/app/2538870"}],
  },
  quickAnswer: "A False Hero review is not yet published as of 2026-09-22 because the soulslike adventure releases on Sep 22 2026 and the launch window has not opened. Steam AppID 2538870 carries the only first-party coverage, and critic reviews plus Steam user reviews will appear after release day. The Steam store page is the authoritative anchor for identity facts such as developer Torchlight Games, publisher Ytopia, planned release Sep 22 2026, and the Multiple Endings framing.",
  keyFacts: [
    { label: "Primary keyword", value: "False Hero review" },
    { label: "Fact boundary", value: "Current-game fact: False Hero reviews are not yet published as of 2026-09-22. The Steam store page for AppID 2538870 …" }
  ],
  modules: [
    {
      id: "review-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "A False Hero review is not yet published as of 2026-09-22 because the soulslike adventure releases on Sep 22 2026 and the launch window has not opened. Steam AppID 2538870 carries the only first-party coverage, and critic reviews plus Steam user reviews will appear after release day. The Steam store page is the authoritative anchor for identity facts such as developer Torchlight Games, publisher Ytopia, planned release Sep 22 2026, and the Multiple Endings framing.\n\n## False Hero R",
    },
    {
      id: "review-section-2",
      type: "prose",
      heading: "False Hero Review Status: What Is Confirmed",
      body: "The current False Hero review is a pre-launch status. The Steam listing for AppID 2538870 is the only first-party review-grade surface, and the Steam short description frames the soulslike adventure around steal-and-chain combat, the corrupted Land of the Gods, boss fights, and the fight-for-the-Gods-or-apostle-of-Death branching. That description is the closest thing to a developer-posi",
    },
    {
      id: "review-section-3",
      type: "prose",
      heading: "Why Critic Reviews Are Not Out Yet",
      body: "",
    },
    {
      id: "review-section-4",
      type: "prose",
      heading: "Steam User Reviews And Launch-Day Reception",
      body: "",
    },
    {
      id: "review-section-5",
      type: "prose",
      heading: "Where To Watch For False Hero Reviews",
      body: "The Steam store page for AppID 2538870 is the canonical place for the Steam user-review curve and any developer-posted review-window notes. Refresh the store page on launch day to catch the first published reviews and any updated screenshots that signal a post-launch patch.\n\nThe Steam Community Hub for AppID 2538870 is the second place to watch. Developer announcements on the Hub often include a review-window statement and link directly to the outlets running coverage, and the Hub is where post-launch patches are documented. Major games-media outlets will publish their False Hero reviews through their own review hubs in the launch window, but they are not yet seeded. Do not trust any pre-launch review that does not link to the Steam listing or to the developer channel.",
    }
  ],
  faqIds: ["faq-review-1", "faq-review-2", "faq-review-3"],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
