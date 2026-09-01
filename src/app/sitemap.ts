import type { MetadataRoute } from "next";
import {
  METER_BRANDS,
  categories,
  productSlug,
  products,
} from "@/lib/products";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "/", priority: 1 },
    { path: "/catalog", priority: 0.9 },
    { path: "/nuts-and-swivels", priority: 0.8 },
    { path: "/faq", priority: 0.6 },
    { path: "/about", priority: 0.5 },
    { path: "/contact", priority: 0.5 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));

  const brandRoutes: MetadataRoute.Sitemap = METER_BRANDS.map((b) => ({
    url: `${SITE_URL}/catalog/brand/${b.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${SITE_URL}/catalog/category/${c.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE_URL}/catalog/${productSlug(p)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
    images: p.images?.[0] ? [`${SITE_URL}${p.images[0]}`] : undefined,
  }));

  return [
    ...staticRoutes,
    ...brandRoutes,
    ...categoryRoutes,
    ...productRoutes,
  ];
}
