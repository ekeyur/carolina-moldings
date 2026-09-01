/** Canonical origin for the site — override per-environment with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://carolinamoldings.com"
).replace(/\/+$/, "");

export const SITE_NAME = "Carolina Moldings, Inc.";

export const SITE_PHONE = "+1-800-523-7475";
export const SITE_EMAIL = "contact@carolinamoldings.com";

export const SITE_ADDRESS = {
  streetAddress: "3600 Woodpark Blvd, Suite A",
  addressLocality: "Charlotte",
  addressRegion: "NC",
  postalCode: "28206",
  addressCountry: "US",
} as const;

/** Approx. coordinates for the Charlotte facility — also drives the contact-page map. */
export const SITE_GEO = { latitude: 35.2667, longitude: -80.8238 } as const;

export const SITE_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Carolina Moldings, 3600 Woodpark Blvd, Charlotte, NC 28206");

export const SITE_HOURS = "Mon–Fri · 9am–3pm EST";

/**
 * Public profiles that unambiguously represent this business — used for the
 * `sameAs` field in structured data. Add real URLs as they exist; leave empty
 * rather than guessing.
 */
export const SITE_SAME_AS: string[] = [];
