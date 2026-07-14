// Subtle brand accent drifters. Kept tiny + near-invisible so they never
// compete with real content — you should feel them, not see them.

function GavelMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 512 512" fill="none" aria-hidden>
      <g transform="translate(256 256) rotate(-45)">
        <rect x="-70" y="-43" width="23" height="86" fill="#FF4D2E" />
        <rect x="47" y="-43" width="23" height="86" fill="#FF4D2E" />
        <path
          d="M -38.5 -32 C -14 -18 14 -18 38.5 -32 L 38.5 32 C 14 18 -14 18 -38.5 32 Z"
          fill="#FF4D2E"
        />
        <rect x="-11" y="30" width="22" height="117" fill="#FF4D2E" />
      </g>
    </svg>
  );
}

export default function Drifters() {
  return (
    <div className="drift-layer" aria-hidden>
      <span className="drift drift-1"><GavelMark /></span>
      <span className="drift drift-2"><GavelMark /></span>
      <span className="drift drift-3"><GavelMark /></span>
    </div>
  );
}
