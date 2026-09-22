import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const platformsPage: PageContent = {
  id: "fixed-platforms-en-US",
  translationKey: "platforms",
  locale: "en-US",
  routeKind: "fixed",
  slug: "platforms",
  url: "/platforms",
  pageType: "wiki",
  presentation: { shell: "content" },
  h1: "False Hero platforms: Steam PC confirmed and console status",
  seoTitle: "False Hero platforms: Steam PC confirmed and console status",
  metaDescription: "False Hero platforms are Steam PC on Windows 10/11 only as of 2026-09-22. PS5, Xbox, Steam Deck, Linux, macOS, and Android are not announced. Steam AppID is 2538870.",
  summary: "See which platforms False Hero is confirmed to release on (Steam PC, PS5, Xbox, Steam Deck, macOS, Linux)",
  hero: {
    eyebrow: "Reference",
    subtitle: "See which platforms False Hero is confirmed to release on (Steam PC, PS5, Xbox, Steam Deck, macOS, Linux)",
    ctas: [{"label":"- False Hero release date","href":"/release-date/"},{"label":"- False Hero PC system requirements","href":"/system-requirements/"},{"label":"- False Hero Steam store page","href":"/steam/"}],
  },
  quickAnswer: "The platform list is narrow as of 2026-09-22: Steam PC on Windows 10 64-bit and Windows 11 64-bit is the only confirmed entry, under AppID 2538870. PS5, Xbox, Steam Deck verification, Linux, macOS, and Android releases have not been announced, even though autocomplete results often pair False Hero platforms with PS5 or Android searches. Treat Steam PC as the only anchor until an official channel adds a new entry.",
  keyFacts: [
    { label: "Source", value: "False Hero on Steam (AppID 2538870)" },
    { label: "Source", value: "False Hero Steam Community Hub" },
    { label: "Fact boundary", value: "The platform list is taken from the Steam store page for AppID 2538870 and is a current-game fact as of 2026-09-22: o…" }
  ],
  modules: [
    {
      id: "platforms-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "The platform list is narrow as of 2026-09-22: Steam PC on Windows 10 64-bit and Windows 11 64-bit is the only confirmed entry, under AppID 2538870. PS5, Xbox, Steam Deck verification, Linux, macOS, and Android releases have not been announced, even though autocomplete results often pair False Hero platforms with PS5 or Android searches. Treat Steam PC as the only anchor until an official channel adds a new entry.\n\n## Which False Hero plat",
    },
    {
      id: "platforms-section-2",
      type: "prose",
      heading: "Which False Hero platforms are confirmed for launch?",
      body: "",
    },
    {
      id: "platforms-section-3",
      type: "prose",
      heading: "Are PS5 or Xbox on the platform list?",
      body: "",
    },
    {
      id: "platforms-section-4",
      type: "prose",
      heading: "Is Steam Deck verification part of the platform list?",
      body: "",
    },
    {
      id: "platforms-section-5",
      type: "prose",
      heading: "Will Linux or macOS join the platform list?",
      body: "",
    },
    {
      id: "platforms-section-6",
      type: "prose",
      heading: "Will mobile versions join the platform list?",
      body: "",
    },
    {
      id: "platforms-section-7",
      type: "prose",
      heading: "Where can you verify the platform list?",
      body: "The platform list is verified against the Steam store page for AppID 2538870 and the Steam Community Hub for the same title. SteamDB mirrors the platform metadata and surfaces any edit, and any new platform confirmation would appear on the developer blog or the Ytopia publisher channel first. Treat third-party lists as secondary and trust the Steam listing as the canonical record.",
    },
    {
      id: "platforms-sources",
      type: "prose",
      heading: "Sources",
      body: "Each fact in this page is sourced from the references below. Cross-check the Steam store page for any updates.",
      links: [{"label":"False Hero on Steam (AppID 2538870)","href":"https://store.steampowered.com/app/2538870","description":"Confirms the False Hero platforms list of Steam PC on Windows 10 64-bit and Windows 11 64-bit under AppID 2538870."},{"label":"False Hero Steam Community Hub","href":"https://store.steampowered.com/app/2538870/community/","description":"Hosts official announcements and developer posts that surface any change to the False Hero platforms list."},{"label":"False Hero on SteamDB","href":"https://steamdb.info/app/2538870/","description":"Mirrors the False Hero platforms metadata and surfaces any platform edit against the Steam listing."}],
    }
  ],
  faqIds: ["faq-platforms-1", "faq-platforms-2", "faq-platforms-3", "faq-platforms-4"],
  relatedPageIds: ["fixed-release-date-status-en-US", "fixed-system-requirements-en-US", "fixed-steam-store-en-US", "fixed-review-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
