import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meter Screws & Hardware | Case Screws & Hand Hole Screws | Carolina Moldings",
  description:
    "Complete selection of gas meter screws including case screws and hand hole screws for index covers. Compatible with American, Rockwell, Sprague meters and tamper plug systems.",
  keywords:
    "meter screws, case screws, hand hole screws, gas meter hardware, index cover screws, tamper plug screws, utility meter screws",
};

const caseScrews = [
  {
    model: "30-S",
    spec: '1/4 – 20 x 5/8 Fillister',
    fits: "A-101, A-101-OS, Hex Cup",
  },
  {
    model: "31-S",
    spec: '1/4 – 20 x 3/4 Panhead',
    fits: "#2 Cup",
  },
  {
    model: "32-S",
    spec: '12 – 24 x 1/2 Fillister',
    fits: "A-103, A-103-OS",
  },
  {
    model: "33-S",
    spec: '8 – 32 x 5/8 Binderhead',
    fits: "Back of A-103 & A-103-OS, #8 Cup",
  },
  {
    model: "34-S",
    spec: '18 x 18 x 1 1/8 Fillister',
    fits: "ABP Cup, RHH Cup",
  },
  {
    model: "35-S",
    spec: '3/8 x 16 x 1 1/2 Allenhead',
    fits: "AHH Cup",
  },
  {
    model: "36-S",
    spec: '8 – 32 x 3/16 Roundhead',
    fits: "AL-175-250 Index",
  },
  {
    model: "37-S",
    spec: '1/4 – 20 x 3/4 Combo',
    fits: "Rockwell Combo Case Screw",
  },
  {
    model: "40-S",
    spec: '10 – 24 x 1/2 Fillister',
    fits: "R-103, Rockwell hand hole cover",
  },
];

const handHoleScrews = [
  {
    model: "41-S",
    spec: '10 – 24 x 3/4 Fillister',
    fits: "R-104, Rockwell ERT Index Cover",
  },
  {
    model: "42-S",
    spec: '5/16 x 18 x 1 Allenhead',
    fits: "RHH Cup, R-105 Index Cover",
  },
  {
    model: "43-S",
    spec: '10 – 24 x 5/8 Panhead',
    fits: "#1 Cup, Tophat Cup",
  },
  {
    model: "44-S",
    spec: '5/16 x 18 x 1 Fillister',
    fits: "R-105",
  },
  {
    model: "45-S",
    spec: '6 – 32 x 5/8 Fillister',
    fits: "Rockwell Index",
  },
  {
    model: "51-S",
    spec: '10 – 24 x 1/2 Fillister',
    fits: "S-105",
  },
  {
    model: "52-S",
    spec: '#6 Drive Stud',
    fits: "Badge plate on S-104 and S-105",
  },
  {
    model: "54-S",
    spec: '10 – 24 x 1/4 Panhead',
    fits: "Residential Sprague Index",
  },
];

export default function MeterScrewsPage() {
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
            Hardware
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Meter Screws
          </h1>
          <p className="text-steel-400 text-lg max-w-2xl">
            Complete selection of case screws and hand hole screws for
            residential and commercial gas meters. We carry all standard sizes
            and can source additional items as needed.
          </p>
        </div>
      </section>

      {/* Case Screws */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-steel-900 mb-4 pb-4 border-b border-steel-200">
              Case Screws
            </h2>
            <p className="text-steel-600">
              Screws for securing meter cases and index covers.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-steel-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-steel-100">
                    <th className="px-6 py-4 text-left font-display text-sm font-semibold text-steel-900 uppercase tracking-wider">
                      Part #
                    </th>
                    <th className="px-6 py-4 text-left font-display text-sm font-semibold text-steel-900 uppercase tracking-wider">
                      Specification
                    </th>
                    <th className="px-6 py-4 text-left font-display text-sm font-semibold text-steel-900 uppercase tracking-wider">
                      Fits
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-100">
                  {caseScrews.map((screw) => (
                    <tr
                      key={screw.model}
                      className="hover:bg-steel-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-display font-semibold text-primary-600">
                          {screw.model}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-steel-700">{screw.spec}</td>
                      <td className="px-6 py-4 text-steel-600">{screw.fits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Hand Hole Screws */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-steel-900 mb-4 pb-4 border-b border-steel-200">
              Hand Hole Screws
            </h2>
            <p className="text-steel-600">
              Screws for hand hole covers and index mounting.
            </p>
          </div>

          <div className="bg-steel-50 rounded-lg border border-steel-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-steel-100">
                    <th className="px-6 py-4 text-left font-display text-sm font-semibold text-steel-900 uppercase tracking-wider">
                      Part #
                    </th>
                    <th className="px-6 py-4 text-left font-display text-sm font-semibold text-steel-900 uppercase tracking-wider">
                      Specification
                    </th>
                    <th className="px-6 py-4 text-left font-display text-sm font-semibold text-steel-900 uppercase tracking-wider">
                      Fits
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel-100 bg-white">
                  {handHoleScrews.map((screw) => (
                    <tr
                      key={screw.model}
                      className="hover:bg-steel-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-display font-semibold text-primary-600">
                          {screw.model}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-steel-700">{screw.spec}</td>
                      <td className="px-6 py-4 text-steel-600">{screw.fits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
                Complete Screw Selection
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  We carry all residential and commercial meter screws to meet
                  your needs. Our inventory includes screws for American,
                  Rockwell, Sprague, and other major meter brands.
                </p>
                <p>
                  Can&apos;t find what you need? Contact us and we can source
                  additional items for your specific requirements.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "All major meter brands supported",
                  "Residential and commercial sizes",
                  "Bulk quantities available",
                  "Custom sourcing on request",
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="font-display text-xl text-steel-600 uppercase tracking-wider">
                      Hardware
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
              href="/products/american-index-covers"
              className="group p-6 bg-steel-50 rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                American Index Covers
              </h3>
              <p className="text-steel-600 text-sm">
                Index covers for American and Honeywell meters.
              </p>
            </Link>
            <Link
              href="/products/rockwell-index-covers"
              className="group p-6 bg-steel-50 rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                Rockwell Index Covers
              </h3>
              <p className="text-steel-600 text-sm">
                Index covers for Rockwell and Sensus meters.
              </p>
            </Link>
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-steel-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Need Meter Screws?
          </h2>
          <p className="text-steel-400 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to place an order or inquire about screws not
            listed here. We can source additional items to meet your needs.
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
