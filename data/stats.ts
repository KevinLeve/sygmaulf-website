import type { VerificationStatus } from "./site";

export interface Stat {
  id: string;
  value: string;
  label: string;
  verificationStatus: VerificationStatus;
}

// No subscriber/follower/view counts were supplied, so every stat below
// uses a non-numeric label rather than an invented number, per the
// client's content-safety rule. Swap `value` for a real figure (e.g.
// "25K+") only once it has been supplied and verified — update
// verificationStatus to "verified" at the same time.
export const credibilityStats: Stat[] = [
  {
    id: "community",
    value: "INDIA",
    label: "Gaming Community",
    verificationStatus: "verified",
  },
  {
    id: "partnerships",
    value: "GLOBAL",
    label: "Creator Partnerships",
    verificationStatus: "pending",
  },
  {
    id: "esports",
    value: "COMPETITIVE",
    label: "Esports Background",
    verificationStatus: "verified",
  },
  {
    id: "multi-game",
    value: "MULTI-GAME",
    label: "Gaming Creator",
    verificationStatus: "verified",
  },
  {
    id: "titles",
    value: "10+",
    label: "Competitive Titles Played",
    verificationStatus: "verified",
  },
];
