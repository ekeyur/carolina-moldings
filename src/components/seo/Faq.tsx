import { JsonLd } from "./JsonLd";

export type FaqItem = { q: string; a: string };

/**
 * Visible FAQ list + FAQPage structured data. Use at most one <Faq> per page
 * (Google allows a single FAQPage per URL) and keep the answers visible.
 */
export function Faq({
  items,
  heading,
  className = "",
}: {
  items: FaqItem[];
  heading?: string;
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <div className={className}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }}
      />
      {heading && (
        <h2 className="font-heading font-extrabold text-navy text-2xl sm:text-[1.75rem] tracking-[-0.01em] mb-6">
          {heading}
        </h2>
      )}
      <dl className="border-t border-line">
        {items.map((it) => (
          <div key={it.q} className="border-b border-line py-5">
            <dt className="font-heading font-bold text-navy text-base sm:text-lg leading-snug">
              {it.q}
            </dt>
            <dd className="text-slate-600 text-sm leading-relaxed mt-2 max-w-3xl">
              {it.a}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
