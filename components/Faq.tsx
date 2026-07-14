"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const QUESTIONS = [
  {
    q: "What actually is a Verdict?",
    a: "A verdict is a decision your group makes together in the app. One person drops the question and options, everyone else joins with a code or link, votes, and a stamp lands on the winner. Done in under a minute.",
  },
  {
    q: "Do my friends need an account to vote?",
    a: "Yes, one-tap sign-in with email, Apple, or Google. After that they can join any verdict with a link. Voting itself is free forever.",
  },
  {
    q: "How many free verdicts do I get?",
    a: "Free comes with 3 lifetime verdicts. Every 3 friends who join with your code adds 7 more to your cap, forever. Verdict Pro removes the cap entirely.",
  },
  {
    q: "How does the free trial work?",
    a: "Verdict Pro comes with 7 days free. You won't be charged until day 8, and you can cancel any time in the App Store or Google Play. No support ticket needed.",
  },
  {
    q: "What's the difference between Pro and Teams?",
    a: "Pro is for personal group chats. Unlimited verdicts, anonymous voting, ranked choice, timed verdicts, custom branding. Teams adds a shared workspace, decision log, weighted votes, Slack integration, and up to 25 members.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes. Subscriptions are managed through the App Store or Play Store, so you cancel with one tap in your device settings. Your access continues until the end of the current billing period.",
  },
  {
    q: "Is voting really anonymous?",
    a: "On the Pro plan, yes. Turn on anonymous mode and even the person who created the verdict can't see who voted for what. Only the final tally is public.",
  },
  {
    q: "What platforms is Verdict on?",
    a: "iOS and Android, both stores. No web app yet. Sign-in syncs your verdicts across devices, so switching phones doesn't lose your history.",
  },
  {
    q: "How do you handle privacy?",
    a: "Only the data we need to run a verdict. Your question, options, votes, and the account that created it. We don't sell anything. Full details on our privacy page.",
  },
];

export default function Faq() {
  // Start with the first FAQ open so users see the section is interactive.
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section faq" id="faq">
      <div className="wrap">
        <div className="sec-head center">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Questions asked
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.32, 1.2, 0.4, 1] }}
          >
            Objections, overruled.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Everything people ask before their first verdict. Still stuck?{" "}
            <a href="mailto:hello@verdictapp.co">Email us</a>.
          </motion.p>
        </div>
        <div className="faq-list">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={item.q}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.24 + i * 0.05,
                  ease: [0.32, 1.2, 0.4, 1],
                }}
              >
                <button
                  type="button"
                  className="faq-item__toggle"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item__num" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-item__q">{item.q}</span>
                  <span className="faq-item__ico" aria-hidden>
                    <svg viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.32, 1.2, 0.4, 1] },
                        opacity: { duration: 0.25, ease: "easeOut" },
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="faq-item__a">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
