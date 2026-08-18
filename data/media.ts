import type { VerificationStatus } from "./site";

export type MediaCategory =
  | "videos"
  | "shorts"
  | "streams"
  | "esports"
  | "podcast"
  | "events";

export interface MediaItem {
  id: string;
  title: string;
  platform: string;
  date?: string;
  category: MediaCategory;
  url: string | null;
  description: string;
  verificationStatus: VerificationStatus;
  featured?: boolean;
}

// No individual video/short/stream URLs were supplied in the brief, so the
// Media page is seeded with the one verified, embeddable content source
// (GGEZ) plus clearly-marked placeholder slots for the content types the
// design calls for (1 video, 3 shorts, 1 livestream). Replace the
// placeholders with real links/embeds as they're supplied — do not invent
// titles, view counts, or dates.
export const mediaItems: MediaItem[] = [
  {
    id: "ggez-podcast",
    title: "GGEZ — Gaming conversations beyond the match",
    platform: "Spotify / Amazon Music",
    category: "podcast",
    url: "https://open.spotify.com/show/1M5cupcfoE61rQtvZARarV",
    description: "The official GGEZ gaming podcast, hosted by Sygmaulf.",
    verificationStatus: "verified",
    featured: true,
  },
  {
    id: "featured-video-placeholder",
    title: "Featured video — coming soon",
    platform: "YouTube",
    category: "videos",
    url: null,
    description: "Reserved slot for the featured long-form video embed.",
    verificationStatus: "placeholder",
  },
  {
    id: "short-1-placeholder",
    title: "Short — coming soon",
    platform: "YouTube Shorts / Reels",
    category: "shorts",
    url: null,
    description: "Reserved slot for a short-form clip.",
    verificationStatus: "placeholder",
  },
  {
    id: "short-2-placeholder",
    title: "Short — coming soon",
    platform: "YouTube Shorts / Reels",
    category: "shorts",
    url: null,
    description: "Reserved slot for a short-form clip.",
    verificationStatus: "placeholder",
  },
  {
    id: "short-3-placeholder",
    title: "Short — coming soon",
    platform: "YouTube Shorts / Reels",
    category: "shorts",
    url: null,
    description: "Reserved slot for a short-form clip.",
    verificationStatus: "placeholder",
  },
  {
    id: "livestream-placeholder",
    title: "Livestream — coming soon",
    platform: "Twitch",
    category: "streams",
    url: null,
    description: "Reserved slot for the livestream embed / VOD.",
    verificationStatus: "placeholder",
  },
];

export const mediaFilters: { label: string; value: MediaCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Videos", value: "videos" },
  { label: "Shorts", value: "shorts" },
  { label: "Streams", value: "streams" },
  { label: "Esports", value: "esports" },
  { label: "Podcast", value: "podcast" },
  { label: "Events", value: "events" },
];
