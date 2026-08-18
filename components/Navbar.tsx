"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, primaryCta, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu on route change. Derived during render (not an
  // effect) so it can't cause an extra render pass.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="container-edit flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="font-display text-2xl font-extrabold uppercase tracking-tight md:text-3xl"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.slice(1, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wide text-ink-dim transition-colors hover:text-ink",
                pathname === item.href && "text-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium uppercase tracking-wide text-ink-dim transition-colors hover:text-ink",
              pathname === "/contact" && "text-accent"
            )}
          >
            Contact
          </Link>
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 border border-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            {primaryCta.label} <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg lg:hidden"
        >
          <nav className="container-edit flex flex-col gap-1 py-6" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-display border-b border-line-soft py-4 text-2xl font-bold uppercase tracking-tight",
                  pathname === item.href && "text-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={primaryCta.href}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wide text-bg"
            >
              {primaryCta.label} <span aria-hidden>→</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
