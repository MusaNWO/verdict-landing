"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

// Path animates its own draw via `pathLength` so each check "signs itself in"
// as the row enters the viewport.
function CheckIcon({ delay }: { delay: number }) {
  return (
    <svg viewBox="0 0 12 10" fill="none">
      <motion.path
        d="M1 5l3.5 3.5L11 1"
        stroke="#1C1820"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}

type Feat = { title: string; desc: ReactNode };
const FEATS: Feat[] = [
  {
    title: "Ranked-choice & weighted wheel",
    desc: "Smarter mechanics for the decisions that matter.",
  },
  {
    title: "Timed verdicts",
    desc: (
      <>
        Set a clock - the room auto-closes when it&rsquo;s up. No more ghosting
        the vote.
      </>
    ),
  },
  {
    title: "Full history & archive",
    desc: (
      <>
        &ldquo;Wait, what did we decide last time?&rdquo; Every verdict,
        searchable, forever.
      </>
    ),
  },
  {
    title: "Custom stamps & themes",
    desc: "Brand the verdict card with your own word and a premium theme.",
  },
];

export default function ProSplit() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap split">
        <div>
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Verdict Pro
          </motion.div>
          <motion.h2
            style={{ fontSize: "clamp(30px,4vw,50px)", marginTop: 14 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.32, 1.2, 0.4, 1] }}
          >
            For the friend who plans everything.
          </motion.h2>
          <motion.p
            style={{
              color: "var(--muted)",
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 1.55,
              marginTop: 18,
            }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Paid by one, enjoyed by the whole group. Unlock the power tools and
            keep the receipts.
          </motion.p>
          <div className="feat-list">
            {FEATS.map((f, i) => (
              <motion.div
                key={f.title}
                className="feat feat--anim"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ x: 5 }}
                transition={{
                  duration: 0.55,
                  delay: 0.24 + i * 0.08,
                  ease: [0.32, 1.2, 0.4, 1],
                }}
              >
                <span className="feat__check">
                  <CheckIcon delay={0.5 + i * 0.08} />
                </span>
                <div>
                  <b>{f.title}</b>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column: three floating "product" cards. Each slot wrapper
            handles positioning + idle bob (CSS); the inner motion.div drives
            scroll-in entry and hover interaction — separate elements so the
            bob transform never fights motion's transform. */}
        <div className="cluster">
          <div className="pc-slot pc-slot--1" style={{ top: "6%", left: "4%", zIndex: 2 }}>
            <motion.div
              className="pcard"
              initial={{ opacity: 0, y: 40, scale: 0.85, rotate: -14 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: -4 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 5 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.32, 1.35, 0.4, 1] }}
            >
              <div className="pc-label">Ranked choice</div>
              <div className="pc-row">
                <span className="rank-badge on">1</span>
                <b style={{ fontFamily: "var(--display)" }}>Bowling</b>
              </div>
              <div className="pc-row">
                <span className="rank-badge">2</span>
                <b style={{ fontFamily: "var(--display)" }}>Karaoke</b>
              </div>
              <div className="pc-row">
                <span className="rank-badge">3</span>
                <b style={{ fontFamily: "var(--display)" }}>Arcade</b>
              </div>
            </motion.div>
          </div>

          <div className="pc-slot pc-slot--2" style={{ bottom: "18%", right: "2%", zIndex: 3 }}>
            <motion.div
              className="pcard"
              style={{ width: 230 }}
              initial={{ opacity: 0, y: -30, scale: 0.85, rotate: 15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 5 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 5 }}
              transition={{ duration: 0.75, delay: 0.35, ease: [0.32, 1.35, 0.4, 1] }}
            >
              <div className="pc-label">Auto-close timer</div>
              <div className="pc-row" style={{ justifyContent: "space-between" }}>
                <b style={{ fontFamily: "var(--display)", fontSize: 18 }}>
                  Friday plan?
                </b>
                <svg className="ring ring--live" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="17"
                    fill="none"
                    stroke="var(--soft)"
                    strokeWidth="4"
                  />
                  <circle
                    className="ring__progress"
                    cx="20"
                    cy="20"
                    r="17"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="107"
                    transform="rotate(-90 20 20)"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          <div className="pc-slot pc-slot--3" style={{ bottom: 0, left: "10%", zIndex: 1 }}>
            <motion.div
              className="pcard"
              style={{
                width: 200,
                background: "var(--ink)",
                color: "var(--cream)",
                borderColor: "var(--ink)",
              }}
              initial={{ opacity: 0, y: 50, scale: 0.85, rotate: -12 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 5 }}
              transition={{ duration: 0.75, delay: 0.5, ease: [0.32, 1.35, 0.4, 1] }}
            >
              <div className="pc-label" style={{ color: "var(--yellow)" }}>
                Custom stamp
              </div>
              <div style={{ textAlign: "center", padding: "8px 0 4px" }}>
                <motion.span
                  className="stamp"
                  style={{
                    color: "var(--yellow)",
                    borderColor: "var(--yellow)",
                    display: "inline-block",
                  }}
                  animate={{
                    scale: [1, 0.92, 1.1, 1],
                    rotate: [0, -2, 2, 0],
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.34, 1.4, 0.64, 1],
                    repeat: Infinity,
                    repeatDelay: 3.2,
                  }}
                >
                  Brunch ✦
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
