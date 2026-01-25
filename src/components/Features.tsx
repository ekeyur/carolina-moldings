'use client';

const features = [
  {
    title: 'Family Owned',
    description: 'We have proudly been owned and operated by family since 1975. Our commitment to excellence is personal.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Quality is Key',
    description: 'We understand that if our products fail, we will too. We personally QC all of our products before shipment.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Trust is Our Priority',
    description: 'We ensure that we give the same customer service to all our customers, no matter the size.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Speedy Delivery',
    description: 'Time is money, and we know that a day without materials is a day without production.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="relative py-24 lg:py-32 bg-steel-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-steel-700/30 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-500 font-display text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            You can&apos;t steal from{' '}
            <span className="text-primary-500">Snap Seal™</span>
          </h2>
          <p className="text-steel-400 text-lg">
            For over 50 years, we&apos;ve been the trusted name in gas meter products. 
            Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 bg-steel-800/50 backdrop-blur-sm rounded-lg border border-steel-700/50 hover:border-primary-500/50 transition-all duration-300 hover:bg-steel-800/80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 bg-primary-600/10 border border-primary-600/20 rounded-lg flex items-center justify-center text-primary-500 group-hover:bg-primary-600/20 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400 rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
