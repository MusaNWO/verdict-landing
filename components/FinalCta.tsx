"use client";

import { motion } from "framer-motion";
import { APP_STORE_URL, PLAY_STORE_URL } from "./storeUrls";

export default function FinalCta() {
  return (
    <section className="section cta-final" id="get">
      {/* Soft orange atmosphere behind the stamp */}
      <div className="cta-final__glow" aria-hidden />

      <div className="wrap">
        {/* Case-closed stamp — falls from above, impacts, settles.
            Keyframe times sculpt the physicality: fast fall → hard land at
            0.55 → small overshoot → rest. */}
        <div className="cta-stamp-wrap">
          <motion.span
            className="stamp stamp--lg cta-stamp"
            initial={{ opacity: 0, y: -140, scale: 2.1, rotate: -22 }}
            whileInView={{
              opacity: [0, 1, 1, 1, 1],
              y: [-140, -30, 6, -4, 0],
              scale: [2.1, 1.5, 0.92, 1.06, 1],
              rotate: [-22, -14, -8, -5, -6],
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.85,
              times: [0, 0.4, 0.55, 0.78, 1],
              ease: "easeOut",
            }}
          >
            Case closed
          </motion.span>

          {/* Impact ripples fire right after the stamp lands (0.55 into
              the fall) — two concentric rings staggered so it reads like
              actual ink impact, not just a scale. */}
          <motion.span
            className="cta-stamp__ripple"
            aria-hidden
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: [0.2, 2.2], opacity: [0.7, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.55, ease: "easeOut" }}
          />
          <motion.span
            className="cta-stamp__ripple cta-stamp__ripple--2"
            aria-hidden
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: [0.2, 2.6], opacity: [0.5, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.65,
            ease: [0.32, 1.2, 0.4, 1],
          }}
        >
          The debate ends here.
        </motion.h2>

        <motion.p
          className="cta-final__lede"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Be the friend who finally ends it. Verdict is free to start, your
          group chat will thank you.
        </motion.p>

        <motion.div
          className="store-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: 1.0,
            ease: [0.32, 1.2, 0.4, 1],
          }}
        >
          <a
            className="store-btn"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 12.6c0-2.9 2.4-4.3 2.5-4.35-1.36-2-3.48-2.27-4.23-2.3-1.8-.18-3.5 1.05-4.42 1.05-.9 0-2.3-1.02-3.8-1-1.96.03-3.76 1.14-4.77 2.9-2.03 3.53-.52 8.76 1.46 11.62.96 1.4 2.1 2.98 3.6 2.92 1.44-.06 1.98-.93 3.72-.93 1.74 0 2.23.93 3.76.9 1.55-.03 2.53-1.43 3.48-2.84 1.1-1.62 1.55-3.2 1.57-3.28-.03-.02-3-1.16-3.04-4.6zM14.2 4.32c.8-.97 1.34-2.3 1.2-3.64-1.15.05-2.55.77-3.37 1.73-.74.86-1.38 2.22-1.2 3.53 1.28.1 2.58-.65 3.37-1.62z" />
            </svg>
            <span style={{ textAlign: "left" }}>
              <span className="sb-top">Download on the</span>
              <br />
              <span className="sb-main">App Store</span>
            </span>
          </a>
          <a
            className="store-btn"
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.6 2.3c-.2.2-.32.55-.32 1v17.4c0 .45.12.8.33 1l.1.08L13.4 12v-.2L3.7 2.22l-.1.08zM17 15.3l-3.27-3.3L17 8.7l3.86 2.2c1.1.63 1.1 1.66 0 2.3L17 15.3zM13.73 12L16.4 9.3 4.92 2.78c-.36-.2-.7-.22-.97-.07L13.73 12zM4 21.2c.27.15.6.13.97-.08L16.4 14.7 13.73 12 4 21.2z" />
            </svg>
            <span style={{ textAlign: "left" }}>
              <span className="sb-top">Get it on</span>
              <br />
              <span className="sb-main">Google Play</span>
            </span>
          </a>
        </motion.div>

        <motion.p
          className="cta-final__foot"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Sign in with email, Apple, or Google · Free to start
        </motion.p>
      </div>
    </section>
  );
}
