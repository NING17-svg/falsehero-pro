import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const gameplayPage: PageContent = {
  id: "fixed-gameplay-en-US",
  translationKey: "gameplay",
  locale: "en-US",
  routeKind: "fixed",
  slug: "gameplay",
  url: "/gameplay",
  pageType: "guides",
  presentation: { shell: "content" },
  h1: "False Hero Gameplay: Soulslike Steal-And-Chain Combat In The Land Of The Gods",
  seoTitle: "False Hero Gameplay: Steal, Chain, And Survive The Land Of Gods",
  metaDescription: "False Hero gameplay is a soulslike adventure with steal-and-chain combat, the corrupted Land of the Gods setting, boss fights, and a fight-for-the-Gods choice.",
  summary: "Understand False Hero's soulslike steal-and-chain combat, the Land of the Gods setting, and boss fights",
  hero: {
    eyebrow: "Explanation",
    subtitle: "Understand False Hero's soulslike steal-and-chain combat, the Land of the Gods setting, and boss fights",
    ctas: [{"label":"Steam store page","href":"https://store.steampowered.com/app/2538870"}],
  },
  quickAnswer: "False Hero gameplay centers on a fast-paced soulslike adventure where you steal your enemies' attacks and chain them into deadly combos. Players explore the corrupted Land of the Gods, take on challenging boss fights, and decide whether to fight for the Gods or become an apostle of Death. Specific combo lists, boss names, and difficulty tuning are not announced as of 2026-09-22, so the Steam store page remains the reference for current details.",
  keyFacts: [
    { label: "Fact boundary", value: "Current-game fact: The Steam store page for AppID 2538870 lists False Hero as a soulslike adventure with steal-and-ch…" }
  ],
  modules: [
    {
      id: "gameplay-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "False Hero gameplay centers on a fast-paced soulslike adventure where you steal your enemies' attacks and chain them into deadly combos. Players explore the corrupted Land of the Gods, take on challenging boss fights, and decide whether to fight for the Gods or become an apostle of Death. Specific combo lists, boss names, and difficulty tuning are not announced as of 2026-09-22, so the Steam store page remains the reference for current details.\n\n## False Hero Gameplay: Th",
    },
    {
      id: "gameplay-section-2",
      type: "prose",
      heading: "False Hero Gameplay: The Steal-And-Chain Combat System",
      body: "The headline mechanic of False Hero gameplay is the steal-and-chain combo loop. The Steam store description frames combat around stealing an opponent's attacks and immediately chaining them back as your own combos, so each enemy can become a temporary arsenal rather than a single obstacle. That framing carries through every fight, including the boss encounters that punctuate each region of the Land of the Gods.\n\nThe combat system builds on classic soulslike expectations: stamina, dodging, punishing openings, and the willingness to lose progress while learning a new enemy's rhythm. What changes the formula is the theft layer, which lets you borrow a heavy swi",
    },
    {
      id: "gameplay-section-3",
      type: "prose",
      heading: "The Corrupted Land Of The Gods Setting",
      body: "",
    },
    {
      id: "gameplay-section-4",
      type: "prose",
      heading: "Boss Fights And Combat Pacing",
      body: "",
    },
    {
      id: "gameplay-section-5",
      type: "prose",
      heading: "Multiple Endings And Branching Choices",
      body: "False Hero gameplay closes on a binary narrative question: fight for the Gods or become an apostle of Death. That line is lifted directly from the Steam description and frames the run as a moral choice the player earns through combat rather than a dialogue tree the player picks through. Specific ending labels, branch paths, and decision triggers are not announced as of 2026-09-22, so do not expect a full flowchart before launch.\n\nThe branching is what make the steal-and-chain combat land. Players who learn to fight like the Gods can lean into that identity to reach one ending, while players who lean on stolen arts can drift toward the apostle of Death conclusion. The store description treats both as ending-shaped outcomes rather than as a single good-versus-evil axis.\n\nMultiple Endings is also listed as a Steam tag on AppID 2538870, which confirms the framework without committing to a count. A fresh run plus a second run with the opposite choice is the minimum coverage a returning player should plan for.",
    }
  ],
  faqIds: ["faq-gameplay-1", "faq-gameplay-2", "faq-gameplay-3", "faq-gameplay-4"],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
