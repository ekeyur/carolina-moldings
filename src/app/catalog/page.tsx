import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import {
  METER_BRANDS,
  productSlug,
  productsByCategory,
} from "@/lib/products";
import catalogData from "@/data/carolina-products.json";
import type { CatalogData } from "@/types/product";

const data = catalogData as CatalogData;

export const metadata: Metadata = {
  title: "Gas Meter Index Covers, Tamper Seals & Meter Screws",
  description:
    "Gas meter parts made in the USA — index covers (index boxes) for American/Honeywell, Rockwell/Xylem and Sprague/Itron meters, Snap Seal™ tamper plugs, meter screws, and paint covers. Build a quote online.",
  alternates: { canonical: "/catalog" },
};

type SearchParams = { cat?: string; brand?: string; q?: string };

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const groups = productsByCategory();

  return (
    <>
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Catalog", path: "/catalog" },
        ]}
      />

      {/* Page header */}
      <div className="bg-navy py-10">
        <div className="max-w-310 mx-auto px-6">
          <p className="font-mono-brand text-carolina text-xs font-semibold tracking-[0.16em] uppercase mb-2">
            Product Catalog
          </p>
          <h1 className="font-heading font-extrabold text-white text-3xl">
            Gas Meter Index Covers, Tamper Seals &amp; Meter Parts
          </h1>
          <p className="text-white/60 mt-2 text-sm max-w-2xl leading-relaxed">
            All parts made in the USA — index covers (index boxes) for American /
            Honeywell, Rockwell / Xylem and Sprague / Itron meters, Snap Seal™
            tamper plugs, meter screws, paint covers, and gas fittings. Filter by
            meter brand and build a quote in minutes.
          </p>
        </div>
      </div>

      <ProductGrid
        products={data.products}
        categories={data.categories}
        meterBrands={data.meterBrands}
        initialCat={params.cat}
        initialBrand={params.brand}
        initialSearch={params.q}
      />

      {/* Full parts index — grouped, crawlable */}
      <section className="border-t border-line bg-surface-2 py-16">
        <div className="max-w-310 mx-auto px-6">
          <h2 className="font-heading font-extrabold text-navy text-2xl sm:text-[1.75rem] tracking-[-0.01em] mb-3">
            All parts, made in the USA
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mb-12">
            The full parts list by category. Jump to a meter line:{" "}
            {METER_BRANDS.map((b, i) => (
              <span key={b.slug}>
                <Link
                  href={`/catalog/brand/${b.slug}`}
                  className="text-carolina-ink font-semibold hover:underline"
                >
                  {b.name}
                </Link>
                {i < METER_BRANDS.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>

          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map(({ category, items }) => (
              <div key={category.id}>
                <h3 className="font-heading font-bold text-navy text-lg mb-4 pb-2 border-b-2 border-navy/10">
                  <Link
                    href={`/catalog/category/${category.id}`}
                    className="hover:text-carolina transition-colors"
                  >
                    {category.name}
                  </Link>
                </h3>
                <ul className="divide-y divide-line/70">
                  {items.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/catalog/${productSlug(p)}`}
                        className="group flex gap-3.5 py-2.5"
                      >
                        <span className="font-mono-brand text-[11px] font-semibold text-carolina-ink tracking-wide shrink-0 w-16 pt-0.5">
                          {p.partNo}
                        </span>
                        <span className="min-w-0">
                          <span className="block font-heading font-semibold text-navy text-sm leading-snug group-hover:text-carolina transition-colors">
                            {p.name}
                          </span>
                          {p.fits && (
                            <span className="block text-slate-500 text-xs mt-0.5 leading-snug">
                              Fits {p.fits}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
