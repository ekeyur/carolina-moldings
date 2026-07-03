import type { Product } from "@/types/product";

/**
 * Maps a catalog product id (index cover or tamper cup) to the meter-screw
 * part numbers ("fits" rows) that mount it, transcribed from the shop's
 * screw reference sheet.
 */
export const screwCompatibility: Record<string, string[]> = {
  a101: ["30-S"],
  a101os: ["30-S"],
  a103: ["32-S", "33-S"],
  a103os: ["32-S", "33-S"],
  r103: ["51-S", "53-S"],
  r103os: ["51-S", "53-S"],
  r104: ["41-S"],
  r105: ["42-S", "44-S"],
  s105: ["51-S", "52-S"],
  cup1: ["43-S"],
  cup2: ["31-S"],
  cup8: ["33-S"],
  cup3: ["34-S", "35-S", "42-S"],
};

export function getRecommendedScrews(
  productId: string,
  products: Product[],
): Product[] {
  const partNos = screwCompatibility[productId];
  if (!partNos) return [];
  return products.filter(
    (p) => p.cat === "screws" && partNos.includes(p.partNo),
  );
}

/** Suggests screws for a set of product ids already in a quote, skipping any screw already present. */
export function getSuggestedScrews(
  productIds: string[],
  products: Product[],
): Product[] {
  const partNos = new Set(productIds.flatMap((id) => screwCompatibility[id] || []));
  if (partNos.size === 0) return [];
  return products.filter(
    (p) => p.cat === "screws" && partNos.has(p.partNo) && !productIds.includes(p.id),
  );
}
