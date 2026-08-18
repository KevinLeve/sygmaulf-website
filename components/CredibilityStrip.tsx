import { credibilityStats } from "@/data/stats";

export default function CredibilityStrip() {
  const items = [...credibilityStats, ...credibilityStats];

  return (
    <div className="overflow-hidden border-y border-line bg-bg-raised">
      <div className="ticker-track flex w-max">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex" aria-hidden={rep === 1}>
            {items.map((stat, i) => (
              <div
                key={`${stat.id}-${rep}-${i}`}
                className="flex items-center gap-4 border-r border-line-soft px-8 py-6 sm:px-10"
              >
                <span className="font-display text-3xl font-extrabold tracking-tight text-accent sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-eyebrow max-w-[7rem] text-ink-dim">{stat.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
