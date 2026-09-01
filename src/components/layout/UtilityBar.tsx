function UsFlag({ className = "" }: { className?: string }) {
  const h = 10 / 13; // stripe height (13 stripes in a 10-unit tall field)
  const whiteStripes = [1, 3, 5, 7, 9, 11];
  const stars: [number, number][] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 5; col++) {
      stars.push([0.9 + col * 1.45, 0.75 + row * 1.3]);
    }
  }
  return (
    <svg
      viewBox="0 0 19 10"
      className={className}
      role="img"
      aria-label="Flag of the United States"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="19" height="10" rx="0.6" fill="#B31942" />
      {whiteStripes.map((i) => (
        <rect key={i} x="0" y={i * h} width="19" height={h} fill="#fff" />
      ))}
      <rect x="0" y="0" width="7.6" height={7 * h} rx="0.6" fill="#0A3161" />
      {stars.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="0.34" fill="#fff" />
      ))}
      <rect
        x="0.15"
        y="0.15"
        width="18.7"
        height="9.7"
        rx="0.6"
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="0.3"
      />
    </svg>
  );
}

export function UtilityBar() {
  return (
    <div className="bg-navy text-white text-xs py-2">
      <div className="max-w-310 mx-auto px-6 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="font-mono-brand tracking-wide">
            <a href="tel:18005237475" className="hover:text-carolina transition-colors">
              1-800-523-7475
            </a>
          </span>
          <span className="text-white/50">|</span>
          <span className="text-white/70">Mon–Fri · 9am–3pm EST</span>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <span className="flex items-center gap-1.5">
            <UsFlag className="h-3.5 w-6.5 shrink-0 rounded-xs" />
            Made in the USA
          </span>
          <span className="text-white/50">|</span>
          <span>Est. 1975</span>
        </div>
      </div>
    </div>
  );
}
