import { NextResponse } from "next/server";
import { z } from "zod";
import { CONTACT_TO_EMAIL, EMAIL_FROM, emailField, escapeHtml, getResend } from "@/lib/email";

const schema = z.object({
  name: z.string().min(1),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  let data;
  try {
    data = schema.parse(await request.json());
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
