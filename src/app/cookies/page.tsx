import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { CookieSettingsButton } from "@/components/layout/CookieConsent";
import { SITE_ADDRESS, SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How carolinamoldings.com uses cookies, browser storage, and similar technologies — and how you can control them.",
  alternates: { canonical: "/cookies" },
};

const LAST_UPDATED = "November 13, 2026";

type Row = {
  name: string;
  provider: string;
  type: string;
  purpose: string;
  duration: string;
};

const technologies: Row[] = [
  {
    name: "cmi-quote",
    provider: "Carolina Moldings (this site)",
    type: "Browser local storage (strictly necessary)",
    purpose:
      "Remembers the parts and quantities you add to your quote list so the list survives page reloads. It stays on your device and is only sent to us if you submit a quote request.",
    duration:
      "Until you submit or clear your quote list, or clear your browser data",
  },
  {
    name: "cmi-cookie-consent",
    provider: "Carolina Moldings (this site)",
    type: "Browser local storage (strictly necessary)",
    purpose:
      "Remembers whether you accepted or declined optional analytics so we don't ask again on every page.",
    duration: "Until you change your choice or clear your browser data",
  },
  {
    name: "Site analytics",
    provider: "Our website hosting provider",
    type: "Cookieless analytics (optional — only with your consent)",
    purpose:
      "Loads only if you click “Accept analytics.” Counts page views and gives us aggregate information such as which pages are visited, referring sites, country, browser, and device type. It does not set cookies, and visitors are identified only by a temporary hash of the request that resets daily and cannot be used to track you across sites.",
    duration: "No cookie stored; the daily hash is discarded after 24 hours",
  },
  {
    name: "Map tiles",
    provider: "CARTO / OpenStreetMap",
    type: "Third-party content (functional)",
    purpose:
      "Displays the map of our Charlotte facility on the Contact page. Your browser requests map images directly from CARTO's servers, which receive your IP address and standard browser information as part of that request.",
    duration: "Governed by CARTO's own policies",
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-heading font-bold text-navy text-xl mb-3">{title}</h2>
      <div className="space-y-3 text-slate-600 text-[15px] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function CookiePolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Cookie Policy", path: "/cookies" },
        ]}
      />

      <div className="bg-navy py-14 md:py-20">
        <div className="max-w-310 mx-auto px-6">
          <p className="font-mono-brand text-carolina text-xs font-semibold tracking-[0.16em] uppercase mb-4">
            Legal
          </p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-[2.875rem] leading-[1.05] tracking-[-0.02em] mb-5">
            Cookie Policy
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl">
            Last updated {LAST_UPDATED}
          </p>
        </div>
      </div>

      <div className="bg-surface-2 py-14">
        <div className="max-w-310 mx-auto px-6">
          <div className="max-w-3xl rounded-[6px] border border-line bg-white p-6 sm:p-10">
            <Section title="Summary">
              <p>
                <strong className="text-navy">
                  carolinamoldings.com does not use advertising cookies,
                  tracking pixels, or cross-site tracking, and we do not sell
                  your information.
                </strong>{" "}
                We use a small amount of browser storage to keep your quote list
                working and, only if you agree, cookieless analytics to
                understand how the site is used. This policy explains each of
                these and how you can control them.
              </p>
            </Section>

            <Section title="What are cookies and similar technologies?">
              <p>
                Cookies are small text files a website stores in your browser.
                Similar technologies include browser &ldquo;local
                storage,&rdquo; which lets a site save information on your
                device, and requests to third-party servers that load content
                such as maps. In this policy, &ldquo;cookies&rdquo; refers to
                all of these.
              </p>
            </Section>

            <Section title="What we use and why">
              <div className="overflow-x-auto -mx-2 px-2">
                <table className="w-full text-left text-sm border-collapse min-w-160">
                  <thead>
                    <tr className="border-b border-line text-navy">
                      <th className="py-2 pr-4 font-semibold">Name</th>
                      <th className="py-2 pr-4 font-semibold">Provider</th>
                      <th className="py-2 pr-4 font-semibold">Type</th>
                      <th className="py-2 pr-4 font-semibold">Purpose</th>
                      <th className="py-2 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technologies.map((t) => (
                      <tr
                        key={t.name}
                        className="border-b border-line align-top"
                      >
                        <td className="py-3 pr-4 font-mono-brand text-navy text-xs">
                          {t.name}
                        </td>
                        <td className="py-3 pr-4">{t.provider}</td>
                        <td className="py-3 pr-4">{t.type}</td>
                        <td className="py-3 pr-4">{t.purpose}</td>
                        <td className="py-3">{t.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Like any website, our hosting provider&rsquo;s infrastructure
                processes your IP address and request details to deliver pages
                and protect against abuse. Fonts are served from our own domain,
                so they do not contact Google or other font providers.
              </p>
            </Section>

            <Section title="Forms">
              <p>
                When you submit a quote request or contact form, the details you
                enter (such as your name, company, email, phone, and the parts
                requested) are sent to us by email through our email provider,
                so we can respond. Submitting a form does not set a cookie.
              </p>
            </Section>

            <Section title="How to control cookies">
              <p>
                When you first visit, a banner asks whether to allow optional
                analytics. Analytics stays off unless you accept. You can change
                your choice at any time:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <CookieSettingsButton className="text-carolina hover:underline cursor-pointer" />{" "}
                  (also in the footer, or the round cookie button in the
                  bottom-left corner of every page) reopens the banner so you
                  can accept or decline.
                </li>
                <li>
                  Clear your quote list from the{" "}
                  <Link href="/quote" className="text-carolina hover:underline">
                    quote page
                  </Link>
                  , or clear this site&rsquo;s data in your browser settings.
                </li>
                <li>
                  Block or delete cookies and site data in your browser. Most
                  browsers explain how under &ldquo;Privacy&rdquo; or
                  &ldquo;Site settings.&rdquo; Blocking local storage will stop
                  the quote list from remembering your items.
                </li>
                <li>
                  Use a content blocker to prevent analytics or map requests.
                  The rest of the site will continue to work.
                </li>
              </ul>
              <p>
                We do not sell personal information or share it for targeted
                advertising, so there is nothing to opt out of. Browser privacy
                signals such as Global Privacy Control require no further action
                on this site.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                If we add new cookies or similar technologies, we will update
                this page and the &ldquo;Last updated&rdquo; date above before
                they go live.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                Questions about this policy or your information? Contact{" "}
                {SITE_NAME}:
              </p>
              <p className="text-navy">
                {SITE_ADDRESS.streetAddress}
                <br />
                {SITE_ADDRESS.addressLocality}, {SITE_ADDRESS.addressRegion}{" "}
                {SITE_ADDRESS.postalCode}
                <br />
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="text-carolina hover:underline"
                >
                  {SITE_EMAIL}
                </a>
                <br />
                <a href="tel:18005237475" className="hover:text-carolina">
                  1-800-523-7475
                </a>
              </p>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}
