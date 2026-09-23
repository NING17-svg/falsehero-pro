import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const demoPage: PageContent = {
  id: "fixed-demo-en-US",
  translationKey: "demo",
  locale: "en-US",
  routeKind: "fixed",
  slug: "demo",
  url: "/demo",
  pageType: "release",
  presentation: { shell: "content" },
  h1: "False Hero Demo: Steam Availability, AppID, and Installation",
  seoTitle: "False Hero Demo: Steam Availability, AppID, and Installation",
  metaDescription: "False Hero demo is live on Steam at AppID 4702340 (launched June 2026, 266 user reviews, 94% positive). Confirm Windows, controller, and language support before installing.",
  summary: "Find the False Hero demo on Steam, confirm AppID 4702340, and install the trial build before committing to the full price",
  hero: {
    eyebrow: "Demo",
    subtitle: "Find the False Hero demo on Steam, confirm AppID 4702340, and install the trial build before committing to the full price",
    ctas: [
      {"label":"False Hero demo store page","href":"https://store.steampowered.com/app/4702340/"},
      {"label":"False Hero full-game store page","href":"https://store.steampowered.com/app/2538870/False_Hero/"}
    ],
  },
  quickAnswer: "The False Hero demo is live on Steam at AppID 4702340 (https://store.steampowered.com/app/4702340/), launched June 4 2026 by developer Torchlight Games and publisher Ytopia. The demo carried 266 user reviews with a 94% positive rating on the page; it ships on Windows 10/11 64-bit with full controller support (Xbox, PlayStation, DualShock, DualSense) and the same 11-language package as the full game. Treat any claim about demo-to-release save transfer as unconfirmed until Torchlight Games states it on the Steam Community Hub; the developer has not posted that confirmation in any public thread.",
  keyFacts: [
    { label: "Status", value: "Demo is live on Steam at AppID 4702340, launched June 4 2026." },
    { label: "Reception", value: "266 user reviews, 94% positive rating as of the research snapshot." },
    { label: "Platform", value: "Windows 10 64-bit minimum, Windows 11 64-bit recommended; Steam page does not list macOS or Steam Deck verified status." },
    { label: "Controller", value: "Xbox, PlayStation, DualShock, and DualSense controllers supported via Steam Input." },
    { label: "Languages", value: "11 languages matching the full release: English, French, Italian, German, Spanish (Spain), Spanish (Latin America), Japanese, Korean, Portuguese (Brazil), Russian, Simplified Chinese." },
    { label: "Build", value: "Unity engine, same first-chapter scope the developer scopes on the full-game store page." },
    { label: "Save transfer", value: "Unconfirmed in any public Steam Community Hub thread by Torchlight Games." }
  ],
  modules: [
    {
      id: "demo-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "The False Hero demo is live on Steam at AppID 4702340, launched June 4 2026 by developer Torchlight Games and publisher Ytopia. It runs on Windows 10/11 64-bit with full controller support (Xbox, PlayStation, DualShock, DualSense) and ships the same 11-language package as the full game. The research snapshot recorded 266 user reviews at 94% positive; treat demo save transfer to the full release as unconfirmed until the developer posts a confirmation on the Steam Community Hub. Use the demo store page (https://store.steampowered.com/app/4702340/) as the canonical source; the full-game store page (https://store.steampowered.com/app/2538870/False_Hero/) carries the matching metadata for cross-checks.",
    },
    {
      id: "demo-section-2",
      type: "data-table",
      heading: "Demo At A Glance",
      columns: [
        { key: "field", label: "Field" },
        { key: "value", label: "Value" }
      ],
      rows: [
        { field: "Steam AppID", value: "4702340" },
        { field: "Demo store URL", value: "https://store.steampowered.com/app/4702340/" },
        { field: "Released", value: "June 4 2026" },
        { field: "Developer", value: "Torchlight Games" },
        { field: "Publisher", value: "Ytopia" },
        { field: "User reviews", value: "266 at 94% positive (research snapshot, 2026-09-22)" },
        { field: "OS support", value: "Windows 10 64-bit minimum; Windows 11 64-bit recommended" },
        { field: "Engine", value: "Unity" },
        { field: "Controller support", value: "Xbox, PlayStation, DualShock, DualSense (Steam Input)" },
        { field: "Languages", value: "English, French, Italian, German, Spanish (Spain), Spanish (Latin America), Japanese, Korean, Portuguese (Brazil), Russian, Simplified Chinese" },
        { field: "Full-game store URL", value: "https://store.steampowered.com/app/2538870/False_Hero/" }
      ]
    },
    {
      id: "demo-section-3",
      type: "steps",
      heading: "How To Install The Demo",
      items: [
        {
          title: "Open the demo store page",
          body: "Go to https://store.steampowered.com/app/4702340/ while signed in to Steam. Verify the URL shows AppID 4702340 in the store right rail before clicking Install.",
          doneCondition: "The Steam client prompts to install a demo of False Hero at AppID 4702340."
        },
        {
          title: "Confirm OS, language, and controller",
          body: "Check the system requirements block for Windows 10/11 64-bit and the language list for the 11 supported interface/audio/subtitle locales. Plug in your controller before launch if you plan to use Xbox, PlayStation, DualShock, or DualSense input.",
          doneCondition: "OS, language, and controller match the demo's published list."
        },
        {
          title: "Launch the demo and reach the first chapter",
          body: "Start the demo from your Steam library. The developer's store-page note frames the demo as covering the first chapter of False Hero, so treat early checkpoints such as Temple Walls as in-bounds content rather than a bug.",
          doneCondition: "The demo reaches its first story gate without a crash or hang."
        }
      ]
    },
    {
      id: "demo-section-4",
      type: "callout",
      tone: "unknown",
      title: "Demo Save Transfer To The Full Release Is Unconfirmed",
      body: "The Steam Community Hub threads for AppID 2538870 and the developer posts linked from the demo store page do not contain a public statement from Torchlight Games confirming that demo progress carries over to the full release. Treat save transfer as unconfirmed and plan to replay the early chapters from the start when the full game ships on September 22 2026. If the developer confirms transfer after publication, this page will be updated with the corrected behavior.",
    },
    {
      id: "demo-section-5",
      type: "callout",
      tone: "tip",
      title: "Steam Family Sharing Exclusion Is A Steam Content-Type Note",
      body: "SteamDB flags the demo as not family-shareable. That flag reflects how Steam categorizes trial/demo content types, not a developer-set restriction from Torchlight Games. The full release at AppID 2538870 follows the publisher's standard Family Sharing rules rather than the demo's content-type metadata.",
    },
    {
      id: "demo-section-6",
      type: "prose",
      heading: "What The Demo Covers And What It Does Not",
      body: "The developer's note on the demo store page frames the build as the first chapter of False Hero, offering a glimpse into the weird and charming world, combat, and systems of the full game. Anything beyond the first chapter — the kingdom of Wisdom, the lush swamps, the chilling ruins, the ancient cities, and the Labyrinth of Death listed in the full-game description — remains outside the demo build. Use the demo to confirm the steal-and-chain combat loop, the audio-cue-driven parry timing, and your controller setup, then return to the full release for the rest of the regions.",
    },
    {
      id: "demo-section-7",
      type: "prose",
      heading: "Where To Watch For Updates After Installation",
      body: "Refresh the demo store page at https://store.steampowered.com/app/4702340/ for any post-launch patch notes or build updates, and watch the Steam Community Hub for AppID 2538870 (https://steamcommunity.com/app/2538870/discussions/) for developer replies that confirm or correct demo behavior. Any third-party demo link, demo installer, or demo crack outside the Steam store page should be treated as unverified; the Steam store page is the only first-party surface for this build.",
    },
    {
      id: "demo-section-sources",
      type: "prose",
      heading: "Sources",
      body: "Every fact on this page is anchored to the public sources below. Cross-check the demo store page before installing in case Steam listing metadata changes.",
      links: [
        {"label":"False Hero demo on Steam (AppID 4702340)","href":"https://store.steampowered.com/app/4702340/","description":"Confirms the demo's AppID 4702340, launch date, 11-language support, Windows requirements, and developer note that frames the build as the first chapter."},
        {"label":"False Hero full game on Steam (AppID 2538870)","href":"https://store.steampowered.com/app/2538870/False_Hero/","description":"Confirms the full release metadata, developer Torchlight Games, publisher Ytopia, and the planned September 22 2026 launch that the demo precedes."},
        {"label":"False Hero Steam Community Hub","href":"https://steamcommunity.com/app/2538870/discussions/","description":"Hosts official announcements and developer threads used to verify demo availability and to confirm that no save-transfer statement has been published."},
        {"label":"False Hero launch coverage (ixbt.games, 2026-06-05)","href":"https://ixbt.games/en/news/2026/06/05/416751-v-steam-stalo-dostupno-demo-soulslaika-false-hero-nad-kotorym-vot-uze-sest-let-truditsia-vsego-odin-umelec.amp.html","description":"Independent launch-day coverage of the False Hero demo's June 2026 release."},
        {"label":"False Hero review (Culture Combine)","href":"https://www.culturecombine.com/post/false-hero-review-a-soulslike-that-recaptures-the-magic-of-early-fromsoftware","description":"Third-party review that frames the demo and full release as a soulslike from the developer of record."}
      ]
    }
  ],
  faqIds: ["faq-demo-1", "faq-demo-2", "faq-demo-3"],
  relatedPageIds: ["home", "fixed-steam-store-en-US", "guides"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-24",
};
