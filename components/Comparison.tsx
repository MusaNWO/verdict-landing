"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

// The eight feature chips that orbit the globe. `angle` positions each chip
// on the outer orbit (in degrees, 0 = right, -90 = top). Icons stay as
// emojis to match the rest of the landing page.
type Feat = { icon: string; label: string; angle: number };

const FEATS: Feat[] = [
  { icon: "⚡", label: "Under a minute", angle: -90 },
  { icon: "🕵️", label: "Anonymous voting", angle: -45 },
  { icon: "🎯", label: "Ranked choice", angle: 0 },
  { icon: "🎡", label: "Wheel tiebreaker", angle: 45 },
  { icon: "⏱️", label: "Auto-close timer", angle: 90 },
  { icon: "📤", label: "Shareable results", angle: 135 },
  { icon: "🏢", label: "Team workspace", angle: 180 },
  { icon: "⚖️", label: "Weighted votes", angle: -135 },
];

// Deterministic city dots — golden-angle scatter across the sphere.
// Fixed positions so SSR and client render the same globe.
const CITY_DOTS = Array.from({ length: 14 }).map((_, i) => {
  const golden = 137.508;
  const a = (i * golden * Math.PI) / 180;
  const r = 78 * Math.sqrt((i + 0.5) / 14);
  return { cx: +(100 + r * Math.cos(a)).toFixed(2), cy: +(100 + r * Math.sin(a)).toFixed(2) };
});

export default function Comparison() {
  return (
    <section className="section why-verdict" id="why-verdict" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head center">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Verdict
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.32, 1.2, 0.4, 1] }}
          >
            Everything you need to end the debate.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            One app, one final answer. Every feature built for the group chat.
          </motion.p>
        </div>

        <div className="globe-scene">
          <div className="globe-scene__glow" aria-hidden />

          {/* Two dashed orbit rings spinning opposite directions frame the
              globe without distracting from it. */}
          <div className="globe-scene__ring globe-scene__ring--outer" aria-hidden />
          <div className="globe-scene__ring globe-scene__ring--inner" aria-hidden />

          {/* Signal pulse rings — ripple outward on a stagger to sell the
              "broadcasting decisions" idea. */}
          <span className="globe-scene__pulse" aria-hidden />
          <span className="globe-scene__pulse globe-scene__pulse--2" aria-hidden />

          <motion.div
            className="globe"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.32, 1.35, 0.4, 1] }}
          >
            <svg viewBox="0 0 200 200" width="100%" height="100%">
              <defs>
                <radialGradient id="wv-fill" cx="30%" cy="30%">
                  <stop offset="0%" stopColor="#FF8A52" />
                  <stop offset="55%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="#B33720" />
                </radialGradient>
                <radialGradient id="wv-shade" cx="72%" cy="72%">
                  <stop offset="0%" stopColor="rgba(28,24,32,0.55)" />
                  <stop offset="100%" stopColor="rgba(28,24,32,0)" />
                </radialGradient>
                <clipPath id="wv-clip">
                  <circle cx="100" cy="100" r="88" />
                </clipPath>
              </defs>

              <circle cx="100" cy="100" r="88" fill="url(#wv-fill)" />

              {/* Rotating wireframe + city dots inside the sphere */}
              <g clipPath="url(#wv-clip)" className="globe__wire">
                {/* Meridians (vertical) */}
                <ellipse cx="100" cy="100" rx="88" ry="88" fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="1" />
                <ellipse cx="100" cy="100" rx="70" ry="88" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
                <ellipse cx="100" cy="100" rx="45" ry="88" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <ellipse cx="100" cy="100" rx="20" ry="88" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                {/* Parallels (horizontal) */}
                <ellipse cx="100" cy="100" rx="88" ry="70" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
                <ellipse cx="100" cy="100" rx="88" ry="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <ellipse cx="100" cy="100" rx="88" ry="20" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                {/* "City" dots */}
                {CITY_DOTS.map((d, i) => (
                  <circle
                    key={i}
                    cx={d.cx}
                    cy={d.cy}
                    r="2.4"
                    fill="rgba(255,255,255,0.9)"
                  />
                ))}
              </g>

              {/* Depth shading — static overlay so the sphere reads 3D */}
              <circle cx="100" cy="100" r="88" fill="url(#wv-shade)" pointerEvents="none" />
            </svg>
          </motion.div>

          {/* Feature chips on the outer orbit. Two-element pattern:
              .wv-orbit fills the stage and rotates by --angle so its child
              orbits around the stage center. The child sits at a fixed offset
              from the orbit's right edge, then counter-rotates so its text
              stays upright. The orbit's pseudos draw the static connection
              line AND the traveling signal dot from globe → chip. Per-chip
              delays keep the signals + bobs desynchronized. */}
          {FEATS.map((f, i) => (
            <div
              key={f.label}
              className="wv-orbit"
              style={
                {
                  "--angle": `${f.angle}deg`,
                  "--delay": `${(i * 0.45) % 3.5}s`,
                  "--bob-delay": `${(i * 0.7) % 4}s`,
                } as CSSProperties & Record<string, string>
              }
            >
              <motion.div
                className="wv-chip"
                style={
                  {
                    "--angle": `${f.angle}deg`,
                    "--bob-delay": `${(i * 0.7) % 4}s`,
                  } as CSSProperties & Record<string, string>
                }
                initial={{ opacity: 0, scale: 0.5, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 0.55,
                  delay: 0.5 + i * 0.09,
                  ease: [0.34, 1.4, 0.64, 1],
                }}
              >
                <span className="wv-chip__ico">{f.icon}</span>
                <span className="wv-chip__label">{f.label}</span>
                <span className="wv-chip__dot" aria-hidden />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
