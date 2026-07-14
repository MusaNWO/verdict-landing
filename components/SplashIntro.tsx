"use client";

import { useEffect, useState } from "react";

const LETTERS = ["V", "E", "R", "D", "I", "C", "T"];

// Session-scoped: intro plays once per browser session so returning within
// the same tab / navigation doesn't force the user to wait through it again.
const SESSION_KEY = "verdict-intro-seen";

export default function SplashIntro() {
  // Start `playing: true` so SSR + first client render both show the splash
  // markup immediately. Prevents the "page flashes for 1-2s before splash"
  // gap between hydration and useEffect running.
  const [playing, setPlaying] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Already seen this session? Hide immediately, don't play the intro.
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        setPlaying(false);
        return;
      }
    } catch {
      // Private browsing may throw on sessionStorage — treat as "not seen"
    }
    // Respect reduced motion — skip the whole intro if the user prefers less
    // movement, and just mark it seen so the landing loads immediately.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(false);
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
      return;
    }
    document.body.style.overflow = "hidden";
    // Splash sequence lands by ~2500ms; give another 300ms of hold, then
    // start the exit transition. Total time to landing = ~3400ms.
    const exit = window.setTimeout(() => setExiting(true), 2800);
    const done = window.setTimeout(() => {
      setPlaying(false);
      document.body.style.overflow = "";
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
    }, 3600);
    return () => {
      window.clearTimeout(exit);
      window.clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, []);

  // Skip on click — respects users who don't want to watch the whole thing.
  const skip = () => {
    setExiting(true);
    window.setTimeout(() => {
      setPlaying(false);
      document.body.style.overflow = "";
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
    }, 700);
  };

  if (!playing) return null;

  return (
    <div
      className={`splash ${exiting ? "is-exiting" : ""}`}
      onClick={skip}
      role="dialog"
      aria-label="Verdict"
    >
      <div className="splash__stage">
        {/* Badge — black rounded square with white circle inside */}
        <div className="splash__badge">
          <svg viewBox="0 0 512 512" width="200" height="200" aria-hidden>
            <rect x="0" y="0" width="512" height="512" rx="121" fill="#000" />
            <circle className="splash__circle" cx="256" cy="256" r="216" fill="#FAF5EC" />
            {/* Sound block */}
            <rect
              className="splash__block"
              x="205"
              y="335"
              width="170"
              height="33"
              fill="#FF4D2E"
            />
            {/* Gavel — swings from -38° through +11° strike, recoils to 0 */}
            <g className="splash__gavel">
              <g transform="translate(243 222) rotate(45)">
                <rect x="-70" y="-43" width="23" height="86" fill="#FF4D2E" />
                <rect x="47" y="-43" width="23" height="86" fill="#FF4D2E" />
                <path
                  d="M -38.5 -32 C -14 -18 14 -18 38.5 -32 L 38.5 32 C 14 18 -14 18 -38.5 32 Z"
                  fill="#FF4D2E"
                />
                <rect x="-11" y="30" width="22" height="117" fill="#FF4D2E" />
              </g>
            </g>
            {/* Ripple that fires on impact */}
            <circle
              className="splash__ripple"
              cx="300"
              cy="302"
              r="112"
              fill="none"
              stroke="#FF4D2E"
              strokeWidth="10"
            />
          </svg>
        </div>

        {/* VERDICT wordmark — letters stamp in one by one */}
        <div className="splash__word">
          {LETTERS.map((l, i) => (
            <span
              key={i}
              className="splash__letter"
              style={{ animationDelay: `${1050 + i * 40}ms` }}
            >
              {l}
            </span>
          ))}
        </div>

        {/* Red underline draws left → right */}
        <div className="splash__underline" />

        {/* Tagline fades + slides up */}
        <div className="splash__tagline">Order in the court</div>
      </div>

      <div className="splash__skip">Tap to skip</div>
    </div>
  );
}
