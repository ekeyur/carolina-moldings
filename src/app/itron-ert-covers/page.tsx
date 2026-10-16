import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Faq, type FaqItem } from "@/components/seo/Faq";
import { ProductLinkGrid } from "@/components/catalog/ProductLinkGrid";
import { categories, ertProducts, productSlug } from "@/lib/products";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const PATH = "/itron-ert-covers";
const TITLE = "Itron ERT Covers — 100G / 500G / 550G Index Covers & Gaskets";
const DESCRIPTION =
  "Replacement Itron ERT covers for American, Rockwell and Itron meters — 100G-A, 100G-R and 100G-I index covers, ERT cork gaskets, paint covers and security seals. Made in the USA, ships same or next day.";

const SECTION_TITLES: Record<string, string> = {
  index: "Itron ERT index covers",
  misc: "ERT gaskets & protectors",
  paint: "ERT paint covers",
  tamper: "ERT security seals",
  screws: "ERT cover screws",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Itron ERT covers",
    "Itron ERT cover",
    "ERT index cover",
    "ERT meter cover",
    "Itron 100G cover",
    "Itron 500G cover",
    "Itron 550G cover",
    "100G ERT index cover",
    "ERT cork gasket",
    "commercial ERT protector",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/og.png"],
  },
};

const faqs: FaqItem[] = [
  {
    q: "Which Itron ERT covers do you make?",
    a: "We mold index covers for Itron 100G, 500G and 550G ERT endpoints on three meter lines: the 100G-A for American meters, the 100G-R for Rockwell residential meters, and the 100G-I for Itron meters. We also make matching ERT cork gaskets, paint covers, the CEP commercial ERT protector, and the Tophat security seal, which fits Itron ERT covers.",
  },
  {
    q: "Do your ERT covers fit without modifying the meter?",
    a: "Yes. Each cover is a direct replacement that installs on the original meter and ERT endpoint using the existing screws. Match the cover to the meter make (American, Rockwell or Itron) and the endpoint (100G, 500G or 550G).",
  },
  {
    q: "What are your ERT covers made of?",
    a: "UV-stable polycarbonate, molded at our plant in Charlotte, North Carolina. They are clear, impact-resistant and hold up to years of outdoor exposure.",
  },
  {
    q: "How do I order Itron ERT covers in bulk?",
    a: "Add the covers you need to your quote list and submit it. We reply with case pricing, usually within one business day, and most stocked ERT parts ship the same or next business day.",
  },
];

export default function ItronErtCoversPage() {
  const items = ertProducts();
  const groups = categories
    .map((c) => ({ category: c, items: items.filter((p) => p.cat === c.id) }))
    .filter((g) => g.items.length > 0)
    // Covers first — they're what people searching this want.
    .sort((a, b) =>
      a.category.id === "index" ? -1 : b.category.id === "index" ? 1 : 0,
    );

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Itron ERT Covers",
          url: `${SITE_URL}${PATH}`,
          about:
            "Replacement index covers, gaskets, paint covers and security seals for Itron ERT endpoints.",
          isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: items.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: `${SITE_URL}/catalog/${productSlug(p)}`,
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Catalog",
              item: `${SITE_URL}/catalog`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Itron ERT Covers",
              item: `${SITE_URL}${PATH}`,
            },
          ],
        }}
      />

      {/* Header */}
      <div className="bg-navy py-10">
        <div className="max-w-310 mx-auto px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs text-white/50 mb-3"
          >
            <Link href="/catalog" className="hover:text-carolina">
              Catalog
            </Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-white/80">Itron ERT Covers</span>
          </nav>
          <h1 className="font-heading font-extrabold text-white text-2xl sm:text-3xl">
            Itron ERT Covers
          </h1>
          <p className="text-white/60 mt-2 text-sm max-w-2xl leading-relaxed">
            Replacement index covers for Itron 100G, 500G and 550G ERT
            endpoints on American, Rockwell and Itron gas meters, plus the
            gaskets, paint covers and security seals that go with them. Molded
            in the USA and shipped same or next day.
          </p>
        </div>
      </div>

      <div className="max-w-310 mx-auto px-6 py-10 space-y-12">
        {groups.map(({ category, items }) => (
          <section key={category.id}>
            <h2 className="font-heading font-bold text-navy text-xl mb-5">
              {SECTION_TITLES[category.id] ?? category.name}
            </h2>
            <ProductLinkGrid products={items} />
          </section>
        ))}
      </div>

      <section className="border-t border-line bg-surface-2 py-14">
        <div className="max-w-310 mx-auto px-6">
          <Faq items={faqs} heading="Itron ERT covers — FAQ" />
          <p className="text-slate-400 text-xs mt-8 max-w-3xl">
            Itron and ERT are trademarks of Itron, Inc. Carolina Moldings is
            not affiliated with Itron; names are used only to identify
            compatible meters and endpoints.
          </p>
        </div>
      </section>
    </>
  );
}
