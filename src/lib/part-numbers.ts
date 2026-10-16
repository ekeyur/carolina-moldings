/**
 * Alternate part numbers — cross-references and common spellings people type
 * into Google ("A101", "A 101", "SS1"). Dependency-free so client components
 * can use it for search without pulling in the catalog JSON.
 */

type PartNumbered = { partNo: string; altPartNos?: string[] };

/** Lowercase with all separators stripped, for loose matching. */
export function normalizePartNo(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Spacing / hyphenation variants of a part number ("A-101 OS" → "A101OS", "A 101 OS", "A-101-OS"). */
function spellingVariants(partNo: string): string[] {
  if (!/\d/.test(partNo)) return [];
  const tokens = partNo.split(/[\s\-#]+/).filter(Boolean);
  if (tokens.length < 2) return [];
  const variants = [tokens.join(" "), tokens.join("-")];
  // "A101" is a real search; "PCA3Hinged" isn't.
  if (tokens.every((t) => t.length <= 4)) variants.unshift(tokens.join(""));
  return variants;
}

/**
 * Explicit cross-reference numbers from the data first, then generated
 * spelling variants — deduped, never including the primary part number.
 */
export function alternatePartNumbers(product: PartNumbered): string[] {
  const seen = new Set([product.partNo.toLowerCase()]);
  const out: string[] = [];
  for (const alt of [
    ...(product.altPartNos ?? []),
    ...spellingVariants(product.partNo),
  ]) {
    const key = alt.trim().toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(alt.trim());
  }
  return out;
}

/** True if `query` matches the part number or any alternate, ignoring separators. */
export function matchesPartNumber(product: PartNumbered, query: string): boolean {
  const q = normalizePartNo(query);
  if (!q) return false;
  return [product.partNo, ...(product.altPartNos ?? [])].some((n) =>
    normalizePartNo(n).includes(q),
  );
}
