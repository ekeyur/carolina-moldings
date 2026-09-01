import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { AddToQuoteButton } from "@/components/catalog/AddToQuoteButton";
import {
  getCategory,
  getProductBySlug,
  primaryBrandFor,
  productSlug,
  products,
  relatedProducts,
} from "@/lib/products";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: productSlug(p) }));
}

const isIndexCover = (name: string) => /index (cover|box)/i.test(name);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const cover = isIndexCover(product.name);
  const title = product.fits
    ? `${product.name} — fits ${product.fits}`
    : `${product.name} — Part ${product.partNo}`;

  const description =
    (product.desc ||
      `${product.name} (${product.partNo})${
        product.fits ? `, fits ${product.fits}` : ""
      }.`) +
    (cover ? ` Direct replacement index box / index cover.` : "") +
    ` Made in the USA.`;

  const brand = primaryBrandFor(product);
  const category = getCategory(product.cat);
  const image = product.images?.[0];

  return {
    title,
    description,
    keywords: [
      product.name,
      product.partNo,
      `${product.partNo} ${category?.name ?? "gas meter part"}`,
      ...(cover ? [`${product.partNo} index box`, "gas meter index box"] : []),
      ...(brand ? [`${brand.name} ${category?.name ?? "meter parts"}`] : []),
      ...(product.fits ? [`index cover for ${product.fits}`] : []),
    ],
    alternates: { canonical: `/catalog/${slug}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_URL}/catalog/${slug}`,
      images: image ? [{ url: image }] : ["/og.png"],
    },
  };
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-3 text-sm py-2 border-b border-line last:border-0">
      <span className="font-mono-brand text-slate-500 text-[11px] tracking-widest uppercase pt-0.5">
        {label}
      </span>
      <span className="text-ink">{value}</span>
    </div>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategory(product.cat);
  const brand = primaryBrandFor(product);
  const related = relatedProducts(product);
  const image = product.images?.[0];
  const cover = isIndexCover(product.name);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          alternateName: cover ? `${product.partNo} Index Box` : undefined,
          sku: product.partNo,
          mpn: product.partNo,
          description: product.desc || undefined,
          category: category?.name,
          image: image ? `${SITE_URL}${image}` : undefined,
          material: product.material || undefined,
          brand: { "@type": "Brand", name: "Carolina Moldings" },
          manufacturer: { "@type": "Organization", name: SITE_NAME },
          url: `${SITE_URL}/catalog/${slug}`,
          isAccessoryOrSparePartFor: product.fits
            ? { "@type": "Product", name: `${product.fits} gas meters` }
            : undefined,
          offers: {
            "@type": "Offer",
            url: `${SITE_URL}/catalog/${slug}`,
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            priceCurrency: "USD",
            businessFunction: "http://purl.org/goodrelations/v1#Sell",
            seller: { "@id": `${SITE_URL}/#business` },
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
            ...(category
              ? [
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: category.name,
                    item: `${SITE_URL}/catalog/category/${category.id}`,
                  },
                ]
              : []),
            {
              "@type": "ListItem",
              position: category ? 3 : 2,
              name: product.name,
              item: `${SITE_URL}/catalog/${slug}`,
            },
          ],
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-surface-2 border-b border-line">
        <div className="max-w-310 mx-auto px-6 py-3 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <Link href="/catalog" className="hover:text-carolina">
            Catalog
          </Link>
          {category && (
            <>
              <ChevronRight className="h-3 w-3 shrink-0" />
              <Link
                href={`/catalog/category/${category.id}`}
                className="hover:text-carolina"
              >
                {category.name}
              </Link>
            </>
          )}
          {brand && (
            <>
              <ChevronRight className="h-3 w-3 shrink-0" />
              <Link
                href={`/catalog/brand/${brand.slug}`}
                className="hover:text-carolina"
              >
                {brand.name}
              </Link>
            </>
          )}
          <ChevronRight className="h-3 w-3 shrink-0" />
          <span className="text-navy font-medium">{product.name}</span>
        </div>
      </nav>

      <article className="max-w-310 mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Image */}
        <div className="relative aspect-square w-full rounded-[6px] border border-line bg-surface overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-contain p-6"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center text-slate-400 font-mono-brand text-xs tracking-widest">
              {product.ph}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          <p className="font-mono-brand text-carolina-ink text-xs font-semibold tracking-widest uppercase">
            {product.brand || category?.name || "Gas Meter Part"}
          </p>
          <h1 className="font-heading font-extrabold text-navy text-2xl sm:text-3xl leading-tight">
            {product.name}
          </h1>
          <div>
            <span className="bg-navy text-white font-mono-brand text-xs font-semibold px-3 py-1.5 rounded-[3px] tracking-wider">
              {product.partNo}
            </span>
          </div>

          {cover && (
            <p className="text-slate-500 text-sm">
              Also known as the {product.partNo} index box
              {product.fits ? ` for ${product.fits}` : ""}.
            </p>
          )}

          {product.desc && (
            <p className="text-slate-600 text-[15px] leading-relaxed">
              {product.desc}
            </p>
          )}

          {product.tamperCompatible && (
            <p className="flex items-center gap-1.5 text-green text-sm font-semibold">
              <ShieldCheck className="h-4 w-4" />
              Snap Seal™ tamper compatible
            </p>
          )}

          {product.bullets && product.bullets.length > 0 && (
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-ink marker:text-carolina">
              {product.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}

          <div className="border-t border-line pt-4">
            {product.fits && <SpecRow label="Fits" value={product.fits} />}
            {product.material && (
              <SpecRow label="Material" value={product.material} />
            )}
            {product.spec && <SpecRow label="Spec" value={product.spec} />}
            {product.pack && <SpecRow label="Packaged" value={product.pack} />}
            {category && <SpecRow label="Category" value={category.name} />}
            <SpecRow label="Made in" value="USA" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <AddToQuoteButton
              item={{
                id: product.id,
                name: product.name,
                partNo: product.partNo,
                supplier: "carolina",
                image: product.images?.[0],
              }}
            />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[3px] border border-line px-6 py-2 text-sm font-semibold text-navy hover:bg-surface transition-colors"
            >
              Ask about this part
            </Link>
          </div>
        </div>
      </article>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-surface-2 border-t border-line py-12">
          <div className="max-w-310 mx-auto px-6">
            <h2 className="font-heading font-bold text-navy text-xl mb-5">
              Related parts
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/catalog/${productSlug(p)}`}
                    className="block h-full bg-white border border-line rounded-[6px] p-4 hover:shadow-[0_8px_24px_rgba(19,41,75,.09)] transition-shadow"
                  >
                    <div className="relative aspect-4/3 mb-3">
                      {p.images?.[0] ? (
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          sizes="(max-width: 768px) 45vw, 220px"
                          className="object-contain"
                        />
                      ) : (
                        <div className="h-full w-full rounded bg-surface" />
                      )}
                    </div>
                    <p className="font-mono-brand text-[10px] text-slate-500 tracking-wide">
                      {p.partNo}
                    </p>
                    <p className="font-heading font-bold text-navy text-sm leading-snug">
                      {p.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
