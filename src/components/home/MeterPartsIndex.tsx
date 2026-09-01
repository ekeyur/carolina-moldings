import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { METER_BRANDS, categories, CATEGORY_SEO } from "@/lib/products";

export function MeterPartsIndex() {
  return (
    <section className="bg-white py-16 border-t border-line">
      <div className="max-w-310 mx-auto px-6">
        <p className="font-mono-brand text-brand-red text-xs font-semibold tracking-[0.16em] uppercase mb-3">
          Gas Meter Products
        </p>
        <h2 className="font-heading font-extrabold text-navy text-2xl sm:text-[2rem] mb-4">
          Gas meter parts we manufacture
        </h2>
        <p className="text-slate-600 text-[15px] leading-relaxed max-w-3xl mb-10">
          Carolina Moldings molds and stocks a full line of gas meter parts in
          Charlotte, North Carolina: replacement <strong>index covers</strong>{" "}
          (also called index boxes), the <strong>Snap Seal™ tamper system</strong>{" "}
          of security seals and plugs, <strong>meter screws</strong> in brass and
          stainless, snap-on <strong>paint covers</strong>, and shop supplies
          like gaskets, caps, and connection plugs. Everything is made in the USA
          and ships same or next day.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {/* By meter line */}
          <div>
            <h3 className="font-heading font-bold text-navy text-lg mb-4">
              By meter line
            </h3>
            <ul className="space-y-4">
              {METER_BRANDS.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/catalog/brand/${b.slug}`}
                    className="group inline-flex items-center gap-1.5 font-heading font-bold text-navy hover:text-carolina transition-colors"
                  >
                    {b.name} index covers &amp; parts
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <p className="text-slate-500 text-sm mt-1">Fits {b.models}.</p>
                </li>
              ))}
            </ul>
          </div>

          {/* By part type */}
          <div>
            <h3 className="font-heading font-bold text-navy text-lg mb-4">
              By part type
            </h3>
            <ul className="space-y-4">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/catalog/category/${c.id}`}
                    className="group inline-flex items-center gap-1.5 font-heading font-bold text-navy hover:text-carolina transition-colors"
                  >
                    {CATEGORY_SEO[c.id]?.title ?? c.name}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <p className="text-slate-500 text-sm mt-1">{c.blurb}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 rounded-[3px] bg-navy hover:bg-navy/90 text-white font-bold px-7 py-3 text-sm transition-colors"
          >
            Browse the full catalog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
