import { Resend } from "resend";

// Lazy: the Resend constructor throws immediately if the key is missing, and we'd
// rather surface that as a clean JSON error from the route than a crashed module.
export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

// Destination inbox(es) — override per-environment via .env.local / Vercel project settings.
export const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "contact@carolinamoldings.com";
export const QUOTE_TO_EMAIL = process.env.QUOTE_TO_EMAIL || CONTACT_TO_EMAIL;

// Sending address. Must be on a domain verified in Resend to avoid spam folders;
// falls back to Resend's shared sandbox domain if not set.
export const EMAIL_FROM =
  process.env.EMAIL_FROM || "Carolina Moldings Website <onboarding@resend.dev>";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function emailField(label: string, value: string | undefined | null) {
  if (!value) return "";
  return `<p style="margin:0 0 8px;"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
}
