"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

// Soft product tilt — hover on desktop, drag on touch.

const MAX_TILT_Y = 12;
const MAX_TILT_X = 7;
const REST_Y = -6;
const REST_X = 3;

export default function Phone() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pendingRaf = useRef<number | null>(null);
  const active = useRef(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const rawY = useMotionValue(REST_Y);
  const rawX = useMotionValue(REST_X);
  const glareX = useMotionValue(40);
  const glareY = useMotionValue(26);

  const rotateY = useSpring(rawY, {
    stiffness: 90,
    damping: 22,
    mass: 0.55,
    restSpeed: 0.4,
    restDelta: 0.01,
  });
  const rotateX = useSpring(rawX, {
    stiffness: 90,
    damping: 22,
    mass: 0.55,
    restSpeed: 0.4,
    restDelta: 0.01,
  });

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.06) 30%, transparent 58%)`;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const applyPointer = (clientX: number, clientY: number) => {
    const el = wrapRef.current;
    if (!el || reduceMotion) return;
    if (pendingRaf.current != null) return;
    pendingRaf.current = requestAnimationFrame(() => {
      pendingRaf.current = null;
      const rect = el.getBoundingClientRect();
      const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((clientY - rect.top) / rect.height) * 2 - 1;
      const cx = Math.max(-1, Math.min(1, nx));
      const cy = Math.max(-1, Math.min(1, ny));
      rawY.set(cx * MAX_TILT_Y);
      rawX.set(-cy * MAX_TILT_X);
      glareX.set(28 + ((cx + 1) / 2) * 44);
      glareY.set(18 + ((cy + 1) / 2) * 40);
    });
  };

  const reset = () => {
    active.current = false;
    rawY.set(REST_Y);
    rawX.set(REST_X);
    glareX.set(40);
    glareY.set(26);
  };

  return (
    <div
      ref={wrapRef}
      className="phone-wrap"
      onPointerMove={(e) => {
        if (e.pointerType === "touch" && !active.current) return;
        applyPointer(e.clientX, e.clientY);
      }}
      onPointerDown={(e) => {
        active.current = true;
        wrapRef.current?.setPointerCapture?.(e.pointerId);
        applyPointer(e.clientX, e.clientY);
      }}
      onPointerUp={reset}
      onPointerCancel={reset}
      onPointerLeave={reset}
      role="img"
      aria-label="Verdict app showing a locked-in decision for Ramen"
    >
      <motion.div
        className="phone"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        style={
          reduceMotion
            ? undefined
            : {
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
              }
        }
      >
        <div className="phone__notch" />
        <div className="phone__screen">
          <motion.div
            className="phone__glare"
            aria-hidden
            style={{ background: glare }}
          />
          <div className="confetti" id="confetti" />
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
                    <span className="bar-fill win" style={{ width: "100%" }} />
                  </span>
                </div>
                <div className="bar-row">
                  <div className="bar-head">
                    <span className="bl">Tacos</span>
                    <span className="bv">16 votes</span>
                  </div>
                  <span className="bar-track">
                    <span className="bar-fill c-blue" style={{ width: "73%" }} />
                  </span>
                </div>
                <div className="bar-row">
                  <div className="bar-head">
                    <span className="bl">Sushi</span>
                    <span className="bv">15 votes</span>
                  </div>
                  <span className="bar-track">
                    <span className="bar-fill c-green" style={{ width: "68%" }} />
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
