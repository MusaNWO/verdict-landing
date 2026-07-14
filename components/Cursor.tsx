"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE = "a, button, summary, input, label, [role='tab'], .store-btn, .btn, .mech, .tier, .tcard, .quote";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Spring physics for that satisfying trailing lag.
  const sx = useSpring(x, { stiffness: 380, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 30, mass: 0.4 });

  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [tapping, setTapping] = useState(false);

  useEffect(() => {
    // Skip on touch devices and reduced-motion — native cursor stays.
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as Element | null;
      setHover(!!t?.closest?.(INTERACTIVE));
    };
    const down = () => setTapping(true);
    const up = () => setTapping(false);
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  // Subtle scale changes only — no huge ring inflation, no color swaps.
  // Cursor should feel like a soft hint, not a spotlight.
  const ringScale = tapping ? 0.8 : hover ? 1.35 : 1;
  const dotScale = tapping ? 1.1 : hover ? 0.7 : 1;

  return (
    <>
      <motion.div
        className={`cursor-dot ${hover ? "is-hover" : ""}`}
        style={{ x, y }}
        animate={{ scale: dotScale }}
        transition={{ type: "spring", stiffness: 340, damping: 22, mass: 0.35 }}
        aria-hidden
      />
      <motion.div
        className={`cursor-ring ${hover ? "is-hover" : ""}`}
        style={{ x: sx, y: sy }}
        animate={{ scale: ringScale }}
        transition={{ type: "spring", stiffness: 240, damping: 20, mass: 0.5 }}
        aria-hidden
      />
    </>
  );
}
