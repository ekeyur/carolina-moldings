import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Carolina Moldings, Inc. | Gas Meter Index Covers & Tamper Plugs",
    template: "%s | Carolina Moldings",
  },
  description:
    "Leading manufacturer of gas meter index covers and tamper plugs since 1975. Snap Seal tamper-evident technology for American, Rockwell, Itron meters. You can't steal from Snap Seal!",
  keywords:
    "gas meter index covers, tamper plugs, Snap Seal, tamper-evident security, index covers, American meter covers, Rockwell meter covers, Itron meter covers, Honeywell meter covers, Sensus meter covers, Sprague meter covers, A-101, A-103, A-40G, A-100G, R-103, R-104, R-105, R-40G, R-100G, I-100G, S-105, Tophat, TS Plug, screw cups, meter screws, paint covers, Sure Seal gasket, utility meter products, gas meter accessories",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Carolina Moldings, Inc.",
    title: "Carolina Moldings | Gas Meter Index Covers & Tamper Plugs",
    description:
      "Leading manufacturer of gas meter index covers and tamper plugs since 1975. Trusted by utilities nationwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${oswald.variable} ${sourceSans.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
