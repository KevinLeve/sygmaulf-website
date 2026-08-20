"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import type { LiveStatus } from "@/lib/streaming";

export default function LiveStatusWidget() {
  const [status, setStatus] = useState<LiveStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        const res = await fetch("/api/live", { cache: "no-store" });
        const data = await res.json();
        if (!cancelled) {
          setStatus(data.live);
          setLoading(false);
        }
      } catch {
        if (!cancelled) setLoading(false);
      }
    }

    poll();
    const interval = setInterval(poll, 60_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-3 border border-line bg-bg-raised px-5 py-4">
        <span className="h-2 w-2 animate-pulse rounded-full bg-ink-faint" />
        <span className="text-eyebrow text-ink-faint">Checking stream status…</span>
      </div>
    );
  }

  if (status?.isLive) {
    return (
      <div className="flex flex-col gap-4 border border-live/40 bg-bg-raised p-5 sm:flex-row sm:items-center">
        {status.thumbnailUrl ? (
          <div className="relative h-32 w-full flex-shrink-0 overflow-hidden sm:w-56">
            <Image
              src={status.thumbnailUrl}
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ) : null}
        <div className="flex-1">
          <span className="text-eyebrow inline-flex items-center gap-2 text-live">
            <span className="h-2 w-2 animate-pulse rounded-full bg-live" /> Live Now
          </span>
          <p className="font-display mt-2 text-xl font-bold leading-tight">
            {status.title ?? "Live stream in progress"}
          </p>
          {status.category ? (
            <p className="mt-1 text-sm text-ink-dim">{status.category}</p>
          ) : null}
          {typeof status.viewerCount === "number" ? (
            <p className="font-mono mt-1 text-xs text-ink-faint">
              {status.viewerCount.toLocaleString()} watching
            </p>
          ) : null}
        </div>
        {status.watchUrl ? (
          <Button href={status.watchUrl} variant="primary">
            Watch Live →
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 border border-line bg-bg-raised p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <span className="text-eyebrow text-ink-faint">Currently Offline</span>
        <p className="mt-2 text-sm text-ink-dim">
          {status?.unavailableReason ??
            "No stream is live right now — check back or follow for the next one."}
        </p>
      </div>
      <Button href="/media" variant="outline">
        Watch Latest Content
      </Button>
    </div>
  );
}
