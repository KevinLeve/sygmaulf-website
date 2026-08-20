export interface LiveStatus {
  provider: "youtube" | "twitch";
  isLive: boolean;
  title?: string;
  category?: string;
  viewerCount?: number;
  thumbnailUrl?: string;
  watchUrl?: string;
  /** Present when the provider isn't configured or the lookup failed. */
  unavailableReason?: string;
}

export interface StreamingProvider {
  id: "youtube" | "twitch";
  isConfigured(): boolean;
  getLiveStatus(): Promise<LiveStatus>;
}
