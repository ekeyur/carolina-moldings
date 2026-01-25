'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const faqs = [
  {
    question: 'What products does Carolina Moldings manufacture?',
    answer: 'We manufacture a wide range of gas meter products including index covers for American/Honeywell, Rockwell/Sensus, and Sprague/Itron meters, tamper-evident Snap Seal™ systems, meter screws, paint covers, and various miscellaneous accessories.',
  },
  {
    question: 'What is the Snap Seal™ tamper system?',
    answer: 'Snap Seal™ is our proprietary tamper-evident technology designed to protect gas meters from unauthorized access. The system provides visible evidence if tampering has occurred, helping utilities maintain meter integrity and prevent theft.',
  },
  {
    question: 'Can you create custom molded products?',
    answer: 'Yes! If we don\'t have what you\'re looking for in our standard catalog, we\'re happy to design and manufacture custom pieces to fit your specific needs. Our engineering team works closely with clients to develop solutions that meet exact specifications.',
  },
  {
    question: 'How long has Carolina Moldings been in business?',
    answer: 'Carolina Moldings has been a family-owned and operated business since 1975. That\'s over 50 years of experience serving the gas industry with quality products and exceptional customer service.',
  },
  {
    question: 'What are your business hours?',
    answer: 'We are available to answer questions about prices and products Monday through Friday, 8:00 AM to 3:00 PM EST. For inquiries outside of these hours, please email us at Contact@CarolinaMoldings.com and we\'ll get back to you as soon as possible.',
  },
  {
    question: 'How can I place an order?',
    answer: 'You can place orders by calling us at 1-800-523-7475 during business hours, or by emailing us at Contact@CarolinaMoldings.com. You can also use our contact form on the website.',
  },
  {
    question: 'Do you offer wholesale pricing?',
    answer: 'Yes, we offer competitive pricing for wholesale and bulk orders. Contact us directly to discuss your needs and receive a custom quote based on your order volume.',
  },
  {
    question: 'Where are you located?',
    answer: 'Our facility is located at 3600 Woodpark Blvd. Suite A, Charlotte NC, 28206. We ship our products nationwide.',
  },
  {
    question: 'How quickly can you ship products?',
    answer: 'We understand that time is money and a day without materials is a day without production. We maintain inventory of our most popular products and prioritize fast, reliable shipping. Contact us for specific lead times on your order.',
  },
  {
    question: 'Do you have a product catalog available?',
    answer: 'Yes! You can view our full product catalog online or download a PDF version for offline reference. Visit our Products page or click the PDF Catalog button on our homepage.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-steel-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-500 font-display text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Support
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Frequently Asked<br />Questions
          </h1>
          <p className="text-steel-400 text-lg max-w-2xl">
            Find answers to common questions about our products, services, and ordering process.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-steel-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-steel-50 transition-colors"
                >
                  <span className="font-display text-lg font-semibold text-steel-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-steel-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-steel-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-steel-50 rounded-xl text-center">
            <h3 className="font-display text-2xl font-bold text-steel-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-steel-600 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-primary-700 transition-all"
            >
              Contact Us
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
