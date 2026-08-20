import type { VerificationStatus } from "./site";

export type MediaCategory = "videos" | "streams" | "esports" | "podcast" | "events";

export interface MediaItem {
  id: string;
  title: string;
  platform: string;
  date?: string;
  category: MediaCategory;
  url: string | null;
  youtubeId?: string;
  description: string;
  verificationStatus: VerificationStatus;
  featured?: boolean;
}

// Shorts were removed at the client's request (Aug 2026) — do not
// reintroduce a "shorts" category or placeholder without new instruction.
// The featured video below was supplied directly by the client as the
// highest-viewed video to lead with. Do not invent titles, view counts,
// or dates for anything else here — placeholders stay null until real
// links are supplied.
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
    id: "hercules-psx-walkthrough",
    title: "Hercules (PSX / PS1) Gameplay Walkthrough — No Commentary",
    platform: "YouTube",
    category: "videos",
    url: "https://youtu.be/FFJK0L-yT9k?si=b8bytSorSkZ28exs",
    youtubeId: "FFJK0L-yT9k",
    description: "Full gameplay walkthrough, no commentary. The channel's highest-viewed video — client-selected as the featured video.",
    verificationStatus: "verified",
    featured: true,
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
  { label: "Streams", value: "streams" },
  { label: "Esports", value: "esports" },
  { label: "Podcast", value: "podcast" },
  { label: "Events", value: "events" },
];
