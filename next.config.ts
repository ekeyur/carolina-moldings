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

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "*.vercel-storage.com" },
    ],
  },
  async redirects() {
    return [...productRedirects, ...discontinuedRedirects];
  },
};

export default nextConfig;
