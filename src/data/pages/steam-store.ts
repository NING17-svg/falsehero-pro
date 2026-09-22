import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const steam_storePage: PageContent = {
  id: "fixed-steam-store-en-US",
  translationKey: "steam-store",
  locale: "en-US",
  routeKind: "fixed",
  slug: "steam",
  url: "/steam",
  pageType: "wiki",
  presentation: { shell: "content" },
  h1: "False Hero Steam: AppID, store page, tags, and languages",
  seoTitle: "False Hero Steam: AppID, store page, tags, and languages",
  metaDescription: "False Hero Steam page at AppID 2538870 lists developer Torchlight Games, publisher Ytopia, release September 22, 2026, full tags, and supported languages list.",
  summary: "Open the False Hero Steam store page and confirm Steam-specific facts (AppID, developer, publisher, tags, languages)",
  hero: {
    eyebrow: "Reference",
    subtitle: "Open the False Hero Steam store page and confirm Steam-specific facts (AppID, developer, publisher, tags, languages)",
    ctas: [{"label":"- False Hero release date","href":"/release-date/"},{"label":"- False Hero PC system requirements","href":"/system-requirements/"},{"label":"- False Hero platforms","href":"/platforms/"}],
  },
  quickAnswer: "False Hero Steam is the canonical store page at store.steampowered.com/app/2538870 with AppID 2538870, developer Torchlight Games, and publisher Ytopia. The listing confirms a planned release of September 22, 2026, a soulslike steal-and-chain combat loop set in the Land of the Gods, and a Multiple Endings choice between fighting for the Gods or becoming an apostle of Death.",
  keyFacts: [
    { label: "Primary keyword", value: "False Hero Steam" },
    { label: "Source", value: "False Hero on Steam (AppID 2538870)" },
    { label: "Source", value: "False Hero on SteamDB" },
    { label: "Fact boundary", value: "AppID 2538870, developer Torchlight Games, publisher Ytopia, the full Steam tag list, the supported languages list, t…" }
  ],
  modules: [
    {
      id: "steam-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "False Hero Steam is the canonical store page at store.steampowered.com/app/2538870 with AppID 2538870, developer Torchlight Games, and publisher Ytopia. The listing confirms a planned release of September 22, 2026, a soulslike steal-and-chain combat loop set in the Land of the Gods, and a Multiple Endings choice between fighting for the Gods or becoming an apostle of Death.\n\n## W",
    },
    {
      id: "steam-section-2",
      type: "prose",
      heading: "What is the AppID and store URL?",
      body: "",
    },
    {
      id: "steam-section-3",
      type: "prose",
      heading: "Who developed and published the title on Steam?",
      body: "",
    },
    {
      id: "steam-section-4",
      type: "prose",
      heading: "What tags describe the False Hero Steam listing?",
      body: "",
    },
    {
      id: "steam-section-5",
      type: "prose",
      heading: "Which languages are supported on the store page?",
      body: "",
    },
    {
      id: "steam-section-6",
      type: "prose",
      heading: "What does the description say?",
      body: "The short description reads: False Hero is a fast-paced soulslike adventure where you steal your enemies' attacks and chain them into deadly combos. Explore the corrupted Land of the Gods and put your combat skills to the true test in challenging boss fights. Will you fight for the Gods or become an apostle of Death? The same description frames the Multiple Endings choice and the dark fantasy atmosphere that the Steam tags repeat.",
    },
    {
      id: "steam-sources",
      type: "prose",
      heading: "Sources",
      body: "Each fact in this page is sourced from the references below. Cross-check the Steam store page for any updates.",
      links: [{"label":"False Hero on Steam (AppID 2538870)","href":"https://store.steampowered.com/app/2538870","description":"Confirms the AppID 2538870, developer Torchlight Games, publisher Ytopia, planned release September 22, 2026, full tag list, supported languages, and short description."},{"label":"False Hero on SteamDB","href":"https://steamdb.info/app/2538870/","description":"Mirrors the AppID 2538870 metadata, tracks tag and language history, and surfaces store listing edits."},{"label":"False Hero Steam Community Hub","href":"https://store.steampowered.com/app/2538870/community/","description":"Hosts official announcements and launch-day discussion threads tied to the False Hero Steam listing."}],
    }
  ],
  faqIds: ["faq-steam-store-1", "faq-steam-store-2", "faq-steam-store-3", "faq-steam-store-4"],
  relatedPageIds: ["fixed-release-date-status-en-US", "fixed-system-requirements-en-US", "fixed-platforms-en-US", "fixed-review-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
