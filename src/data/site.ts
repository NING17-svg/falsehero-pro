import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "False Hero Guide",
  brandMark: "FH",
  gameName: "False Hero",
  domain: "falsehero.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://falsehero.pro").replace(/\/$/, ""),
  description:
    "False Hero guide hub: release status, gameplay basics, characters, system requirements, platforms, walkthrough notes, demo info, reviews, wiki notes, and Reddit signals.",
  tagline: "Release status, gameplay, characters, and Steam launch information in one hub.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "False Hero Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "False Hero on Steam",
      href: "https://store.steampowered.com/app/2538870",
      description: "Steam store page for False Hero (AppID 2538870, planned release Sep 22 2026).",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide. All facts are sourced from the Steam store page, SteamDB record, and Steam Community hub for AppID 2538870.",
};
