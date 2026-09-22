import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const walkthroughPage: PageContent = {
  id: "wiki",
  translationKey: "walkthrough",
  locale: "en-US",
  routeKind: "fixed",
  slug: "walkthrough",
  url: "/walkthrough",
  pageType: "wiki",
  presentation: { shell: "content" },
  h1: "False Hero Walkthrough: Temple Walls Progression And Early-Area Route",
  seoTitle: "False Hero Walkthrough: Temple Walls Progression Route",
  metaDescription: "False Hero walkthrough covers the Temple Walls Bloodspring drop, the large-door left/right split, the Plant Knight route, the shortcut alternative, and the Death-touched door trigger.",
  summary: "Get past the Temple Walls checkpoint using the developer-confirmed route",
  hero: {
    eyebrow: "Reference",
    subtitle: "Get past the Temple Walls checkpoint using the developer-confirmed route",
    ctas: [{"label":"Steam store page","href":"https://store.steampowered.com/app/2538870"},{"label":"Steam Community Hub thread","href":"https://steamcommunity.com/app/2538870/discussions/0/3782878667988490094/"}],
  },
  quickAnswer: "Drop from the Temple Walls Bloodspring, head through the large door, then choose a route: left reaches the tower NPC who points you to the trapped enemy and the Death-touched door; right climbs to the same trapped enemy where the Plant Knight patrols. If the checkpoint shortcut is already unlocked, take it and turn right to meet the Plant Knight. Clearing the Plant Knight is the developer's intended trigger to cleanse the Death-touched door at the top of the tower, so the puzzle and the patrol are one progression route rather than two separate branches.",
  keyFacts: [
    { label: "Source", value: "Steam Community Hub thread 'Need Help Progressing from Temple Walls', developer reply by Torchlight Games (https://steamcommunity.com/app/2538870/discussions/0/3782878667988490094/)" },
    { label: "Routes", value: "Two routes converge on the same trapped enemy: the left path through the large door to the tower NPC, and the right path through the checkpoint shortcut to the Plant Knight patrol." },
    { label: "Trigger", value: "Clearing the right-path Plant Knight is the developer's stated trigger before the Death-touched door at the top of the tower can be cleansed." },
    { label: "Status", value: "Beyond the Temple Walls progression gate, no further named region or boss is publicly documented as of 2026-09-23." }
  ],
  modules: [
    {
      id: "walkthrough-section-1",
      type: "prose",
      heading: "Quick Answer",
      body: "Drop from the Temple Walls Bloodspring, head through the large door, then choose a route: left reaches the tower NPC who points you to the trapped enemy and the Death-touched door; right climbs to the same trapped enemy where the Plant Knight patrols. If the checkpoint shortcut is already unlocked, take it and turn right to meet the Plant Knight. Clearing the Plant Knight is the developer's intended trigger to cleanse the Death-touched door at the top of the tower, so the puzzle and the patrol are one progression route rather than two separate branches.\n\n## First 30 Minutes: Temple Walls Progression",
    },
    {
      id: "walkthrough-section-2",
      type: "steps",
      heading: "First 30 Minutes: Temple Walls Progression Route",
      items: [
        {
          title: "Drop from the Temple Walls Bloodspring checkpoint",
          body: "Activate the Bloodspring checkpoint, then drop down from its platform and head through the large door below. The Bloodspring is your checkpoint anchor for the rest of the early area, so treat the drop as the start of the loop rather than a fall hazard.",
          doneCondition: "You are on the lower Temple Walls level past the Bloodspring."
        },
        {
          title: "Pick the left path through the large door",
          body: "From the large door, take the left path first if you want the NPC context. The tower NPC at the end of the left path is the character who points you toward the enemy trapped behind a wall and toward the door covered in Death's influence at the top of the tower.",
          doneCondition: "The tower NPC dialogue refers to the trapped enemy and the Death-touched door."
        },
        {
          title: "Loop back and take the right path to the Plant Knight",
          body: "Return to the large door and take the right path. It climbs upward toward the same trapped enemy. If the shortcut from the Bloodspring checkpoint is already unlocked, take that shortcut and turn right; the Plant Knight patrols that route.",
          doneCondition: "The Plant Knight encounter triggers on the right-path shortcut."
        },
        {
          title: "Clear the Plant Knight to unlock the Death-touched door",
          body: "Defeat the Plant Knight. The developer reply confirms this is the intended trigger to cleanse the Death-touched door at the top of the tower. The door puzzle and the Plant Knight patrol are one progression route, not two branches, so skipping the fight blocks the door.",
          doneCondition: "The Death-touched door at the top of the tower can be opened."
        }
      ]
    },
    {
      id: "walkthrough-section-3",
      type: "comparison",
      heading: "Left Door Vs. Right Door: Which Route First",
      options: [
        {
          name: "Left path (tower NPC)",
          summary: "Reach the tower NPC who names the trapped enemy and the Death-touched door. Useful when you want the NPC's framing before committing to the right-path fight.",
          bestFor: "Players who want story context and a clear objective before the encounter."
        },
        {
          name: "Right path (Plant Knight)",
          summary: "Reach the trapped enemy directly and fight the Plant Knight. This is the developer's intended progression trigger; clearing the encounter unlocks the Death-touched door.",
          bestFor: "Players who want to clear the progression gate as fast as possible."
        },
        {
          name: "Checkpoint shortcut (Plant Knight)",
          summary: "Use the already-unlocked shortcut from the Bloodspring checkpoint and turn right to reach the Plant Knight patrol. Saves the backtrack through the large door.",
          bestFor: "After-death runs and replays where the shortcut is already open."
        }
      ]
    },
    {
      id: "walkthrough-section-4",
      type: "callout",
      tone: "tip",
      title: "Use The Bloodspring Shortcut On Repeat Runs",
      body: "The developer reply confirms that once the Bloodspring shortcut is unlocked, you can skip the large-door loop and turn right to find the Plant Knight. Treat the shortcut as the default route on second-and-later attempts so you do not re-trigger the NPC dialogue or the left-path fall back into the lower Temple Walls."
    },
    {
      id: "walkthrough-section-5",
      type: "callout",
      tone: "caution",
      title: "Do Not Skip The Plant Knight",
      body: "The Death-touched door at the top of the Temple Walls tower connects to the same area as the trapped enemy on the right path. The developer reply states clearing the Plant Knight is the intended trigger before the door can be cleansed, so leaving the Plant Knight alive soft-blocks the door puzzle and the next story beat."
    },
    {
      id: "walkthrough-section-6",
      type: "prose",
      heading: "What The Developer Reply Confirms And What It Does Not",
      body: "The developer reply on the Steam Community Hub thread 'Need Help Progressing from Temple Walls' confirms four launch-window facts: the Bloodspring drop starts the loop, the large door has a left/right split, the right path leads to a Plant Knight patrol, and clearing that Plant Knight is the trigger for the Death-touched door at the top of the tower. The reply does not name the boss that follows Temple Walls, does not publish exact HP or stamina numbers, and does not map the next region. Treat the rest of the early game as unconfirmed until Torchlight Games posts a follow-up reply or another launch-day thread surfaces matching details."
    },
    {
      id: "walkthrough-section-7",
      type: "prose",
      heading: "Beyond Temple Walls: What Is Not Yet Public",
      body: "Outside of the Temple Walls progression gate, no further named region, boss, or encounter is publicly documented as of 2026-09-23. The Steam description lists the kingdom of Wisdom, lush swamps, chilling ruins, ancient cities, and the Labyrinth of Death as later regions, but their order, gates, and boss names are not yet confirmed by a first-party source. Watch the same Steam Community Hub thread and the Hub's announcements tab for the next region reveal, and treat any third-party list of later bosses as speculation until the developer confirms it."
    },
    {
      id: "walkthrough-section-sources",
      type: "prose",
      heading: "Sources",
      body: "Every route step on this page is anchored to the developer reply in the Steam Community Hub thread. Cross-check the Steam store page for any updates.",
      links: [{"label":"Need Help Progressing from Temple Walls (Steam Community Hub)","href":"https://steamcommunity.com/app/2538870/discussions/0/3782878667988490094/","description":"Developer reply by Torchlight Games that names the Bloodspring drop, the large-door left/right split, the Plant Knight route, and the Death-touched door trigger."},{"label":"False Hero on Steam (AppID 2538870)","href":"https://store.steampowered.com/app/2538870","description":"Confirms launch date, developer, publisher, soulslike tags, and the Land of the Gods setting that frames the Temple Walls progression gate."},{"label":"False Hero Steam Community Hub","href":"https://steamcommunity.com/app/2538870","description":"Hosts official announcements and launch-day discussion threads for the early-area progression gates."}],
    }
  ],
  faqIds: ["faq-walkthrough-1", "faq-walkthrough-2", "faq-walkthrough-3", "faq-walkthrough-4", "faq-walkthrough-5", "faq-walkthrough-6"],
  relatedPageIds: ["fixed-gameplay-en-US", "fixed-characters-en-US", "fixed-steam-store-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-23",
};
