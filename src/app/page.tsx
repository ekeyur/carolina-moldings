import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
