"use client";

import { motion } from "framer-motion";

type TCard = {
  n: string;
  emoji: string;
  title: string;
  desc: string;
};

const CARDS: TCard[] = [
  {
    n: "01",
    emoji: "🗂️",
    title: "Shared workspace",
    desc: "One home for every team decision, open to up to 25 members.",
  },
  {
    n: "02",
    emoji: "📜",
    title: "Decision log",
    desc: "A full audit trail - who decided what, and when. Export to CSV or Notion.",
  },
  {
    n: "03",
    emoji: "⚖️",
    title: "Weighted votes",
    desc: "Role-based voting weight. Leads can count for more when it counts.",
  },
  {
    n: "04",
    emoji: "💬",
    title: "Slack built in",
    desc: "Every verdict posts to your channel. Decisions where work already happens.",
  },
];

export default function Teams() {
  return (
    <section className="section teams" id="teams">
      {/* Ambient orange glow anchored behind the heading — soft brand
          presence on the dark canvas without competing with the copy. */}
      <div className="teams__glow" aria-hidden />
      <div className="wrap">
        <div className="sec-head">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Verdict Teams
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.32, 1.2, 0.4, 1] }}
          >
            Decisions, for the whole team.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Standups, offsite spots, demo order, design directions. Give any
            group that decides together a shared workspace - with a paper
            trail.
          </motion.p>
        </div>
        <div className="team-grid">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.n}
              className="tcard"
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.6,
                delay: 0.24 + i * 0.08,
                ease: [0.32, 1.2, 0.4, 1],
              }}
            >
              <span className="tcard__corner tcard__corner--tl" aria-hidden />
              <span className="tcard__corner tcard__corner--tr" aria-hidden />
              <span className="tcard__corner tcard__corner--bl" aria-hidden />
              <span className="tcard__corner tcard__corner--br" aria-hidden />
              <div className="tcard__head">
                <div className="tc-ico">{c.emoji}</div>
                <span className="tcard__num">{c.n}</span>
              </div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ marginTop: 44 }}
        >
          <a className="btn btn--lg teams__cta" href="#pricing">
            Start a Teams trial <span className="teams__cta-arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
