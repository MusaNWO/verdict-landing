"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Quote = {
  text: string;
  name: string;
  role: string;
  color: string;
};

const QUOTES: Quote[] = [
  {
    text: "We went from a 40-message thread to a decision before the appetizers menu loaded.",
    name: "Maya R.",
    role: "Group trip organiser",
    color: "var(--orange)",
  },
  {
    text: "The wheel ended a six-month argument about whose turn it was to drive. No blood.",
    name: "Jordan P.",
    role: "Carpool survivor",
    color: "var(--blue)",
  },
  {
    text: "Our design team picks directions with weighted votes now. The audit log shut down every 'who decided this?'",
    name: "Priya N.",
    role: "Design lead, Acme",
    color: "var(--green)",
  },
];

const CYCLE_MS = 4400;

function StarRow({ base }: { base: number }) {
  return (
    <div className="q-stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="q-star"
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: base + i * 0.06,
            ease: [0.34, 1.5, 0.64, 1],
          }}
        >
          <svg viewBox="0 0 12 12" fill="currentColor" aria-hidden>
            <path d="M6 0.5l1.7 3.5 3.8.55-2.75 2.7.65 3.8L6 9.25l-3.4 1.8.65-3.8L.5 4.55l3.8-.55z" />
          </svg>
        </motion.span>
      ))}
    </div>
  );
}

export default function Quotes() {
  const [featured, setFeatured] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setFeatured((f) => (f + 1) % QUOTES.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="section quotes-sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head center">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The verdict on Verdict
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.32, 1.2, 0.4, 1] }}
          >
            Friendships saved. Dinners served.
          </motion.h2>
        </div>

        <div
          className="quotes"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {QUOTES.map((q, i) => (
            <motion.div
              key={q.name}
              className={`quote ${featured === i ? "is-featured" : ""}`}
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              onMouseEnter={() => setFeatured(i)}
              onClick={() => setFeatured(i)}
              transition={{
                duration: 0.6,
                delay: 0.22 + i * 0.1,
                ease: [0.32, 1.2, 0.4, 1],
              }}
            >
              <span className="q-mark" aria-hidden>
                &ldquo;
              </span>
              <StarRow base={0.35 + i * 0.1} />
              <p>&ldquo;{q.text}&rdquo;</p>
              <div className="qby">
                <span className="av" style={{ background: q.color }} />
                <div>
                  <b>{q.name}</b>
                  <br />
                  <span>{q.role}</span>
                </div>
              </div>
              {featured === i && (
                <motion.span
                  key={`shine-${featured}`}
                  className="q-shine"
                  aria-hidden
                  initial={{ x: "-120%" }}
                  animate={{ x: "220%" }}
                  transition={{ duration: 1.15, ease: [0.32, 0.7, 0.4, 1] }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="quote-pips" role="tablist" aria-label="Testimonial">
          {QUOTES.map((q, i) => (
            <button
              key={q.name}
              type="button"
              className={`quote-pip ${featured === i ? "is-active" : ""}`}
              onClick={() => setFeatured(i)}
              aria-label={`Testimonial ${i + 1}: ${q.name}`}
              aria-selected={featured === i}
              role="tab"
            >
              {featured === i && !paused && (
                <span
                  key={`pip-${featured}`}
                  className="quote-pip__fill"
                  style={{ animationDuration: `${CYCLE_MS}ms` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
