import type { Metadata } from "next";
import Link from "next/link";
import { Faq, type FaqItem } from "@/components/seo/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gas Meter Parts FAQ — Index Covers, Snap Seal™ & Shipping",
  description:
    "Answers about Carolina Moldings gas meter parts: index cover vs. index box, which meters our parts fit, Snap Seal™ tamper seals, materials, shipping times, and how to get pricing.",
  alternates: { canonical: "/faq" },
};

const faqs: FaqItem[] = [
  {
    q: "What is the difference between a gas meter index cover and an index box?",
    a: "Nothing — they're two names for the same part. The clear polycarbonate housing that protects the meter's register and dials is called an index cover by some utilities and an index box by others. Carolina Moldings uses “index cover,” and our part numbers cross-reference to both terms.",
  },
  {
    q: "Which gas meters do your parts fit?",
    a: "We make index covers, tamper seals, meter screws, and paint covers for the three major diaphragm-meter families: American / Honeywell (AL-175, AL-425, AL-800, 35B–500B, 40G, 100G), Rockwell / Xylem (150, 415, R-750–R5000, 40G, 100G), and Sprague / Itron (175–400 and 40G / 100G endpoints). Each product page lists the exact meters it fits.",
  },
  {
    q: "Are your index covers a direct replacement for the OEM part?",
    a: "Yes. Our index covers are dimensional replacements that install on the original meter with no modification, available bare or with a pre-applied Sure Seal™ gasket, and are ready to accept Snap Seal™ tamper plugs.",
  },
  {
    q: "What is the Snap Seal™ tamper system?",
    a: "Snap Seal™ is our tamper-evident sealing system: a snap-on seal or security cup locks over the meter connection and can't be removed without visibly breaking. It's color-coded and sequentially numbered for inventory control, and installs by hand with no tools — “you can't steal from Snap Seal.”",
  },
  {
    q: "What material are the index covers made from?",
    a: "Prime UV-stabilized polycarbonate. It resists hazing, yellowing, and impact through years of outdoor exposure on the meter set.",
  },
  {
    q: "Are Carolina Moldings parts made in the USA?",
    a: "Yes. Every part is molded and assembled at our facility in Charlotte, North Carolina, and hand-inspected before it ships. We have been family owned and operated since 1975.",
  },
  {
    q: "How fast do orders ship?",
    a: "Most stocked items ship the same or next business day so field crews aren't left waiting. Lead time on non-stock or custom parts is quoted with your order.",
  },
  {
    q: "How do I get pricing?",
    a: "Add the parts you need to your quote list and submit it — we reply with pricing, typically within one business day. You can also call 1-800-523-7475, Monday–Friday, 9am–3pm EST.",
  },
  {
    q: "Do you make custom or private-label parts?",
    a: "Yes. If we don't already stock what you need, we can design and mold a part to your sample or specification. Contact us with a drawing or a physical sample to start.",
  },
  {
    q: "Which meter screws do I need for an index cover?",
    a: "It depends on the meter and cover — thread size and head type vary by family. Each index cover page lists the compatible screw part numbers, and our team can confirm the right fastener for your meter.",
  },
  {
    q: "Can I still get parts for older Rockwell and Sprague meters?",
    a: "Yes. We continue to mold index covers and accessories for legacy Rockwell and Sprague meters that OEMs no longer support, including slant-face and short-screw variants.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "FAQ",
              item: `${SITE_URL}/faq`,
            },
          ],
        }}
      />

      <div className="bg-navy py-14 md:py-20">
        <div className="max-w-310 mx-auto px-6">
          <p className="font-mono-brand text-carolina text-xs font-semibold tracking-[0.16em] uppercase mb-4">
            Frequently Asked Questions
          </p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-[2.875rem] leading-[1.05] tracking-[-0.02em] mb-5">
            Gas meter parts, answered
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl">
            Common questions about our index covers, Snap Seal™ tamper system,
            meter screws, materials, and how to order. Still stuck?{" "}
            <Link href="/contact" className="text-carolina hover:underline">
              Talk to a real person
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-surface-2 py-14">
        <div className="max-w-310 mx-auto px-6">
          <Faq items={faqs} />

          <div className="mt-12 rounded-[6px] border border-line bg-white p-6 sm:p-8">
            <h2 className="font-heading font-bold text-navy text-xl mb-2">
              Didn't find your answer?
            </h2>
            <p className="text-slate-600 text-sm mb-5 max-w-xl">
              Call 1-800-523-7475 (Mon–Fri, 9am–3pm EST) or send us the meter
              you're working on and we'll point you to the right part.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[3px] bg-brand-red hover:bg-red-700 text-white font-semibold px-6 py-2.5 text-sm transition-colors"
              >
                Contact us
              </Link>
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center rounded-[3px] border border-line text-navy hover:bg-surface font-semibold px-6 py-2.5 text-sm transition-colors"
              >
                Browse the catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
