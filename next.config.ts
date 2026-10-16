import type { NextConfig } from "next";
import catalog from "./src/data/carolina-products.json";
import { legacyProductSlug, productSlug } from "./src/lib/slug";

/** 301 old name-only product URLs to the new compatibility slugs. */
const productRedirects = (
  catalog.products as { name: string; fits?: string }[]
)
  .map((p) => ({ from: legacyProductSlug(p), to: productSlug(p) }))
  .filter((r) => r.from !== r.to)
  .map((r) => ({
    source: `/catalog/${r.from}`,
    destination: `/catalog/${r.to}`,
    permanent: true,
  }));

/** Discontinued products — send their old URLs to the closest live page. */
const discontinuedRedirects = [
  "/catalog/a-40g-index-cover",
  "/catalog/a-40g-index-cover-fits-itron-40g-ert-for-american-meters",
].map((source) => ({
  source,
  destination: "/catalog/brand/american-honeywell",
  permanent: true,
}));

/** Slugs that changed when a product was renamed or its fitment list updated. */
const renamedRedirects = [
  // A-101 / A-101 OS: added AM-250, AT-210, AT-250 to the fitment list.
  [
    "a-101-index-cover-for-american-ac-250-al-425-and-ac-630-meters-fits-american-ac-250-al-425-and-ac-630-meters",
    "a-101-index-cover-for-american-ac-250-am-250-at-210-at-250-al-425-and-ac-630-meters-fits-american-ac-250-am-250-at-210-at-250-al-425",
  ],
  [
    "a-101-index-cover-for-american-ac-250-al-425-and-ac-630-meters",
    "a-101-index-cover-for-american-ac-250-am-250-at-210-at-250-al-425-and-ac-630-meters-fits-american-ac-250-am-250-at-210-at-250-al-425",
  ],
  [
    "a-101-old-style-index-cover-fits-american-ac-250-al-425-and-ac-630-meters",
    "a-101-old-style-index-cover-fits-american-ac-250-am-250-at-210-at-250-al-425",
  ],
  // Commercial Tamper Kits renamed to Commercial Security Kits.
  [
    "a-103-commercial-tamper-kit-fits-american-35b-500b-al-800-al5000",
    "a-103-commercial-security-kit-fits-american-35b-500b-al-800-al5000",
  ],
  [
    "a-103-commercial-tamper-kit",
    "a-103-commercial-security-kit-fits-american-35b-500b-al-800-al5000",
  ],
  [
    "r-105-commercial-tamper-kit-fits-rockwell-r-415-750-3000",
    "r-105-commercial-security-kit-fits-rockwell-r-415-750-3000",
  ],
  [
    "r-105-commercial-tamper-kit",
    "r-105-commercial-security-kit-fits-rockwell-r-415-750-3000",
  ],
].map(([from, to]) => ({
  source: `/catalog/${from}`,
  destination: `/catalog/${to}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "*.vercel-storage.com" },
    ],
  },
  async redirects() {
    return [...productRedirects, ...renamedRedirects, ...discontinuedRedirects];
  },
};

export default nextConfig;
