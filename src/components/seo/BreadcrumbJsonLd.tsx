import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/site";

/**
 * BreadcrumbList structured data. Pass the trail from the home page down to
 * the current page; paths are joined to SITE_URL.
 */
export function BreadcrumbJsonLd({
  trail,
}: {
  trail: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((step, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: step.name,
          item: `${SITE_URL}${step.path === "/" ? "" : step.path}`,
        })),
      }}
    />
  );
}
