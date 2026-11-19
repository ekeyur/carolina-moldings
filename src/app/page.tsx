import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { MeterBrandCards } from "@/components/home/MeterBrandCards";
import { MeterPartsIndex } from "@/components/home/MeterPartsIndex";
import { SnapSealBand } from "@/components/home/SnapSealBand";
import { WhyCarolina } from "@/components/home/WhyCarolina";
import { CustomCTABand } from "@/components/home/CustomCTABand";

export const metadata: Metadata = pageMetadata({
  title:
    "Carolina Moldings — Gas Meter Index Covers, Security Seals & Meter Parts",
  description:
    "U.S.-made gas meter index covers for American, Rockwell and Itron meters, plus Snap Seal™ security seals and meter screws. Family owned since 1975.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <MeterBrandCards />
      <MeterPartsIndex />
      <SnapSealBand />
      <WhyCarolina />
      <CustomCTABand />
    </>
  );
}
