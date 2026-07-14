"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Period = "monthly" | "yearly";

// pathLength animates the check stroke as each feature scrolls into view.
// Delay chain gives a "signing off the list" cascade per tier.
function Tick({ delay = 0 }: { delay?: number }) {
  return (
    <span className="tick">
      <svg viewBox="0 0 12 10" fill="none">
        <motion.path
          d="M1 5l3.5 3.5L11 1"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay, ease: "easeInOut" }}
        />
      </svg>
    </span>
  );
}

// Crossfades the price when the billing period toggles.
function PriceValue({ value, unit }: { value: string; unit: string }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={value}
        className="tier__price-inner"
        initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
        transition={{ duration: 0.28, ease: [0.32, 1.2, 0.4, 1] }}
      >
        {value}
        <small> {unit}</small>
      </motion.span>
    </AnimatePresence>
  );
}

const PRICES = {
  pro: { monthly: "$4.99", yearly: "$49.99" },
  teams: { monthly: "$9.99", yearly: "$99.99" },
} as const;

const UNIT = {
  monthly: "/ month",
  yearly: "/ year",
} as const;

type Tier = {
  name: string;
  blurb: string;
  feats: string[];
  cta: string;
  ctaClass: string;
  pop?: boolean;
  priceKey?: "pro" | "teams";
  freePrice?: { value: string; unit: string };
};

const TIERS: Tier[] = [
  {
    name: "Free",
    blurb: "3 verdicts to start. Invite friends to earn more - forever free.",
    feats: [
      "3 verdicts to start",
      "+7 verdicts for every 3 friends you invite",
      "Unlimited voters per verdict",
      "Basic spin the wheel",
      "Simple yes / no votes",
      "Share result cards",
    ],
    cta: "Get the app",
    ctaClass: "btn btn--ghost",
    freePrice: { value: "$0", unit: "/ forever" },
  },
  {
    name: "Verdict Pro",
    blurb:
      "Unlimited verdicts and every power tool. Paid by one, enjoyed by everyone.",
    feats: [
      "Unlimited verdicts",
      "Anonymous voting mode",
      "Timed verdicts & auto-close",
      "Ranked choice & weighted wheel",
      "Verdict reminders (push)",
      "Custom branding & stamps",
      "Full history & archive",
    ],
    cta: "Start 7 days free",
    ctaClass: "btn",
    pop: true,
    priceKey: "pro",
  },
  {
    name: "Teams",
    blurb: "For work teams, clubs, and anyone deciding together - again and again.",
    feats: [
      "Everything in Pro",
      "Shared team workspace",
      "Admin dashboard",
      "Role-based voting weights",
      "Decision log & audit trail",
      "CSV / Notion export",
      "Slack integration",
      "Up to 25 members",
    ],
    cta: "Start Teams trial",
    ctaClass: "btn btn--ink",
    priceKey: "teams",
  },
];

export default function Pricing() {
  const [period, setPeriod] = useState<Period>("monthly");

  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="sec-head center">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.32, 1.2, 0.4, 1] }}
          >
            Only the creator pays.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Everyone you invite votes free, forever. Pick a plan when
            you&rsquo;re ready for more.
          </motion.p>

          <motion.div
            className="price-toggle"
            role="tablist"
            aria-label="Billing period"
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.32, 1.2, 0.4, 1] }}
          >
            {(["monthly", "yearly"] as Period[]).map((p) => (
              <button
                key={p}
                role="tab"
                aria-selected={period === p}
                className={`price-toggle__opt ${period === p ? "is-on" : ""}`}
                onClick={() => setPeriod(p)}
                type="button"
              >
                {p === "monthly" ? "Monthly" : "Yearly"}
                {p === "yearly" && (
                  <span className="price-toggle__save">Save ~16%</span>
                )}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="price-grid">
          {TIERS.map((tier, ti) => (
            <motion.div
              key={tier.name}
              className={`tier ${tier.pop ? "pop" : ""}`}
              initial={{ opacity: 0, y: 36, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.6,
                delay: 0.32 + ti * 0.1,
                ease: [0.32, 1.2, 0.4, 1],
              }}
            >
              {tier.pop && <span className="tier__pop">Most popular</span>}
              <div className="tier__name">{tier.name}</div>
              <div className="tier__price">
                {tier.freePrice ? (
                  <span className="tier__price-inner">
                    {tier.freePrice.value}
                    <small> {tier.freePrice.unit}</small>
                  </span>
                ) : (
                  <PriceValue
                    value={PRICES[tier.priceKey!][period]}
                    unit={
                      tier.priceKey === "teams"
                        ? `${UNIT[period]} · workspace`
                        : UNIT[period]
                    }
                  />
                )}
              </div>
              <div className="tier__blurb">{tier.blurb}</div>
              <ul className="tier__feats">
                {tier.feats.map((f, fi) => (
                  <li key={f}>
                    <Tick delay={0.4 + ti * 0.05 + fi * 0.04} />
                    {f}
                  </li>
                ))}
              </ul>
              <a className={tier.ctaClass} href="#get">
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="price-note"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          7-day free trial on Pro. Cancel anytime from the App Store or Google
          Play - no charge until day 8.
        </motion.p>
      </div>
    </section>
  );
}
