import Image from "next/image";
import { VerificationBadge } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Achievement } from "@/data/achievements";

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between border border-line bg-bg-raised/60 transition-colors duration-200 hover:border-accent/50"
      )}
    >
      {achievement.image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line bg-black">
          <Image
            src={achievement.image}
            alt={achievement.imageAlt ?? `${achievement.title} logo`}
            fill
            className="object-contain p-6"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <span className="text-eyebrow text-ink-faint">
              {achievement.game ?? achievement.category}
              {achievement.year ? ` · ${achievement.year}` : ""}
            </span>
            <VerificationBadge status={achievement.verificationStatus} />
          </div>
          <h3 className="font-display mt-3 text-2xl font-bold leading-tight">
            {achievement.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-dim">{achievement.description}</p>
          {achievement.team ? (
            <p className="font-mono mt-2 text-xs uppercase tracking-wide text-accent">
              Team: {achievement.team}
            </p>
          ) : null}
        </div>
        {achievement.url ? (
          <a
            href={achievement.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-fit items-center gap-1 text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
          >
            {achievement.urlLabel ?? "View Source"} →
          </a>
        ) : (
          <span className="font-mono mt-5 block text-[0.65rem] text-ink-faint">
            Source: {achievement.source}
          </span>
        )}
      </div>
    </div>
  );
}
