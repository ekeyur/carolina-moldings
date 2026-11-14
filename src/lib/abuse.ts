import { NextResponse } from "next/server";

/**
 * Lightweight abuse protection for the public form endpoints. Every accepted
 * request sends a real email, so these guards cap spam and email-bombing
 * before we ever call the email provider.
 *
 * Volumetric DDoS is absorbed at the hosting edge, not here — see the
 * platform firewall settings. These checks protect the app's own costs.
 */

/** Name of the hidden "honeypot" field. Real users never fill it in. */
export const HONEYPOT_FIELD = "website";

const MAX_BODY_BYTES = 64 * 1024;

// Best-effort, per-instance sliding window. Serverless instances don't share
// memory, so this slows a single attacker down rather than being a hard cap;
// pair it with a platform-level rate-limit rule on /api/*.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function clientIp(request: Request) {
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound under a spray of IPs.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}

/** Reject form posts that come from another website's page. */
function crossOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false; // some privacy tools strip it; other checks still apply
  try {
    return new URL(origin).host !== request.headers.get("host");
  } catch {
    return true;
  }
}

type GuardResult =
  | { ok: true; body: Record<string, unknown> }
  | { ok: false; response: NextResponse };

/**
 * Runs the abuse checks and parses the JSON body. On a honeypot hit it returns
 * a fake success so bots don't learn they were caught.
 */
export async function guardFormRequest(
  request: Request,
  route: string,
): Promise<GuardResult> {
  const fail = (status: number, error: string) => ({
    ok: false as const,
    response: NextResponse.json({ ok: false, error }, { status }),
  });

  if (crossOrigin(request)) return fail(403, "Forbidden");

  if (rateLimited(`${route}:${clientIp(request)}`)) {
    return {
      ok: false,
      response: NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later or call us." },
        { status: 429, headers: { "Retry-After": String(WINDOW_MS / 1000) } },
      ),
    };
  }

  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > MAX_BODY_BYTES) return fail(413, "Request too large");

  let text: string;
  try {
    text = await request.text();
  } catch {
    return fail(400, "Invalid form data");
  }
  if (text.length > MAX_BODY_BYTES) return fail(413, "Request too large");

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return fail(400, "Invalid form data");
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return fail(400, "Invalid form data");
  }

  const record = body as Record<string, unknown>;
  if (typeof record[HONEYPOT_FIELD] === "string" && record[HONEYPOT_FIELD] !== "") {
    console.warn(`[${route}] honeypot triggered from ${clientIp(request)}`);
    return { ok: false, response: NextResponse.json({ ok: true }) };
  }

  return { ok: true, body: record };
}
