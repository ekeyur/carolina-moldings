import { NextResponse } from "next/server";
import { z } from "zod";
import { guardFormRequest } from "@/lib/abuse";
import { CONTACT_TO_EMAIL, EMAIL_FROM, emailField, escapeHtml, getResend } from "@/lib/email";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().max(200).optional(),
  email: z.string().email().max(254),
  phone: z.string().max(40).optional(),
  subject: z.string().max(200).optional(),
  message: z.string().trim().min(1).max(5000),
});

export async function POST(request: Request) {
  const guard = await guardFormRequest(request, "contact");
  if (!guard.ok) return guard.response;

  let data;
  try {
    data = schema.parse(guard.body);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form data" }, { status: 400 });
  }

  try {
    const { error } = await getResend().emails.send({
      from: EMAIL_FROM,
      to: CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject: data.subject
        ? `Contact form: ${data.subject}`
        : `New contact form message from ${data.name}`,
      html: `
        <h2>New contact form submission</h2>
        ${emailField("Name", data.name)}
        ${emailField("Company", data.company)}
        ${emailField("Email", data.email)}
        ${emailField("Phone", data.phone)}
        ${emailField("Subject", data.subject)}
        <p style="margin:16px 0 4px;"><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;">${escapeHtml(data.message)}</p>
      `,
    });

    if (error) {
      console.error("[Contact Form] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Contact Form] Error:", err);
    return NextResponse.json({ ok: false, error: "Failed to process request" }, { status: 500 });
  }
}
