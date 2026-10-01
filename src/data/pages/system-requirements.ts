import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const system_requirementsPage: PageContent = {
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
}
