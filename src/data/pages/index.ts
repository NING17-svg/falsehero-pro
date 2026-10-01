import type { PageContent } from "@/types/content";
import { homePage } from "./home";
import { release_date_statusPage } from "./release-date-status";
import { steam_storePage } from "./steam-store";
import { system_requirementsPage } from "./system-requirements";
import { platformsPage } from "./platforms";
import { gameplayPage } from "./gameplay";
import { charactersPage } from "./characters";
import { walkthroughPage } from "./walkthrough";
import { reviewPage } from "./review";
import { demoPage } from "./demo";
import { wikiPage } from "./wiki";
import { redditPage } from "./reddit";
import { faqPage } from "./faq";
import { aboutPage } from "./about";
import { contactPage } from "./contact";
import { privacy_policyPage } from "./privacy-policy";
import { termsPage } from "./terms";

export const allContentPages: PageContent[] = [
  {
    "id": "home",
    "translationKey": "home",
    "locale": "en-US",
    "routeKind": "home",
    "slug": "",
    "url": "/",
    "pageType": "home",
    "presentation": {
      "shell": "home"
    },
    "h1": "False Hero game: a new soulslike adventure on Steam",
    "seoTitle": "False Hero game soulslike adventure by Torchlight Games on Steam",
    "metaDescription": "False Hero game is the new soulslike adventure from Torchlight Games and publisher Ytopia on Steam. Planned release is September 22, 2026 with AppID 2538870.",
    "summary": "Confirm False Hero is the new soulslike adventure from Torchlight Games and Ytopia, and enter the Steam store page",
    "hero": {
      "eyebrow": "Homepage",
      "subtitle": "Confirm False Hero is the new soulslike adventure from Torchlight Games and Ytopia, and enter the Steam store page",
      "ctas": [
        {
          "label": "False Hero release date",
          "href": "/release-date/"
        },
        {
          "label": "False Hero Steam store page",
          "href": "/steam/"
        },
        {
          "label": "False Hero PC system requirements",
          "href": "/system-requirements/"
        }
      ]
    },
    "quickAnswer": "False Hero game is the new soulslike adventure from developer Torchlight Games and publisher Ytopia, listed on Steam under AppID 2538870 with a planned release date of September 22, 2026. The Steam description confirms a fast-paced loop that lets you steal your enemies' attacks and chain them into deadly combos while exploring a corrupted Land of the Gods and facing challenging boss fights. Players choose between fighting for the Gods or becoming an apostle of Death.",
    "keyFacts": [
      {
      "label": "Developer",
      "value": "Torchlight Games"
    },
    {
      "label": "Publisher",
      "value": "Ytopia"
    },
    {
      "label": "Steam AppID",
      "value": "2538870"
    },
    {
      "label": "Release date",
      "value": "September 22, 2026"
    },
    {
      "label": "Platform",
      "value": "Steam PC, Windows 10/11 64-bit"
    },
    {
      "label": "Collection",
      "value": "Ytopia Oddities Collection"
    }
  ],
    "modules": [
      {
        "id": "home-section-2",
        "type": "prose",
        "heading": "What is the False Hero game about?",
        "body": "The False Hero game is a fast-paced soulslike adventure built around a steal-and-chain combat loop. Instead of learning a fixed moveset, you take enemy attacks mid-fight and weave them into combos that match your reading of the encounter. The setting is the corrupted Land of the Gods, and the run ends on a choice: fight for the Gods, or become an apostle of Death. The store page describes challenging boss fights as the true test of combat skill and tags the title as Multiple Endings, so the narrative question is a combat-earned branch rather than a dialogue option."
      },
      {
        "id": "home-section-3",
        "type": "prose",
        "heading": "When does the False Hero game launch and on which platforms?",
        "body": "The False Hero game is listed for September 22, 2026 on Steam under AppID 2538870. Steam PC is the only confirmed platform: the store page lists Windows 10 64-bit and Windows 11 64-bit, and it does not list PS5, Xbox, Steam Deck verification, Linux, macOS, or Android. No regional launch time has been published, so the Steam store page on the day is the only place a launch window becomes concrete."
      },
      {
        "id": "home-section-4",
        "type": "prose",
        "heading": "Who is developing and publishing the False Hero game?",
        "body": "Torchlight Games develops False Hero and Ytopia publishes it, as credited on the Steam store page for AppID 2538870. It sits in the Ytopia Oddities Collection alongside the publisher's other titles. The same developer and publisher pair is credited on the demo at AppID 4702340, so the demo and the full game are the same team."
      },
      {
        "id": "home-section-5",
        "type": "prose",
        "heading": "What should you check before launching the False Hero game?",
        "body": "Before you boot the title on launch day, confirm your PC matches the published minimum and recommended specs, that your Steam client is up to date, and that your wishlist is active so you receive the standard launch notifications. The game lists English, German, French, Italian, Spanish (Spain and Latin America), Japanese, Korean, Portuguese (Brazil), Russian, and Simplified Chinese across Interface, Full Audio, and Subtitles. Headphones are recommended because the difficulty tag and boss-fight focus lean on audio cues for parry and dodge timing."
      }
    ],
    "faqIds": [
      "faq-home-1",
      "faq-home-2",
      "faq-home-3",
      "faq-home-4",
      "faq-home-5"
    ],
    "relatedPageIds": [
      "fixed-release-date-status-en-US",
      "fixed-steam-store-en-US",
      "fixed-system-requirements-en-US",
      "fixed-platforms-en-US",
      "fixed-gameplay-en-US",
      "fixed-characters-en-US",
      "wiki",
      "fixed-review-en-US",
      "fixed-demo-en-US",
      "guides",
      "fixed-reddit-en-US"
    ],
    "schemaTypes": [
      "WebSite",
      "CollectionPage",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "fixed-release-date-status-en-US",
    "translationKey": "release-date-status",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "release-date",
    "url": "/release-date",
    "pageType": "release",
    "presentation": {
      "shell": "content"
    },
    "h1": "False Hero release date and Steam launch window in 2026",
    "seoTitle": "False Hero release date and Steam launch window in 2026",
    "metaDescription": "False Hero release date is listed as September 22, 2026 on Steam under AppID 2538870. No regional launch time, PS5 or Xbox date, or early-access window announced.",
    "summary": "Confirm when False Hero releases on Steam and whether there is regional launch time, early-access, or console timing",
    "hero": {
      "eyebrow": "Status",
      "subtitle": "Confirm when False Hero releases on Steam and whether there is regional launch time, early-access, or console timing",
      "ctas": [
        {
          "label": "False Hero Steam store page",
          "href": "/steam/"
        },
        {
          "label": "False Hero platforms",
          "href": "/platforms/"
        },
        {
          "label": "False Hero review status",
          "href": "/review/"
        }
      ]
    },
    "quickAnswer": "False Hero release date is listed as September 22, 2026 on the Steam store page for AppID 2538870. There is no confirmed regional launch time, no early-access window, and no PS5 or Xbox date. If you want to play on day one, plan around the Steam launch window, leave the Steam client open, and check the store page for any pre-load announcement closer to launch.",
    "keyFacts": [
      {
      "label": "Release date",
      "value": "September 22, 2026"
    },
    {
      "label": "Steam AppID",
      "value": "2538870"
    },
    {
      "label": "Regional launch time",
      "value": "Not announced"
    },
    {
      "label": "Early access",
      "value": "No window announced"
    },
    {
      "label": "PS5 / Xbox",
      "value": "No date announced"
    }
  ],
    "modules": [
      {
        "id": "release-date-section-2",
        "type": "prose",
        "heading": "When is the launch date on Steam?",
        "body": "The Steam store page for AppID 2538870 lists a release date of September 22, 2026. That is the only date the developer or publisher has published. No regional launch time is confirmed, so the store page on the day is what turns the date into a clock time, and SteamDB mirrors the same metadata if the listing changes."
      },
      {
        "id": "release-date-section-3",
        "type": "prose",
        "heading": "Is there an early-access or pre-launch window?",
        "body": "No early-access or pre-launch window has been announced. The store page lists a single release date with no early-access flag, and no Steam Community Hub thread from Torchlight Games announces one. Treat September 22, 2026 as the full release rather than the start of an early-access period."
      },
      {
        "id": "release-date-section-4",
        "type": "prose",
        "heading": "Will the launch differ on PS5 or Xbox?",
        "body": "There is no PS5 or Xbox date to differ from, because neither console is on the platform list. Steam PC on Windows is the only confirmed entry, and no console version has been announced by either the developer or the publisher. If a console release is added later, the Steam store page and the Ytopia publisher channel are where it would be announced first."
      },
      {
        "id": "release-date-section-5",
        "type": "prose",
        "heading": "Where can you verify the False Hero release date?",
        "body": "The most reliable place to verify the date is the Steam store page for AppID 2538870. SteamDB mirrors the metadata and is a useful secondary check, and the Steam Community Hub hosts developer posts that explain any shift. Treat third-party trackers and fan wikis as secondary sources that may lag the Steam listing by hours or days."
      }
    ],
    "faqIds": [
      "faq-release-date-status-1",
      "faq-release-date-status-2",
      "faq-release-date-status-3"
    ],
    "relatedPageIds": [
      "fixed-steam-store-en-US",
      "fixed-platforms-en-US",
      "fixed-review-en-US",
      "fixed-system-requirements-en-US"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "fixed-steam-store-en-US",
    "translationKey": "steam-store",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "steam",
    "url": "/steam",
    "pageType": "wiki",
    "presentation": {
      "shell": "content"
    },
    "h1": "False Hero Steam: AppID, store page, tags, and languages",
    "seoTitle": "False Hero Steam: AppID, store page, tags, and languages",
    "metaDescription": "False Hero Steam page at AppID 2538870 lists developer Torchlight Games, publisher Ytopia, release September 22, 2026, full tags, and supported languages list.",
    "summary": "Open the False Hero Steam store page and confirm Steam-specific facts (AppID, developer, publisher, tags, languages)",
    "hero": {
      "eyebrow": "Reference",
      "subtitle": "Open the False Hero Steam store page and confirm Steam-specific facts (AppID, developer, publisher, tags, languages)",
      "ctas": [
        {
          "label": "False Hero release date",
          "href": "/release-date/"
        },
        {
          "label": "False Hero PC system requirements",
          "href": "/system-requirements/"
        },
        {
          "label": "False Hero platforms",
          "href": "/platforms/"
        }
      ]
    },
    "quickAnswer": "False Hero Steam is the canonical store page at store.steampowered.com/app/2538870 with AppID 2538870, developer Torchlight Games, and publisher Ytopia. The listing confirms a planned release of September 22, 2026, a soulslike steal-and-chain combat loop set in the Land of the Gods, and a Multiple Endings choice between fighting for the Gods or becoming an apostle of Death.",
    "keyFacts": [
      {
      "label": "Steam AppID",
      "value": "2538870"
    },
    {
      "label": "Store URL",
      "value": "store.steampowered.com/app/2538870"
    },
    {
      "label": "Developer",
      "value": "Torchlight Games"
    },
    {
      "label": "Publisher",
      "value": "Ytopia"
    },
    {
      "label": "Tags",
      "value": "Singleplayer, Souls-like, Dark Fantasy, Multiple Endings, Difficult"
    },
    {
      "label": "Languages",
      "value": "11, including Simplified Chinese"
    }
  ],
    "modules": [
      {
        "id": "steam-section-2",
        "type": "prose",
        "heading": "What is the AppID and store URL?",
        "body": "The Steam AppID is 2538870, and the store page is at https://store.steampowered.com/app/2538870. That AppID anchors every other page on this site: the platform list, the spec block, the tag list, and the language list are all read from that one listing. The demo is a separate listing at AppID 4702340."
      },
      {
        "id": "steam-section-3",
        "type": "prose",
        "heading": "Who developed and published the title on Steam?",
        "body": "Torchlight Games is the developer and Ytopia is the publisher, both credited on the store page for AppID 2538870. The same pair is credited on the demo listing, and the title is part of the Ytopia Oddities Collection. When a search result names a different studio, it is not describing this release."
      },
      {
        "id": "steam-section-4",
        "type": "prose",
        "heading": "What tags describe the False Hero Steam listing?",
        "body": "The store page tags False Hero as Singleplayer, Souls-like, Dark Fantasy, Multiple Endings, and Difficult. Singleplayer and Multiple Endings are the two that carry real information: the first is the mode designation, and the second matches the fight-for-the-Gods-versus-apostle-of-Death choice in the description. The other three describe genre and tone. Tags change as the listing is updated, so re-read them on the store page rather than trusting a cached copy."
      },
      {
        "id": "steam-section-5",
        "type": "prose",
        "heading": "Which languages are supported on the store page?",
        "body": "The store page lists 11 languages, and the demo ships the same set: English, French, Italian, German, Spanish (Spain), Spanish (Latin America), Japanese, Korean, Portuguese (Brazil), Russian, and Simplified Chinese. Because the demo and the full game carry the same language package, the demo is a fair test of whether the interface suits you."
      },
      {
        "id": "steam-section-6",
        "type": "prose",
        "heading": "What does the description say?",
        "body": "The short description reads: False Hero is a fast-paced soulslike adventure where you steal your enemies' attacks and chain them into deadly combos. Explore the corrupted Land of the Gods and put your combat skills to the true test in challenging boss fights. Will you fight for the Gods or become an apostle of Death? The same description frames the Multiple Endings choice and the dark fantasy atmosphere that the Steam tags repeat."
      }
    ],
    "faqIds": [
      "faq-steam-store-1",
      "faq-steam-store-2",
      "faq-steam-store-3",
      "faq-steam-store-4"
    ],
    "relatedPageIds": [
      "fixed-release-date-status-en-US",
      "fixed-system-requirements-en-US",
      "fixed-platforms-en-US",
      "fixed-review-en-US"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "fixed-system-requirements-en-US",
    "translationKey": "system-requirements",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "system-requirements",
    "url": "/system-requirements",
    "pageType": "wiki",
    "presentation": {
      "shell": "content"
    },
    "h1": "False Hero system requirements: minimum and recommended PC specs",
    "seoTitle": "False Hero system requirements: minimum and recommended PC specs",
    "metaDescription": "False Hero system requirements on Steam: minimum Windows 10 64-bit, i5-8400, 8 GB RAM, GTX 970, DX10, 12 GB SSD. Recommended Windows 11, i5-10400, 16 GB, RTX 2060.",
    "summary": "Check whether my PC meets the minimum and recommended system requirements for False Hero",
    "hero": {
      "eyebrow": "Reference",
      "subtitle": "Check whether my PC meets the minimum and recommended system requirements for False Hero",
      "ctas": [
        {
          "label": "False Hero platforms",
          "href": "/platforms/"
        },
        {
          "label": "False Hero Steam store page",
          "href": "/steam/"
        },
        {
          "label": "False Hero gameplay",
          "href": "/gameplay/"
        }
      ]
    },
    "quickAnswer": "The False Hero system requirements on the Steam store page list a minimum of Windows 10 64-bit, Intel Core i5-8400, 8 GB RAM, NVIDIA GeForce GTX 970, DirectX 10, and 12 GB of SSD storage. The recommended spec is Windows 11 64-bit, Intel Core i5-10400, 16 GB RAM, NVIDIA GeForce RTX 2060, DirectX 12, and the same 12 GB SSD. Both rows confirm the title is Windows-only on PC.",
    "keyFacts": [
      {
      "label": "Minimum",
      "value": "Windows 10 64-bit, i5-8400, 8 GB RAM, GTX 970, DirectX 10"
    },
    {
      "label": "Recommended",
      "value": "Windows 11 64-bit, i5-10400, 16 GB RAM, RTX 2060, DirectX 12"
    },
    {
      "label": "Storage",
      "value": "12 GB SSD in both tiers"
    },
    {
      "label": "Sound card",
      "value": "Not listed in either tier"
    }
  ],
    "modules": [
      {
        "id": "system-requirements-section-2",
        "type": "prose",
        "heading": "What does the False Hero system requirements block list?",
        "body": "The minimum row lists Windows 10 64-bit, an Intel Core i5-8400, 8 GB of RAM, an NVIDIA GeForce GTX 970, DirectX 10, and 12 GB of SSD storage. The recommended row raises each of those: Windows 11 64-bit, an Intel Core i5-10400, 16 GB of RAM, an NVIDIA GeForce RTX 2060, DirectX 12, and the same 12 GB SSD. Both rows are Windows-only, which is why the platform page lists no macOS or Linux entry."
      },
      {
        "id": "system-requirements-section-3",
        "type": "prose",
        "heading": "Will my laptop pass the spec block?",
        "body": "Compare your machine against the recommended row rather than the minimum one if you can. The minimum is an Intel Core i5-8400 with 8 GB of RAM and a GeForce GTX 970, and the recommended is an i5-10400 with 16 GB and a GeForce RTX 2060. A laptop with a mobile GPU from the minimum's era will usually clear the CPU and RAM but sit below the recommended card, and the gap matters more here than usual because the store page also tags the game as Difficult. If you are between the rows, treat the recommended tier as the one to buy for."
      },
      {
        "id": "system-requirements-section-4",
        "type": "prose",
        "heading": "How much storage does the spec block require?",
        "body": "Both tiers ask for 12 GB of SSD storage, so the requirement does not change with the tier. The store page specifies SSD rather than a plain disk, and the same figure applies whether you are buying the full game or running the demo, which is a first-chapter build."
      },
      {
        "id": "system-requirements-section-5",
        "type": "prose",
        "heading": "Does the spec block mention a sound card?",
        "body": "No. Neither the minimum nor the recommended row lists a sound card, and the DirectX figures given are 10 for minimum and 12 for recommended. That is the whole of what the store page publishes on the subject, so it is worth re-reading the spec block before launch in case the developer has added one."
      },
      {
        "id": "system-requirements-section-6",
        "type": "prose",
        "heading": "Where is the spec block sourced from?",
        "body": "The False Hero system requirements block is sourced from the Steam store page for AppID 2538870, where it appears under the system requirements section. The Steam Community Hub and SteamDB mirror the same metadata and surface any spec edit, so check there if you suspect a late change. The block is a first-party Steam fact and is the cleanest available source for the minimum and recommended rows."
      }
    ],
    "faqIds": [
      "faq-system-requirements-1",
      "faq-system-requirements-2",
      "faq-system-requirements-3",
      "faq-system-requirements-4"
    ],
    "relatedPageIds": [
      "fixed-platforms-en-US",
      "fixed-steam-store-en-US",
      "fixed-gameplay-en-US"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "fixed-platforms-en-US",
    "translationKey": "platforms",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "platforms",
    "url": "/platforms",
    "pageType": "wiki",
    "presentation": {
      "shell": "content"
    },
    "h1": "False Hero platforms: Steam PC confirmed and console status",
    "seoTitle": "False Hero platforms: Steam PC confirmed and console status",
    "metaDescription": "False Hero platforms are Steam PC on Windows 10/11 only as of 2026-09-22. PS5, Xbox, Steam Deck, Linux, macOS, and Android are not announced. Steam AppID is 2538870.",
    "summary": "See which platforms False Hero is confirmed to release on (Steam PC, PS5, Xbox, Steam Deck, macOS, Linux)",
    "hero": {
      "eyebrow": "Reference",
      "subtitle": "See which platforms False Hero is confirmed to release on (Steam PC, PS5, Xbox, Steam Deck, macOS, Linux)",
      "ctas": [
        {
          "label": "False Hero release date",
          "href": "/release-date/"
        },
        {
          "label": "False Hero PC system requirements",
          "href": "/system-requirements/"
        },
        {
          "label": "False Hero Steam store page",
          "href": "/steam/"
        }
      ]
    },
    "quickAnswer": "The platform list is narrow: Steam PC on Windows 10 64-bit and Windows 11 64-bit is the only confirmed entry, under AppID 2538870. PS5, Xbox, Steam Deck verification, Linux, macOS, and Android releases have not been announced, even though autocomplete results often pair False Hero platforms with PS5 or Android searches. Treat Steam PC as the only anchor until an official channel adds a new entry.",
    "keyFacts": [
      {
      "label": "Confirmed",
      "value": "Steam PC: Windows 10 64-bit, Windows 11 64-bit"
    },
    {
      "label": "Steam AppID",
      "value": "2538870"
    },
    {
      "label": "Not announced",
      "value": "PS5, Xbox, Steam Deck verification, Linux, macOS, Android"
    }
  ],
    "modules": [
      {
        "id": "platforms-section-2",
        "type": "prose",
        "heading": "Which False Hero platforms are confirmed for launch?",
        "body": "Steam PC is the only confirmed platform: Windows 10 64-bit and Windows 11 64-bit under AppID 2538870. The demo at AppID 4702340 is Windows-only as well. Everything else on the platform list is unannounced, so Steam PC is the anchor to plan around."
      },
      {
        "id": "platforms-section-3",
        "type": "prose",
        "heading": "Are PS5 or Xbox on the platform list?",
        "body": "No. Neither PS5 nor Xbox appears on the store page's platform list, and no console version has been announced by Torchlight Games or Ytopia. Searches pairing False Hero with PS5 or Xbox pick up other titles, so treat the console question as open rather than confirmed either way."
      },
      {
        "id": "platforms-section-4",
        "type": "prose",
        "heading": "Is Steam Deck verification part of the platform list?",
        "body": "Steam Deck verification is not part of the listing. The store page carries no verified or unsupported badge for the Deck, which is different from a listing that has been tested and marked. Without a badge there is no published statement about Deck performance, so check the store page on the day rather than assuming either result."
      },
      {
        "id": "platforms-section-5",
        "type": "prose",
        "heading": "Will Linux or macOS join the platform list?",
        "body": "Neither Linux nor macOS is on the platform list, and no Linux or macOS build has been announced. Both spec rows are Windows-only, so even an unlisted build would be constrained by the same DirectX 10 and DirectX 12 requirements. The platform page is the place to re-check if the developer adds an entry."
      },
      {
        "id": "platforms-section-6",
        "type": "prose",
        "heading": "Will mobile versions join the platform list?",
        "body": "No mobile version has been announced. The store page lists no Android or iOS entry, and the developer has not published a mobile release alongside the Steam listing. Autocomplete that pairs False Hero with Android refers to other titles, so the mobile question is open rather than answered."
      },
      {
        "id": "platforms-section-7",
        "type": "prose",
        "heading": "Where can you verify the platform list?",
        "body": "The platform list is verified against the Steam store page for AppID 2538870 and the Steam Community Hub for the same title. SteamDB mirrors the platform metadata and surfaces any edit, and any new platform confirmation would appear on the developer blog or the Ytopia publisher channel first. Treat third-party lists as secondary and trust the Steam listing as the canonical record."
      }
    ],
    "faqIds": [
      "faq-platforms-1",
      "faq-platforms-2",
      "faq-platforms-3",
      "faq-platforms-4"
    ],
    "relatedPageIds": [
      "fixed-release-date-status-en-US",
      "fixed-system-requirements-en-US",
      "fixed-steam-store-en-US",
      "fixed-review-en-US"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "fixed-gameplay-en-US",
    "translationKey": "gameplay",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "gameplay",
    "url": "/gameplay",
    "pageType": "guides",
    "presentation": {
      "shell": "content"
    },
    "h1": "False Hero Gameplay: Soulslike Steal-And-Chain Combat In The Land Of The Gods",
    "seoTitle": "False Hero Gameplay: Steal, Chain, And Survive The Land Of Gods",
    "metaDescription": "False Hero gameplay is a soulslike adventure with steal-and-chain combat, the corrupted Land of the Gods setting, boss fights, and a fight-for-the-Gods choice.",
    "summary": "Understand False Hero's soulslike steal-and-chain combat, the Land of the Gods setting, and boss fights",
    "hero": {
      "eyebrow": "Explanation",
      "subtitle": "Understand False Hero's soulslike steal-and-chain combat, the Land of the Gods setting, and boss fights",
      "ctas": [
        {
          "label": "Steam store page",
          "href": "https://store.steampowered.com/app/2538870"
        },
        {
          "label": "Walkthrough: Temple Walls progression",
          "href": "/walkthrough/"
        }
      ]
    },
    "quickAnswer": "False Hero gameplay centers on a fast-paced soulslike adventure where you steal your enemies' attacks and chain them into deadly combos. Players explore the corrupted Land of the Gods, take on challenging boss fights, and decide whether to fight for the Gods or become an apostle of Death. Specific combo lists, boss names, and difficulty tuning are not announced, so the Steam store page remains the reference for current details. New launch-window players who want a route for the first area can start at the [Temple Walls progression walkthrough](/walkthrough/).",
    "keyFacts": [
      {
      "label": "Combat",
      "value": "Steal-and-chain: take an enemy's attack and chain it back as your own combo"
    },
    {
      "label": "Setting",
      "value": "The corrupted Land of the Gods"
    },
    {
      "label": "Boss fights",
      "value": "Challenging; no boss named and no difficulty tuning announced"
    },
    {
      "label": "Ending choice",
      "value": "Fight for the Gods, or become an apostle of Death"
    },
    {
      "label": "First 30 minutes",
      "value": "The Temple Walls gate is the only progression the developer has documented"
    }
  ],
    "modules": [
      {
        "id": "gameplay-section-2",
        "type": "prose",
        "heading": "False Hero Gameplay: The Steal-And-Chain Combat System",
        "body": "The headline mechanic of False Hero gameplay is the steal-and-chain combo loop. The Steam store description frames combat around stealing an opponent's attacks and immediately chaining them back as your own combos, so each enemy can become a temporary arsenal rather than a single obstacle. That framing carries through every fight, including the boss encounters that punctuate each region of the Land of the Gods.\n\nThe combat system builds on classic soulslike expectations: stamina, dodging, punishing openings, and the willingness to lose progress while learning a new enemy's rhythm. What changes the formula is the theft layer, which lets you borrow a heavy swing, a gap-closer, or a parry from the enemy you are fighting and immediately use it back on them."
      },
      {
        "id": "gameplay-section-3",
        "type": "callout",
        "tone": "tip",
        "title": "First 30 Minutes: Jump To The Temple Walls Route",
        "body": "If you just want a route through the first area, the [Temple Walls progression walkthrough](/walkthrough/) covers the Bloodspring drop, the large-door left/right split, the Plant Knight patrol, and the Death-touched door trigger in four ordered steps. Use the gameplay overview on this page for the systems context, then follow the walkthrough when you reach the Bloodspring checkpoint."
      },
      {
        "id": "gameplay-section-4",
        "type": "prose",
        "heading": "The Corrupted Land Of The Gods Setting",
        "body": "The setting is the corrupted Land of the Gods, named in the Steam description and the frame the store page uses for the whole title. The same description lists the kingdom of Wisdom, lush swamps, chilling ruins, ancient cities, and the Labyrinth of Death as later regions. Their order, the gates between them, and what each one contains are not published, so the region names are the furthest the store page goes. The walkthrough page covers the one gate the developer has documented in public, at the Temple Walls."
      },
      {
        "id": "gameplay-section-5",
        "type": "prose",
        "heading": "Boss Fights And Combat Pacing",
        "body": "The store description promises challenging boss fights and calls them the true test of your combat skills, and the listing tags the game as Difficult. Beyond that, no boss is named, no fight order is published, and no difficulty tuning has been announced. The one encounter the developer has described publicly is the Plant Knight patrol inside the Temple Walls gate, which the walkthrough page covers. Treat the rest of the boss list as undocumented until the store page or the Steam Community Hub changes."
      },
      {
        "id": "gameplay-section-6",
        "type": "prose",
        "heading": "Multiple Endings And Branching Choices",
        "body": "False Hero gameplay closes on a binary narrative question: fight for the Gods or become an apostle of Death. That line is lifted directly from the Steam description and frames the run as a moral choice the player earns through combat rather than a dialogue tree the player picks through. Specific ending labels, branch paths, and decision triggers are not announced, so do not expect a full flowchart before the first community walkthrough lands.\n\nThe branching is what make the steal-and-chain combat land. Players who learn to fight like the Gods can lean into that identity to reach one ending, while players who lean on stolen arts can drift toward the apostle of Death conclusion. The store description treats both as ending-shaped outcomes rather than as a single good-versus-evil axis.\n\nMultiple Endings is also listed as a Steam tag on AppID 2538870, which confirms the framework without committing to a count. A fresh run plus a second run with the opposite choice is the minimum coverage a returning player should plan for."
      }
    ],
    "faqIds": [
      "faq-gameplay-1",
      "faq-gameplay-2",
      "faq-gameplay-3",
      "faq-gameplay-4"
    ],
    "relatedPageIds": [
      "wiki",
      "fixed-characters-en-US",
      "fixed-steam-store-en-US"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-23"
  },
  {
    "id": "fixed-characters-en-US",
    "translationKey": "characters",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "characters",
    "url": "/characters",
    "pageType": "wiki",
    "presentation": {
      "shell": "content"
    },
    "h1": "False Hero Characters: Confirmed Cast And The Apostle Of Death Choice",
    "seoTitle": "False Hero Characters: Confirmed Cast And Apostle Of Death Lore",
    "metaDescription": "False Hero characters are not named on the Steam store page. The store confirms the apostle of Death branching choice and Multiple Endings as the only status signal.",
    "summary": "Find the confirmed characters in False Hero",
    "hero": {
      "eyebrow": "Reference",
      "subtitle": "Find the confirmed characters in False Hero",
      "ctas": [
        {
          "label": "Steam store page",
          "href": "https://store.steampowered.com/app/2538870"
        }
      ]
    },
    "quickAnswer": "False Hero characters are not listed by name on the Steam store page. The store description only frames the cast through the soulslike lens of the Land of the Gods and a final fight-for-the-Gods-versus-apostle-of-Death choice. Specific protagonist identity, named allies, antagonist roster, romance options, and voice cast are not announced, so the Steam Community Hub and the developer channel are the only places to track new reveals.",
    "keyFacts": [
      {
      "label": "Named cast",
      "value": "None listed on the Steam store page"
    },
    {
      "label": "Confirmed framing",
      "value": "Apostle of Death branching choice, Multiple Endings tag"
    },
    {
      "label": "Not announced",
      "value": "Protagonist, allies, antagonists, romance options, voice cast"
    },
    {
      "label": "Where to watch",
      "value": "Steam Community Hub for AppID 2538870, then the Ytopia publisher channel"
    }
  ],
    "modules": [
      {
        "id": "characters-section-2",
        "type": "prose",
        "heading": "False Hero Characters Status: What Steam Currently Confirms",
        "body": "The Steam listing for AppID 2538870 treats the cast as part of the setting. False Hero characters are introduced through the corrupted Land of the Gods rather than through a roster sheet, and the description leans on environment and lore to set up the apostle of Death decision. That framing is deliberate: it preserves the soulslike expectation that names arrive late, and it lets Torchlight Games and Ytop"
      },
      {
        "id": "characters-section-3",
        "type": "prose",
        "heading": "Why The Cast Is Still A Mystery",
        "body": "Because the cast has not been published, not because it is hidden. The store page frames False Hero through its setting and its ending choice rather than through a roster: the corrupted Land of the Gods on one side, and the decision to fight for the Gods or become an apostle of Death on the other. A soulslike that sells its characters through the world they act in is not unusual, and the Multiple Endings tag suggests the cast is partly a function of which ending you reach. No protagonist name, ally, antagonist, or romance option is listed."
      },
      {
        "id": "characters-section-4",
        "type": "prose",
        "heading": "What Players Should Watch For Updates",
        "body": "The Steam Community Hub for AppID 2538870 is where a developer announcement about the cast would land first, followed by the Ytopia publisher channel. The store page is the second place to watch, because a description edit is how a new name or ending usually reaches the listing. The tags Singleplayer, Souls-like, Dark Fantasy, and Multiple Endings are the cheapest way to confirm that a result has drifted onto a different game, and the disambiguation module on this page covers the noise those searches attract."
      },
      {
        "id": "characters-section-5",
        "type": "prose",
        "heading": "Important Sibling-Intent Disambiguation",
        "body": "False Hero characters searches return a lot of unrelated noise. The phrase \"false hero\" is also a literary archetype, a light novel and anime trope, a writing-aid query, and a generic \"fake hero\" example. None of those uses are the same intellectual property as the Steam release, and none of them list a confirmed cast that overlaps with the Land of the Gods.\n\nThe Steam tags Singleplayer, Souls-like, Dark Fantasy, and Multiple Endings are the cleanest way to anchor False Hero characters to the correct game. If a wiki, list, or video does not reference those tags or the developer Torchlight Games, it is almost certainly describing a different \"false hero\" rather than the soulslike title on AppID 2538870. The phrase \"apostle of Death\" also describes an ending-shaped identity the player can take on, not a named NPC in the cast."
      }
    ],
    "faqIds": [
      "faq-characters-1",
      "faq-characters-2",
      "faq-characters-3"
    ],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "wiki",
    "translationKey": "walkthrough",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "walkthrough",
    "url": "/walkthrough",
    "pageType": "wiki",
    "presentation": {
      "shell": "content"
    },
    "h1": "False Hero Walkthrough: Temple Walls Progression And Early-Area Route",
    "seoTitle": "False Hero Walkthrough: Temple Walls Progression Route",
    "metaDescription": "False Hero walkthrough covers the Temple Walls Bloodspring drop, the large-door left/right split, the Plant Knight route, the shortcut alternative, and the Death-touched door trigger.",
    "summary": "Get past the Temple Walls checkpoint using the developer-confirmed route",
    "hero": {
      "eyebrow": "Reference",
      "subtitle": "Get past the Temple Walls checkpoint using the developer-confirmed route",
      "ctas": [
        {
          "label": "Steam store page",
          "href": "https://store.steampowered.com/app/2538870"
        },
        {
          "label": "Steam Community Hub thread",
          "href": "https://steamcommunity.com/app/2538870/discussions/0/3782878667988490094/"
        }
      ]
    },
    "quickAnswer": "Drop from the Temple Walls Bloodspring, head through the large door, then choose a route: left reaches the tower NPC who points you to the trapped enemy and the Death-touched door; right climbs to the same trapped enemy where the Plant Knight patrols. If the checkpoint shortcut is already unlocked, take it and turn right to meet the Plant Knight. Clearing the Plant Knight is the developer's intended trigger to cleanse the Death-touched door at the top of the tower, so the puzzle and the patrol are one progression route rather than two separate branches.",
    "keyFacts": [
      {
        "label": "Source",
        "value": "Steam Community Hub thread 'Need Help Progressing from Temple Walls', developer reply by Torchlight Games (https://steamcommunity.com/app/2538870/discussions/0/3782878667988490094/)"
      },
      {
        "label": "Routes",
        "value": "Two routes converge on the same trapped enemy: the left path through the large door to the tower NPC, and the right path through the checkpoint shortcut to the Plant Knight patrol."
      },
      {
        "label": "Trigger",
        "value": "Clearing the right-path Plant Knight is the developer's stated trigger before the Death-touched door at the top of the tower can be cleansed."
      },
      {
        "label": "Status",
        "value": "Beyond the Temple Walls progression gate, no further named region or boss is publicly documented as of 2026-09-23."
      }
    ],
    "modules": [
      {
        "id": "walkthrough-section-2",
        "type": "steps",
        "heading": "First 30 Minutes: Temple Walls Progression Route",
        "items": [
          {
            "title": "Drop from the Temple Walls Bloodspring checkpoint",
            "body": "Activate the Bloodspring checkpoint, then drop down from its platform and head through the large door below. The Bloodspring is your checkpoint anchor for the rest of the early area, so treat the drop as the start of the loop rather than a fall hazard.",
            "doneCondition": "You are on the lower Temple Walls level past the Bloodspring."
          },
          {
            "title": "Pick the left path through the large door",
            "body": "From the large door, take the left path first if you want the NPC context. The tower NPC at the end of the left path is the character who points you toward the enemy trapped behind a wall and toward the door covered in Death's influence at the top of the tower.",
            "doneCondition": "The tower NPC dialogue refers to the trapped enemy and the Death-touched door."
          },
          {
            "title": "Loop back and take the right path to the Plant Knight",
            "body": "Return to the large door and take the right path. It climbs upward toward the same trapped enemy. If the shortcut from the Bloodspring checkpoint is already unlocked, take that shortcut and turn right; the Plant Knight patrols that route.",
            "doneCondition": "The Plant Knight encounter triggers on the right-path shortcut."
          },
          {
            "title": "Clear the Plant Knight to unlock the Death-touched door",
            "body": "Defeat the Plant Knight. The developer reply confirms this is the intended trigger to cleanse the Death-touched door at the top of the tower. The door puzzle and the Plant Knight patrol are one progression route, not two branches, so skipping the fight blocks the door.",
            "doneCondition": "The Death-touched door at the top of the tower can be opened."
          }
        ]
      },
      {
        "id": "walkthrough-section-3",
        "type": "comparison",
        "heading": "Left Door Vs. Right Door: Which Route First",
        "options": [
          {
            "name": "Left path (tower NPC)",
            "summary": "Reach the tower NPC who names the trapped enemy and the Death-touched door. Useful when you want the NPC's framing before committing to the right-path fight.",
            "bestFor": "Players who want story context and a clear objective before the encounter."
          },
          {
            "name": "Right path (Plant Knight)",
            "summary": "Reach the trapped enemy directly and fight the Plant Knight. This is the developer's intended progression trigger; clearing the encounter unlocks the Death-touched door.",
            "bestFor": "Players who want to clear the progression gate as fast as possible."
          },
          {
            "name": "Checkpoint shortcut (Plant Knight)",
            "summary": "Use the already-unlocked shortcut from the Bloodspring checkpoint and turn right to reach the Plant Knight patrol. Saves the backtrack through the large door.",
            "bestFor": "After-death runs and replays where the shortcut is already open."
          }
        ]
      },
      {
        "id": "walkthrough-section-4",
        "type": "callout",
        "tone": "tip",
        "title": "Use The Bloodspring Shortcut On Repeat Runs",
        "body": "The developer reply confirms that once the Bloodspring shortcut is unlocked, you can skip the large-door loop and turn right to find the Plant Knight. Treat the shortcut as the default route on second-and-later attempts so you do not re-trigger the NPC dialogue or the left-path fall back into the lower Temple Walls."
      },
      {
        "id": "walkthrough-section-5",
        "type": "callout",
        "tone": "caution",
        "title": "Do Not Skip The Plant Knight",
        "body": "The Death-touched door at the top of the Temple Walls tower connects to the same area as the trapped enemy on the right path. The developer reply states clearing the Plant Knight is the intended trigger before the door can be cleansed, so leaving the Plant Knight alive soft-blocks the door puzzle and the next story beat."
      },
      {
        "id": "walkthrough-section-6",
        "type": "prose",
        "heading": "What The Developer Reply Confirms And What It Does Not",
        "body": "The developer reply on the Steam Community Hub thread 'Need Help Progressing from Temple Walls' confirms four launch-window facts: the Bloodspring drop starts the loop, the large door has a left/right split, the right path leads to a Plant Knight patrol, and clearing that Plant Knight is the trigger for the Death-touched door at the top of the tower. The reply does not name the boss that follows Temple Walls, does not publish exact HP or stamina numbers, and does not map the next region. Treat the rest of the early game as unconfirmed until Torchlight Games posts a follow-up reply or another launch-day thread surfaces matching details."
      },
      {
        "id": "walkthrough-section-7",
        "type": "prose",
        "heading": "Beyond Temple Walls: What Is Not Yet Public",
        "body": "Outside of the Temple Walls progression gate, no further named region, boss, or encounter is publicly documented. The Steam description lists the kingdom of Wisdom, lush swamps, chilling ruins, ancient cities, and the Labyrinth of Death as later regions, but their order, gates, and boss names are not yet confirmed by a first-party source. Watch the same Steam Community Hub thread and the Hub's announcements tab for the next region reveal, and treat any third-party list of later bosses as speculation until the developer confirms it."
      }
    ],
    "faqIds": [
      "faq-walkthrough-1",
      "faq-walkthrough-2",
      "faq-walkthrough-3",
      "faq-walkthrough-4",
      "faq-walkthrough-5",
      "faq-walkthrough-6"
    ],
    "relatedPageIds": [
      "fixed-gameplay-en-US",
      "fixed-characters-en-US",
      "fixed-steam-store-en-US"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-23"
  },
  {
    "id": "fixed-review-en-US",
    "translationKey": "review",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "review",
    "url": "/review",
    "pageType": "release",
    "presentation": {
      "shell": "content"
    },
    "h1": "False Hero Review: Pre-Launch Coverage And Steam Review Status",
    "seoTitle": "False Hero Review Status: Pre-Launch Coverage And Steam Reviews",
    "metaDescription": "False Hero review coverage is limited pre-launch. Steam AppID 2538870, developer Torchlight Games, and publisher Ytopia anchor the current review status.",
    "summary": "Find review coverage for False Hero, including critic and Steam user-review availability",
    "hero": {
      "eyebrow": "Status",
      "subtitle": "Find review coverage for False Hero, including critic and Steam user-review availability",
      "ctas": [
        {
          "label": "Steam store page",
          "href": "https://store.steampowered.com/app/2538870"
        }
      ]
    },
    "quickAnswer": "A False Hero review is not yet published because the soulslike adventure releases on Sep 22 2026 and the launch window has not opened. Steam AppID 2538870 carries the only first-party coverage, and critic reviews plus Steam user reviews will appear after release day. The Steam store page is the authoritative anchor for identity facts such as developer Torchlight Games, publisher Ytopia, planned release Sep 22 2026, and the Multiple Endings framing.",
    "keyFacts": [
      {
      "label": "Full-game reviews",
      "value": "Not published as of September 22, 2026"
    },
    {
      "label": "First-party surface",
      "value": "Steam store page, AppID 2538870"
    },
    {
      "label": "Critic reviews",
      "value": "Not out; the launch window had not opened"
    },
    {
      "label": "Demo reception",
      "value": "266 user reviews at 94% positive on AppID 4702340, the demo only"
    }
  ],
    "modules": [
      {
        "id": "review-section-2",
        "type": "prose",
        "heading": "False Hero Review Status: What Is Confirmed",
        "body": "The current False Hero review is a pre-launch status. The Steam listing for AppID 2538870 is the only first-party review-grade surface, and the Steam short description frames the soulslike adventure around steal-and-chain combat, the corrupted Land of the Gods, boss fights, and the fight-for-the-Gods-or-apostle-of-Death branching. That description is the closest thing to a developer-posi"
      },
      {
        "id": "review-section-3",
        "type": "prose",
        "heading": "Why Critic Reviews Are Not Out Yet",
        "body": "The release date is September 22, 2026, and the launch window had not opened as of the September 22, 2026 research pass, so no critic had the game to play. That is the whole reason: there is no embargo lift and no preview build in circulation for the full game. The demo at AppID 4702340 has been out since June 4, 2026, so demo coverage can exist before critic coverage of the full game does."
      },
      {
        "id": "review-section-4",
        "type": "prose",
        "heading": "Steam User Reviews And Launch-Day Reception",
        "body": "The Steam store page for AppID 2538870 is where the user-review curve appears, and it was still empty of full-game reviews as of September 22, 2026. The one reception figure this site can quote belongs to the demo, not the full game: 266 user reviews at 94% positive on AppID 4702340. Do not read that as a review score for the release, because the demo is a first-chapter build with a different audience. Re-read the full-game store page on launch day for the first published reviews."
      },
      {
        "id": "review-section-5",
        "type": "prose",
        "heading": "Where To Watch For False Hero Reviews",
        "body": "The Steam store page for AppID 2538870 is the canonical place for the Steam user-review curve and any developer-posted review-window notes. Refresh the store page on launch day to catch the first published reviews and any updated screenshots that signal a post-launch patch.\n\nThe Steam Community Hub for AppID 2538870 is the second place to watch. Developer announcements on the Hub often include a review-window statement and link directly to the outlets running coverage, and the Hub is where post-launch patches are documented. Major games-media outlets will publish their False Hero reviews through their own review hubs in the launch window, but they are not yet seeded. Do not trust any pre-launch review that does not link to the Steam listing or to the developer channel."
      }
    ],
    "faqIds": [
      "faq-review-1",
      "faq-review-2",
      "faq-review-3"
    ],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "fixed-demo-en-US",
    "translationKey": "demo",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "demo",
    "url": "/demo",
    "pageType": "release",
    "presentation": {
      "shell": "content"
    },
    "h1": "False Hero Demo: Steam Availability, AppID, and Installation",
    "seoTitle": "False Hero Demo: Steam Availability, AppID, and Installation",
    "metaDescription": "False Hero demo is live on Steam at AppID 4702340 (launched June 2026, 266 user reviews, 94% positive). Confirm Windows, controller, and language support before installing.",
    "summary": "Find the False Hero demo on Steam, confirm AppID 4702340, and install the trial build before committing to the full price",
    "hero": {
      "eyebrow": "Demo",
      "subtitle": "Find the False Hero demo on Steam, confirm AppID 4702340, and install the trial build before committing to the full price",
      "ctas": [
        {
          "label": "False Hero demo store page",
          "href": "https://store.steampowered.com/app/4702340/"
        },
        {
          "label": "False Hero full-game store page",
          "href": "https://store.steampowered.com/app/2538870/False_Hero/"
        }
      ]
    },
    "quickAnswer": "The False Hero demo is live on Steam at AppID 4702340 (https://store.steampowered.com/app/4702340/), launched June 4 2026 by developer Torchlight Games and publisher Ytopia. The demo carried 266 user reviews with a 94% positive rating on the page; it ships on Windows 10/11 64-bit with full controller support (Xbox, PlayStation, DualShock, DualSense) and the same 11-language package as the full game. Treat any claim about demo-to-release save transfer as unconfirmed until Torchlight Games states it on the Steam Community Hub; the developer has not posted that confirmation in any public thread.",
    "keyFacts": [
      {
        "label": "Status",
        "value": "Demo is live on Steam at AppID 4702340, launched June 4 2026."
      },
      {
        "label": "Reception",
        "value": "266 user reviews, 94% positive rating as of the research snapshot."
      },
      {
        "label": "Platform",
        "value": "Windows 10 64-bit minimum, Windows 11 64-bit recommended; Steam page does not list macOS or Steam Deck verified status."
      },
      {
        "label": "Controller",
        "value": "Xbox, PlayStation, DualShock, and DualSense controllers supported via Steam Input."
      },
      {
        "label": "Languages",
        "value": "11 languages matching the full release: English, French, Italian, German, Spanish (Spain), Spanish (Latin America), Japanese, Korean, Portuguese (Brazil), Russian, Simplified Chinese."
      },
      {
        "label": "Build",
        "value": "Unity engine, same first-chapter scope the developer scopes on the full-game store page."
      },
      {
        "label": "Save transfer",
        "value": "Unconfirmed in any public Steam Community Hub thread by Torchlight Games."
      }
    ],
    "modules": [
      
      {
        "id": "demo-section-2",
        "type": "data-table",
        "heading": "Demo At A Glance",
        "columns": [
          {
            "key": "field",
            "label": "Field"
          },
          {
            "key": "value",
            "label": "Value"
          }
        ],
        "rows": [
          {
            "field": "Steam AppID",
            "value": "4702340"
          },
          {
            "field": "Demo store URL",
            "value": "https://store.steampowered.com/app/4702340/"
          },
          {
            "field": "Released",
            "value": "June 4 2026"
          },
          {
            "field": "Developer",
            "value": "Torchlight Games"
          },
          {
            "field": "Publisher",
            "value": "Ytopia"
          },
          {
            "field": "User reviews",
            "value": "266 at 94% positive (research snapshot, 2026-09-22)"
          },
          {
            "field": "OS support",
            "value": "Windows 10 64-bit minimum; Windows 11 64-bit recommended"
          },
          {
            "field": "Engine",
            "value": "Unity"
          },
          {
            "field": "Controller support",
            "value": "Xbox, PlayStation, DualShock, DualSense (Steam Input)"
          },
          {
            "field": "Languages",
            "value": "English, French, Italian, German, Spanish (Spain), Spanish (Latin America), Japanese, Korean, Portuguese (Brazil), Russian, Simplified Chinese"
          },
          {
            "field": "Full-game store URL",
            "value": "https://store.steampowered.com/app/2538870/False_Hero/"
          }
        ]
      },
      {
        "id": "demo-section-3",
        "type": "steps",
        "heading": "How To Install The Demo",
        "items": [
          {
            "title": "Open the demo store page",
            "body": "Go to https://store.steampowered.com/app/4702340/ while signed in to Steam. Verify the URL shows AppID 4702340 in the store right rail before clicking Install.",
            "doneCondition": "The Steam client prompts to install a demo of False Hero at AppID 4702340."
          },
          {
            "title": "Confirm OS, language, and controller",
            "body": "Check the system requirements block for Windows 10/11 64-bit and the language list for the 11 supported interface/audio/subtitle locales. Plug in your controller before launch if you plan to use Xbox, PlayStation, DualShock, or DualSense input.",
            "doneCondition": "OS, language, and controller match the demo's published list."
          },
          {
            "title": "Launch the demo and reach the first chapter",
            "body": "Start the demo from your Steam library. The developer's store-page note frames the demo as covering the first chapter of False Hero, so treat early checkpoints such as Temple Walls as in-bounds content rather than a bug.",
            "doneCondition": "The demo reaches its first story gate without a crash or hang."
          }
        ]
      },
      {
        "id": "demo-section-4",
        "type": "callout",
        "tone": "unknown",
        "title": "Demo Save Transfer To The Full Release Is Unconfirmed",
        "body": "The Steam Community Hub threads for AppID 2538870 and the developer posts linked from the demo store page do not contain a public statement from Torchlight Games confirming that demo progress carries over to the full release. Treat save transfer as unconfirmed and plan to replay the early chapters from the start when the full game ships on September 22 2026. If the developer confirms transfer after publication, this page will be updated with the corrected behavior."
      },
      {
        "id": "demo-section-5",
        "type": "callout",
        "tone": "tip",
        "title": "Steam Family Sharing Exclusion Is A Steam Content-Type Note",
        "body": "SteamDB flags the demo as not family-shareable. That flag reflects how Steam categorizes trial/demo content types, not a developer-set restriction from Torchlight Games. The full release at AppID 2538870 follows the publisher's standard Family Sharing rules rather than the demo's content-type metadata."
      },
      {
        "id": "demo-section-6",
        "type": "prose",
        "heading": "What The Demo Covers And What It Does Not",
        "body": "The developer's note on the demo store page frames the build as the first chapter of False Hero, offering a glimpse into the weird and charming world, combat, and systems of the full game. Anything beyond the first chapter — the kingdom of Wisdom, the lush swamps, the chilling ruins, the ancient cities, and the Labyrinth of Death listed in the full-game description — remains outside the demo build. Use the demo to confirm the steal-and-chain combat loop, the audio-cue-driven parry timing, and your controller setup, then return to the full release for the rest of the regions."
      },
      {
        "id": "demo-section-7",
        "type": "prose",
        "heading": "Where To Watch For Updates After Installation",
        "body": "Refresh the demo store page at https://store.steampowered.com/app/4702340/ for any post-launch patch notes or build updates, and watch the Steam Community Hub for AppID 2538870 (https://steamcommunity.com/app/2538870/discussions/) for developer replies that confirm or correct demo behavior. Any third-party demo link, demo installer, or demo crack outside the Steam store page should be treated as unverified; the Steam store page is the only first-party surface for this build."
      }
    ],
    "faqIds": [
      "faq-demo-1",
      "faq-demo-2",
      "faq-demo-3"
    ],
    "relatedPageIds": [
      "home",
      "fixed-steam-store-en-US",
      "guides"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-24"
  },
  {
    "id": "guides",
    "translationKey": "wiki",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "wiki",
    "url": "/wiki",
    "pageType": "wiki",
    "presentation": {
      "shell": "content"
    },
    "h1": "False Hero Wiki: Launch Status, Lore, and First-Party Sources",
    "seoTitle": "False Hero Wiki: Sources, Lore, and Launch Status",
    "metaDescription": "A False Hero wiki is not established as of 2026-09-22. Use the Steam store page, Steam Community Hub, and this site's reference pages as the launch FAQ hub.",
    "summary": "Find a wiki or FAQ for False Hero lore, terms, and mechanics questions",
    "hero": {
      "eyebrow": "Reference",
      "subtitle": "Find a wiki or FAQ for False Hero lore, terms, and mechanics questions",
      "ctas": [
        {
          "label": "Steam store page",
          "href": "https://store.steampowered.com/app/2538870"
        }
      ]
    },
    "quickAnswer": "A False Hero wiki is not established. The [Steam store page](https://store.steampowered.com/app/2538870) and the [Steam Community Hub](https://steamcommunity.com/app/2538870) are the first-party surfaces for the new Ytopia Oddities Collection soulslike from developer Torchlight Games and publisher Ytopia. Until an external False Hero wiki launches, this site's reference pages fill the wiki and FAQ role and map every fact back to the Steam listing.",
    "keyFacts": [
      {
      "label": "Third-party wiki",
      "value": "Not established as of September 22, 2026"
    },
    {
      "label": "First-party sources",
      "value": "Steam store page and Steam Community Hub, AppID 2538870"
    },
    {
      "label": "What this site covers",
      "value": "Reference pages standing in for the wiki, each fact mapped to its source"
    }
  ],
    "modules": [
      {
        "id": "wiki-section-2",
        "type": "prose",
        "heading": "Where The False Hero Wiki Currently Lives",
        "body": "There is no standalone False Hero wiki on the open web. Major wiki hosts that track Souls-like and dark fantasy games have not yet published a dedicated namespace for the new Ytopia Oddities Collection title, and the planned September 22, 2026 release date sits inside the launch window rather than after a long community buildup. Autocomplete around the term False Hero wiki returns user search patterns rather than confirmed wiki domains, which signals sustained demand without yet pointing at a destination page.\n\nUntil a third-party wiki launches, this site'"
      },
      {
        "id": "wiki-section-3",
        "type": "prose",
        "heading": "First-Party Sources For False Hero Lore And Mechanics",
        "body": "The Steam store page at https://store.steampowered.com/app/2538870 and the Steam Community Hub at https://steamcommunity.com/app/2538870 are the two first-party surfaces for False Hero. The store page carries the description, the tag list, the language list, the spec block, and the release date; the Community Hub carries the developer's answers, including the Temple Walls progression reply. SteamDB mirrors the store metadata and is a useful secondary check on any of it. Everything this site states maps back to one of those, and where a fact is missing from all of them, the pages here say so rather than filling the gap."
      },
      {
        "id": "wiki-section-4",
        "type": "prose",
        "heading": "What A Future False Hero Wiki Could Cover",
        "body": "A False Hero wiki would have the same problem this site has: most of what a wiki would hold is not published. The store description names the regions -- the corrupted Land of the Gods, the kingdom of Wisdom, lush swamps, chilling ruins, ancient cities, and the Labyrinth of Death -- without ordering them or giving the gates between them. The developer's Temple Walls reply is the only documented progression gate, and no boss is named. So the material a wiki would fill in is the region order, the gate conditions, the boss list, and the ending branches, and none of it is available to copy yet."
      },
      {
        "id": "wiki-section-5",
        "type": "prose",
        "heading": "Other False Hero Wikis Are Not This Game",
        "body": "Wikis for the literary \"false hero\" archetype (false protagonist, false antagonist heroes, false heroes villains), for the \"false hero\" light novel and audiobook namesakes, and for any \"false protagonist\" anime or Mario crossover page cover unrelated material. None of those wikis is a False Hero wiki for the Ytopia Oddities Collection soulslike. Treat any wiki content imported from those earlier or unrelated titles as legacy context only, never as current-game fact, and avoid routing launch-day questions to the false-protagonist trope pages. A reader who needs the launch-day False Hero wiki answer should land on this page or on the Steam listing itself."
      }
    ],
    "faqIds": [
      "faq-wiki-1",
      "faq-wiki-2",
      "faq-wiki-3",
      "faq-wiki-4"
    ],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "fixed-reddit-en-US",
    "translationKey": "reddit",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "reddit",
    "url": "/reddit",
    "pageType": "wiki",
    "presentation": {
      "shell": "content"
    },
    "h1": "False Hero Reddit: Subreddit Status and Community Hubs",
    "seoTitle": "False Hero Reddit: Subreddit Status and Community Hubs",
    "metaDescription": "A dedicated False Hero Reddit subreddit is not established as of 2026-09-22. Use Steam Community Hub threads for launch-day conversation.",
    "summary": "Find the False Hero Reddit community and discussion threads",
    "hero": {
      "eyebrow": "Reference",
      "subtitle": "Find the False Hero Reddit community and discussion threads",
      "ctas": [
        {
          "label": "Steam store page",
          "href": "https://store.steampowered.com/app/2538870"
        }
      ]
    },
    "quickAnswer": "A False Hero Reddit community is not established. The [Steam Community Hub](https://steamcommunity.com/app/2538870) is the launch-day discussion surface for the new Ytopia Oddities Collection soulslike from developer Torchlight Games and publisher Ytopia. Until a dedicated False Hero Reddit subreddit launches, Steam Community Hub threads stand in for the launch-day Reddit conversation, and broader false-protagonist subreddit threads are not this game.",
    "keyFacts": [
      {
      "label": "Dedicated subreddit",
      "value": "Not established as of September 22, 2026"
    },
    {
      "label": "Discussion surface",
      "value": "Steam Community Hub, AppID 2538870"
    },
    {
      "label": "Developer threads",
      "value": "Temple Walls progression reply is the only public developer post so far"
    }
  ],
    "modules": [
      {
        "id": "reddit-section-2",
        "type": "prose",
        "heading": "Where The False Hero Reddit Community Currently Lives",
        "body": "There is no dedicated False Hero Reddit subreddit on the open web. Major subreddit indexes and Steam Community Hub cross-links have not surfaced a verified r/FalseHero or r/FalseHeroGame namespace, and the planned September 22, 2026 release falls inside the launch window. Autocomplete around the term False Hero Reddit returns user search patterns rather than confirmed subreddit destinations, which signals sustained demand without yet pointing at a live community.\n\nUntil a dedicated subreddit launches, the [Steam Community"
      },
      {
        "id": "reddit-section-3",
        "type": "prose",
        "heading": "Launch-Day Threads On The Steam Community Hub",
        "body": "The Steam Community Hub for AppID 2538870 is the launch-day thread surface, at https://steamcommunity.com/app/2538870. The developer already uses it: Torchlight Games replied on the thread 'Need Help Progressing from Temple Walls' with the Bloodspring drop, the large-door left/right split, the Plant Knight patrol, and the Death-touched door trigger. That reply is the template for what a launch-day thread looks like here -- a question from a player, answered by the developer in public."
      },
      {
        "id": "reddit-section-4",
        "type": "prose",
        "heading": "What A Future False Hero Reddit Subreddit Could Cover",
        "body": "The same material a wiki would hold, and with the same gap. A subreddit would carry the region order, the gate conditions, the boss list, the ending branches, and the builds people are running, and of those only the Temple Walls gate is documented anywhere in public. So a False Hero subreddit would start as a Steam Community Hub mirror and become useful once the developer publishes more. Until then the Hub threads carry the conversation, and the other false-hero spaces on Reddit are not this game."
      },
      {
        "id": "reddit-section-5",
        "type": "prose",
        "heading": "Other False Hero Reddit Spaces Are Not This Game",
        "body": "Reddit threads for the literary \"false hero\" archetype (false protagonist, false antagonist heroes, false heroes villains), for the \"false hero\" light novel and audiobook namesakes, and for any \"false protagonist\" anime or Mario crossover post cover unrelated material. None of those subreddits is a False Hero Reddit community for the Ytopia Oddities Collection soulslike. Treat any Reddit content imported from those earlier or unrelated titles as legacy context only, never as current-game fact, and avoid routing launch-day questions to the broader false-protagonist subreddit threads. A reader who needs the launch-day False Hero Reddit answer should land on this page or on the Steam Community Hub itself."
      }
    ],
    "faqIds": [
      "faq-reddit-1",
      "faq-reddit-2",
      "faq-reddit-3",
      "faq-reddit-4"
    ],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "faq",
    "translationKey": "faq",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "faq",
    "url": "/faq",
    "pageType": "faq",
    "presentation": {
      "shell": "content",
      "variant": "reading-full"
    },
    "h1": "Frequently Asked Questions",
    "seoTitle": "Frequently Asked Questions | False Hero Guide",
    "metaDescription": "Frequently Asked Questions page for the False Hero guide hub.",
    "summary": "Frequently Asked Questions for the False Hero guide hub.",
    "hero": {
      "eyebrow": "Frequently Asked Questions",
      "subtitle": "Frequently Asked Questions page for the False Hero guide hub.",
      "ctas": [
        {
          "label": "Home",
          "href": "/"
        }
      ]
    },
    "quickAnswer": "Frequently Asked Questions content for the False Hero guide hub.",
    "keyFacts": [
      {
        "label": "Page",
        "value": "Frequently Asked Questions"
      },
      {
        "label": "Site",
        "value": "False Hero Guide"
      }
    ],
    "modules": [
      {
        "id": "faq-module-1",
        "type": "prose",
        "heading": "Frequently Asked Questions",
        "body": "Frequently Asked Questions page for the False Hero guide hub. This page is part of the site's trust surface."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article",
      "BreadcrumbList"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "about",
    "translationKey": "about",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "about",
    "url": "/about",
    "pageType": "site",
    "presentation": {
      "shell": "content",
      "variant": "reading-full"
    },
    "h1": "About this site",
    "seoTitle": "About this site | False Hero Guide",
    "metaDescription": "About this site page for the False Hero guide hub.",
    "summary": "About this site for the False Hero guide hub.",
    "hero": {
      "eyebrow": "About this site",
      "subtitle": "About this site page for the False Hero guide hub.",
      "ctas": [
        {
          "label": "Home",
          "href": "/"
        }
      ]
    },
    "quickAnswer": "About this site content for the False Hero guide hub.",
    "keyFacts": [
      {
        "label": "Page",
        "value": "About this site"
      },
      {
        "label": "Site",
        "value": "False Hero Guide"
      }
    ],
    "modules": [
      {
        "id": "about-module-1",
        "type": "prose",
        "heading": "About this site",
        "body": "About this site page for the False Hero guide hub. This page is part of the site's trust surface."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article",
      "BreadcrumbList"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "contact",
    "translationKey": "contact",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "contact",
    "url": "/contact",
    "pageType": "site",
    "presentation": {
      "shell": "content",
      "variant": "reading-full"
    },
    "h1": "Contact",
    "seoTitle": "Contact | False Hero Guide",
    "metaDescription": "Contact page for the False Hero guide hub.",
    "summary": "Contact for the False Hero guide hub.",
    "hero": {
      "eyebrow": "Contact",
      "subtitle": "Contact page for the False Hero guide hub.",
      "ctas": [
        {
          "label": "Home",
          "href": "/"
        }
      ]
    },
    "quickAnswer": "Contact content for the False Hero guide hub.",
    "keyFacts": [
      {
        "label": "Page",
        "value": "Contact"
      },
      {
        "label": "Site",
        "value": "False Hero Guide"
      }
    ],
    "modules": [
      {
        "id": "contact-module-1",
        "type": "prose",
        "heading": "Contact",
        "body": "Contact page for the False Hero guide hub. This page is part of the site's trust surface."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article",
      "BreadcrumbList"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "privacy-policy",
    "translationKey": "privacy-policy",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "privacy-policy",
    "url": "/privacy-policy",
    "pageType": "site",
    "presentation": {
      "shell": "content",
      "variant": "reading-full"
    },
    "h1": "Privacy Policy",
    "seoTitle": "Privacy Policy | False Hero Guide",
    "metaDescription": "Privacy Policy page for the False Hero guide hub.",
    "summary": "Privacy Policy for the False Hero guide hub.",
    "hero": {
      "eyebrow": "Privacy Policy",
      "subtitle": "Privacy Policy page for the False Hero guide hub.",
      "ctas": [
        {
          "label": "Home",
          "href": "/"
        }
      ]
    },
    "quickAnswer": "Privacy Policy content for the False Hero guide hub.",
    "keyFacts": [
      {
        "label": "Page",
        "value": "Privacy Policy"
      },
      {
        "label": "Site",
        "value": "False Hero Guide"
      }
    ],
    "modules": [
      {
        "id": "privacy-policy-module-1",
        "type": "prose",
        "heading": "Privacy Policy",
        "body": "Privacy Policy page for the False Hero guide hub. This page is part of the site's trust surface."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article",
      "BreadcrumbList"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "terms",
    "translationKey": "terms",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "terms",
    "url": "/terms",
    "pageType": "site",
    "presentation": {
      "shell": "content",
      "variant": "reading-full"
    },
    "h1": "Terms of Use",
    "seoTitle": "Terms of Use | False Hero Guide",
    "metaDescription": "Terms of Use page for the False Hero guide hub.",
    "summary": "Terms of Use for the False Hero guide hub.",
    "hero": {
      "eyebrow": "Terms of Use",
      "subtitle": "Terms of Use page for the False Hero guide hub.",
      "ctas": [
        {
          "label": "Home",
          "href": "/"
        }
      ]
    },
    "quickAnswer": "Terms of Use content for the False Hero guide hub.",
    "keyFacts": [
      {
        "label": "Page",
        "value": "Terms of Use"
      },
      {
        "label": "Site",
        "value": "False Hero Guide"
      }
    ],
    "modules": [
      {
        "id": "terms-module-1",
        "type": "prose",
        "heading": "Terms of Use",
        "body": "Terms of Use page for the False Hero guide hub. This page is part of the site's trust surface."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article",
      "BreadcrumbList"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-22"
  }
]

export { homePage } from "./home";
export { release_date_statusPage } from "./release-date-status";
export { steam_storePage } from "./steam-store";
export { system_requirementsPage } from "./system-requirements";
export { platformsPage } from "./platforms";
export { gameplayPage } from "./gameplay";
export { charactersPage } from "./characters";
export { walkthroughPage } from "./walkthrough";
export { reviewPage } from "./review";
export { demoPage } from "./demo";
export { wikiPage } from "./wiki";
export { redditPage } from "./reddit";
export { faqPage } from "./faq";
export { aboutPage } from "./about";
export { contactPage } from "./contact";
export { privacy_policyPage } from "./privacy-policy";
export { termsPage } from "./terms";
