export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
        <span className="text-eyebrow text-ink-faint">Loading…</span>
      </div>
    </div>
  );
}
