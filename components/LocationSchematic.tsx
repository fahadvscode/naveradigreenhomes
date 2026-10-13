export function LocationSchematic({ title }: { title: string }) {
  return (
    <figure className="mt-8">
      <svg viewBox="0 0 640 320" width="640" height="320" role="img" aria-labelledby="loc-title loc-desc" className="h-auto w-full">
        <title id="loc-title">{title}</title>
        <desc id="loc-desc">
          A schematic, not to scale, with Countryside Drive running east-west and Torbram Road running north-south. A marker sits northwest of the intersection for Navera at Mayfield Village. Highway 410 is labelled to the west and Bramalea GO farther south.
        </desc>
        <rect width="640" height="320" fill="#FAF7F0" />
        <line x1="40" y1="140" x2="600" y2="140" stroke="#1D2F25" strokeWidth="6" />
        <line x1="380" y1="24" x2="380" y2="296" stroke="#1D2F25" strokeWidth="6" />
        <circle cx="318" cy="98" r="8" fill="#8F5B38" />
        <text x="48" y="128" fill="#1B1F1C" fontSize="16" fontFamily="Georgia, serif">
          Countryside Drive
        </text>
        <text x="396" y="52" fill="#1B1F1C" fontSize="16" fontFamily="Georgia, serif">
          Torbram Road
        </text>
        <text x="250" y="84" fill="#8F5B38" fontSize="14" fontFamily="Georgia, serif">
          Navera
        </text>
        <text x="48" y="220" fill="#5A625C" fontSize="15" fontFamily="Georgia, serif">
          Highway 410 — about 7 min
        </text>
        <text x="48" y="248" fill="#5A625C" fontSize="15" fontFamily="Georgia, serif">
          Bramalea GO — about 20 min
        </text>
        <text x="48" y="292" fill="#5A625C" fontSize="14" fontFamily="Georgia, serif">
          Schematic only. Not a site plan.
        </text>
      </svg>
      <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">
        General area only. The exact homesites and any sales-centre address are to be announced.
      </figcaption>
    </figure>
  );
}
