import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Faq, type FaqItem } from "@/components/seo/Faq";
import { ProductLinkGrid } from "@/components/catalog/ProductLinkGrid";
import {
  METER_BRANDS,
  getMeterBrand,
  productsForBrand,
  type MeterBrand,
} from "@/lib/products";
import type { Product } from "@/types/product";
import { SITE_NAME, SITE_URL } from "@/lib/site";

function brandFaqs(brand: MeterBrand, items: Product[]): FaqItem[] {
  const covers = items
    .filter((p) => p.cat === "index")
    .map((p) => p.partNo);
  return [
    {
      q: `Which index covers fit ${brand.name} meters?`,
      a:
        `Carolina Moldings makes ${items.length} parts for ${brand.models}` +
        (covers.length
          ? `, including index covers ${covers.join(", ")}`
          : "") +
        `. Every part is molded from UV-stable polycarbonate in the USA and is a direct replacement for the OEM part.`,
    },
    {
      q: `Are ${brand.name} index covers also called index boxes?`,
      a: `Yes — “index cover” and “index box” are the same part. Our ${brand.name} covers install on the original meter with no modification, come bare or with a pre-applied Sure Seal™ gasket, and accept Snap Seal™ tamper plugs.`,
    },
    {
      q: `How do I get pricing and lead time for ${brand.name} parts?`,
      a: `Add the parts to your quote list and submit it — we reply with pricing, usually within one business day. Most stocked ${brand.name} items ship the same or next business day.`,
    },
  ];
}

export const dynamicParams = false;

export function generateStaticParams() {
  return METER_BRANDS.map((b) => ({ brand: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = getMeterBrand(slug);
  if (!brand) return {};

  const count = productsForBrand(brand).length;
  const title = `${brand.name} Gas Meter Index Covers, Screws & Tamper Seals`;
  const description = `${count} made-in-USA parts for ${brand.models} — index covers (index boxes), Snap Seal™ tamper seals, meter screws, and paint covers. Ships same or next day.`;

  return {
    title,
    description,
    alternates: { canonical: `/catalog/brand/${slug}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_URL}/catalog/brand/${slug}`,
      images: ["/og.png"],
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: slug } = await params;
  const brand = getMeterBrand(slug);
  if (!brand) notFound();

  const items = productsForBrand(brand);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${brand.name} Gas Meter Parts`,
          url: `${SITE_URL}/catalog/brand/${slug}`,
          about: `Replacement index covers, tamper seals and screws for ${brand.models}.`,
          isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
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
              name: brand.name,
              item: `${SITE_URL}/catalog/brand/${slug}`,
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
            <span className="text-white/80">{brand.name}</span>
          </nav>
          <h1 className="font-heading font-extrabold text-white text-2xl sm:text-3xl">
            {brand.name} Gas Meter Index Covers &amp; Parts
          </h1>
          <p className="text-white/60 mt-2 text-sm max-w-2xl leading-relaxed">
            {items.length} parts for {brand.models}. Index covers (index boxes),
            Snap Seal™ tamper seals, meter screws, and paint covers — molded in
            the USA and shipped same or next day.
          </p>
        </div>
      </div>

      {/* Other brands */}
      <div className="border-b border-line bg-surface-2">
        <div className="max-w-310 mx-auto px-6 py-3 flex flex-wrap gap-2 text-xs">
          <span className="text-slate-500 font-semibold py-1">Other meters:</span>
          {METER_BRANDS.filter((b) => b.slug !== slug).map((b) => (
            <Link
              key={b.slug}
              href={`/catalog/brand/${b.slug}`}
              className="rounded-[3px] border border-line bg-white px-3 py-1 font-semibold text-ink hover:bg-surface"
            >
              {b.name}
            </Link>
          ))}
          <Link
            href="/catalog"
            className="rounded-[3px] border border-line bg-white px-3 py-1 font-semibold text-ink hover:bg-surface"
          >
            All parts
          </Link>
        </div>
      </div>

      <div className="max-w-310 mx-auto px-6 py-10">
        <ProductLinkGrid products={items} />
      </div>

      <section className="border-t border-line bg-surface-2 py-14">
        <div className="max-w-310 mx-auto px-6">
          <Faq
            items={brandFaqs(brand, items)}
            heading={`${brand.name} meter parts — FAQ`}
          />
        </div>
      </section>
    </>
  );
}
