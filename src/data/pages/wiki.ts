import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const wikiPage: PageContent = {
  id: "guides",
  translationKey: "wiki",
  locale: "en-US",
  routeKind: "fixed",
  slug: "wiki",
  url: "/wiki",
  pageType: "wiki",
  presentation: { shell: "content" },
  h1: "False Hero Wiki: Launch Status, Lore, and First-Party Sources",
  seoTitle: "False Hero Wiki: Sources, Lore, and Launch Status",
  metaDescription: "A False Hero wiki is not established as of 2026-09-22. Use the Steam store page, Steam Community Hub, and this site's reference pages as the launch FAQ hub.",
  summary: "Find a wiki or FAQ for False Hero lore, terms, and mechanics questions",
  hero: {
    eyebrow: "Reference",
    subtitle: "Find a wiki or FAQ for False Hero lore, terms, and mechanics questions",
    ctas: [{"label":"Steam store page","href":"https://store.steampowered.com/app/2538870"}],
  },
  quickAnswer: "A False Hero wiki is not established as of 2026-09-22. The [Steam store page](https://store.steampowered.com/app/2538870) and the [Steam Community Hub](https://steamcommunity.com/app/2538870) are the first-party surfaces for the new Ytopia Oddities Collection soulslike from developer Torchlight Games and publisher Ytopia. Until an external False Hero wiki launches, this site's reference pages fill the wiki and FAQ role and map every fact back to the Steam listing.",
  keyFacts: [
    { label: "Fact boundary", value: "A dedicated third-party wiki for False Hero is not established as of 2026-09-22; the Steam store page and Steam Commu…" }
  ],
  modules: [
    {
      id: "wiki-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "A False Hero wiki is not established as of 2026-09-22. The [Steam store page](https://store.steampowered.com/app/2538870) and the [Steam Community Hub](https://steamcommunity.com/app/2538870) are the first-party surfaces for the new Ytopia Oddities Collection soulslike from developer Torchlight Games and publisher Ytopia. Until an external False Hero wiki launches, this site's reference pages fill the wiki and FAQ role and map every fact back to the Steam listing.\n\n## Where The",
    },
    {
      id: "wiki-section-2",
      type: "prose",
      heading: "Where The False Hero Wiki Currently Lives",
      body: "There is no standalone False Hero wiki on the open web as of 2026-09-22. Major wiki hosts that track Souls-like and dark fantasy games have not yet published a dedicated namespace for the new Ytopia Oddities Collection title, and the planned September 22, 2026 release date sits inside the launch window rather than after a long community buildup. Autocomplete around the term False Hero wiki returns user search patterns rather than confirmed wiki domains, which signals sustained demand without yet pointing at a destination page.\n\nUntil a third-party wiki launches, this site'",
    },
    {
      id: "wiki-section-3",
      type: "prose",
      heading: "First-Party Sources For False Hero Lore And Mechanics",
      body: "The Steam store page at https://store.steampowered.com/app/2538870 and the",
    },
    {
      id: "wiki-section-4",
      type: "prose",
      heading: "What A Future False Hero Wiki Could Cover",
      body: "",
    },
    {
      id: "wiki-section-5",
      type: "prose",
      heading: "Other False Hero Wikis Are Not This Game",
      body: "Wikis for the literary \"false hero\" archetype (false protagonist, false antagonist heroes, false heroes villains), for the \"false hero\" light novel and audiobook namesakes, and for any \"false protagonist\" anime or Mario crossover page cover unrelated material. None of those wikis is a False Hero wiki for the Ytopia Oddities Collection soulslike. Treat any wiki content imported from those earlier or unrelated titles as legacy context only, never as current-game fact, and avoid routing launch-day questions to the false-protagonist trope pages. A reader who needs the launch-day False Hero wiki answer should land on this page or on the Steam listing itself.",
    }
  ],
  faqIds: ["faq-wiki-1", "faq-wiki-2", "faq-wiki-3", "faq-wiki-4"],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
