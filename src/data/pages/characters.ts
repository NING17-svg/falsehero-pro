import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const charactersPage: PageContent = {
  id: "fixed-characters-en-US",
  translationKey: "characters",
  locale: "en-US",
  routeKind: "fixed",
  slug: "characters",
  url: "/characters",
  pageType: "wiki",
  presentation: { shell: "content" },
  h1: "False Hero Characters: Confirmed Cast And The Apostle Of Death Choice",
  seoTitle: "False Hero Characters: Confirmed Cast And Apostle Of Death Lore",
  metaDescription: "False Hero characters are not named on the Steam store page. The store confirms the apostle of Death branching choice and Multiple Endings as the only status signal.",
  summary: "Find the confirmed characters in False Hero",
  hero: {
    eyebrow: "Reference",
    subtitle: "Find the confirmed characters in False Hero",
    ctas: [{"label":"Steam store page","href":"https://store.steampowered.com/app/2538870"}],
  },
  quickAnswer: "False Hero characters are not listed by name on the Steam store page as of 2026-09-22. The store description only frames the cast through the soulslike lens of the Land of the Gods and a final fight-for-the-Gods-versus-apostle-of-Death choice. Specific protagonist identity, named allies, antagonist roster, romance options, and voice cast are not announced, so the Steam Community Hub and the developer channel are the only places to track new reveals.",
  keyFacts: [
    { label: "Primary keyword", value: "False Hero characters" },
    { label: "Fact boundary", value: "Current-game fact: False Hero characters are not listed by name on the Steam store page for AppID 2538870 as of 2026-…" }
  ],
  modules: [
    {
      id: "characters-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "False Hero characters are not listed by name on the Steam store page as of 2026-09-22. The store description only frames the cast through the soulslike lens of the Land of the Gods and a final fight-for-the-Gods-versus-apostle-of-Death choice. Specific protagonist identity, named allies, antagonist roster, romance options, and voice cast are not announced, so the Steam Community Hub and the developer channel are the only places to track new reveals.\n\n## False Hero Characters Status",
    },
    {
      id: "characters-section-2",
      type: "prose",
      heading: "False Hero Characters Status: What Steam Currently Confirms",
      body: "The Steam listing for AppID 2538870 treats the cast as part of the setting. False Hero characters are introduced through the corrupted Land of the Gods rather than through a roster sheet, and the description leans on environment and lore to set up the apostle of Death decision. That framing is deliberate: it preserves the soulslike expectation that names arrive late, and it lets Torchlight Games and Ytop",
    },
    {
      id: "characters-section-3",
      type: "prose",
      heading: "Why The Cast Is Still A Mystery",
      body: "",
    },
    {
      id: "characters-section-4",
      type: "prose",
      heading: "What Players Should Watch For Updates",
      body: "",
    },
    {
      id: "characters-section-5",
      type: "prose",
      heading: "Important Sibling-Intent Disambiguation",
      body: "False Hero characters searches return a lot of unrelated noise. The phrase \"false hero\" is also a literary archetype, a light novel and anime trope, a writing-aid query, and a generic \"fake hero\" example. None of those uses are the same intellectual property as the Steam release, and none of them list a confirmed cast that overlaps with the Land of the Gods.\n\nThe Steam tags Singleplayer, Souls-like, Dark Fantasy, and Multiple Endings are the cleanest way to anchor False Hero characters to the correct game. If a wiki, list, or video does not reference those tags or the developer Torchlight Games, it is almost certainly describing a different \"false hero\" rather than the soulslike title on AppID 2538870. The phrase \"apostle of Death\" also describes an ending-shaped identity the player can take on, not a named NPC in the cast.",
    }
  ],
  faqIds: ["faq-characters-1", "faq-characters-2", "faq-characters-3"],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
