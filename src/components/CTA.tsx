"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-steel-100 to-steel-200"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-linear-to-l from-primary-600/5 to-transparent"></div>
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 text-primary-600/10"
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern
              id="diagonal"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
            >
              <path
                d="M-5,5 l10,-10 M0,20 l20,-20 M15,25 l10,-10"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <circle cx="100" cy="100" r="90" fill="url(#diagonal)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="section-subtitle mb-4">Custom Solutions</p>
            <h2 className="section-title mb-6">
              Building Custom Pieces For Any Need
            </h2>
            <p className="text-lg text-steel-600 mb-8">
              If we don&apos;t have what you are looking for, we are happy to
              design anything to fit your needs. Our engineering team works
              closely with clients to develop custom solutions that meet exact
              specifications.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Custom mold design and fabrication",
                "Prototype development",
                "Material specification consultation",
                "Small and large batch production",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-steel-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="#contact" aria-label="Contact us - get a quote" className="btn-primary">
              Contact Us
              <svg
                className="w-4 h-4 ml-2"
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
            </Link>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-square bg-steel-800 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-steel-700 to-steel-900"></div>

              {/* Decorative content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 border-4 border-primary-600/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-primary-600"
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
                  </div>
                  <p className="font-display text-2xl font-bold text-white mb-2">
                    We&apos;re Prepared
                  </p>
                  <p className="text-primary-500 font-display uppercase tracking-wider text-sm">
                    For The Future
                  </p>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary-600/30"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary-600/30"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary-600/30"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary-600/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
