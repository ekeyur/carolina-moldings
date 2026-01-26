import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const americanCovers = [
  {
    model: "A-101",
    description: "Comes with or without Sure Seal preapplied gasket",
    features: [
      "Accepts 2 #1 Snap Seal tamper plugs (sold separately)",
      "Tamper System Kit available",
    ],
    unitsPerCase: 105,
    tamperCompatible: true,
    image: "/products/A-101.png",
  },
  {
    model: "A-101 OS",
    description: "Available with or without Sure Seal preapplied gasket",
    features: ["Does not accommodate Snap Seal tamper plugs"],
    unitsPerCase: 105,
    tamperCompatible: false,
    image: "/products/A-101_OS.png",
  },
  {
    model: "A-103",
    description: "Includes optional Sure Seal preapplied gasket",
    features: [
      "Compatible with 2 #1 Snap Seal tamper plugs (not included)",
      "Tamper System Kit available",
    ],
    unitsPerCase: 54,
    tamperCompatible: true,
    image: "/products/A-103.png",
  },
  {
    model: "A-103 OS",
    description: "Optional Sure Seal preapplied gasket",
    features: ["Incompatible with Snap Seal tamper plugs"],
    unitsPerCase: 54,
    tamperCompatible: false,
    image: "/products/A-103_OS.png",
  },
  {
    model: "A-40G",
    description: "With or without Sure Seal preapplied gasket",
    features: [
      "Accepts 2 Tophat tamper plugs (not included)",
      "Tamper System Kit available",
    ],
    unitsPerCase: 68,
    tamperCompatible: true,
    image: "/products/A-40G.png",
  },
  {
    model: "A-100G",
    description: "Does not use Sure Seal preapplied gasket",
    features: [
      "Compatible with 2 Tophat tamper plugs (not included)",
      "Tamper System Kit available",
    ],
    unitsPerCase: 52,
    tamperCompatible: true,
    image: "/products/A-100G.png",
  },
];

export default function AmericanIndexCoversPage() {
  return (
    <main className="min-h-screen bg-steel-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-steel-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center text-steel-400 hover:text-white mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Products
          </Link>
          <p className="text-primary-500 font-display text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Index Covers
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            American Index Covers
          </h1>
          <p className="text-steel-400 text-lg max-w-2xl">
            High-quality index covers designed for American and Honeywell gas
            meters. Available with optional Sure Seal gaskets and Snap Seal
            tamper system compatibility.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Available Models</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {americanCovers.map((product) => (
              <div
                key={product.model}
                className="group p-6 bg-white rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full aspect-square mb-6 bg-steel-100 rounded-lg flex items-center justify-center overflow-hidden relative">
                  {product.tamperCompatible && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-primary-600 text-white text-xs font-semibold rounded z-10">
                      Tamper Compatible
                    </div>
                  )}
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.model}
                      fill
                      className={`object-contain p-8`}
                    />
                  ) : (
                    <div className="text-center p-4">
                      <div className="w-24 h-24 mx-auto mb-4 bg-steel-200 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-steel-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </div>
                      <p className="text-steel-500 text-sm font-medium">
                        Index Cover
                      </p>
                    </div>
                  )}
                </div>

                <h3 className="font-display text-2xl font-bold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.model}
                </h3>
                <p className="text-steel-600 mb-4">{product.description}</p>

                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-steel-600"
                    >
                      <svg
                        className="w-4 h-4 text-primary-600 mr-2 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-steel-100">
                  <p className="text-sm text-steel-500">
                    <span className="font-semibold text-steel-700">
                      {product.unitsPerCase}
                    </span>{" "}
                    units per case
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
                Sure Seal Gasket Technology
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  Our American index covers are available with the optional Sure
                  Seal preapplied gasket, providing superior weather protection
                  and ensuring a tight seal against the elements.
                </p>
                <p>
                  The Sure Seal gasket is factory-applied for consistent quality
                  and easy installation, reducing field labor and ensuring
                  reliable performance.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Weather-resistant seal",
                  "Factory-applied for consistency",
                  "Reduces installation time",
                  "Compatible with Snap Seal tamper systems",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-steel-700"
                  >
                    <svg
                      className="w-5 h-5 text-primary-600 mr-3 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-steel-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary-100 to-steel-200 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-24 h-24 mx-auto text-primary-600 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <p className="font-display text-xl text-primary-700 uppercase tracking-wider">
                      Sure Seal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 lg:py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-8">
            Related Products
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/products/tamper-system"
              className="group p-6 bg-white rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                Snap Seal Tamper System
              </h3>
              <p className="text-steel-600 text-sm">
                Complete tamper-evident security for your index covers.
              </p>
            </Link>
            <Link
              href="/products/paint-covers"
              className="group p-6 bg-white rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                Paint Covers
              </h3>
              <p className="text-steel-600 text-sm">
                Protect your index covers during painting operations.
              </p>
            </Link>
            <Link
              href="/products/rockwell-index-covers"
              className="group p-6 bg-white rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                Rockwell Index Covers
              </h3>
              <p className="text-steel-600 text-sm">
                Index covers for Rockwell and Sensus meters.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-steel-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Need American Index Covers?
          </h2>
          <p className="text-steel-400 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to place an order or get help selecting the right
            index cover for your American or Honeywell meters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-primary-700 transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/products/full-catalog"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white/30 font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-white/10 transition-all"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
