import { contactMethods } from "@/data/contact";

interface SendEnquiryEmailInput {
  subject: string;
  text: string;
  routeId?: string;
}

interface SendResult {
  delivered: boolean;
  reason?: string;
}

function resolveRecipient(routeId?: string): string {
  const match = contactMethods.find((m) => m.id === routeId);
  return match?.email ?? "sygmaulf@gmail.com";
}

/**
 * Sends a form submission via Resend if RESEND_API_KEY is configured.
 * If it isn't, the submission is logged server-side (visible in Vercel
 * function logs) and the caller is told delivery did not happen, so the
 * UI can be honest with the user instead of claiming a false success.
 *
 * Required env vars (see .env.example):
 *   RESEND_API_KEY   — API key from resend.com
 *   RESEND_FROM      — verified "from" address for your Resend domain
 */
export async function sendEnquiryEmail(input: SendEnquiryEmailInput): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = resolveRecipient(input.routeId);

  if (!apiKey || !from) {
    console.log("[enquiry:not-delivered — RESEND_API_KEY/RESEND_FROM missing]", {
      to,
      subject: input.subject,
      text: input.text,
    });
    return {
      delivered: false,
      reason:
        "Email delivery isn't configured yet (RESEND_API_KEY / RESEND_FROM missing).",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: input.subject,
        text: input.text,
      }),
    });

    if (!res.ok) {
      console.error("[enquiry:delivery-failed]", await res.text());
      return { delivered: false, reason: "Email provider returned an error." };
    }

    return { delivered: true };
  } catch (err) {
    console.error("[enquiry:delivery-error]", err);
    return { delivered: false, reason: "Email provider request failed." };
  }
}
