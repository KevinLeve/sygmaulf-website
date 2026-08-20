"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

type Status = "idle" | "submitting" | "success" | "success-unrouted" | "error";

const fields: { name: string; label: string; type?: string; required?: boolean; full?: boolean }[] = [
  { name: "name", label: "Name", required: true },
  { name: "company", label: "Company" },
  { name: "designation", label: "Designation" },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "website", label: "Website", type: "url" },
  { name: "campaignType", label: "Campaign Type" },
  { name: "targetAudience", label: "Target Audience" },
  { name: "budget", label: "Budget" },
  { name: "timeline", label: "Campaign Timeline" },
  { name: "platforms", label: "Platforms" },
];

export default function CommercialEnquiryForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [brief, setBrief] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function setField(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, brief, honeypot }),
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
        <span className="text-eyebrow text-accent">Enquiry Received</span>
        <h3 className="font-display mt-3 text-3xl font-bold">Thanks for the brief.</h3>
        {status === "success" ? (
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-dim">
            We&apos;ll follow up at {values.email}.
          </p>
        ) : (
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-dim">
            We couldn&apos;t auto-deliver this just now — please also email your brief directly to{" "}
            <a href="mailto:sygmaulf@gmail.com" className="text-accent hover:underline">
              sygmaulf@gmail.com
            </a>
            .
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.name} className="block text-sm">
            <span className="text-ink-dim">
              {f.label} {f.required ? <span className="text-accent">*</span> : null}
            </span>
            <input
              type={f.type ?? "text"}
              required={f.required}
              value={values[f.name] ?? ""}
              onChange={(e) => setField(f.name, e.target.value)}
              className="mt-2 w-full border border-line bg-bg px-4 py-3 text-ink outline-none focus-visible:border-accent"
            />
          </label>
        ))}
      </div>

      <label className="block text-sm">
        <span className="text-ink-dim">
          Brief <span className="text-accent">*</span>
        </span>
        <textarea
          required
          rows={5}
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          className="mt-2 w-full border border-line bg-bg px-4 py-3 text-ink outline-none focus-visible:border-accent"
        />
      </label>

      {error ? <p className="text-sm text-live">{error}</p> : null}

      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit Enquiry →"}
      </Button>
    </form>
  );
}
