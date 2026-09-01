/**
 * Renders a JSON-LD <script>. Safe to place in <body> (Google explicitly allows it).
 * `undefined` values are stripped so optional fields can be passed inline.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, (_key, value) =>
          value === undefined ? undefined : value,
        ),
      }}
    />
  );
}
