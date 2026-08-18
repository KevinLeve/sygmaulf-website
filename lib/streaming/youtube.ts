import type { LiveStatus, StreamingProvider } from "./types";

// Uses the YouTube Data API v3 `search` endpoint with eventType=live.
// Requires YOUTUBE_API_KEY and YOUTUBE_CHANNEL_ID as environment
// variables (never exposed to the client — this file only ever runs on
// the server, inside the /api/live route).
export const youtubeProvider: StreamingProvider = {
  id: "youtube",

  isConfigured() {
    return Boolean(process.env.YOUTUBE_API_KEY && process.env.YOUTUBE_CHANNEL_ID);
  },

  async getLiveStatus(): Promise<LiveStatus> {
    if (!this.isConfigured()) {
      return {
        provider: "youtube",
        isLive: false,
        unavailableReason: "YouTube API credentials are not configured.",
      };
    }

    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;

    try {
      const url = new URL("https://www.googleapis.com/youtube/v3/search");
      url.searchParams.set("part", "snippet");
      url.searchParams.set("channelId", channelId!);
      url.searchParams.set("eventType", "live");
      url.searchParams.set("type", "video");
      url.searchParams.set("key", apiKey!);

      const res = await fetch(url.toString(), { next: { revalidate: 30 } });

      if (!res.ok) {
        return {
          provider: "youtube",
          isLive: false,
          unavailableReason: `YouTube API returned ${res.status}.`,
        };
      }

      const data = await res.json();
      const item = data?.items?.[0];

      if (!item) {
        return { provider: "youtube", isLive: false };
      }

      return {
        provider: "youtube",
        isLive: true,
        title: item.snippet?.title,
        thumbnailUrl: item.snippet?.thumbnails?.high?.url,
        watchUrl: `https://www.youtube.com/watch?v=${item.id?.videoId}`,
      };
    } catch {
      return {
        provider: "youtube",
        isLive: false,
        unavailableReason: "YouTube live status lookup failed.",
      };
    }
  },
};
