import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";
import { platforms } from "@/data/platforms";
import { Container } from "@/components/ui";

export default function Footer() {
  const year = new Date().getFullYear();
  const liveSocials = platforms.filter((p) => p.url);

  return (
    <footer className="border-t border-line">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div>
          <span className="font-display block text-3xl font-extrabold uppercase tracking-tight">
            {siteConfig.name}
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-dim">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <span className="text-eyebrow text-ink-faint">Navigate</span>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-dim transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-eyebrow text-ink-faint">Elsewhere</span>
          <ul className="mt-4 space-y-2.5">
            {liveSocials.map((platform) => (
              <li key={platform.id}>
                <a
                  href={platform.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-dim transition-colors hover:text-accent"
                >
                  {platform.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-line-soft py-6">
        <Container className="flex flex-col gap-2 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {siteConfig.name}. All rights reserved.
          </span>
          <span className="font-mono">Gaming. Media. Community.</span>
        </Container>
      </div>
    </footer>
  );
}
