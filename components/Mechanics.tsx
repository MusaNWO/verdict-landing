"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
import WheelButton from "./WheelButton";

type Demo = "vote" | "wheel" | "rank";

type Card = {
  n: string;
  emoji: string;
  title: string;
  desc: ReactNode;
  tag: string;
  bg: string;
  accent: string;
  tagColor: string;
  demo: Demo;
};

// Shared row structure for the mini demos — bordered pill, left badge,
// right bar/mask. Keeps card 1 and card 3 visually parallel.
const VOTE_ROWS = [
  { label: "Tacos", width: "100%", win: true },
  { label: "Ramen", width: "62%", win: false },
  { label: "Sushi", width: "38%", win: false },
];

function VoteDemo() {
  return (
    <div className="mech-demo" aria-hidden>
      {VOTE_ROWS.map((r) => (
        <div key={r.label} className="demo-row">
          <span className="demo-lbl demo-lbl--txt">{r.label}</span>
          <span className="demo-bar">
            <span
              className={`demo-fill ${r.win ? "demo-fill--win" : ""}`}
              style={{ width: r.width }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

function RankDemo() {
  return (
    <div className="mech-demo" aria-hidden>
      {[1, 2, 3].map((r) => (
        <div key={r} className="demo-row">
          <span className="demo-lbl demo-lbl--num">{r}</span>
          <span className="demo-mask">
            <span />
            <span />
            <span />
          </span>
        </div>
      ))}
    </div>
  );
}

const CARDS: Card[] = [
  {
    n: "01",
    emoji: "🗳️",
    title: "Open vote",
    desc: "The classic majority call. Drop your options, everyone taps their pick, a stamp lands on the winner.",
    tag: "FREE · THE CLASSIC",
    bg: "#FFF3E8",
    accent: "var(--primary)",
    tagColor: "var(--primary)",
    demo: "vote",
  },
  {
    n: "02",
    emoji: "🎡",
    title: "Spin the wheel",
    desc: "Can't agree? Let fate decide - nobody gets blamed. Tap to spin. Pro adds weighted spins so the loudest voice loses.",
    tag: "FREE · CHAOS MODE",
    bg: "#EAF4FF",
    accent: "var(--blue)",
    tagColor: "#2E86C9",
    demo: "wheel",
  },
  {
    n: "03",
    emoji: "🤫",
    title: "Anonymous & ranked",
    desc: (
      <>
        Everyone picks in secret or ranks their top three. No politics, no peer
        pressure, no &ldquo;well whatever <em>you</em> want.&rdquo;
      </>
    ),
    tag: "PRO · THE DIPLOMAT",
    bg: "#EEF9F0",
    accent: "var(--green)",
    tagColor: "#3DA15B",
    demo: "rank",
  },
];

// Per-card mouse-follow 3D tilt + cursor spotlight. Springs smooth the motion
// so it reads as physical, not jittery. rAF-throttle keeps high-Hz mice from
// churning motion values 100x/sec.
function MechCard({ card, i }: { card: Card; i: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-6, 6]), {
    stiffness: 140,
    damping: 18,
    mass: 0.4,
    restSpeed: 0.5,
    restDelta: 0.01,
  });
  const rotateX = useSpring(useTransform(rawY, [-1, 1], [4, -4]), {
    stiffness: 140,
    damping: 18,
    mass: 0.4,
    restSpeed: 0.5,
    restDelta: 0.01,
  });
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${spotX}% ${spotY}%, rgba(255,255,255,0.55), transparent 55%)`;

  const raf = useRef<number | null>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    if (raf.current != null) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = null;
      const r = el.getBoundingClientRect();
      const nx = ((clientX - r.left) / r.width) * 2 - 1;
      const ny = ((clientY - r.top) / r.height) * 2 - 1;
      rawX.set(nx);
      rawY.set(ny);
      spotX.set(((clientX - r.left) / r.width) * 100);
      spotY.set(((clientY - r.top) / r.height) * 100);
    });
  };
  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="mech"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.32, 1.2, 0.4, 1] }}
      style={{
        background: card.bg,
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.span
        className="mech__spot"
        aria-hidden
        style={{ background: spotlight }}
      />
      <span
        className="mech__corner mech__corner--tl"
        aria-hidden
        style={{ borderColor: card.accent }}
      />
      <span
        className="mech__corner mech__corner--tr"
        aria-hidden
        style={{ borderColor: card.accent }}
      />
      <span
        className="mech__corner mech__corner--bl"
        aria-hidden
        style={{ borderColor: card.accent }}
      />
      <span
        className="mech__corner mech__corner--br"
        aria-hidden
        style={{ borderColor: card.accent }}
      />

      <div className="mech__head">
        <div
          className="mech__ico"
          style={{ background: card.accent, color: "#fff" }}
        >
          {card.emoji}
        </div>
        <span className="mech__num" style={{ color: card.accent }}>
          {card.n}
        </span>
      </div>

      <h3>{card.title}</h3>
      {card.demo === "wheel" && <WheelButton />}
      {card.demo === "vote" && <VoteDemo />}
      {card.demo === "rank" && <RankDemo />}
      <p>{card.desc}</p>
      <span className="tag mech__tag" style={{ color: card.tagColor }}>
        <span
          className="mech__tag-dot"
          style={{ background: card.tagColor }}
        />
        {card.tag}
      </span>
    </motion.div>
  );
}

export default function Mechanics() {
  return (
    <section className="section" id="mechanics" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow reveal">Ways to decide</div>
          <h2 className="reveal d1">Pick your kind of justice.</h2>
          <p className="reveal d2">
            Every group argues differently. Verdict has a mechanic for each
            one.
          </p>
        </div>
        <div className="mech-grid">
          {CARDS.map((c, i) => (
            <MechCard key={c.n} card={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
