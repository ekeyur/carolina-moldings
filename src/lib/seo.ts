import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const DEFAULT_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: SITE_NAME,
};

/** Trim to a search-snippet-friendly length, breaking on a word boundary. */
export function clampDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : cut.length).replace(/[,;:\s—-]+$/, "")}…`;
}

/**
 * Per-page metadata with matching Open Graph + Twitter tags.
 *
 * Next.js replaces (doesn't merge) `openGraph`/`twitter` from the root layout,
 * so a page that sets only `title` would otherwise share the homepage's
 * og:title and og:url. Route every page through this helper.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  keywords,
  absoluteTitle = false,
  noindex = false,
}: {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/faq". */
  path: string;
  /** Site-relative or absolute image URL; defaults to /og.png. */
  image?: string;
  keywords?: string[];
  /** Skip the "%s | Carolina Moldings" title template. */
  absoluteTitle?: boolean;
  noindex?: boolean;
}): Metadata {
  const desc = clampDescription(description);
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const images = image ? [{ url: image, alt: title }] : [DEFAULT_IMAGE];
  const socialTitle = absoluteTitle ? title : `${title} | Carolina Moldings`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: desc,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url,
      title: socialTitle,
      description: desc,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: desc,
      images: images.map((i) => i.url),
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
