import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/", labels: { "en-US": "Home" } },
  { href: "/release-date", labels: { "en-US": "Release & availability" } },
  { href: "/system-requirements", labels: { "en-US": "Pre-launch readiness" } },
  { href: "/gameplay", labels: { "en-US": "Gameplay & content" } },
  { href: "/steam", labels: { "en-US": "Reference" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy Policy" } },
  { href: "/terms", labels: { "en-US": "Terms of Use" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
