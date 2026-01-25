"use client";

import Link from "next/link";

export default function Hero() {
  const digits = ["0", "1", "9", "7", "5"];

  return (
    <section className="relative min-h-screen flex items-center gradient-mesh overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 noise-overlay"></div>

      {/* Geometric accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-steel-600/20 rounded-full blur-3xl"></div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white to-transparent"></div>
      </div>

      {/* Gas Meter Sketch */}
      <div className="hidden lg:block absolute right-[24%] top-[85%] -translate-y-1/2 w-[400px] h-[280px]">
        {/* Faint outline */}
        <svg
          viewBox="0 0 240 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="w-full h-full text-white opacity-[0.08]"
        >
          {/* Outer frame */}
          <rect x="20" y="10" width="200" height="120" rx="6" strokeWidth="1.5" />

          {/* Inner display area */}
          <rect x="30" y="20" width="180" height="100" rx="4" />

          {/* CUBIC FEET header */}
          <text x="120" y="38" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor" stroke="none">CUBIC FEET</text>

          {/* Odometer-style number display */}
          <rect x="45" y="50" width="150" height="45" rx="3" strokeWidth="0.75" />

          {/* Number separators */}
          <line x1="75" y1="50" x2="75" y2="95" strokeWidth="0.5" />
          <line x1="105" y1="50" x2="105" y2="95" strokeWidth="0.5" />
          <line x1="135" y1="50" x2="135" y2="95" strokeWidth="0.5" />
          <line x1="165" y1="50" x2="165" y2="95" strokeWidth="0.5" />

          {/* Numbers in odometer */}
          <text x="60" y="82" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor" stroke="none">{digits[0]}</text>
          <text x="90" y="82" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor" stroke="none">{digits[1]}</text>
          <text x="120" y="82" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor" stroke="none">{digits[2]}</text>
          <text x="150" y="82" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor" stroke="none">{digits[3]}</text>
          <text x="180" y="82" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor" stroke="none">{digits[4]}</text>

          {/* Multiplier */}
          <text x="120" y="115" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">x 1000</text>
        </svg>
        {/* Snap seal dots - same visibility as outline */}
        <svg
          viewBox="0 0 240 140"
          className="absolute inset-0 w-full h-full opacity-[0.08]"
        >
          <circle cx="42" cy="32" r="6" fill="#dc2626" />
          <circle cx="198" cy="32" r="6" fill="#dc2626" />
          <circle cx="42" cy="108" r="6" fill="#dc2626" />
          <circle cx="198" cy="108" r="6" fill="#dc2626" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 opacity-0 animate-fade-in">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-steel-300 font-medium">
              Family Owned Since 1975
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-6 opacity-0 animate-fade-in-up">
            Carolina
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-primary-600">
              Moldings
            </span>
            <span className="text-steel-500">, Inc.</span>
          </h1>

          {/* Tagline */}
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-steel-300 mb-4 opacity-0 animate-fade-in-up animate-delay-100">
            You can&apos;t steal from{" "}
            <span className="text-primary-500 font-semibold">Snap Seal™</span>
          </p>

          {/* Description */}
          <p className="text-lg text-steel-400 max-w-2xl mb-10 opacity-0 animate-fade-in-up animate-delay-200">
            Industry-leading manufacturer of gas meter index covers,
            tamper-proof systems, and precision molded components. Trusted by
            utilities nationwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animate-delay-300">
            <Link href="/products/full-catalog" className="btn-primary">
              Full Catalog
            </Link>
            <a
              href="/CMI-Catalog-2023.pdf"
              target="_blank"
              className="btn-secondary"
            >
              PDF Catalog
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-16 pt-12 border-t border-white/10 opacity-0 animate-fade-in-up animate-delay-400">
            <div>
              <p className="font-display text-4xl font-bold text-white">50+</p>
              <p className="text-sm text-steel-400 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-white">100+</p>
              <p className="text-sm text-steel-400 mt-1">Products</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-white">
                1000+
              </p>
              <p className="text-sm text-steel-400 mt-1">Clients Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in animate-delay-500">
        <span className="text-xs text-steel-500 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-steel-500 to-transparent"></div>
      </div>
    </section>
  );
}
