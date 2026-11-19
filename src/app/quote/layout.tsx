import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Your Quote List",
  description:
    "Review the gas meter parts on your quote list and send them to Carolina Moldings for pricing.",
  path: "/quote",
  noindex: true,
});

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
