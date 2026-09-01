import Link from "next/link";
import Image from "next/image";
import { productSlug } from "@/lib/products";
import type { Product } from "@/types/product";

/**
 * Server-rendered, fully crawlable grid of product links.
 * Used on the brand / category landing pages and the flat catalog index.
 */
export function ProductLinkGrid({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((p) => (
        <li key={p.id}>
          <Link
            href={`/catalog/${productSlug(p)}`}
            className="group flex h-full flex-col rounded-[6px] border border-line bg-white overflow-hidden hover:shadow-[0_8px_24px_rgba(19,41,75,.09)] transition-shadow"
          >
            <div className="relative aspect-4/3 w-full bg-surface">
              {p.images?.[0] ? (
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-200"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-400 font-mono-brand text-[10px] tracking-widest">
                  {p.ph}
                </div>
              )}
            </div>
            <div className="p-4 flex flex-col gap-1.5 flex-1">
              <span className="self-start bg-navy text-white font-mono-brand text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px]">
                {p.partNo}
              </span>
              <span className="font-heading font-bold text-navy text-sm leading-snug group-hover:text-carolina transition-colors">
                {p.name}
              </span>
              {p.fits && (
                <span className="text-slate-500 text-[11px] leading-snug">
                  Fits: {p.fits}
                </span>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
