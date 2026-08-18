"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { contactMethods } from "@/data/contact";

type Status = "idle" | "submitting" | "success" | "success-unrouted" | "error";

export default function ContactForm({ defaultRouteId = "general" }: { defaultRouteId?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [routeId, setRouteId] = useState(defaultRouteId);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, routeId, honeypot }),
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
      <div className="border border-accent/40 bg-bg-raised p-8 text-center">
        <span className="text-eyebrow text-accent">Message Sent</span>
        <h3 className="font-display mt-3 text-2xl font-bold">Thanks for reaching out.</h3>
        {status === "success" ? (
          <p className="mx-auto mt-3 max-w-sm text-sm text-ink-dim">
            We&apos;ll get back to you at {email} as soon as we can.
          </p>
        ) : (
          <p className="mx-auto mt-3 max-w-sm text-sm text-ink-dim">
            We couldn&apos;t auto-deliver this just now — please also email us directly so it isn&apos;t
            missed.
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <label className="block text-sm">
        <span className="text-ink-dim">Enquiry type</span>
        <select
          value={routeId}
          onChange={(e) => setRouteId(e.target.value)}
          className="mt-2 w-full border border-line bg-bg px-4 py-3 text-ink outline-none focus-visible:border-accent"
        >
          {contactMethods.map((m) => (
            <option key={m.id} value={m.id}>
              {m.label}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm">
        <span className="text-ink-dim">
          Name <span className="text-accent">*</span>
        </span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full border border-line bg-bg px-4 py-3 text-ink outline-none focus-visible:border-accent"
        />
      </label>

      <label className="block text-sm">
        <span className="text-ink-dim">
          Email <span className="text-accent">*</span>
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full border border-line bg-bg px-4 py-3 text-ink outline-none focus-visible:border-accent"
        />
      </label>

      <label className="block text-sm">
        <span className="text-ink-dim">
          Message <span className="text-accent">*</span>
        </span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full border border-line bg-bg px-4 py-3 text-ink outline-none focus-visible:border-accent"
        />
      </label>

      {error ? <p className="text-sm text-live">{error}</p> : null}

      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message →"}
      </Button>
    </form>
  );
}
