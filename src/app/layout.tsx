import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { QuoteProvider } from "@/context/QuoteContext";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_GEO,
  SITE_MAP_URL,
  SITE_NAME,
  SITE_PHONE,
  SITE_SAME_AS,
  SITE_URL,
} from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const TITLE = "Carolina Moldings, Inc. — Gas Meter Index Covers & Tamper Seals";
const DESCRIPTION =
  "Family-owned U.S. manufacturer of gas meter index covers, Snap Seal™ tamper systems, meter screws, paint covers, and gas fittings. Same or next-day shipping since 1975.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Carolina Moldings",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "gas meter index covers",
    "meter index covers",
    "gas meter parts",
    "tamper seals",
    "Snap Seal",
    "gas meter tamper system",
    "meter screws",
    "paint covers",
    "American AL-175 index cover",
    "Rockwell meter parts",
    "Sprague Itron index cover",
    "gas meter swivels",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QuoteProvider>
          <UtilityBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </QuoteProvider>
        <Analytics />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            "@id": `${SITE_URL}/#business`,
            name: SITE_NAME,
            alternateName: "Carolina Moldings",
            url: SITE_URL,
            logo: `${SITE_URL}/branding/logo-primary.svg`,
            image: `${SITE_URL}/og.png`,
            description: DESCRIPTION,
            foundingDate: "1975",
            slogan: "You can't steal from Snap Seal™",
            email: SITE_EMAIL,
            telephone: SITE_PHONE,
            currenciesAccepted: "USD",
            address: {
              "@type": "PostalAddress",
              ...SITE_ADDRESS,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: SITE_GEO.latitude,
              longitude: SITE_GEO.longitude,
            },
            hasMap: SITE_MAP_URL,
            areaServed: { "@type": "Country", name: "United States" },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "15:00",
            },
            sameAs: SITE_SAME_AS.length ? SITE_SAME_AS : undefined,
            contactPoint: {
              "@type": "ContactPoint",
              telephone: SITE_PHONE,
              contactType: "sales",
              areaServed: "US",
              availableLanguage: "English",
            },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            publisher: { "@id": `${SITE_URL}/#business` },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITE_URL}/catalog?q={search_term_string}`,
              },
              "query-input": "required name=search_term_string",
            },
          }}
        />
      </body>
    </html>
  );
}
