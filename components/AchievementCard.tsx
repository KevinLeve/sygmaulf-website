import { Card, VerificationBadge } from "@/components/ui";
import type { Achievement } from "@/data/achievements";

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <Card className="flex h-full flex-col justify-between">
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
    </Card>
  );
}
