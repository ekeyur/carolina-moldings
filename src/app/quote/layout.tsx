import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Quote List",
  description:
    "Review the gas meter parts on your quote list and send them to Carolina Moldings for pricing.",
  alternates: { canonical: "/quote" },
  robots: { index: false, follow: true },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
