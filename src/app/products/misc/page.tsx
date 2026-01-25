import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const miscProducts = [
  {
    model: "CEP",
    name: "Commercial ERT Protector",
    description:
      "Protect the wriggler of your meter before anything bad happens. This commercial ERT protector device provides essential protection for your meter components.",
    category: "Protection",
  },
  {
    model: "IDC",
    name: "Instrument Drive Cover",
    description:
      "Protective cover that safeguards the wriggler of your meter from damage and environmental factors.",
    category: "Protection",
  },
  {
    model: "M-110-OS",
    name: "Mercury Instrument Drive Cover",
    description:
      "Specialized instrument drive cover designed for Mercury meters, providing reliable protection.",
    category: "Protection",
  },
  {
    model: "RV 250",
    name: "Regulator Vent",
    description:
      "Screen-protected regulator vent designed to prevent bugs and debris from entering and compromising meter interiors.",
    category: "Ventilation",
  },
  {
    model: "Nuts & Swivels",
    name: "Nuts and Swivels",
    description:
      "Complete selection of nut and swivel combinations including insulated and offset options for various meter configurations.",
    category: "Hardware",
  },
];

export default function MiscPage() {
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
            Accessories
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Miscellaneous Products
          </h1>
          <p className="text-steel-400 text-lg max-w-2xl">
            Additional gas meter accessories including ERT protectors,
            instrument drive covers, regulator vents, and hardware components.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miscProducts.map((product) => (
              <div
                key={product.model}
                className="group p-6 bg-white rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full aspect-video mb-6 bg-steel-100 rounded-lg flex items-center justify-center overflow-hidden relative">
                  <div className="absolute top-3 right-3 px-2 py-1 bg-steel-700 text-white text-xs font-semibold rounded">
                    {product.category}
                  </div>
                  <div className="text-center p-4">
                    <div className="w-20 h-20 mx-auto mb-4 bg-steel-200 rounded-lg flex items-center justify-center">
                      {product.category === "Protection" ? (
                        <svg
                          className="w-10 h-10 text-steel-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      ) : product.category === "Ventilation" ? (
                        <svg
                          className="w-10 h-10 text-steel-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-10 h-10 text-steel-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                    </div>
                    <p className="text-steel-500 text-sm font-medium">
                      {product.category}
                    </p>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                    {product.model}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-steel-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-steel-600 text-sm leading-relaxed">
                  {product.description}
                </p>
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
                Complete Meter Accessories
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  Beyond our core index covers and tamper systems, we offer a
                  full range of accessories to support your gas meter
                  maintenance and installation needs.
                </p>
                <p>
                  From protective covers that safeguard sensitive meter
                  components to hardware and ventilation solutions, we have the
                  parts you need to keep your meters operating reliably.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "ERT and instrument drive protection",
                  "Screen-protected ventilation",
                  "Complete hardware selection",
                  "Custom solutions available",
                ].map((feature) => (
                  <li key={feature} className="flex items-center text-steel-700">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0"
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
                <div className="absolute inset-0 bg-gradient-to-br from-steel-200 to-steel-300 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-24 h-24 mx-auto text-steel-500 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                    <p className="font-display text-xl text-steel-600 uppercase tracking-wider">
                      Accessories
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
              href="/products/meter-screws"
              className="group p-6 bg-white rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                Meter Screws
              </h3>
              <p className="text-steel-600 text-sm">
                Complete selection of case and hand hole screws.
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-steel-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Need Accessories?
          </h2>
          <p className="text-steel-400 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to place an order or inquire about additional
            accessories for your gas meters.
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
