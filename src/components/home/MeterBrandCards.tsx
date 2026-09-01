import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const brands = [
  {
    name: "American / Honeywell",
    desc: "Index covers and tamper products for American AL-175, AL-425, and Honeywell meter families.",
    href: "/catalog/brand/american-honeywell",
    image: "/meters/american-honeywell.png",
  },
  {
    name: "Rockwell / Xylem",
    desc: "Full line of index covers, screws, and tamper kits for Rockwell and Xylem meters.",
    href: "/catalog/brand/rockwell-xylem",
    image: "/meters/rockwell-sensus.png",
  },
  {
    name: "Sprague / Itron",
    desc: "Snap Seal™ compatible index covers and accessories for Sprague and Itron meter types.",
    href: "/catalog/brand/sprague-itron",
    image: "/meters/sprague-itron.png",
  },
];

export function MeterBrandCards() {
  return (
    <section className="bg-surface py-16">
      <div className="max-w-310 mx-auto px-6">
        <p className="font-mono-brand text-brand-red text-xs font-semibold tracking-[0.16em] uppercase mb-3">
          Shop by Meter Brand
        </p>
        <h2 className="font-heading font-extrabold text-navy text-2xl sm:text-[2rem] mb-10">
          Find your meter type
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="group bg-white rounded-[6px] border border-line p-6 hover:shadow-[0_8px_24px_rgba(19,41,75,.09)] transition-shadow flex flex-col gap-4"
            >
              <div className="relative h-28 w-full">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy text-lg mb-1">
                  {brand.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {brand.desc}
                </p>
              </div>
              <div className="flex items-center gap-1 text-carolina-ink text-sm font-semibold mt-auto group-hover:gap-2 transition-all">
                Browse products <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
