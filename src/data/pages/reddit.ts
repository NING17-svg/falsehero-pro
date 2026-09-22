import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const redditPage: PageContent = {
  id: "fixed-reddit-en-US",
  translationKey: "reddit",
  locale: "en-US",
  routeKind: "fixed",
  slug: "reddit",
  url: "/reddit",
  pageType: "wiki",
  presentation: { shell: "content" },
  h1: "False Hero Reddit: Subreddit Status and Community Hubs",
  seoTitle: "False Hero Reddit: Subreddit Status and Community Hubs",
  metaDescription: "A dedicated False Hero Reddit subreddit is not established as of 2026-09-22. Use Steam Community Hub threads for launch-day conversation.",
  summary: "Find the False Hero Reddit community and discussion threads",
  hero: {
    eyebrow: "Reference",
    subtitle: "Find the False Hero Reddit community and discussion threads",
    ctas: [{"label":"Steam store page","href":"https://store.steampowered.com/app/2538870"}],
  },
  quickAnswer: "A False Hero Reddit community is not established as of 2026-09-22. The [Steam Community Hub](https://steamcommunity.com/app/2538870) is the launch-day discussion surface for the new Ytopia Oddities Collection soulslike from developer Torchlight Games and publisher Ytopia. Until a dedicated False Hero Reddit subreddit launches, Steam Community Hub threads stand in for the launch-day Reddit conversation, and broader false-protagonist subreddit threads are not this game.",
  keyFacts: [
    { label: "Fact boundary", value: "A dedicated False Hero Reddit subreddit is not established as of 2026-09-22; the Steam Community Hub is the only firs…" }
  ],
  modules: [
    {
      id: "reddit-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "A False Hero Reddit community is not established as of 2026-09-22. The [Steam Community Hub](https://steamcommunity.com/app/2538870) is the launch-day discussion surface for the new Ytopia Oddities Collection soulslike from developer Torchlight Games and publisher Ytopia. Until a dedicated False Hero Reddit subreddit launches, Steam Community Hub threads stand in for the launch-day Reddit conversation, and broader false-protagonist subreddit threads are not this game.\n\n## Where The False Hero R",
    },
    {
      id: "reddit-section-2",
      type: "prose",
      heading: "Where The False Hero Reddit Community Currently Lives",
      body: "There is no dedicated False Hero Reddit subreddit on the open web as of 2026-09-22. Major subreddit indexes and Steam Community Hub cross-links have not surfaced a verified r/FalseHero or r/FalseHeroGame namespace, and the planned September 22, 2026 release falls inside the launch window. Autocomplete around the term False Hero Reddit returns user search patterns rather than confirmed subreddit destinations, which signals sustained demand without yet pointing at a live community.\n\nUntil a dedicated subreddit launches, the [Steam Community",
    },
    {
      id: "reddit-section-3",
      type: "prose",
      heading: "Launch-Day Threads On The Steam Community Hub",
      body: "",
    },
    {
      id: "reddit-section-4",
      type: "prose",
      heading: "What A Future False Hero Reddit Subreddit Could Cover",
      body: "",
    },
    {
      id: "reddit-section-5",
      type: "prose",
      heading: "Other False Hero Reddit Spaces Are Not This Game",
      body: "Reddit threads for the literary \"false hero\" archetype (false protagonist, false antagonist heroes, false heroes villains), for the \"false hero\" light novel and audiobook namesakes, and for any \"false protagonist\" anime or Mario crossover post cover unrelated material. None of those subreddits is a False Hero Reddit community for the Ytopia Oddities Collection soulslike. Treat any Reddit content imported from those earlier or unrelated titles as legacy context only, never as current-game fact, and avoid routing launch-day questions to the broader false-protagonist subreddit threads. A reader who needs the launch-day False Hero Reddit answer should land on this page or on the Steam Community Hub itself.",
    }
  ],
  faqIds: ["faq-reddit-1", "faq-reddit-2", "faq-reddit-3", "faq-reddit-4"],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
