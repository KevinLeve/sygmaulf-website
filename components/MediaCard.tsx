import Image from "next/image";
import { Card, VerificationBadge } from "@/components/ui";
import type { MediaItem } from "@/data/media";

export default function MediaCard({ item }: { item: MediaItem }) {
  const isPlaceholder = !item.url;

  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden border border-line-soft bg-bg-raised-2">
        {item.youtubeId ? (
          <>
            <Image
              src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
            />
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-bg/70 text-accent backdrop-blur-sm">
              ▶
            </span>
          </>
        ) : isPlaceholder ? (
          <span className="text-eyebrow text-ink-faint">Coming Soon</span>
        ) : (
          <span className="text-eyebrow text-accent">▶ {item.platform}</span>
        )}
      </div>

      <div className="flex items-start justify-between gap-3">
        <span className="text-eyebrow text-ink-faint">
          {item.platform}
          {item.date ? ` · ${item.date}` : ""}
        </span>
        <VerificationBadge status={item.verificationStatus} />
      </div>

      <h3 className="font-display text-xl font-bold leading-tight">{item.title}</h3>
      <p className="flex-1 text-sm text-ink-dim">{item.description}</p>

      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
        >
          Watch / Listen →
        </a>
      ) : (
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
          Link pending
        </span>
      )}
    </Card>
  );
}
