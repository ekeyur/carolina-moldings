import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const catalogCategories = [
  {
    title: 'Index Covers',
    description: 'All of our index covers are personally shipped and quality controlled.',
    image: '/products/catalog-index-covers.png',
    products: [
      { name: 'American / Honeywell Index Covers', href: '/products/american-index-covers' },
      { name: 'Rockwell / Sensus Index Covers', href: '/products/rockwell-index-covers' },
      { name: 'Sprague / Itron Index Covers', href: '/products/itron-index-covers' },
    ],
  },
  {
    title: 'Tamper Systems',
    description: 'Our unique tamper system will ensure that nobody will be able to steal from your business.',
    image: '/products/catalog-tamper.png',
    products: [
      { name: 'Snap Seal™ Tamper System', href: '/products/tamper-system' },
    ],
  },
  {
    title: 'Screws',
    description: 'We will provide every screw for any gas meter need.',
    image: '/products/catalog-screws.png',
    products: [
      { name: 'Meter Screws', href: '/products/meter-screws' },
    ],
  },
  {
    title: 'Paint Covers',
    description: 'Our paint covers have been used all over the world with incredible success.',
    image: '/products/catalog-paint-covers.png',
    products: [
      { name: 'Paint Covers', href: '/products/paint-covers' },
    ],
  },
  {
    title: 'Nuts and Swivels',
    description: 'Products designed to fit various customer specifications for secure meter connections.',
    image: '/products/nuts-swivels.png',
    products: [
      { name: 'Nuts and Swivels', href: '/products/misc' },
    ],
  },
  {
    title: 'Miscellaneous',
    description: 'For any other gas meter need we have a product to ensure a clean and proper functioning meter.',
    image: '/products/rv-250.png',
    products: [
      { name: 'Miscellaneous Products', href: '/products/misc' },
    ],
  },
];

export default function FullCatalogPage() {
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
            Complete Selection
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Full Product Catalog
          </h1>
          <p className="text-steel-400 text-lg max-w-2xl">
            Browse our complete range of gas meter products. From index covers to tamper systems,
            we have everything you need for meter installation, maintenance, and security.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-xl border border-steel-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Image */}
                <div className="relative h-48 bg-steel-100 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain object-center p-4"
                  />
                </div>
                {/* Category Header */}
                <div className="p-6 bg-steel-900 text-white">
                  <h2 className="font-display text-xl font-bold mb-2">
                    {category.title}
                  </h2>
                  <p className="text-steel-400 text-sm">
                    {category.description}
                  </p>
                </div>

                {/* Products List */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-steel-500 uppercase tracking-wider mb-3">
                    Products
                  </p>
                  <ul className="space-y-2">
                    {category.products.map((product) => (
                      <li key={product.name}>
                        <Link
                          href={product.href}
                          className="group flex items-center justify-between p-3 rounded-lg hover:bg-steel-50 transition-colors"
                        >
                          <span className="text-steel-700 group-hover:text-primary-600 transition-colors">
                            {product.name}
                          </span>
                          <svg
                            className="w-4 h-4 text-steel-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 mb-6">
              Why Choose Carolina Moldings?
            </h2>
            <p className="text-steel-600">
              For over 50 years, we&apos;ve been the trusted choice for gas utilities nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Quality Controlled',
                description: 'Every product is personally inspected before shipping.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                title: 'Fast Shipping',
                description: 'Quick turnaround to keep your operations running.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Expert Support',
                description: 'Our team is ready to help you find the right products.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: 'Snap Seal™',
                description: 'Industry-leading tamper-evident security technology.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-steel-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-steel-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Download */}
      <section className="py-16 lg:py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 bg-steel-900 rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                  Download Our Complete Catalog
                </h3>
                <p className="text-steel-400 max-w-xl">
                  Get our full product catalog in PDF format for offline reference.
                  Includes all specifications, model numbers, and compatibility information.
                </p>
              </div>
              <a
                href="/CMI-Catalog-2023.pdf"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25 whitespace-nowrap"
              >
                Download PDF
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-steel-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Can&apos;t Find What You Need?
          </h2>
          <p className="text-steel-400 text-lg mb-8 max-w-2xl mx-auto">
            We offer custom solutions and can help you find the right products for your specific requirements.
            Contact us today and let our experts assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-primary-700 transition-all"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            <a
              href="tel:1-800-523-7475"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white/30 font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-white/10 transition-all"
            >
              1-800-523-7475
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
