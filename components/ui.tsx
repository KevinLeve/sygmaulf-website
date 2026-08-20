import Link from "next/link";
import { cn } from "@/lib/utils";
import type { VerificationStatus } from "@/data/site";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("container-edit", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("text-eyebrow text-accent", className)}>{children}</span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-ink-dim sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none";

const buttonVariants = {
  primary: "bg-accent text-bg hover:bg-[#e0bb63]",
  outline: "border border-line text-ink hover:border-accent hover:text-accent",
  ghost: "text-ink hover:text-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type,
  onClick,
  disabled,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const classes = cn(buttonBase, buttonVariants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

const verificationLabels: Record<VerificationStatus, string> = {
  verified: "Verified",
  pending: "Client-Supplied",
  placeholder: "Coming Soon",
};

const verificationStyles: Record<VerificationStatus, string> = {
  verified: "text-accent border-accent/40",
  pending: "text-ink-dim border-line",
  placeholder: "text-ink-faint border-line-soft",
};

export function VerificationBadge({ status }: { status: VerificationStatus }) {
  return (
    <span
      className={cn(
        "font-mono inline-flex items-center rounded-sm border px-2 py-0.5 text-[0.65rem] uppercase tracking-wider",
        verificationStyles[status]
      )}
    >
      {verificationLabels[status]}
    </span>
  );
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "border border-line bg-bg-raised/60 p-6 transition-colors duration-200 hover:border-accent/50",
        className
      )}
    >
      {children}
    </div>
  );
}
