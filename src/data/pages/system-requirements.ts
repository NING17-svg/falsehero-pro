import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const system_requirementsPage: PageContent = {
  id: "fixed-system-requirements-en-US",
  translationKey: "system-requirements",
  locale: "en-US",
  routeKind: "fixed",
  slug: "system-requirements",
  url: "/system-requirements",
  pageType: "wiki",
  presentation: { shell: "content" },
  h1: "False Hero system requirements: minimum and recommended PC specs",
  seoTitle: "False Hero system requirements: minimum and recommended PC specs",
  metaDescription: "False Hero system requirements on Steam: minimum Windows 10 64-bit, i5-8400, 8 GB RAM, GTX 970, DX10, 12 GB SSD. Recommended Windows 11, i5-10400, 16 GB, RTX 2060.",
  summary: "Check whether my PC meets the minimum and recommended system requirements for False Hero",
  hero: {
    eyebrow: "Reference",
    subtitle: "Check whether my PC meets the minimum and recommended system requirements for False Hero",
    ctas: [{"label":"- False Hero platforms","href":"/platforms/"},{"label":"- False Hero Steam store page","href":"/steam/"},{"label":"- False Hero gameplay","href":"/gameplay/"}],
  },
  quickAnswer: "The False Hero system requirements on the Steam store page list a minimum of Windows 10 64-bit, Intel Core i5-8400, 8 GB RAM, NVIDIA GeForce GTX 970, DirectX 10, and 12 GB of SSD storage. The recommended spec is Windows 11 64-bit, Intel Core i5-10400, 16 GB RAM, NVIDIA GeForce RTX 2060, DirectX 12, and the same 12 GB SSD. Both rows confirm the title is Windows-only on PC.",
  keyFacts: [
    { label: "Primary keyword", value: "False Hero system requirements" },
    { label: "Source", value: "False Hero on Steam (AppID 2538870)" },
    { label: "Source", value: "False Hero on SteamDB" },
    { label: "Fact boundary", value: "The spec block is taken verbatim from the Steam store page for AppID 2538870 and is a current-game fact as of 2026-09…" }
  ],
  modules: [
    {
      id: "system-requirements-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "The False Hero system requirements on the Steam store page list a minimum of Windows 10 64-bit, Intel Core i5-8400, 8 GB RAM, NVIDIA GeForce GTX 970, DirectX 10, and 12 GB of SSD storage. The recommended spec is Windows 11 64-bit, Intel Core i5-10400, 16 GB RAM, NVIDIA GeForce RTX 2060, DirectX 12, and the same 12 GB SSD. Both rows confirm the title is Windows-only on PC.\n\n## What does the False Hero",
    },
    {
      id: "system-requirements-section-2",
      type: "prose",
      heading: "What does the False Hero system requirements block list?",
      body: "The False Hero system requirements blo",
    },
    {
      id: "system-requirements-section-3",
      type: "prose",
      heading: "Will my laptop pass the spec block?",
      body: "",
    },
    {
      id: "system-requirements-section-4",
      type: "prose",
      heading: "How much storage does the spec block require?",
      body: "",
    },
    {
      id: "system-requirements-section-5",
      type: "prose",
      heading: "Does the spec block mention a sound card?",
      body: "",
    },
    {
      id: "system-requirements-section-6",
      type: "prose",
      heading: "Where is the spec block sourced from?",
      body: "The False Hero system requirements block is sourced from the Steam store page for AppID 2538870, where it appears under the system requirements section. The Steam Community Hub and SteamDB mirror the same metadata and surface any spec edit, so check there if you suspect a late change. The block is a first-party Steam fact and is the cleanest available source for the minimum and recommended rows.",
    },
    {
      id: "system-requirements-sources",
      type: "prose",
      heading: "Sources",
      body: "Each fact in this page is sourced from the references below. Cross-check the Steam store page for any updates.",
      links: [{"label":"False Hero on Steam (AppID 2538870)","href":"https://store.steampowered.com/app/2538870","description":"Source of the spec block, including the minimum and recommended rows for OS, CPU, RAM, GPU, DirectX, and storage."},{"label":"False Hero on SteamDB","href":"https://steamdb.info/app/2538870/","description":"Mirrors the spec block and surfaces spec edits over time."},{"label":"False Hero Steam Community Hub","href":"https://store.steampowered.com/app/2538870/community/","description":"Surfaces developer posts that explain or update the spec block around launch."}],
    }
  ],
  faqIds: ["faq-system-requirements-1", "faq-system-requirements-2", "faq-system-requirements-3", "faq-system-requirements-4"],
  relatedPageIds: ["fixed-platforms-en-US", "fixed-steam-store-en-US", "fixed-gameplay-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
