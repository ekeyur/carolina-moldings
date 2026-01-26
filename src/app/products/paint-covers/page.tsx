import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Paint Covers for Gas Meter Index Covers | American & Rockwell | Carolina Moldings",
  description:
    "Protective paint covers for gas meter index covers during painting operations. Available for American, Honeywell, Rockwell, and Sensus meter types.",
  keywords:
    "paint covers, index cover protection, meter painting, American paint covers, Rockwell paint covers, gas meter accessories",
};

const paintCovers = [
  {
    model: 'PC A1',
    description: 'Fits A-101 and A-101-OS Index Covers',
    category: 'American',
    image: '/products/pc-a1.png',
  },
  {
    model: 'PC A-40G',
    description: 'Designed for the A-40G Index Cover',
    category: 'American',
    image: '/products/pc-a-40g.png',
  },
  {
    model: 'A-100G',
    description: 'Compatible with A-100G Index Cover',
    category: 'American',
    image: '/products/pc-a-100g.png',
  },
  {
    model: 'PC A3',
    description: 'Fits A-103 and A-103-OS Index Covers',
    category: 'American',
    image: '/products/pc-a3.png',
  },
  {
    model: 'PC A3-40G',
    description: 'Fits A-103 Index Cover and Commercial American 40G ERT',
    category: 'American',
    image: '/products/pc-a3-40g.png',
  },
  {
    model: 'PC A3 Hinged',
    description: 'Designed for A-103 Index Cover',
    category: 'American',
    image: '/products/pc-a3-hinged.png',
  },
  {
    model: 'PC R3',
    description: 'Fits R-103, R-103-OS and R-104 Index Covers',
    category: 'Rockwell',
    image: '/products/pc-r3.png',
  },
  {
    model: 'PC R-40G',
    description: 'Designed for R-40G Index Cover',
    category: 'Rockwell',
    image: '/products/pc-r-40g.png',
  },
  {
    model: 'R-100G',
    description: 'Compatible with R-100G Index Cover',
    category: 'Rockwell',
    image: '/products/pc-r-100g.png',
  },
  {
    model: 'PC R5',
    description: 'Fits R-105 Index Cover',
    category: 'Rockwell',
    image: '/products/pc-r5.png',
  },
];

export default function PaintCoversPage() {
  const americanCovers = paintCovers.filter((p) => p.category === 'American');
  const rockwellCovers = paintCovers.filter((p) => p.category === 'Rockwell');

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
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
          <p className="text-primary-500 font-display text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Accessories
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Paint Covers
          </h1>
          <p className="text-steel-400 text-lg max-w-2xl">
            Protective covers designed to safeguard gas meter index covers during painting operations.
            Available for both American/Honeywell and Rockwell/Sensus meter types.
          </p>
        </div>
      </section>

      {/* American Paint Covers */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-steel-900 mb-4 pb-4 border-b border-steel-200">
              American / Honeywell Paint Covers
            </h2>
            <p className="text-steel-600">
              Paint covers compatible with American and Honeywell meter index covers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {americanCovers.map((product) => (
              <div
                key={product.model}
                className="group p-6 bg-white rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full aspect-square mb-6 bg-steel-100 rounded-lg flex items-center justify-center overflow-hidden relative">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.model}
                      fill
                      className="object-contain object-center p-6"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <div className="w-20 h-20 mx-auto mb-4 bg-steel-200 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-steel-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <p className="text-steel-500 text-sm font-medium">Paint Cover</p>
                    </div>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.model}
                </h3>
                <p className="text-steel-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rockwell Paint Covers */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-steel-900 mb-4 pb-4 border-b border-steel-200">
              Rockwell / Sensus Paint Covers
            </h2>
            <p className="text-steel-600">
              Paint covers compatible with Rockwell and Sensus meter index covers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rockwellCovers.map((product) => (
              <div
                key={product.model}
                className="group p-6 bg-steel-50 rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full aspect-square mb-6 bg-steel-100 rounded-lg flex items-center justify-center overflow-hidden relative">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.model}
                      fill
                      className="object-contain object-center p-6"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <div className="w-20 h-20 mx-auto mb-4 bg-steel-200 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-steel-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <p className="text-steel-500 text-sm font-medium">Paint Cover</p>
                    </div>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.model}
                </h3>
                <p className="text-steel-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
                Why Use Paint Covers?
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  Paint covers are essential accessories that protect your gas meter index covers
                  during painting and maintenance operations. They prevent paint overspray from
                  obscuring meter readings and damaging sensitive components.
                </p>
                <p>
                  Our paint covers are precision-molded to fit specific index cover models, ensuring
                  a snug fit that provides complete protection while being easy to install and remove.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Protects index covers during painting',
                  'Precision fit for specific meter models',
                  'Easy installation and removal',
                  'Durable construction for repeated use',
                ].map((feature) => (
                  <li key={feature} className="flex items-center text-steel-700">
                    <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                    <svg className="w-24 h-24 mx-auto text-steel-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="font-display text-xl text-steel-500 uppercase tracking-wider">Protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-steel-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Need Paint Covers?
          </h2>
          <p className="text-steel-400 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to order paint covers or get help finding the right model
            for your meter index covers.
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
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
