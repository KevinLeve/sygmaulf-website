// Central site configuration.
// Update nav items, brand info, and social links here — nothing else in the
// codebase should hard-code these values.

export const siteConfig = {
  name: "Sygmaulf",
  tagline: "Gaming. Media. Community.",
  description:
    "Sygmaulf is an Indian gaming creator, esports personality, competitive player, host and community builder connecting brands with gaming audiences.",
  // Falls back to a placeholder if NEXT_PUBLIC_SITE_URL isn't set in Vercel yet.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sygmaulf.com",
  locale: "en_IN",
};

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Work With Sygmaulf", href: "/work-with-sygmaulf" },
  { label: "Events", href: "/events" },
  { label: "Creator Network", href: "/creator-network" },
  { label: "Media Kit", href: "/media-kit" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = {
  label: "Work With Sygmaulf",
  href: "/work-with-sygmaulf",
};

// Verification status used across every data record in /data.
// "verified"  — confirmed against a supplied source document/link
// "pending"   — supplied by the client but not independently verified yet
// "placeholder" — not supplied at all; needs real data before publishing
export type VerificationStatus = "verified" | "pending" | "placeholder";
