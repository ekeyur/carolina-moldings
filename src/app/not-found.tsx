import Link from "next/link";
import { METER_BRANDS } from "@/lib/products";

export default function NotFound() {
  return (
    <div className="bg-surface-2">
      <div className="max-w-310 mx-auto px-6 py-20 sm:py-28 text-center">
        <p className="font-mono-brand text-brand-red text-xs font-semibold tracking-[0.16em] uppercase mb-3">
          404 — Page not found
        </p>
        <h1 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl mb-4">
          We couldn't find that page
        </h1>
        <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto mb-8">
          The link may be old or mistyped. Here's where most people are headed:
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Link
            href="/catalog"
            className="inline-flex items-center rounded-[3px] bg-brand-red hover:bg-red-700 text-white font-semibold px-6 py-2.5 text-sm transition-colors"
          >
            Browse the catalog
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-[3px] border border-line bg-white text-navy hover:bg-surface font-semibold px-6 py-2.5 text-sm transition-colors"
          >
            Contact us
          </Link>
        </div>

        <div className="text-sm">
          <p className="font-mono-brand text-slate-500 text-[11px] font-semibold tracking-widest uppercase mb-3">
            Shop by meter
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {METER_BRANDS.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/catalog/brand/${b.slug}`}
                  className="text-carolina-ink font-semibold hover:underline"
                >
                  {b.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/faq"
                className="text-carolina-ink font-semibold hover:underline"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
