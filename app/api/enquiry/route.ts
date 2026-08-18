import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/notify";

interface EnquiryPayload {
  name?: string;
  company?: string;
  designation?: string;
  email?: string;
  phone?: string;
  campaignType?: string;
  targetAudience?: string;
  budget?: string;
  timeline?: string;
  platforms?: string;
  brief?: string;
  website?: string;
  honeypot?: string;
}

export async function POST(req: NextRequest) {
  let body: EnquiryPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    name,
    company,
    designation,
    email,
    phone,
    campaignType,
    targetAudience,
    budget,
    timeline,
    platforms,
    brief,
    website,
    honeypot,
  } = body;

  if (honeypot) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  if (!name || !email || !brief) {
    return NextResponse.json(
      { error: "Name, email, and a brief are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const summary = [
    `Name: ${name}`,
    `Company: ${company ?? "—"}`,
    `Designation: ${designation ?? "—"}`,
    `Email: ${email}`,
    `Phone: ${phone ?? "—"}`,
    `Website: ${website ?? "—"}`,
    `Campaign Type: ${campaignType ?? "—"}`,
    `Target Audience: ${targetAudience ?? "—"}`,
    `Budget: ${budget ?? "—"}`,
    `Campaign Timeline: ${timeline ?? "—"}`,
    `Platforms: ${platforms ?? "—"}`,
    "",
    "Brief:",
    brief,
  ].join("\n");

  const result = await sendEnquiryEmail({
    subject: `New commercial enquiry from ${name}${company ? ` (${company})` : ""}`,
    text: summary,
    routeId: "business",
  });

  return NextResponse.json({ ok: true, delivered: result.delivered, reason: result.reason });
}
