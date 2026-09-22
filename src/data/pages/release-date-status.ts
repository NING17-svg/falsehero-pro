import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const release_date_statusPage: PageContent = {
  id: "fixed-release-date-status-en-US",
  translationKey: "release-date-status",
  locale: "en-US",
  routeKind: "fixed",
  slug: "release-date",
  url: "/release-date",
  pageType: "release",
  presentation: { shell: "content" },
  h1: "False Hero release date and Steam launch window in 2026",
  seoTitle: "False Hero release date and Steam launch window in 2026",
  metaDescription: "False Hero release date is listed as September 22, 2026 on Steam under AppID 2538870. No regional launch time, PS5 or Xbox date, or early-access window announced.",
  summary: "Confirm when False Hero releases on Steam and whether there is regional launch time, early-access, or console timing",
  hero: {
    eyebrow: "Status",
    subtitle: "Confirm when False Hero releases on Steam and whether there is regional launch time, early-access, or console timing",
    ctas: [{"label":"- False Hero Steam store page","href":"/steam/"},{"label":"- False Hero platforms","href":"/platforms/"},{"label":"- False Hero review status","href":"/review/"}],
  },
  quickAnswer: "False Hero release date is listed as September 22, 2026 on the Steam store page for AppID 2538870. There is no confirmed regional launch time, no early-access window, and no PS5 or Xbox date as of 2026-09-22. If you want to play on day one, plan around the Steam launch window, leave the Steam client open, and check the store page for any pre-load announcement closer to launch.",
  keyFacts: [
    { label: "Primary keyword", value: "False Hero release date" },
    { label: "Source", value: "False Hero on Steam (AppID 2538870)" },
    { label: "Source", value: "game-check Build now brief: False Hero" },
    { label: "Fact boundary", value: "The Steam store page for AppID 2538870 is the authoritative source for the False Hero release date of September 22, 2…" }
  ],
  modules: [
    {
      id: "release-date-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "False Hero release date is listed as September 22, 2026 on the Steam store page for AppID 2538870. There is no confirmed regional launch time, no early-access window, and no PS5 or Xbox date as of 2026-09-22. If you want to play on day one, plan around the Steam launch window, leave the Steam client open, and check the store page for any pre-load announcement closer to launch.\n\n## Wh",
    },
    {
      id: "release-date-section-2",
      type: "prose",
      heading: "When is the launch date on Steam?",
      body: "",
    },
    {
      id: "release-date-section-3",
      type: "prose",
      heading: "Is there an early-access or pre-launch window?",
      body: "",
    },
    {
      id: "release-date-section-4",
      type: "prose",
      heading: "Will the launch differ on PS5 or Xbox?",
      body: "",
    },
    {
      id: "release-date-section-5",
      type: "prose",
      heading: "Where can you verify the False Hero release date?",
      body: "The most reliable place to verify the date is the Steam store page for AppID 2538870. SteamDB mirrors the metadata and is a useful secondary check, and the Steam Community Hub hosts developer posts that explain any shift. Treat third-party trackers and fan wikis as secondary sources that may lag the Steam listing by hours or days.",
    },
    {
      id: "release-date-sources",
      type: "prose",
      heading: "Sources",
      body: "Each fact in this page is sourced from the references below. Cross-check the Steam store page for any updates.",
      links: [{"label":"False Hero on Steam (AppID 2538870)","href":"https://store.steampowered.com/app/2538870","description":"Confirms the False Hero release date of September 22, 2026, AppID 2538870, developer Torchlight Games, and publisher Ytopia."},{"label":"game-check Build now brief: False Hero","href":"https://github.com/NING17-svg/game-workflow/blob/main/game-intelligence/handoffs/game-check/build-now/false-hero.md","description":"Records Popular Coming Soon rank 34 and the September 22, 2026 launch window used for the False Hero release date."},{"label":"False Hero on SteamDB","href":"https://steamdb.info/app/2538870/","description":"Cross-checks the False Hero release date and tracks Steam metadata changes against the official listing."}],
    }
  ],
  faqIds: ["faq-release-date-status-1", "faq-release-date-status-2", "faq-release-date-status-3"],
  relatedPageIds: ["fixed-steam-store-en-US", "fixed-platforms-en-US", "fixed-review-en-US", "fixed-system-requirements-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
