import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Faq, type FaqItem } from "@/components/seo/Faq";
import { ProductLinkGrid } from "@/components/catalog/ProductLinkGrid";
import {
  DATALOGGING_100G_PART_IDS,
  productSlug,
  products,
} from "@/lib/products";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Product } from "@/types/product";

const PATH = "/itron-100g-datalogging";
const TITLE = "Itron 100G Datalogging Index Covers & Tamper Seals";
const DESCRIPTION =
  "Carolina Moldings makes index covers and Tophat tamper seals for Itron 100G datalogging gas ERT modules on American, Rockwell and Sprague meters. Made in USA.";

const byId = new Map(products.map((p) => [p.id, p]));
const parts = DATALOGGING_100G_PART_IDS.map((id) => byId.get(id)).filter(
  (p): p is Product => !!p,
);
const covers = parts.filter((p) => p.cat === "index");

/** Rows for the cross-reference table: which cover goes on which meter. */
const COVER_ROWS: { id: string; meter: string }[] = [
  { id: "a100g", meter: "American / Elster residential" },
  { id: "r100g", meter: "Rockwell / Sensus residential" },
  { id: "i100g", meter: "Sprague / Itron residential" },
];

const faqs: FaqItem[] = [
  {
    q: "Who makes replacement index covers for the Itron 100G datalogging ERT?",
    a: `${SITE_NAME} of Charlotte, North Carolina molds replacement index covers for meters fitted with Itron 100G datalogging gas ERT modules: the 100G-A (cross-reference MLD-0200-002) for American / Elster meters, the 100G-R (MLD-0200-006) for Rockwell / Sensus meters, and the 100G-I (MLD-0200-014) for Sprague / Itron meters.`,
  },
  {
    q: "Which 100G datalogging index cover fits my meter?",
    a: "Match the cover to the meter make. Use the 100G-A on American / Elster residential meters, the 100G-R on Rockwell / Sensus residential meters, and the 100G-I on Sprague / Itron residential meters. The 100G-A and 100G-R also fit Itron 500G and 550G endpoints; the 100G-I also fits the 500G.",
  },
  {
    q: "What tamper seal is used with the Itron 100G datalogging ERT?",
    a: "The Tophat security seal (cross-references OPT-0002-003, OPT-0002-005 and PGX00003706T) is the tamper seal used with Itron gas ERT and telemetry modules. Each 100G-A, 100G-R and 100G-I index cover takes two Tophat seals, and a security system kit is available.",
  },
  {
    q: "Are the 100G datalogging covers direct replacements?",
    a: "Yes. Each cover installs on the original meter and ERT endpoint using the existing screws. They are molded from UV-stable polycarbonate that stays clear outdoors.",
  },
  {
    q: "How do I order Itron 100G datalogging covers and seals?",
    a: "Add the parts to your quote list and submit it, or call 1-800-523-7475. We reply with case pricing, usually within one business day, and most stocked ERT parts ship the same or next business day.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Itron 100G datalogging",
    "Itron 100G datalogging index cover",
    "Itron 100G DL",
    "Itron 100G DLN",
    "100G datalogging ERT",
    "100G datalogging tamper seal",
    "Itron 100G ERT cover",
    "MLD-0200-002",
    "MLD-0200-006",
    "MLD-0200-014",
    "OPT-0002-003",
    "OPT-0002-005",
    "PGX00003706T",
  ],
});

export default function Itron100gDataloggingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: TITLE,
          url: `${SITE_URL}${PATH}`,
          description: DESCRIPTION,
          about: {
            "@type": "Product",
            name: "Itron 100G datalogging gas ERT",
          },
          isPartOf: { "@id": `${SITE_URL}/#website` },
          publisher: { "@id": `${SITE_URL}/#business` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: parts.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: `${SITE_URL}/catalog/${productSlug(p)}`,
            })),
          },
        }}
      />
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Itron ERT Covers", path: "/itron-ert-covers" },
          { name: "Itron 100G Datalogging", path: PATH },
        ]}
      />

      {/* Header */}
      <div className="bg-navy py-10">
        <div className="max-w-310 mx-auto px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs text-white/50 mb-3"
          >
            <Link href="/itron-ert-covers" className="hover:text-carolina">
              Itron ERT Covers
            </Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-white/80">Itron 100G Datalogging</span>
          </nav>
          <h1 className="font-heading font-extrabold text-white text-2xl sm:text-3xl">
            Itron 100G Datalogging Index Covers &amp; Tamper Seals
          </h1>
          {/* Direct, quotable answer first — this is the passage search and AI summaries lift. */}
          <p className="text-white/70 mt-3 text-[15px] max-w-3xl leading-relaxed">
            Carolina Moldings makes replacement index covers and Tophat tamper
            seals for gas meters fitted with Itron 100G datalogging ERT modules.
            The 100G-A fits American / Elster meters, the 100G-R fits Rockwell /
            Sensus meters, and the 100G-I fits Sprague / Itron meters. All of
            them are molded in Charlotte, North Carolina and ship the same or
            next business day.
          </p>
        </div>
      </div>

      <div className="max-w-310 mx-auto px-6 py-10 space-y-12">
        <section>
          <h2 className="font-heading font-bold text-navy text-xl mb-4">
            Itron 100G datalogging cover cross-reference
          </h2>
          <div className="overflow-x-auto rounded-[6px] border border-line">
            <table className="w-full text-sm text-left">
              <thead className="bg-surface-2 text-navy">
                <tr>
                  <th className="px-4 py-3 font-semibold">Meter</th>
                  <th className="px-4 py-3 font-semibold">
                    Carolina Moldings part
                  </th>
                  <th className="px-4 py-3 font-semibold">Cross-reference</th>
                  <th className="px-4 py-3 font-semibold">Fits endpoints</th>
                  <th className="px-4 py-3 font-semibold">Pack</th>
                </tr>
              </thead>
              <tbody>
                {COVER_ROWS.map(({ id, meter }) => {
                  const p = byId.get(id);
                  if (!p) return null;
                  return (
                    <tr key={id} className="border-t border-line">
                      <td className="px-4 py-3 text-ink">{meter}</td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/catalog/${productSlug(p)}`}
                          className="font-semibold text-carolina-ink hover:underline"
                        >
                          {p.partNo}
                        </Link>
                      </td>
                      <td className="px-4 py-3 font-mono-brand text-xs">
                        {p.altPartNos?.join(", ")}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {p.fits?.split(" — ")[0]}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{p.pack}</td>
                    </tr>
                  );
                })}
                {byId.get("tophat") && (
                  <tr className="border-t border-line">
                    <td className="px-4 py-3 text-ink">
                      Tamper seal (2 per cover)
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/catalog/${productSlug(byId.get("tophat")!)}`}
                        className="font-semibold text-carolina-ink hover:underline"
                      >
                        Tophat
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-mono-brand text-xs">
                      {byId.get("tophat")!.altPartNos?.join(", ")}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      Itron gas ERT and telemetry modules
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {byId.get("tophat")!.pack}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-navy text-xl mb-5">
            100G datalogging index covers
          </h2>
          <ProductLinkGrid products={covers} />
        </section>

        <section>
          <h2 className="font-heading font-bold text-navy text-xl mb-5">
            Tamper seals &amp; paint covers
          </h2>
          <ProductLinkGrid products={parts.filter((p) => p.cat !== "index")} />
        </section>

        <p className="text-sm text-slate-600">
          Looking for 500G or 550G parts, ERT protectors or screws?{" "}
          <Link
            href="/itron-ert-covers"
            className="font-semibold text-carolina-ink hover:underline"
          >
            See all Itron ERT covers &amp; parts →
          </Link>
        </p>
      </div>

      <section className="border-t border-line bg-surface-2 py-14">
        <div className="max-w-310 mx-auto px-6">
          <Faq items={faqs} heading="Itron 100G datalogging — FAQ" />
          <p className="text-slate-400 text-xs mt-8 max-w-3xl">
            Itron and ERT are trademarks of Itron, Inc. Carolina Moldings is not
            affiliated with Itron; names are used only to identify compatible
            meters and endpoints.
          </p>
        </div>
      </section>
    </>
  );
}
