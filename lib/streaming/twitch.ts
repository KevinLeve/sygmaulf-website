import type { LiveStatus, StreamingProvider } from "./types";

// Uses the Twitch Helix API. Requires TWITCH_CLIENT_ID,
// TWITCH_CLIENT_SECRET, and TWITCH_CHANNEL_LOGIN as environment
// variables. Auth uses the app access token (client-credentials) flow;
// never exposed to the client — this file only ever runs on the server.
export const twitchProvider: StreamingProvider = {
  id: "twitch",

  isConfigured() {
    return Boolean(
      process.env.TWITCH_CLIENT_ID &&
        process.env.TWITCH_CLIENT_SECRET &&
        process.env.TWITCH_CHANNEL_LOGIN
    );
  },

  async getLiveStatus(): Promise<LiveStatus> {
    if (!this.isConfigured()) {
      return {
        provider: "twitch",
        isLive: false,
        unavailableReason: "Twitch API credentials are not configured.",
      };
    }

    const clientId = process.env.TWITCH_CLIENT_ID!;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET!;
    const login = process.env.TWITCH_CHANNEL_LOGIN!;

    try {
      const tokenRes = await fetch(
        `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
        { method: "POST", next: { revalidate: 3000 } }
      );

      if (!tokenRes.ok) {
        return {
          provider: "twitch",
          isLive: false,
          unavailableReason: "Twitch auth failed.",
        };
      }

      const { access_token: accessToken } = await tokenRes.json();

      const streamRes = await fetch(
        `https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(login)}`,
        {
          headers: {
            "Client-Id": clientId,
            Authorization: `Bearer ${accessToken}`,
          },
          next: { revalidate: 30 },
        }
      );

      if (!streamRes.ok) {
        return {
          provider: "twitch",
          isLive: false,
          unavailableReason: `Twitch API returned ${streamRes.status}.`,
        };
      }

      const data = await streamRes.json();
      const stream = data?.data?.[0];

      if (!stream) {
        return { provider: "twitch", isLive: false };
      }

      return {
        provider: "twitch",
        isLive: true,
        title: stream.title,
        category: stream.game_name,
        viewerCount: stream.viewer_count,
        thumbnailUrl: stream.thumbnail_url
          ?.replace("{width}", "440")
          ?.replace("{height}", "248"),
        watchUrl: `https://www.twitch.tv/${login}`,
      };
    } catch {
      return {
        provider: "twitch",
        isLive: false,
        unavailableReason: "Twitch live status lookup failed.",
      };
    }
  },
};
