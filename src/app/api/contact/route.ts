import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, company, phone, email, message } =
    await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  try {
    await resend.emails.send({
      from: "Carolina Moldings <noreply@carolinamoldings.com>",
      to: "contact@carolinamoldings.com",
      replyTo: email,
      subject: `Contact Form - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f0f7fd; border-radius: 8px;">
          <h2 style="color: #2e7db8; margin-bottom: 24px;">New Message from Carolina Moldings Website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #475569; font-weight: bold; width: 100px;">Name</td>
              <td style="padding: 8px 0; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #475569; font-weight: bold;">Company</td>
              <td style="padding: 8px 0; color: #1e293b;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #475569; font-weight: bold;">Email</td>
              <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #2e7db8;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #475569; font-weight: bold;">Phone</td>
              <td style="padding: 8px 0; color: #1e293b;">${phone || "Not provided"}</td>
            </tr>

          </table>
          <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 6px; border-left: 4px solid #2e7db8;">
            <p style="color: #475569; font-weight: bold; margin: 0 0 8px;">Message</p>
            <p style="color: #1e293b; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
