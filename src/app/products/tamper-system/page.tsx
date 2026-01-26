import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Snap Seal Tamper Plugs & Tamper System | Gas Meter Security | Carolina Moldings",
  description:
    "Industry-leading Snap Seal tamper plugs and tamper-evident security system for gas meters. Protect index covers from theft with our tamper plugs, screw cups, and Tophat seals.",
  keywords:
    "Snap Seal, tamper plugs, tamper system, tamper-evident, gas meter security, screw cups, Tophat tamper, TS Plug, meter theft prevention, index cover security",
};

const snapSeals = [
  {
    model: '#1 Snap Seal™',
    description: 'Compatible with A-101, A-103, R-103, S-105 index covers, and #1 and #8 cups',
    compatible: ['A-101', 'A-103', 'R-103', 'S-105', '#1 Cup', '#8 Cup'],
    image: '/products/snap-seal-1.png',
  },
  {
    model: 'Tophat',
    description: 'Works with A-40G, A-100G, A-101, A-103, I-100G, R-40G, R-100G, R-500G index covers',
    compatible: ['A-40G', 'A-100G', 'A-101', 'A-103', 'I-100G', 'R-40G', 'R-100G', 'R-500G'],
    image: '/products/tophat.png',
  },
  {
    model: '#2 Snap Seal™',
    description: 'Fits R-105 index cover and #2 cup',
    compatible: ['R-105', '#2 Cup'],
    image: '/products/snap-seal-2.png',
  },
  {
    model: '#3 Snap Seal™',
    description: 'Designed for use with #3 cup',
    compatible: ['#3 Cup'],
    image: '/products/snap-seal-3.png',
  },
  {
    model: 'TS Plug',
    description: 'Standalone tamper system plug component',
    compatible: [],
    image: '/products/ts-plug.png',
  },
];

const screwCups = [
  {
    cup: '#1 Cup',
    compatibleSeal: '#1 Snap Seal™',
    screwType: '43-S',
    image: '/products/cup-1.png',
  },
  {
    cup: '#2 Cup',
    compatibleSeal: '#2 Snap Seal™',
    screwType: '31-S',
    image: '/products/cup-2.png',
  },
  {
    cup: '#3 Cup',
    compatibleSeal: '#3 Snap Seal™',
    screwType: '34-S, 35-S, 42-S',
    image: '/products/cup-3.png',
  },
  {
    cup: 'Hex Cup',
    compatibleSeal: '#1 Snap Seal™',
    screwType: '30-S',
    image: '/products/cup-hex.png',
  },
  {
    cup: '#8 Cup',
    compatibleSeal: '#1 Snap Seal™',
    screwType: '33-S',
    image: '/products/cup-8.png',
  },
  {
    cup: 'Tophat Cup',
    compatibleSeal: 'Tophat',
    screwType: '43-S',
    image: '/products/cup-tophat.png',
  },
];

export default function TamperSystemPage() {
  return (
    <main className="min-h-screen bg-steel-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-steel-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl"></div>
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
            Security Products
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Tamper System
          </h1>
          <p className="text-steel-400 text-lg max-w-2xl mb-8">
            Our comprehensive Snap Seal™ tamper-evident security system protects gas meters
            from theft and unauthorized access. Industry-trusted technology since 1975.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-primary-600/20 border border-primary-500/30 rounded-lg">
            <svg className="w-6 h-6 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-primary-400 font-display font-semibold">
              You can&apos;t steal from Snap Seal™!
            </span>
          </div>
        </div>
      </section>

      {/* Tamper System Diagram */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
                See How It Works
              </h2>
              <p className="text-steel-600 text-lg mb-6">
                Our Snap Seal™ tamper system provides visible tamper evidence on gas meters.
                The diagram shows how different seals and cups work together to protect meter access points.
              </p>
              <ul className="space-y-3">
                {[
                  'Snap Seals fit securely into screw cups',
                  'Multiple seal sizes for different applications',
                  'Color-coded options for easy identification',
                  'Any tampering leaves visible evidence',
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
              <div className="bg-steel-100 rounded-2xl p-4 lg:p-8">
                <div className="relative aspect-square">
                  <Image
                    src="/products/tamper-system-diagram.png"
                    alt="Tamper System Diagram showing Snap Seals and Cups on a gas meter"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snap Seals Section */}
      <section className="py-16 lg:py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-steel-900 mb-4 pb-4 border-b border-steel-200">
              Snap Seals™
            </h2>
            <p className="text-steel-600">
              Tamper-evident seals available in multiple colors to match your utility&apos;s requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {snapSeals.map((product) => (
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
                      <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <p className="text-steel-500 text-sm font-medium">Snap Seal™</p>
                    </div>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.model}
                </h3>
                <p className="text-steel-600 text-sm mb-4">{product.description}</p>
                {product.compatible.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {product.compatible.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-steel-100 text-steel-600 text-xs rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screw Cups Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-steel-900 mb-4 pb-4 border-b border-steel-200">
              Screw Cups
            </h2>
            <p className="text-steel-600">
              Compatible screw cups designed to work with our Snap Seal™ tamper system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screwCups.map((cup) => (
              <div
                key={cup.cup}
                className="group p-6 bg-white rounded-lg border border-steel-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full aspect-square mb-6 bg-steel-100 rounded-lg flex items-center justify-center overflow-hidden relative">
                  {cup.image ? (
                    <Image
                      src={cup.image}
                      alt={cup.cup}
                      fill
                      className="object-contain object-center p-6"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <p className="text-steel-500 text-sm font-medium">Screw Cup</p>
                    </div>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {cup.cup}
                </h3>
                <p className="text-steel-600 text-sm mb-4">Compatible with {cup.compatibleSeal}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-steel-100 text-steel-600 text-xs rounded">
                    {cup.compatibleSeal}
                  </span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded font-medium">
                    Screw: {cup.screwType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
              How the Snap Seal™ System Works
            </h2>
            <p className="text-steel-600">
              Our tamper-evident system provides visible proof of any unauthorized access attempts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Install the Cup',
                description: 'The screw cup is installed over the meter screw, creating a secure housing for the seal.',
              },
              {
                step: '2',
                title: 'Apply the Snap Seal™',
                description: 'The Snap Seal™ snaps securely into the cup, covering the screw head completely.',
              },
              {
                step: '3',
                title: 'Tamper Evidence',
                description: 'Any attempt to remove or tamper with the seal results in visible, permanent damage.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-steel-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-steel-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
                Why Choose Snap Seal™?
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  The Snap Seal™ tamper system has been protecting gas meters for utilities
                  across North America for decades. Our unique design makes it virtually
                  impossible to remove the seal without leaving visible evidence.
                </p>
                <p>
                  Available in multiple colors to help utilities identify service dates,
                  technicians, or meter types at a glance.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Tamper-evident design shows any access attempts',
                  'Multiple colors for easy identification',
                  'Compatible with major meter brands',
                  'Easy installation, no special tools required',
                  'Durable construction for long-term protection',
                  'Cost-effective theft prevention',
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-24 h-24 mx-auto mb-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="font-display text-2xl font-bold uppercase tracking-wider">Snap Seal™</p>
                    <p className="text-primary-200 mt-2">Trusted Security</p>
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
            Protect Your Meters Today
          </h2>
          <p className="text-steel-400 text-lg mb-8 max-w-2xl mx-auto">
            Contact us to learn more about the Snap Seal™ tamper system or to place an order.
            Our team can help you find the right seals and cups for your meters.
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
