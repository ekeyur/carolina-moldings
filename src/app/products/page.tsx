import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gas Meter Products Catalog | Index Covers & Tamper Plugs | Carolina Moldings",
  description:
    "Browse our complete catalog of gas meter index covers, tamper plugs, Snap Seal tamper systems, meter screws, and accessories. Quality products for American, Rockwell, and Itron meters.",
  keywords:
    "gas meter products catalog, index covers, tamper plugs, Snap Seal, tamper system, meter screws, paint covers, utility meter accessories",
};

const products = [
  {
    category: "Index Covers",
    items: [
      {
        name: "American / Honeywell Index Covers",
        href: "/products/american-index-covers",
        description: "Precision-fit covers for American and Honeywell meters",
        image: "/american-honeywell.png",
      },
      {
        name: "Rockwell / Sensus Index Covers",
        href: "/products/rockwell-index-covers",
        description: "Durable covers for Rockwell and Sensus meters",
        image: "/rockwell-sensus.png",
      },
      {
        name: "Sprague / Itron Index Covers",
        href: "/products/itron-index-covers",
        description: "Quality covers for Sprague and Itron meters",
        image: "/sprague-itron.png",
      },
    ],
  },
  {
    category: "Security Products",
    items: [
      {
        name: "Tamper System",
        href: "/products/tamper-system",
        description: "Snap Seal™ tamper-evident security systems",
        image: undefined,
      },
      {
        name: "Meter Screws",
        href: "/products/meter-screws",
        description: "Security screws and fasteners",
        image: undefined,
      },
    ],
  },
  {
    category: "Accessories",
    items: [
      {
        name: "Paint Covers",
        href: "/products/paint-covers",
        description: "Protective covers for meter painting",
        image: undefined,
      },
      {
        name: "Miscellaneous",
        href: "/products/misc",
        description: "Additional meter accessories and parts",
        image: undefined,
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-steel-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-steel-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-500 font-display text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Our Products
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Full Product Catalog
          </h1>
          <p className="text-steel-400 text-lg max-w-2xl">
            Browse our complete range of gas meter index covers, tamper systems,
            and accessories. Quality products trusted by utilities nationwide
            since 1975.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((category) => (
            <div key={category.category} className="mb-16 last:mb-0">
              <h2 className="font-display text-2xl font-bold text-steel-900 mb-8 pb-4 border-b border-steel-200">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group p-6 bg-white rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 mb-4 bg-steel-100 rounded-lg flex items-center justify-center group-hover:bg-primary-50 transition-colors overflow-hidden relative">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="56px"
                          className="object-contain p-1 transition-transform group-hover:scale-110"
                        />
                      ) : (
                        <svg
                          className="w-6 h-6 text-steel-600 group-hover:text-primary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-steel-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary-600">
                      View Products
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* PDF Download */}
          <div className="mt-16 p-8 bg-steel-900 rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Download Our Complete Catalog
                </h3>
                <p className="text-steel-400">
                  Get our full product catalog in PDF format for offline
                  reference.
                </p>
              </div>
              <a
                href="/CMI-Catalog-2023.pdf"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25"
              >
                Download PDF
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
