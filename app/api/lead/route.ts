import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/content";
import { leadSchema } from "@/lib/lead-schema";
import { createAnonClient } from "@/lib/supabase";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "AMP-Access-Control-Allow-Source-Origin": SITE_URL,
    "Access-Control-Expose-Headers": "AMP-Access-Control-Allow-Source-Origin",
  };
}

function json(body: { ok: boolean }, status = 200) {
  return NextResponse.json(body, { status, headers: corsHeaders() });
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

export async function POST(req: Request) {
  const parsed = leadSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return json({ ok: false }, 400);
  const { website, elapsed_ms, ...lead } = parsed.data;
  if (website) return json({ ok: false }, 400);
  if (elapsed_ms < 3000) return json({ ok: false }, 400);

  const supabase = createAnonClient();
  if (!supabase) return json({ ok: false }, 500);

  const { error } = await supabase.from("navera_homes_leads").insert({
    ...lead,
    source: SITE_URL,
    consent_timestamp: new Date().toISOString(),
  });
  if (error) return json({ ok: false }, 500);
  return json({ ok: true });
}
