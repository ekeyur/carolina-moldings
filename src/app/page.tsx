import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { MeterBrandCards } from "@/components/home/MeterBrandCards";
import { MeterPartsIndex } from "@/components/home/MeterPartsIndex";
import { SnapSealBand } from "@/components/home/SnapSealBand";
import { WhyCarolina } from "@/components/home/WhyCarolina";
import { CustomCTABand } from "@/components/home/CustomCTABand";

export const metadata: Metadata = {
  title: {
    absolute:
      "Carolina Moldings — Gas Meter Index Covers, Tamper Seals & Meter Parts",
  },
  description:
    "U.S. manufacturer of gas meter index covers for American/Honeywell, Rockwell/Xylem and Sprague/Itron meters, plus Snap Seal™ tamper systems, meter screws, and gas fittings. Family owned since 1975, same or next-day shipping.",
  alternates: { canonical: "/" },
};

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
