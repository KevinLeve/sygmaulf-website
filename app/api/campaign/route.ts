import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/notify";

interface CampaignPayload {
  goal?: string;
  audience?: string[];
  needs?: string[];
  budget?: string;
  timeline?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  honeypot?: string;
}

export async function POST(req: NextRequest) {
  let body: CampaignPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { goal, audience, needs, budget, timeline, name, company, email, phone, honeypot } = body;

  if (honeypot) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required to submit a campaign plan request." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const summary = [
    `Goal: ${goal ?? "—"}`,
    `Audience: ${audience?.join(", ") || "—"}`,
    `Needs: ${needs?.join(", ") || "—"}`,
    `Budget: ${budget ?? "—"}`,
    `Timeline: ${timeline ?? "—"}`,
    `Name: ${name}`,
    `Company: ${company ?? "—"}`,
    `Email: ${email}`,
    `Phone: ${phone ?? "—"}`,
  ].join("\n");

  const result = await sendEnquiryEmail({
    subject: `New campaign plan request from ${name}${company ? ` (${company})` : ""}`,
    text: summary,
    routeId: "business",
  });

  return NextResponse.json({ ok: true, delivered: result.delivered, reason: result.reason });
}
