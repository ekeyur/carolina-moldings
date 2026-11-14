"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";

type Consent = "granted" | "denied";

const STORAGE_KEY = "cmi-cookie-consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "cmi:open-cookie-settings";

function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function writeConsent(value: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // storage blocked — choice applies for this page view only
  }
}

/**
 * Cookie consent banner. Optional analytics only loads after the visitor
 * accepts. The quote list's local storage is strictly necessary and is not
 * gated.
 */
export function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    if (!stored) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const choose = (value: Consent) => {
    writeConsent(value);
    setConsent(value);
    setOpen(false);
  };

  return (
    <>
      {consent === "granted" && (
        // beforeSend re-checks storage so a later "Decline" stops events
        // immediately, even though the already-loaded script stays in memory.
        <Analytics beforeSend={(e) => (readConsent() === "granted" ? e : null)} />
      )}

      {open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie preferences"
          className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 pointer-events-none"
        >
          <div className="pointer-events-auto mx-auto max-w-310 rounded-[6px] border border-line bg-white shadow-lg p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <p className="text-slate-600 text-sm leading-relaxed flex-1">
              We use essential browser storage to keep your quote list working.
              With your permission, we&rsquo;d also like to use cookieless,
              privacy-friendly analytics to understand which pages are useful.
              We never use advertising or cross-site tracking.{" "}
              <Link href="/cookies" className="text-carolina hover:underline">
                Cookie Policy
              </Link>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="inline-flex items-center justify-center rounded-[3px] border border-line text-navy hover:bg-surface font-semibold px-5 py-2.5 text-sm transition-colors"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="inline-flex items-center justify-center rounded-[3px] bg-navy hover:bg-navy/90 text-white font-semibold px-5 py-2.5 text-sm transition-colors"
              >
                Accept analytics
              </button>
            </div>
          </div>
        </div>
      )}

      {!open && consent !== null && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Cookie settings"
          title="Cookie settings"
          className="fixed bottom-4 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy shadow-md transition-colors hover:bg-surface hover:text-carolina focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carolina cursor-pointer"
        >
          <Cookie className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
    </>
  );
}

/** Footer link that reopens the consent banner. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className={className}
    >
      Cookie settings
    </button>
  );
}
