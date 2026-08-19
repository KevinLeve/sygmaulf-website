import type { VerificationStatus } from "./site";

export interface Partner {
  id: string;
  name: string;
  verificationStatus: VerificationStatus;
}

// Source explicitly uses the combined, deliberately non-specific label
// "FEATURED / PARTNERED / WORKED WITH" for this list of companies — it
// does NOT claim each one is a formal, ongoing "official partner."
// Keep that combined wording on the site. Do not upgrade any individual
// entry to "Official Partner" without separate confirmation.
export const partnerLabel = "Featured / Partnered / Worked With";

export const partners: Partner[] = [
  { id: "krafton", name: "KRAFTON", verificationStatus: "pending" },
  { id: "razer", name: "Razer", verificationStatus: "pending" },
  { id: "epic-games", name: "Epic Games", verificationStatus: "pending" },
  { id: "farlight84", name: "Farlight84", verificationStatus: "pending" },
  { id: "rockit", name: "Rockit", verificationStatus: "pending" },
  { id: "playstation", name: "PlayStation", verificationStatus: "pending" },
  { id: "activision", name: "Activision", verificationStatus: "pending" },
];
