import type { VerificationStatus } from "./site";

export interface Stat {
  id: string;
  value: string;
  label: string;
  verificationStatus: VerificationStatus;
}

// These five figures were explicitly supplied by Sygmaulf as "By The
// Numbers" content (source: client fact sheet, Aug 2026). They are
// reproduced exactly as given — do not alter them without an updated
// source. verificationStatus is "pending" because they're client-supplied
// self-reported figures rather than independently verified against a
// public API or document (e.g. Twitch subscriber counts aren't publicly
// auditable the way a tournament bracket is).
export const credibilityStats: Stat[] = [
  {
    id: "twitch-subscribers",
    value: "25K+",
    label: "Twitch Subscribers",
    verificationStatus: "pending",
  },
  {
    id: "codm-india-2025",
    value: "#12",
    label: "CODM India — 2025",
    verificationStatus: "pending",
  },
  {
    id: "competitive-titles",
    value: "10+",
    label: "Competitive Titles",
    verificationStatus: "pending",
  },
  {
    id: "events-activations",
    value: "50+",
    label: "Events / Activations",
    verificationStatus: "pending",
  },
  {
    id: "brand-partnerships",
    value: "6+",
    label: "Brand Partnerships",
    verificationStatus: "pending",
  },
];
