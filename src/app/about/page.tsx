import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Carolina Moldings | Family-Owned Gas Meter Index Cover Manufacturer Since 1975",
  description:
    "Learn about Carolina Moldings, a family-owned manufacturer of gas meter index covers and tamper plugs for over 50 years. Our Snap Seal technology is trusted by utilities nationwide.",
  keywords:
    "Carolina Moldings history, gas meter manufacturer, index cover manufacturer, tamper plug manufacturer, Snap Seal inventor, family-owned utility supplier",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-steel-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-500 font-display text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            About Us
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Family Owned
            <br />
            Since 1975
          </h1>
          <p className="text-steel-400 text-lg max-w-2xl">
            For over five decades, Carolina Moldings has been a trusted name in
            gas meter products and tamper-evident security systems.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  Founded in 1975 by Jack Crouch Sr., Carolina Moldings, Inc.
                  began as a small family operation with a simple mission: to
                  provide the highest quality gas meter products to utilities
                  across the nation.
                </p>
                <p>
                  Over the years, we&apos;ve grown from a local supplier to one
                  of the leading manufacturers of index covers, tamper systems,
                  and precision molded components for the gas industry.
                </p>
                <p>
                  Our signature Snap Seal™ tamper-evident technology has become
                  an industry standard, helping utilities protect their assets
                  and ensure meter integrity. As we like to say: &quot;You
                  can&apos;t steal from Snap Seal™.&quot;
                </p>
                <p>
                  Today, we remain a family-owned and operated business,
                  committed to the same values that have guided us for over 50
                  years: quality, integrity, and exceptional customer service.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-steel-900 via-steel-800 to-steel-900 rounded-2xl overflow-hidden flex items-center justify-center relative">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-600 rounded-full blur-3xl"></div>
                </div>

                {/* Decorative ring */}
                <div className="absolute inset-8 border-2 border-white/10 rounded-full"></div>
                <div className="absolute inset-16 border border-white/5 rounded-full"></div>

                {/* Content */}
                <div className="relative text-center z-10">
                  <div className="font-display text-8xl md:text-9xl font-bold text-white leading-none">
                    50<span className="text-primary-500">+</span>
                  </div>
                  <div className="mt-2 font-display text-xl md:text-2xl uppercase tracking-[0.2em] text-steel-300">
                    Years
                  </div>
                  <div className="mt-1 text-sm text-steel-400 tracking-wider">
                    of Excellence
                  </div>
                  <div className="mt-6 w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
                  <div className="mt-6 text-xs text-steel-500 uppercase tracking-widest">
                    Est. 1975
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-steel-600">
              These principles have guided our business for over five decades
              and continue to drive everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description:
                  "We personally QC all of our products before shipment. We understand that if our products fail, we fail our customers.",
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
              },
              {
                title: "Customer Trust",
                description:
                  "We ensure that we give the same exceptional customer service to all our customers, no matter the size of their order.",
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Reliability",
                description:
                  "Time is money. We know that a day without materials is a day without production, so we prioritize fast, reliable delivery.",
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-8 bg-white rounded-xl border border-steel-200"
              >
                <div className="w-16 h-16 mb-6 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-steel-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-steel-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-steel-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-steel-400 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need standard products or custom solutions, our team is
            ready to help you find exactly what you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-primary-700 transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white/30 font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-white/10 transition-all"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
