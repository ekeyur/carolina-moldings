"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Full Catalog", href: "/products/full-catalog" },
      { name: "Tamper System", href: "/products/tamper-system" },
      { name: "Index Covers", href: "/products/index-covers" },
      {
        name: "American Index Covers",
        href: "/products/american-index-covers",
      },
      {
        name: "Rockwell Index Covers",
        href: "/products/rockwell-index-covers",
      },
      { name: "Itron Index Covers", href: "/products/itron-index-covers" },
      { name: "Meter Screws", href: "/products/meter-screws" },
      { name: "Paint Covers", href: "/products/paint-covers" },
      { name: "Miscellaneous", href: "/products/misc" },
    ],
  },
  { name: "FAQ", href: "/faq" },
  { name: "About Us", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname !== "/") {
      // Navigate to home page first, then scroll
      router.push("/#contact");
    } else {
      // Already on home page, just scroll
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-steel-900/95 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-primary-600 rounded-sm flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <span className="font-display text-xl font-bold text-white">
                  CMI
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-500 rounded-sm opacity-50"></div>
            </div>
            <div>
              <p className="font-display text-base sm:text-lg font-semibold text-white tracking-wide">
                Carolina Moldings
              </p>
              <p className="text-xs text-steel-400 font-medium tracking-wider uppercase">
                Since 1975
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="px-4 py-2 text-sm font-medium text-steel-300 hover:text-white transition-colors flex items-center gap-1"
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                    >
                      {item.name}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute top-full left-0 pt-2 ${productsOpen ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-200`}
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                    >
                      <div className="bg-steel-800 border border-steel-700/50 rounded-lg shadow-xl shadow-black/20 py-2 min-w-55">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-steel-300 hover:text-white hover:bg-steel-700/50 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-steel-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={scrollToContact}
              aria-label="Request a quote - navigate to contact form"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white text-sm font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-steel-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-steel-700/50">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-steel-300 hover:text-white"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {productsOpen && (
                      <div className="pl-4 border-l border-steel-700 ml-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-steel-400 hover:text-white"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-steel-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button
              onClick={scrollToContact}
              aria-label="Request a quote - navigate to contact form"
              className="block w-[calc(100%-2rem)] mx-4 mt-4 px-6 py-3 bg-primary-600 text-white text-center font-display font-semibold uppercase tracking-wider rounded-sm shadow-lg shadow-primary-600/30 cursor-pointer"
            >
              Request a Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
