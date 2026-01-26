import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gas Meter Index Covers | American, Rockwell & Itron | Carolina Moldings",
  description:
    "High-quality gas meter index covers for American, Rockwell, Itron, and Sprague meters. Compatible with Snap Seal tamper plugs and Sure Seal gaskets. Trusted by utilities since 1975.",
  keywords:
    "gas meter index covers, index covers, American index covers, Rockwell index covers, Itron index covers, tamper plug compatible, Sure Seal gasket, Snap Seal compatible",
};

const indexCoverCategories = [
  {
    name: "American / Honeywell Index Covers",
    href: "/products/american-index-covers",
    description:
      "Index covers for American and Honeywell gas meters. Available with Sure Seal gaskets and Snap Seal tamper compatibility.",
    products: ["A-101", "A-101 OS", "A-103", "A-103 OS", "A-40G", "A-100G"],
    color: "primary",
    image: "/american-honeywell.png",
  },
  {
    name: "Rockwell / Sensus Index Covers",
    href: "/products/rockwell-index-covers",
    description:
      "Premium covers for Rockwell and Sensus meters. Multiple models with tamper system options.",
    products: ["R-103", "R-104", "R-105", "R-40G", "R-100G"],
    color: "steel",
    image: "/rockwell-sensus.png",
  },
  {
    name: "Itron / Sprague Index Covers",
    href: "/products/itron-index-covers",
    description:
      "Quality covers for Itron and Sprague meters, plus endpoint covers for various meter types.",
    products: ["I-100G", "S-105", "Endpoint Covers"],
    color: "primary",
    image: "/sprague-itron.png",
  },
];

const features = [
  {
    title: "Sure Seal Gasket",
    description:
      "Optional preapplied gasket for superior weather protection and consistent installation.",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
  {
    title: "Tamper Compatible",
    description:
      "Most covers accept Snap Seal or Tophat tamper plugs for security and theft prevention.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Precision Molded",
    description:
      "Each cover is manufactured to exact specifications for a perfect fit on your meters.",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
  {
    title: "Bulk Quantities",
    description:
      "Available in case quantities from 45 to 260 units depending on model.",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
];

export default function IndexCoversPage() {
  return (
    <main className="min-h-screen bg-steel-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-steel-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-steel-600/20 rounded-full blur-3xl"></div>
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
            Core Products
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Index Covers
          </h1>
          <p className="text-steel-400 text-lg max-w-2xl">
            High-quality gas meter index covers for all major meter brands.
            Available with optional Sure Seal gaskets and Snap Seal tamper
            system compatibility.
          </p>
        </div>
      </section>

      {/* Index Cover Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {indexCoverCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative bg-white rounded-xl border border-steel-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div
                    className={`w-24 h-24 mb-6 rounded-lg flex items-center justify-center ${
                      category.color === "primary"
                        ? "bg-primary-50"
                        : "bg-steel-50"
                    }`}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  <h2 className="font-display text-2xl font-bold text-steel-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-steel-600 mb-6">{category.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.products.map((product) => (
                      <span
                        key={product}
                        className="px-2 py-1 bg-steel-100 text-steel-600 text-xs font-medium rounded"
                      >
                        {product}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary-600 font-semibold">
                    View Products
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className={`h-1 w-full ${
                    category.color === "primary"
                      ? "bg-primary-600"
                      : "bg-steel-600"
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-4">
              Why Choose Our Index Covers?
            </h2>
            <p className="text-steel-600 max-w-2xl mx-auto">
              Carolina Moldings has been manufacturing quality gas meter
              components since 1975. Our index covers are trusted by utilities
              nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-steel-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-steel-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Guide */}
      <section className="py-16 lg:py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
                Find the Right Cover
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  Not sure which index cover you need? Our covers are organized
                  by meter manufacturer to make selection easy:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span>
                      <strong className="text-steel-900">A-Series</strong> for
                      American and Honeywell meters
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span>
                      <strong className="text-steel-900">R-Series</strong> for
                      Rockwell and Sensus meters
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span>
                      <strong className="text-steel-900">
                        I-Series & S-Series
                      </strong>{" "}
                      for Itron and Sprague meters
                    </span>
                  </li>
                </ul>
                <p>
                  Need help identifying your meter type? Contact us and our team
                  will help you find the perfect match.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center mt-6 px-6 py-3 bg-primary-600 text-white font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-primary-700 transition-all"
              >
                Get Help
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-steel-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary-100 to-steel-200 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-32 h-32 mx-auto text-primary-600 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0.75}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                    <p className="font-display text-2xl text-primary-700 uppercase tracking-wider">
                      Index Covers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-8">
            Related Products
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/products/tamper-system"
              className="group p-6 bg-steel-50 rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all"
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
              className="group p-6 bg-steel-50 rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                Paint Covers
              </h3>
              <p className="text-steel-600 text-sm">
                Protect your index covers during painting operations.
              </p>
            </Link>
            <Link
              href="/products/meter-screws"
              className="group p-6 bg-steel-50 rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                Meter Screws
              </h3>
              <p className="text-steel-600 text-sm">
                Complete selection of case and hand hole screws.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-steel-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-steel-400 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to place an order or get help selecting the right
            index covers for your meters.
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
