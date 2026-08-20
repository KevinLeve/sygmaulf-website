import { Card, VerificationBadge } from "@/components/ui";
import { achievements } from "@/data/achievements";

export default function PressSection() {
  const pressItems = achievements.filter((a) => a.category === "press");

  if (!pressItems.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {pressItems.map((item) => (
        <Card key={item.id} className="flex items-start justify-between gap-4">
          <div>
            <span className="text-eyebrow text-ink-faint">In The Media</span>
            <h3 className="font-display mt-2 text-2xl font-bold leading-tight">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-dim">{item.description}</p>
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
              >
                Feature Story →
              </a>
            ) : (
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wide text-ink-faint">
                Link pending
              </span>
            )}
          </div>
          <VerificationBadge status={item.verificationStatus} />
        </Card>
      ))}
    </div>
  );
}
