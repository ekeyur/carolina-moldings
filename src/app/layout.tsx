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
  title: "Carolina Moldings, Inc. | Gas Meter Covers & Tamper Systems",
  description:
    "Family-owned manufacturer of high-quality gas meter index covers, tamper systems, and accessories since 1975. You can't steal from Snap Seal™.",
  keywords:
    "Gas Meter Covers, Index Covers, Tamper Systems, Snap Seal, meter screws, American meter, Rockwell, Itron, Sprague, Honeywell, Sensus, A-101, A-101 OS, A-103, A-103 OS, A-40G, A-100G, R-103, R-104, R-105, R-40G, R-100G, I-100G, S-105, Tophat, TS Plug, #1 Cup, #2 Cup, #3 Cup, Hex Cup, #8 Cup, Tophat Cup, 30-S, 31-S, 32-S, 33-S, 34-S, 35-S, 36-S, 37-S, 40-S, 41-S, 42-S, 43-S, 44-S, 45-S, 51-S, 52-S, 54-S, Paint Covers, CEP, IDC, M-110-OS, RV 250, Sure Seal, gas meter accessories, utility meter products",
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
