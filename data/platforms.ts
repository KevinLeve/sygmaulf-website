import type { VerificationStatus } from "./site";

export interface Platform {
  id: string;
  label: string;
  url: string | null; // null when no URL has been supplied yet
  handle?: string;
  verificationStatus: VerificationStatus;
  channelId?: string; // used by lib/streaming provider adapters
}

// IMPORTANT: YouTube, Twitch, Instagram, TikTok, X/Twitter, Discord and
// WhatsApp/Broadcast URLs were NOT supplied in the WhatsApp brief.
// Each is listed with url: null and verificationStatus: "placeholder" so
// the UI can render "coming soon" states instead of dead/fake links.
// Fill in the real URL (and channelId, where relevant) as soon as it's
// supplied — do not invent one.
export const platforms: Platform[] = [
  {
    id: "youtube",
    label: "YouTube",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "twitch",
    label: "Twitch",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "tiktok",
    label: "TikTok",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "x",
    label: "X (Twitter)",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "discord",
    label: "Discord",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Broadcast",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "fortnite",
    label: "Fortnite Creator Page",
    url: "https://www.fortnite.com/@sygmaulf",
    handle: "@sygmaulf",
    verificationStatus: "verified",
  },
  {
    id: "spotify",
    label: "GGEZ on Spotify",
    url: "https://open.spotify.com/show/1M5cupcfoE61rQtvZARarV",
    verificationStatus: "verified",
  },
  {
    id: "amazon-music",
    label: "GGEZ on Amazon Music",
    url: "https://www.amazon.in/-/hi/dp/B0GHXJPQ8S",
    verificationStatus: "verified",
  },
];

export function getPlatform(id: string): Platform | undefined {
  return platforms.find((p) => p.id === id);
}
