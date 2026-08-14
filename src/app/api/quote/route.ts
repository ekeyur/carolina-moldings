import { NextResponse } from "next/server";
import { z } from "zod";
import { EMAIL_FROM, QUOTE_TO_EMAIL, emailField, escapeHtml, getResend } from "@/lib/email";

const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  partNo: z.string(),
  supplier: z.enum(["carolina", "nuts-and-swivels"]),
  quantity: z.number(),
  image: z.string().optional(),
  specLine: z.string().optional(),
});

const schema = z.object({
  name: z.string().min(1),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().optional(),
  items: z.array(itemSchema).min(1),
});

function itemsTable(items: z.infer<typeof itemSchema>[]) {
  const rows = items
    .map(
      (item) => `
        <tr>
          <td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;">${escapeHtml(item.name)}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;">${escapeHtml(item.partNo)}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;">${escapeHtml(item.specLine || "")}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;text-align:right;">${item.quantity}</td>
        </tr>`
    )
    .join("");

  return `
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      <thead>
        <tr style="text-align:left;">
          <th style="padding:6px 10px;border-bottom:2px solid #13294b;">Item</th>
          <th style="padding:6px 10px;border-bottom:2px solid #13294b;">Part #</th>
          <th style="padding:6px 10px;border-bottom:2px solid #13294b;">Spec</th>
          <th style="padding:6px 10px;border-bottom:2px solid #13294b;text-align:right;">Qty</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

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
      to: QUOTE_TO_EMAIL,
      replyTo: data.email,
      subject: `New quote request from ${data.name} (${data.items.length} item${data.items.length !== 1 ? "s" : ""})`,
      html: `
        <h2>New quote request</h2>
        ${emailField("Name", data.name)}
        ${emailField("Company", data.company)}
        ${emailField("Email", data.email)}
        ${emailField("Phone", data.phone)}
        ${data.message ? `<p style="margin:16px 0 4px;"><strong>Message:</strong></p><p style="white-space:pre-wrap;">${escapeHtml(data.message)}</p>` : ""}
        <p style="margin:16px 0 4px;"><strong>Items:</strong></p>
        ${itemsTable(data.items)}
      `,
    });

    if (error) {
      console.error("[Quote Request] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Failed to send request" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Quote Request] Error:", err);
    return NextResponse.json({ ok: false, error: "Failed to process request" }, { status: 500 });
  }
}
