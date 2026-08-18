import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/notify";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  routeId?: string;
  honeypot?: string; // spam trap — should always be empty
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, routeId, honeypot } = body;

  if (honeypot) {
    // Silently accept to not tip off bots, but never send anything.
    return NextResponse.json({ ok: true, delivered: false });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const result = await sendEnquiryEmail({
    subject: `New contact form enquiry from ${name}`,
    text: `From: ${name} <${email}>\nRoute: ${routeId ?? "general"}\n\n${message}`,
    routeId,
  });

  return NextResponse.json({ ok: true, delivered: result.delivered, reason: result.reason });
}
