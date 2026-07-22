"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const WORDS = [
  "group chat.",
  "team standup.",
  "weekend plan.",
  "office lunch.",
  "movie night.",
];

const HOLD_MS = 2400;

export default function RotatingWord() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setI((p) => (p + 1) % WORDS.length);
    }, HOLD_MS);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="hero__rotate" aria-live="polite" aria-atomic="true">
      {WORDS.map((word, idx) => (
        <span
          key={word}
          className={`hero__rotate-word ${idx === i ? "is-active" : ""} ${
            idx === (i - 1 + WORDS.length) % WORDS.length ? "is-prev" : ""
          }`}
          aria-hidden={idx !== i}
        >
          <em className="hero__em">{word}</em>
        </span>
      ))}
    </span>
  );
}
