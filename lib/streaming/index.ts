import { youtubeProvider } from "./youtube";
import { twitchProvider } from "./twitch";
import type { LiveStatus } from "./types";

export type { LiveStatus } from "./types";

const providers = [twitchProvider, youtubeProvider];

/**
 * Returns the first live provider found, or the offline status of the
 * first configured provider, or a generic "nothing configured" status.
 * Never throws — every provider degrades gracefully when credentials
 * are missing so the UI always has something safe to render.
 */
export async function getAggregatedLiveStatus(): Promise<{
  live: LiveStatus | null;
  checked: LiveStatus[];
}> {
  const configured = providers.filter((p) => p.isConfigured());

  if (configured.length === 0) {
    return {
      live: null,
      checked: [
        {
          provider: "youtube",
          isLive: false,
          unavailableReason: "No streaming providers are configured yet.",
        },
      ],
    };
  }

  const results = await Promise.all(configured.map((p) => p.getLiveStatus()));
  const live = results.find((r) => r.isLive) ?? null;

  return { live, checked: results };
}
