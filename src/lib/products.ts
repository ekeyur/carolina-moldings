import catalogData from "@/data/carolina-products.json";
import type { CatalogData, Category, Product } from "@/types/product";

const data = catalogData as CatalogData;

export const products = data.products;
export const categories = data.categories;
export const meterBrands = data.meterBrands;

/** URL-safe, keyword-rich slug derived from a human string. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[™®]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function productSlug(product: Product): string {
  return slugify(product.name);
}

const bySlug = new Map<string, Product>(
  products.map((p) => [productSlug(p), p]),
);

export function getProductBySlug(slug: string): Product | undefined {
  return bySlug.get(slug);
}

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

/** Same brand first, then same category, capped at `limit`. */
export function relatedProducts(product: Product, limit = 4): Product[] {
  const scored = products
    .filter((p) => p.id !== product.id)
    .map((p) => ({
      p,
      score:
        (p.brand && p.brand === product.brand ? 2 : 0) +
        (p.cat === product.cat ? 1 : 0),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((x) => x.p);
}

/* ------------------------------------------------------------------ *
 * Meter-brand landing pages
 * ------------------------------------------------------------------ */

export type MeterBrand = {
  slug: string;
  /** Full label as used in the product data ("American / Honeywell"). */
  name: string;
  /** Meter models this line covers, for copy + meta. */
  models: string;
  /** Matches the brand anywhere in a product's fits / name / desc. */
  match: RegExp;
};

export const METER_BRANDS: MeterBrand[] = [
  {
    slug: "american-honeywell",
    name: "American / Honeywell",
    models:
      "American AL-175, AL-425, AL-800, 35B–500B, and Honeywell 40G / 100G",
    match: /american|honeywell|\bAL[-\s]?\d|\b35B\b|\b500B\b/i,
  },
  {
    slug: "rockwell-xylem",
    name: "Rockwell / Xylem",
    models: "Rockwell / Xylem 150, 415, R-750–R5000, and 40G / 100G",
    match: /rockwell|xylem|\bR[-\s]?\d/i,
  },
  {
    slug: "sprague-itron",
    name: "Sprague / Itron",
    models: "Sprague 175–400 and Itron 40G / 100G endpoints",
    match: /sprague|itron/i,
  },
];

export function getMeterBrand(slug: string): MeterBrand | undefined {
  return METER_BRANDS.find((b) => b.slug === slug);
}

function brandHaystack(p: Product): string {
  return `${p.fits ?? ""} ${p.name} ${p.desc ?? ""}`;
}

export function productsForBrand(brand: MeterBrand): Product[] {
  return products.filter((p) => brand.match.test(brandHaystack(p)));
}

/** The first meter brand a product is associated with, if any. */
export function primaryBrandFor(product: Product): MeterBrand | undefined {
  if (product.brand) {
    const exact = METER_BRANDS.find((b) => b.name === product.brand);
    if (exact) return exact;
  }
  return METER_BRANDS.find((b) => b.match.test(brandHaystack(product)));
}

/* ------------------------------------------------------------------ *
 * Category landing pages
 * ------------------------------------------------------------------ */

export type CategorySeo = {
  /** Overrides Category.name for the <title> / <h1>. */
  title: string;
  intro: string;
  keywords: string[];
};

export const CATEGORY_SEO: Record<string, CategorySeo> = {
  index: {
    title: "Gas Meter Index Covers & Index Boxes",
    intro:
      "Replacement index covers — also called index boxes — for American / Honeywell, Rockwell / Xylem, Sprague and Itron gas meters. Molded in UV-stable polycarbonate in the USA, available bare or with a pre-applied Sure Seal™ gasket, and ready for Snap Seal™ tamper plugs.",
    keywords: [
      "gas meter index covers",
      "meter index box",
      "index box cover",
      "polycarbonate index cover",
      "American AL-175 index cover",
      "Rockwell index box",
    ],
  },
  tamper: {
    title: "Snap Seal™ Tamper Seals, Plugs & Meter Locks",
    intro:
      "The Snap Seal™ tamper-evident system: snap-on seals, security cups, and tamper plugs that lock over the meter connection and can't be removed without visibly breaking. Color-coded and sequentially numbered for inventory control. “You can't steal from Snap Seal.”",
    keywords: [
      "gas meter tamper seals",
      "meter security seals",
      "Snap Seal",
      "meter tamper plugs",
      "gas meter locks",
      "tamper evident meter seal",
    ],
  },
  screws: {
    title: "Gas Meter Screws — Index, Bonnet & Tamper-Proof",
    intro:
      "Brass and stainless index screws, bonnet screws, and drilled-head sealing screws for American, Rockwell, Sprague and Itron gas meters. Matched by thread size and head type to every index cover we make.",
    keywords: [
      "gas meter screws",
      "meter cover screws",
      "drilled head sealing screws",
      "index cover screws",
      "tamper proof meter screws",
      "brass meter screws",
    ],
  },
  paint: {
    title: "Gas Meter Paint Covers & Register Masks",
    intro:
      "Snap-on paint covers and register masks that keep the meter index and dials clean while crews repaint meter sets in the field. Sized for American, Rockwell, Sprague and Itron registers, reusable, and fast to fit.",
    keywords: [
      "gas meter paint covers",
      "meter register mask",
      "paint mask gas meter",
      "meter dial cover for painting",
    ],
  },
  misc: {
    title: "Gas Meter Gaskets, Caps, Plugs & Shop Supplies",
    intro:
      "The small parts that keep a meter shop running — cork and O-ring gaskets, dust caps, connection plugs, and test fittings for gas meter maintenance and rebuilds.",
    keywords: [
      "gas meter gaskets",
      "meter dust caps",
      "gas meter connection plugs",
      "meter test fittings",
      "meter shop supplies",
    ],
  },
};

export function productsForCategory(catId: string): Product[] {
  return products.filter((p) => p.cat === catId);
}

/** All products grouped by category, in catalog order — for the flat index. */
export function productsByCategory(): { category: Category; items: Product[] }[] {
  return categories
    .map((category) => ({
      category,
      items: products.filter((p) => p.cat === category.id),
    }))
    .filter((g) => g.items.length > 0);
}
