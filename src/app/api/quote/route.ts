import { NextResponse } from "next/server";
import { z } from "zod";
import { guardFormRequest } from "@/lib/abuse";
import { getCaseQty } from "@/lib/case-qty";
import { EMAIL_FROM, QUOTE_TO_EMAIL, emailField, escapeHtml, getResend } from "@/lib/email";

const itemSchema = z.object({
  id: z.string().max(200),
  name: z.string().max(300),
  partNo: z.string().max(100),
  supplier: z.enum(["carolina", "nuts-and-swivels"]),
  quantity: z.number().int().positive().max(1_000_000),
  image: z.string().max(500).optional(),
  specLine: z.string().max(500).optional(),
});

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().max(200).optional(),
  email: z.string().email().max(254),
  phone: z.string().max(40).optional(),
  message: z.string().max(5000).optional(),
  items: z
    .array(itemSchema)
    .min(1)
    .max(200)
    .refine(
      (items) => items.every((item) => item.quantity % (getCaseQty(item.id) ?? 1) === 0),
      "Case-packed items must be ordered in whole cases",
    ),
});

function formatQty(item: z.infer<typeof itemSchema>) {
  const caseQty = getCaseQty(item.id);
  if (!caseQty) return String(item.quantity);
  const cases = item.quantity / caseQty;
  return `${item.quantity} (${cases} case${cases !== 1 ? "s" : ""} × ${caseQty})`;
}

function itemsTable(items: z.infer<typeof itemSchema>[]) {
  const rows = items
    .map(
      (item) => `
        <tr>
          <td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;">${escapeHtml(item.name)}${item.specLine ? `<br><span style="color:#6b7280;font-size:12px;">${escapeHtml(item.specLine)}</span>` : ""}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;">${escapeHtml(item.partNo)}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #e5e7eb;text-align:right;">${formatQty(item)}</td>
        </tr>`
    )
    .join("");

  return `
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      <thead>
        <tr style="text-align:left;">
          <th style="padding:6px 10px;border-bottom:2px solid #13294b;">Item</th>
          <th style="padding:6px 10px;border-bottom:2px solid #13294b;">Part #</th>
          <th style="padding:6px 10px;border-bottom:2px solid #13294b;text-align:right;">Qty</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

export async function POST(request: Request) {
  const guard = await guardFormRequest(request, "quote");
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
