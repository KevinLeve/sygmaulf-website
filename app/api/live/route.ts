import { NextResponse } from "next/server";
import { getAggregatedLiveStatus } from "@/lib/streaming";

export const revalidate = 30;

export async function GET() {
  const status = await getAggregatedLiveStatus();
  return NextResponse.json(status, {
    headers: { "Cache-Control": "public, max-age=0, s-maxage=30" },
  });
}
