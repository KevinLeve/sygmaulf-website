import { partners, partnerLabel } from "@/data/partnerships";

export default function PartnerLogoStrip() {
  return (
    <div className="border border-line bg-bg-raised">
      <div className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-4 lg:grid-cols-7 lg:divide-y-0">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex h-24 items-center justify-center px-4 text-center transition-colors hover:bg-bg-raised-2 sm:h-28"
          >
            <span className="font-display text-lg font-bold uppercase tracking-tight text-ink-dim sm:text-xl">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
      <p className="font-mono border-t border-line px-5 py-3 text-center text-[0.65rem] uppercase tracking-widest text-ink-faint">
        {partnerLabel}
      </p>
    </div>
  );
}
