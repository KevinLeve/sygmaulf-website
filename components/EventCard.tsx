import { Card, VerificationBadge } from "@/components/ui";
import type { EventRecord } from "@/data/events";

export default function EventCard({ event }: { event: EventRecord }) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <span className="text-eyebrow text-ink-faint">
          {event.game} · {event.year}
          {event.location ? ` · ${event.location}` : ""}
        </span>
        <VerificationBadge status={event.verificationStatus} />
      </div>

      <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">{event.name}</h3>

      <div className="grid gap-3 border-y border-line-soft py-4 sm:grid-cols-2">
        <div>
          <span className="text-eyebrow text-ink-faint">Result</span>
          <p className="font-mono mt-1 text-sm text-accent">{event.result}</p>
        </div>
        <div>
          <span className="text-eyebrow text-ink-faint">Role</span>
          <p className="mt-1 text-sm text-ink">{event.role}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-ink-dim">{event.description}</p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
        {event.officialLink ? (
          <a
            href={event.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold uppercase tracking-wide text-accent hover:underline"
          >
            Official Event Link →
          </a>
        ) : null}
        {event.supportingLinks?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold uppercase tracking-wide text-ink-dim hover:text-accent hover:underline"
          >
            {link.label} →
          </a>
        ))}
        {event.referenceDocument ? (
          <span className="font-mono text-ink-faint">Ref: {event.referenceDocument}</span>
        ) : null}
      </div>
    </Card>
  );
}
