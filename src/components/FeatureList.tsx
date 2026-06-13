export default function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="space-y-2 mb-4">
      {features.map((feature, idx) => {
        const isIncompatible = feature.toLowerCase().startsWith("incompatible");
        return (
          <li key={idx} className="flex items-start text-sm text-steel-600">
            <svg
              className={`w-4 h-4 mr-2 mt-0.5 shrink-0 ${isIncompatible ? "text-red-500" : "text-primary-500"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isIncompatible ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              )}
            </svg>
            {feature}
          </li>
        );
      })}
    </ul>
  );
}
