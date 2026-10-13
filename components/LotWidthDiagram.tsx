export function LotWidthDiagram({ title }: { title: string }) {
  return (
    <figure className="mt-8">
      <svg viewBox="0 0 640 220" width="640" height="220" role="img" aria-labelledby="lot-title lot-desc" className="h-auto w-full">
        <title id="lot-title">{title}</title>
        <desc id="lot-desc">
          Two rectangles. The left lot is marked approximately 38 feet wide. The right lot is marked approximately 41 feet wide, three feet wider. This is a schematic, not a floor plan.
        </desc>
        <rect x="0" y="0" width="640" height="220" fill="#FAF7F0" />
        <rect x="24" y="36" width="250" height="110" fill="none" stroke="#1D2F25" strokeWidth="2" />
        <rect x="310" y="36" width="270" height="110" fill="none" stroke="#1D2F25" strokeWidth="2" />
        <text x="149" y="98" textAnchor="middle" fill="#1B1F1C" fontSize="18" fontFamily="Georgia, serif">
          38 ft
        </text>
        <text x="445" y="98" textAnchor="middle" fill="#1B1F1C" fontSize="18" fontFamily="Georgia, serif">
          41 ft
        </text>
        <text x="24" y="186" fill="#5A625C" fontSize="14" fontFamily="Georgia, serif">
          Approximate widths only. Plans are to be announced.
        </text>
      </svg>
      <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">
        The 41-foot series is about three feet wider than the 38-foot series. Floor plans for Navera at Mayfield Village have not been released.
      </figcaption>
    </figure>
  );
}
