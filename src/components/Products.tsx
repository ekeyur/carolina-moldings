"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollAnimate from "./ScrollAnimate";

const meterBrands = [
  {
    name: "American / Honeywell",
    description:
      "Index covers designed specifically for American and Honeywell meters with precision fit and durability.",
    href: "/products/american-index-covers",
    image: "/american-honeywell.png",
    badge: "Popular",
  },
  {
    name: "Rockwell / Sensus",
    description:
      "Comprehensive range of covers for Rockwell and Sensus meters, built to industry specifications.",
    href: "/products/rockwell-index-covers",
    image: "/rockwell-sensus.png",
    badge: null,
  },
  {
    name: "Sprague / Itron",
    description:
      "Durable index covers compatible with Sprague and Itron meter systems.",
    href: "/products/itron-index-covers",
    image: "/sprague-itron.png",
    badge: null,
  },
];

export default function Products() {
  return (
    <section className="relative py-24 lg:py-32 bg-white industrial-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimate>
          <div className="max-w-3xl mb-16">
            <p className="section-subtitle mb-4">Our Products</p>
            <h2 className="section-title mb-6">
              Index Covers for Specific Meter Brands
            </h2>
            <p className="text-lg text-steel-600">
              Browse our precision-engineered index covers and tamper systems
              designed for compatibility with major meter manufacturers.
            </p>
          </div>
        </ScrollAnimate>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meterBrands.map((brand, index) => (
            <ScrollAnimate key={brand.name} delay={index * 100}>
              <Link
                href={brand.href}
                className="group relative bg-steel-50 rounded-lg overflow-hidden border border-steel-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl hover:shadow-steel-200/50 block"
              >
              {/* Image */}
              <div className="relative h-64 bg-linear-to-br from-steel-100 to-steel-200 overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-300"></div>

                {/* Badge */}
                {brand.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-xs font-display font-semibold uppercase tracking-wider rounded-sm z-10">
                    {brand.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-steel-600 text-sm leading-relaxed mb-4">
                  {brand.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary-600 group-hover:gap-3 gap-2 transition-all">
                  View Products
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
            </ScrollAnimate>
          ))}
        </div>

        {/* Additional Product Categories */}
        <ScrollAnimate>
          <div className="mt-16 pt-16 border-t border-steel-200">
            <h3 className="font-display text-2xl font-semibold text-steel-900 mb-8">
              More Product Categories
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
              {
                name: "Tamper System",
                href: "/products/tamper-system",
                icon: "shield",
              },
              {
                name: "Meter Screws",
                href: "/products/meter-screws",
                icon: "tool",
              },
              {
                name: "Paint Covers",
                href: "/products/paint-covers",
                icon: "brush",
              },
              { name: "Miscellaneous", href: "/products/misc", icon: "grid" },
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex items-center gap-4 p-4 bg-steel-50 rounded-lg border border-steel-200 hover:border-primary-300 hover:bg-white transition-all group"
              >
                <div className="w-12 h-12 bg-steel-200 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <svg
                    className="w-6 h-6 text-steel-600 group-hover:text-primary-600 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {category.icon === "shield" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    )}
                    {category.icon === "tool" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                    )}
                    {category.icon === "brush" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    )}
                    {category.icon === "grid" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    )}
                  </svg>
                </div>
                <span className="font-display font-semibold text-steel-900 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </span>
              </Link>
              ))}
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
