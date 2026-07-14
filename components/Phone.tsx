"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Mouse-follow 3D tilt for the hero phone mockup. As the cursor moves over
// the hero art area, the phone rotates in perspective — the classic Apple /
// Framer product-photo effect. Springs smooth the movement so it feels
// physical, not jittery. Snaps back to a resting pose on leave.

const MAX_TILT_Y = 18; // horizontal turn (rotateY)
const MAX_TILT_X = 10; // vertical lean (rotateX, inverted)
const REST_Y = -12;    // camera-y turn at rest
const REST_X = 5;      // gentle top-back lean; too much pushes bottom past hero

export default function Phone() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rawY = useMotionValue(REST_Y);
  const rawX = useMotionValue(REST_X);
  // Softer spring on the front-facing "turn" so it reads as camera-y, not
  // jittery. Damping high enough to kill oscillation before it looks silly.
  // Softer, calmer spring — lower stiffness + higher damping settles quickly
  // without oscillating, and restSpeed ends the animation loop sooner so we
  // stop re-rendering the transform between micro-movements.
  const rotateY = useSpring(rawY, { stiffness: 90, damping: 20, mass: 0.5, restSpeed: 0.5, restDelta: 0.01 });
  const rotateX = useSpring(rawX, { stiffness: 90, damping: 20, mass: 0.5, restSpeed: 0.5, restDelta: 0.01 });

  // rAF-throttled: mouseMove fires ~100x/sec on high-Hz mice, but we only
  // need one update per animation frame. Extra .set() calls just churn.
  const pendingRaf = useRef<number | null>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const { clientX, clientY } = e;
    if (pendingRaf.current != null) return;
    pendingRaf.current = requestAnimationFrame(() => {
      pendingRaf.current = null;
      const rect = el.getBoundingClientRect();
      const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((clientY - rect.top) / rect.height) * 2 - 1;
      rawY.set(nx * MAX_TILT_Y);
      rawX.set(-ny * MAX_TILT_X);
    });
  };
  const onLeave = () => {
    rawY.set(REST_Y);
    rawX.set(REST_X);
  };

  return (
    <div
      ref={wrapRef}
      className="phone-wrap"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="phone"
        // Cinematic entry — phone rises + scales in before chips orbit out.
        // Motion values (rotateY, rotateX) drive tilt independently; opacity,
        // scale, y here are one-shot on mount so they don't fight the tilt.
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.34, 1.35, 0.64, 1] }}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="phone__notch"></div>
        <div className="phone__screen">
          <div className="confetti" id="confetti"></div>
          <div className="scr scr--reveal">
            <div className="scr-spacer" />
            <p className="rq">WHERE DO WE EAT?</p>
            <div className="rw">Ramen</div>
            <div className="stamp-wrap">
              <span className="stamp stamp--lg">Verdict</span>
            </div>
            <div className="rstats">
              Locked in 0:27 · 53 jurors · 22 of 53 votes
            </div>
            <div className="scr-spacer" />
            <div className="breakdown">
              <div className="breakdown__label">THE BREAKDOWN</div>
              <div className="bars">
                <div className="bar-row win">
                  <div className="bar-head">
                    <span className="bl">Ramen</span>
                    <span className="bv">22 votes</span>
                  </div>
                  <span className="bar-track">
                    <span className="bar-fill win" style={{ width: "100%" }}></span>
                  </span>
                </div>
                <div className="bar-row">
                  <div className="bar-head">
                    <span className="bl">Tacos</span>
                    <span className="bv">16 votes</span>
                  </div>
                  <span className="bar-track">
                    <span className="bar-fill c-blue" style={{ width: "73%" }}></span>
                  </span>
                </div>
                <div className="bar-row">
                  <div className="bar-head">
                    <span className="bl">Sushi</span>
                    <span className="bv">15 votes</span>
                  </div>
                  <span className="bar-track">
                    <span className="bar-fill c-green" style={{ width: "68%" }}></span>
                  </span>
                </div>
              </div>
            </div>
            <div className="scr-spacer" />
            <div className="final-line">
              It&apos;s final. No relitigating.
            </div>
          </div>
          <div className="action-bar">
            <div className="ab-primary">Share the verdict</div>
            <div className="ab-row">
              <div className="ab-ghost">Appeal</div>
              <div className="ab-ghost">Done</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
