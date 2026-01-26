"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-mesh overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 noise-overlay"></div>

      {/* Geometric accents */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-red-900/20 rounded-full blur-3xl"></div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white to-transparent"></div>
      </div>

      {/* Gas Meter Images - Spread across page */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main featured meter - American/Honeywell - right side */}
        <div className="absolute right-[22%] top-[58%] w-64 h-64 opacity-70 animate-fade-in animate-delay-300">
          <Image
            src="/american-honeywell.png"
            alt="American Honeywell Gas Meter"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Secondary meter - Rockwell/Sensus - left side, lower */}
        <div className="absolute left-[12%] bottom-[10%] w-40 h-40 opacity-30 animate-fade-in animate-delay-400">
          <Image
            src="/rockwell-sensus.png"
            alt="Rockwell Sensus Gas Meter"
            fill
            className="object-contain"
          />
        </div>

        {/* Tertiary meter - Sprague/Itron - center top */}
        <div className="absolute left-[55%] top-[18%] w-36 h-36 opacity-25 animate-fade-in animate-delay-500">
          <Image
            src="/sprague-itron.png"
            alt="Sprague Itron Gas Meter"
            fill
            className="object-contain"
          />
        </div>
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
              href="/cmi_catalog_2023.pdf"
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
