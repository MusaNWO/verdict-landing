"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

type Chip = { text: string; on?: boolean };
type Step = { n: number; title: string; desc: string; chips: Chip[] };

const STEPS: Step[] = [
  {
    n: 1,
    title: "Drop the options",
    desc: "Pose the question, toss in the contenders. Everyone in the room can add their own.",
    chips: [
      { text: "Tacos", on: true },
      { text: "Sushi" },
      { text: "Ramen" },
      { text: "+ add" },
    ],
  },
  {
    n: 2,
    title: "The jury votes",
    desc: "Share a link - friends sign in once, then join any verdict in a tap. Anonymous votes, ranked choice, or spin the wheel.",
    chips: [
      { text: "🗳️ Vote" },
      { text: "🎡 Wheel" },
      { text: "📊 Rank" },
    ],
  },
  {
    n: 3,
    title: "Stamped final",
    desc: "One verdict, stamped and shareable. The debate is closed. No relitigating in the group chat.",
    chips: [
      { text: "Ramen 🍜", on: true },
      { text: "⚖️ Case closed" },
    ],
  },
];

const CYCLE_MS = 4500;

// Lines pulled INWARD from the stage edges — leave a gap so the corner
// brackets stand alone and the rectangle frame reads as a "clean cut".
const LINES_TOP = [
  { y: 0,  tilt: -0.6, delay: "0s",    width: "78%", left: "11%", opacity: 1,    sweep: "3.2s" },
  { y: 42, tilt: 0.4,  delay: "-1.4s", width: "62%", left: "19%", opacity: 0.75, sweep: "4s"   },
  { y: 88, tilt: -0.3, delay: "-2.6s", width: "46%", left: "27%", opacity: 0.5,  sweep: "4.8s" },
];
const LINES_BOTTOM = [
  { y: 0,  tilt: 0.5,  delay: "-0.6s", width: "78%", left: "11%", opacity: 1,    sweep: "3.4s" },
  { y: 42, tilt: -0.4, delay: "-2s",   width: "60%", left: "20%", opacity: 0.75, sweep: "4.2s" },
  { y: 88, tilt: 0.3,  delay: "-3.2s", width: "44%", left: "28%", opacity: 0.5,  sweep: "5s"   },
];

// Framer-motion variants for staggered chip entrance on step change.
const chipsContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.25 },
  },
};
const chipItem: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.34, 1.4, 0.64, 1] as const },
  },
};

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % STEPS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const step = STEPS[active];

  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow reveal">The loop</div>
          <h2 className="reveal d1">Three taps to a final answer.</h2>
          <p className="reveal d2">
            No more polls that nobody answers, no more &ldquo;I&rsquo;m easy,
            you pick.&rdquo; Verdict gives the group a structure - and an
            ending.
          </p>
        </div>

        <div className="stage reveal">
          {/* Film-marker corner brackets — sells the "stage / spotlight" frame. */}
          <span className="stage-corner stage-corner--tl" aria-hidden="true" />
          <span className="stage-corner stage-corner--tr" aria-hidden="true" />
          <span className="stage-corner stage-corner--bl" aria-hidden="true" />
          <span className="stage-corner stage-corner--br" aria-hidden="true" />

          <div className="stage__lines stage__lines--top" aria-hidden="true">
            {LINES_TOP.map((l, i) => (
              <span
                key={i}
                className="neon-line"
                style={
                  {
                    top: `${l.y}px`,
                    left: l.left,
                    width: l.width,
                    transform: `rotate(${l.tilt}deg)`,
                    opacity: l.opacity,
                    animationDelay: l.delay,
                    "--sweep-dur": l.sweep,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>

          {/* Ambient radial glow spotlight behind the current step. */}
          <div className="stage__spotlight" aria-hidden="true" />

          <div className="stage__center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="stage-step"
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                transition={{ duration: 0.6, ease: [0.32, 1.2, 0.4, 1] }}
              >
                <div className="stage-step__n">
                  <span>{step.n}</span>
                </div>
                <h3 className="stage-step__title">{step.title}</h3>
                <p className="stage-step__desc">{step.desc}</p>
                <motion.div
                  className="stage-step__chips"
                  variants={chipsContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {step.chips.map((c, i) => (
                    <motion.span
                      key={i}
                      variants={chipItem}
                      className={`mini-chip ${c.on ? "on" : ""}`}
                    >
                      {c.text}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="stage__lines stage__lines--bottom" aria-hidden="true">
            {LINES_BOTTOM.map((l, i) => (
              <span
                key={i}
                className="neon-line"
                style={
                  {
                    bottom: `${l.y}px`,
                    left: l.left,
                    width: l.width,
                    transform: `rotate(${l.tilt}deg)`,
                    opacity: l.opacity,
                    animationDelay: l.delay,
                    "--sweep-dur": l.sweep,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>

          {/* Progress pips — countdown bar in active one shows time to next
              step, so the auto-cycle feels intentional not random. */}
          <div className="stage__pips" role="tablist" aria-label="Step">
            {STEPS.map((s, i) => (
              <button
                key={s.n}
                className={`stage-pip ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Step ${s.n}: ${s.title}`}
                aria-selected={i === active}
                role="tab"
              >
                {i === active && (
                  <span
                    key={active}
                    className="stage-pip__fill"
                    style={{ animationDuration: `${CYCLE_MS}ms` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
