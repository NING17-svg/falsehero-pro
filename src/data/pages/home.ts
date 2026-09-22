import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "False Hero game: a new soulslike adventure on Steam",
  seoTitle: "False Hero game soulslike adventure by Torchlight Games on Steam",
  metaDescription: "False Hero game is the new soulslike adventure from Torchlight Games and publisher Ytopia on Steam. Planned release is September 22, 2026 with AppID 2538870.",
  summary: "Confirm False Hero is the new soulslike adventure from Torchlight Games and Ytopia, and enter the Steam store page",
  hero: {
    eyebrow: "Homepage",
    subtitle: "Confirm False Hero is the new soulslike adventure from Torchlight Games and Ytopia, and enter the Steam store page",
    ctas: [{"label":"- False Hero release date","href":"/release-date/"},{"label":"- False Hero Steam store page","href":"/steam/"},{"label":"- False Hero PC system requirements","href":"/system-requirements/"}],
  },
  quickAnswer: "False Hero game is the new soulslike adventure from developer Torchlight Games and publisher Ytopia, listed on Steam under AppID 2538870 with a planned release date of September 22, 2026. The Steam description confirms a fast-paced loop that lets you steal your enemies' attacks and chain them into deadly combos while exploring a corrupted Land of the Gods and facing challenging boss fights. Players choose between fighting for the Gods or becoming an apostle of Death.",
  keyFacts: [
    { label: "Source", value: "False Hero on Steam (AppID 2538870)" },
    { label: "Source", value: "False Hero Steam Community Hub" },
    { label: "Fact boundary", value: "Current-game facts about the title come from the Steam store page for AppID 2538870 and are authoritative as of 2026-…" }
  ],
  modules: [
    {
      id: "-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "False Hero game is the new soulslike adventure from developer Torchlight Games and publisher Ytopia, listed on Steam under AppID 2538870 with a planned release date of September 22, 2026. The Steam description confirms a fast-paced loop that lets you steal your enemies' attacks and chain them into deadly combos while exploring a corrupted Land of the Gods and facing challenging boss fights. Players choose between fighting for the Gods or becoming an apostle of Death.\n\n## Wha",
    },
    {
      id: "-section-2",
      type: "prose",
      heading: "What is the False Hero game about?",
      body: "The False Hero game is a fast-paced soulslike adventure built around a steal-and-chain combat loop. Instead of learning a fixed moveset, you take enemy attacks mid-fight and weave them into combos that match your reading of the encounter. The setting is the corrupted Land of the",
    },
    {
      id: "-section-3",
      type: "prose",
      heading: "When does the False Hero game launch and on which platforms?",
      body: "",
    },
    {
      id: "-section-4",
      type: "prose",
      heading: "Who is developing and publishing the False Hero game?",
      body: "",
    },
    {
      id: "-section-5",
      type: "prose",
      heading: "What should you check before launching the False Hero game?",
      body: "Before you boot the title on launch day, confirm your PC matches the published minimum and recommended specs, that your Steam client is up to date, and that your wishlist is active so you receive the standard launch notifications. The game lists English, German, French, Italian, Spanish (Spain and Latin America), Japanese, Korean, Portuguese (Brazil), Russian, and Simplified Chinese across Interface, Full Audio, and Subtitles. Headphones are recommended because the difficulty tag and boss-fight focus lean on audio cues for parry and dodge timing.",
    },
    {
      id: "-sources",
      type: "prose",
      heading: "Sources",
      body: "Each fact in this page is sourced from the references below. Cross-check the Steam store page for any updates.",
      links: [{"label":"False Hero on Steam (AppID 2538870)","href":"https://store.steampowered.com/app/2538870","description":"Confirms AppID 2538870, developer Torchlight Games, publisher Ytopia, planned release September 22, 2026, Steam tags, supported languages list, system requirements block, and short description."},{"label":"False Hero Steam Community Hub","href":"https://store.steampowered.com/app/2538870/community/","description":"Surfaces official announcements, launch-day discussion, and developer posts for the False Hero game."},{"label":"False Hero on SteamDB","href":"https://steamdb.info/app/2538870/","description":"Cross-checks AppID 2538870 metadata, supported languages, and tag history for the False Hero game."}],
    }
  ],
  faqIds: ["faq-home-1", "faq-home-2", "faq-home-3", "faq-home-4", "faq-home-5"],
  relatedPageIds: ["fixed-release-date-status-en-US", "fixed-steam-store-en-US", "fixed-system-requirements-en-US", "fixed-platforms-en-US", "fixed-gameplay-en-US", "fixed-characters-en-US", "wiki", "fixed-review-en-US", "fixed-demo-en-US", "guides", "fixed-reddit-en-US"],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
