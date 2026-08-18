"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const GOALS = [
  "Product launch",
  "Awareness",
  "Downloads",
  "Sales",
  "Community growth",
  "Event promotion",
];

const AUDIENCES = [
  "Mobile gamers",
  "PC gamers",
  "Console gamers",
  "Esports audience",
  "College audience",
  "Gen-Z",
];

const NEEDS = [
  "YouTube",
  "Instagram",
  "Twitch",
  "Creators",
  "Tournament",
  "Co-stream",
  "College activation",
  "Offline event",
];

const BUDGETS = ["Under ₹10K", "₹10K–₹50K", "₹50K–₹1L", "₹1L–₹5L", "₹5L+"];

type Status = "idle" | "submitting" | "success" | "success-unrouted" | "error";

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export default function CampaignBuilder() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [audience, setAudience] = useState<string[]>([]);
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const totalSteps = 6;

  async function handleSubmit() {
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/campaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goal,
          audience,
          needs,
          budget,
          timeline,
          name,
          company,
          email,
          phone,
          honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus(data.delivered ? "success" : "success-unrouted");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success" || status === "success-unrouted") {
    return (
      <div className="border border-accent/40 bg-bg-raised p-8 text-center sm:p-12">
        <span className="text-eyebrow text-accent">Request Received</span>
        <h3 className="font-display mt-3 text-3xl font-bold">We&apos;ve got your brief.</h3>
        {status === "success" ? (
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-dim">
            Your campaign plan request has been sent. Expect a reply at {email}.
          </p>
        ) : (
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-dim">
            We couldn&apos;t auto-deliver this just now — please also email your brief directly to{" "}
            <a href="mailto:sygmaulf@gmail.com" className="text-accent hover:underline">
              sygmaulf@gmail.com
            </a>{" "}
            so it isn&apos;t missed.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="border border-line bg-bg-raised p-6 sm:p-10">
      <div className="mb-8 flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full bg-line-soft",
              i < step && "bg-accent"
            )}
          />
        ))}
      </div>

      {/* honeypot */}
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {step === 1 ? (
        <fieldset>
          <legend className="font-display text-2xl font-bold">What&apos;s your goal?</legend>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {GOALS.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGoal(g)}
                className={cn(
                  "border px-5 py-4 text-left text-sm font-medium transition-colors",
                  goal === g
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-line hover:border-accent/50"
                )}
              >
                {g}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset>
          <legend className="font-display text-2xl font-bold">Who are you trying to reach?</legend>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {AUDIENCES.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAudience((prev) => toggle(prev, a))}
                className={cn(
                  "border px-5 py-4 text-left text-sm font-medium transition-colors",
                  audience.includes(a)
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-line hover:border-accent/50"
                )}
              >
                {a}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 3 ? (
        <fieldset>
          <legend className="font-display text-2xl font-bold">What do you need?</legend>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {NEEDS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setNeeds((prev) => toggle(prev, n))}
                className={cn(
                  "border px-5 py-4 text-left text-sm font-medium transition-colors",
                  needs.includes(n)
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-line hover:border-accent/50"
                )}
              >
                {n}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 4 ? (
        <fieldset>
          <legend className="font-display text-2xl font-bold">Budget</legend>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {BUDGETS.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBudget(b)}
                className={cn(
                  "font-mono border px-5 py-4 text-left text-sm font-medium transition-colors",
                  budget === b
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-line hover:border-accent/50"
                )}
              >
                {b}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 5 ? (
        <fieldset>
          <legend className="font-display text-2xl font-bold">Timeline</legend>
          <label className="mt-6 block text-sm text-ink-dim" htmlFor="timeline">
            Campaign start date
          </label>
          <input
            id="timeline"
            type="date"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="mt-2 w-full border border-line bg-bg px-4 py-3 text-ink outline-none focus-visible:border-accent sm:w-64"
          />
        </fieldset>
      ) : null}

      {step === 6 ? (
        <fieldset>
          <legend className="font-display text-2xl font-bold">Contact</legend>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Name" value={name} onChange={setName} required />
            <Field label="Company" value={company} onChange={setCompany} />
            <Field label="Email" value={email} onChange={setEmail} type="email" required />
            <Field label="Phone" value={phone} onChange={setPhone} type="tel" />
          </div>
        </fieldset>
      ) : null}

      {error ? <p className="mt-4 text-sm text-live">{error}</p> : null}

      <div className="mt-10 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
        >
          ← Back
        </Button>

        {step < totalSteps ? (
          <Button
            variant="primary"
            onClick={() => setStep((s) => Math.min(totalSteps, s + 1))}
            disabled={
              (step === 1 && !goal) ||
              (step === 2 && audience.length === 0) ||
              (step === 3 && needs.length === 0) ||
              (step === 4 && !budget)
            }
          >
            Continue →
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!name || !email || status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Get My Campaign Plan →"}
          </Button>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="text-ink-dim">
        {label} {required ? <span className="text-accent">*</span> : null}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border border-line bg-bg px-4 py-3 text-ink outline-none focus-visible:border-accent"
      />
    </label>
  );
}
