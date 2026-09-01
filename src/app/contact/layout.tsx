import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact — Talk to a Real Person",
  description:
    "Call Carolina Moldings at 1-800-523-7475, Mon–Fri 9am–3pm EST, for pricing and product questions, or visit the shop at 3600 Woodpark Blvd, Charlotte, NC 28206.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      {children}
    </>
  );
}
