import type { Metadata } from "next";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Carolina Moldings, Inc. | Gas Meter Index Covers & Tamper Plugs",
  description:
    "Leading manufacturer of gas meter index covers and tamper plugs since 1975. Our Snap Seal tamper-evident technology protects American, Rockwell, and Itron meters. Family-owned quality you can trust.",
  keywords:
    "gas meter index covers, tamper plugs, Snap Seal, tamper-evident security, gas meter covers, American meter covers, Rockwell meter covers, Itron meter covers, utility meter products, gas meter accessories",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Features />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
