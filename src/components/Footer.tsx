"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navigation = {
  products: [
    { name: "Full Catalog", href: "/products/full-catalog" },
    { name: "Tamper System", href: "/products/tamper-system" },
    { name: "Index Covers", href: "/products/index-covers" },
    { name: "Meter Screws", href: "/products/meter-screws" },
    { name: "Paint Covers", href: "/products/paint-covers" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  meterBrands: [
    { name: "American / Honeywell", href: "/products/american-index-covers" },
    { name: "Rockwell / Sensus", href: "/products/rockwell-index-covers" },
    { name: "Sprague / Itron", href: "/products/itron-index-covers" },
  ],
};

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/#contact");
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  };

  return (
    <footer className="bg-primary-500 border-t border-primary-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-primary-600">
                    CMI
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white/30 rounded-sm opacity-60"></div>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-white tracking-wide">
                  Carolina Moldings
                </p>
                <p className="text-xs text-white/60 font-medium tracking-wider uppercase">
                  Since 1975
                </p>
              </div>
            </Link>
            <p className="text-white/75 text-sm leading-relaxed max-w-sm mb-6">
              One of the leading providers and creators of gas industry
              materials. You can&apos;t steal from{" "}
              <span className="text-accent-400 font-semibold">Snap Seal™</span>!
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <p className="text-white/75">
                <span className="text-white/75">Address:</span> 3600 Woodpark
                Blvd. Suite A, Charlotte NC, 28206
              </p>
              <p className="text-white/75">
                <span className="text-white/75">Phone:</span>{" "}
                <a
                  href="tel:18005237475"
                  className="hover:text-white transition-colors"
                >
                  1-800-523-7475
                </a>
              </p>
              <p className="text-white/75">
                <span className="text-white/75">Email:</span>{" "}
                <a
                  href="mailto:contact@carolinaMoldings.com"
                  className="hover:text-white transition-colors"
                >
                  contact@carolinamoldings.com
                </a>
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Meter Brands */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Meter Brands
            </h3>
            <ul className="space-y-3">
              {navigation.meterBrands.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  {item.href === "#contact" ? (
                    <button
                      onClick={scrollToContact}
                      className="text-sm text-white/75 hover:text-white transition-colors cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-white/75 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/75">
            © {new Date().getFullYear()} Carolina Moldings, Inc. All rights
            reserved.
          </p>
          <p className="text-sm text-white/75">
            You can&apos;t steal from{" "}
            <span className="text-accent-400 font-semibold">Snap Seal™</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
