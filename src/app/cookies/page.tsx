import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { CookieSettingsButton } from "@/components/layout/CookieConsent";
import { SITE_ADDRESS, SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How carolinamoldings.com uses cookies and similar technologies, and how you can control them.",
  alternates: { canonical: "/cookies" },
};

const LAST_UPDATED = "November 14, 2026";

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
                  We do not use advertising cookies or cross-site tracking, and
                  we do not sell your information.
                </strong>
              </p>
            </Section>

            <Section title="What we use">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-navy">Essential storage.</strong>{" "}
                  We save a small amount of information in your browser so your
                  quote list and cookie choice are remembered. It stays on your
                  device.
                </li>
                <li>
                  <strong className="text-navy">
                    Analytics (optional).
                  </strong>{" "}
                  Only if you accept, we use cookieless analytics to count page
                  visits. It does not identify you or track you across other
                  websites.
                </li>
                <li>
                  <strong className="text-navy">Map.</strong> The map on our
                  Contact page is loaded from a third-party map provider.
                </li>
              </ul>
            </Section>

            <Section title="Changing your choice">
              <p>
                Analytics stays off unless you accept. You can change your
                choice at any time with the round cookie button in the
                bottom-left corner, or here:{" "}
                <CookieSettingsButton className="text-carolina hover:underline cursor-pointer" />
                . You can also clear or block site data in your browser
                settings.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                If we change how we use cookies, we will update this page and
                the date above.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                Questions? Contact {SITE_NAME}:
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
