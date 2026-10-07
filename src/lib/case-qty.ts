import catalogData from "@/data/carolina-products.json";
import type { CatalogData } from "@/types/product";

// Products packed by the case (pack like "105 / Case") are quoted in whole cases.
const caseQtyById = new Map<string, number>();
for (const product of (catalogData as CatalogData).products) {
  const match = product.pack?.match(/^(\d+)\s*\/\s*Case$/i);
  if (match) caseQtyById.set(product.id, parseInt(match[1], 10));
}

export function getCaseQty(id: string): number | undefined {
  return caseQtyById.get(id);
}
