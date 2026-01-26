import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Carolina Moldings, Inc.",
  description:
    "Read Carolina Moldings' privacy policy to understand how we collect, use, and protect your information when you order gas meter index covers and tamper plugs.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-steel-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-steel-400">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-steel-600 leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-steel-900 mb-3">
                Information We Collect
              </h2>
              <p>
                We collect information you provide when contacting us or placing
                orders, including name, email, phone number, and business
                details. We also collect basic website usage data such as IP
                address and pages visited.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-steel-900 mb-3">
                How We Use Your Information
              </h2>
              <p>
                We use your information to process orders, respond to inquiries,
                communicate about products and services, and improve our
                website. We do not sell or rent your personal information to
                third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-steel-900 mb-3">
                Data Security
              </h2>
              <p>
                We implement appropriate measures to protect your personal
                information. However, no method of transmission over the
                Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-steel-900 mb-3">
                Contact Us
              </h2>
              <p>
                Questions about this policy? Contact us at{" "}
                <a
                  href="mailto:Contact@CarolinaMoldings.com"
                  className="text-primary-600 hover:text-primary-700"
                >
                  contact@carolinaMoldings.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:18005237475"
                  className="text-primary-600 hover:text-primary-700"
                >
                  1-800-523-7475
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-steel-200">
            <Link
              href="/"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
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
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
