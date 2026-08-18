import type { VerificationStatus } from "./site";

export interface CommunityChannel {
  id: string;
  label: string;
  description: string;
  url: string | null;
  verificationStatus: VerificationStatus;
}

export const communityChannels: CommunityChannel[] = [
  {
    id: "discord",
    label: "Discord",
    description: "The main hub for match callouts, community events, and day-to-day chat.",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "youtube",
    label: "YouTube",
    description: "Long-form content, highlights, and community shoutouts.",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "twitch",
    label: "Twitch",
    description: "Live streams, co-streams, and community game nights.",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "instagram",
    label: "Instagram",
    description: "Behind-the-scenes, announcements, and short-form clips.",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Broadcast",
    description: "Direct announcements for events, drops, and community news.",
    url: null,
    verificationStatus: "placeholder",
  },
  {
    id: "fortnite-builders",
    label: "Fortnite Builders Community",
    description: "Building India's largest Fortnite builders community.",
    url: "https://www.fortnite.com/@sygmaulf",
    verificationStatus: "verified",
  },
  {
    id: "nomads-province",
    label: "Nomads Province",
    description: "The wider Nomads Province community and creator ecosystem.",
    url: "https://nomadsprovince.netlify.app/",
    verificationStatus: "verified",
  },
];
