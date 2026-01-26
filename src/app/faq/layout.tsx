import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Gas Meter Index Covers & Tamper Plugs | Carolina Moldings",
  description:
    "Find answers to common questions about our gas meter index covers, tamper plugs, Snap Seal systems, ordering, and shipping. Family-owned quality since 1975.",
  keywords:
    "FAQ, gas meter questions, index covers FAQ, tamper plugs questions, Snap Seal FAQ, ordering help, Carolina Moldings support",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
