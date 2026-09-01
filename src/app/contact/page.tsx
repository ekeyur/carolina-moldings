"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("@/components/LocationMap"), { ssr: false });

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-navy py-14 md:py-20">
        <div className="max-w-310 mx-auto px-6">
          <p className="font-mono-brand text-carolina text-xs font-semibold tracking-[0.16em] uppercase mb-4">
            Contact Us
          </p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-[2.875rem] leading-[1.05] tracking-[-0.02em] mb-5">
            Talk to a real person
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-lg">
            We answer questions about prices and products over the phone Mon–Fri,
            9am–3pm EST. Give us a call or stop by the shop — we're glad to help.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-surface-2">
        <div className="max-w-310 mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 items-start">
          {/* Left: contact info card */}
          <div className="bg-white border border-line rounded-[6px] overflow-hidden">
            <div className="px-6 py-5 border-b border-line">
              <p className="font-mono-brand text-slate-500 text-[10px] font-semibold tracking-[0.14em] uppercase mb-2">
                Phone
              </p>
              <a
                href="tel:18005237475"
                className="font-heading font-bold text-navy text-[1.5rem] hover:text-carolina transition-colors block leading-tight"
              >
                1-800-523-7475
              </a>
              <p className="text-slate-500 text-sm mt-1.5">Mon–Fri · 9am–3pm EST</p>
            </div>

            <div className="px-6 py-5 border-b border-line">
              <p className="font-mono-brand text-slate-500 text-[10px] font-semibold tracking-[0.14em] uppercase mb-2">
                Email
              </p>
              <a
                href="mailto:contact@carolinamoldings.com"
                className="text-carolina hover:text-carolina/80 transition-colors text-sm font-medium break-all"
              >
                contact@carolinamoldings.com
              </a>
            </div>

            <div className="px-6 py-5">
              <p className="font-mono-brand text-slate-500 text-[10px] font-semibold tracking-[0.14em] uppercase mb-2">
                Address
              </p>
              <p className="text-navy text-sm font-medium leading-relaxed">
                3600 Woodpark Blvd, Suite A<br />
                Charlotte, NC 28206
              </p>
            </div>
          </div>

          {/* Right: map */}
          <div className="rounded-[6px] overflow-hidden border border-line w-full h-105 md:h-130 lg:h-150">
            <LocationMap />
          </div>
        </div>
      </div>
    </>
  );
}
