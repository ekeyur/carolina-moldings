/**
 * Dependency-free slug helpers. Kept separate from `products.ts` so client
 * bundles and `next.config.ts` can import them without pulling in the catalog
 * JSON.
 */

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[™®]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type SluggableProduct = { name: string; fits?: string };

/**
 * Human-readable `fits` string. The data uses an em-dash to mean
 * "<endpoint> on <meter line> meters" — spell that out; en-dashes are numeric
 * ranges and are left alone.
 */
export function formatFits(fits: string): string {
  const parts = fits.split(/\s*—\s*/).map((s) => s.trim());
  return parts.length === 2 ? `${parts[0]} for ${parts[1]} meters` : fits;
}

/** Turn a `fits` string into a readable slug fragment. */
function fitsSlug(fits: string): string {
  let s = slugify(formatFits(fits));
  if (s.length > 50) s = s.slice(0, 50).replace(/-[^-]*$/, "");
  return s;
}

/**
 * Canonical product slug — the product name plus its meter compatibility, e.g.
 * `a-100g-index-cover-fits-itron-100g-endpoints-for-american-meters`.
 */
export function productSlug(product: SluggableProduct): string {
  const base = slugify(product.name);
  const fits = product.fits ? fitsSlug(product.fits) : "";
  return fits ? `${base}-fits-${fits}` : base;
}

/** The pre-compatibility slug (just the name). Used to redirect old URLs. */
export function legacyProductSlug(product: SluggableProduct): string {
  return slugify(product.name);
}
