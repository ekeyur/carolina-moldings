import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";
import { ProductLinkGrid } from "@/components/catalog/ProductLinkGrid";
import {
  CATEGORY_SEO,
  categories,
  getCategory,
  productSlug,
  productsForCategory,
} from "@/lib/products";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: id } = await params;
  const category = getCategory(id);
  if (!category) return {};

  const seo = CATEGORY_SEO[id];
  const count = productsForCategory(id).length;
  const title = seo?.title ?? `${category.name} for Gas Meters`;
  const description =
    (seo?.intro ?? category.blurb) + ` ${count} parts, made in the USA.`;

  return pageMetadata({
    title,
    description,
    keywords: seo?.keywords,
    path: `/catalog/category/${id}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: id } = await params;
  const category = getCategory(id);
  if (!category) notFound();

  const seo = CATEGORY_SEO[id];
  const items = productsForCategory(id);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: seo?.title ?? category.name,
          url: `${SITE_URL}/catalog/category/${id}`,
          about: seo?.intro ?? category.blurb,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: items.length,
            itemListElement: items.map((p, i) => ({
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
          { name: "Catalog", path: "/catalog" },
          { name: category.name, path: `/catalog/category/${id}` },
        ]}
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
            <span className="text-white/80">{category.name}</span>
          </nav>
          <h1 className="font-heading font-extrabold text-white text-2xl sm:text-3xl">
            {seo?.title ?? `${category.name} for Gas Meters`}
          </h1>
          <p className="text-white/60 mt-2 text-sm max-w-2xl leading-relaxed">
            {seo?.intro ?? category.blurb}
          </p>
        </div>
      </div>

      {/* Sibling categories */}
      <div className="border-b border-line bg-surface-2">
        <div className="max-w-310 mx-auto px-6 py-3 flex flex-wrap gap-2 text-xs">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/catalog/category/${c.id}`}
              className={`rounded-[3px] border px-3 py-1 font-semibold ${
                c.id === id
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-white text-ink hover:bg-surface"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-310 mx-auto px-6 py-10">
        <ProductLinkGrid products={items} />
      </div>
    </>
  );
}
