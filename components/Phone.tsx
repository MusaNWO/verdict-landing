"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const MAX_TILT_Y = 12;
const MAX_TILT_X = 7;
const REST_Y = -6;
const REST_X = 3;

type Phase = "splash" | "home" | "create" | "lobby" | "voting" | "result";
const PHASES: Phase[] = ["splash", "home", "create", "lobby", "voting", "result"];
const PHASE_MS: Record<Phase, number> = {
  splash: 2200,
  home: 2600,
  create: 3200,
  lobby: 3800,
  voting: 3600,
  result: 5000,
};

export default function Phone() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pendingRaf = useRef<number | null>(null);
  const active = useRef(false);
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("splash");

  const rawY = useMotionValue(REST_Y);
  const rawX = useMotionValue(REST_X);
  const glareX = useMotionValue(40);
  const glareY = useMotionValue(26);

  const rotateY = useSpring(rawY, {
    stiffness: 90,
    damping: 22,
    mass: 0.55,
    restSpeed: 0.4,
    restDelta: 0.01,
  });
  const rotateX = useSpring(rawX, {
    stiffness: 90,
    damping: 22,
    mass: 0.55,
    restSpeed: 0.4,
    restDelta: 0.01,
  });

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.06) 30%, transparent 58%)`;

  useEffect(() => {
    if (reduce) {
      setPhase("result");
      return;
    }
    const t = setTimeout(() => {
      setPhase((p) => PHASES[(PHASES.indexOf(p) + 1) % PHASES.length]);
    }, PHASE_MS[phase]);
    return () => clearTimeout(t);
  }, [phase, reduce]);

  const applyPointer = (clientX: number, clientY: number) => {
    const el = wrapRef.current;
    if (!el || reduce) return;
    if (pendingRaf.current != null) return;
    pendingRaf.current = requestAnimationFrame(() => {
      pendingRaf.current = null;
      const rect = el.getBoundingClientRect();
      const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((clientY - rect.top) / rect.height) * 2 - 1;
      const cx = Math.max(-1, Math.min(1, nx));
      const cy = Math.max(-1, Math.min(1, ny));
      rawY.set(cx * MAX_TILT_Y);
      rawX.set(-cy * MAX_TILT_X);
      glareX.set(28 + ((cx + 1) / 2) * 44);
      glareY.set(18 + ((cy + 1) / 2) * 40);
    });
  };

  const reset = () => {
    active.current = false;
    rawY.set(REST_Y);
    rawX.set(REST_X);
    glareX.set(40);
    glareY.set(26);
  };

  return (
    <div
      ref={wrapRef}
      className="phone-wrap"
      onPointerMove={(e) => {
        if (e.pointerType === "touch" && !active.current) return;
        applyPointer(e.clientX, e.clientY);
      }}
      onPointerDown={(e) => {
        active.current = true;
        wrapRef.current?.setPointerCapture?.(e.pointerId);
        applyPointer(e.clientX, e.clientY);
      }}
      onPointerUp={reset}
      onPointerCancel={reset}
      onPointerLeave={reset}
      role="img"
      aria-label="Verdict app demo — splash to final verdict"
    >
      <motion.div
        className="phone"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        style={
          reduce
            ? undefined
            : { rotateY, rotateX, transformStyle: "preserve-3d" }
        }
      >
        <div className="phone__notch" />
        <div className="phone__screen">
          <motion.div
            className="phone__glare"
            aria-hidden
            style={{ background: glare }}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={phase}
              className={`scr-phase scr-phase--${phase}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {phase === "splash" && <SplashPhase />}
              {phase === "home" && <HomePhase />}
              {phase === "create" && <CreatePhase />}
              {phase === "lobby" && <LobbyPhase />}
              {phase === "voting" && <VotingPhase />}
              {phase === "result" && <ResultPhase />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

/* ── helpers ─────────────────────────────────────── */
function useTyped(text: string, speed: number, startDelay: number) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
    const start = window.setTimeout(() => {
      const iv = window.setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            window.clearInterval(iv);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);
    return () => window.clearTimeout(start);
  }, [text, speed, startDelay]);
  return text.slice(0, count);
}

function useTicker(from: number, to: number, ms: number, startDelay = 0) {
  const [n, setN] = useState(from);
  useEffect(() => {
    setN(from);
    const start = window.setTimeout(() => {
      const startTs = performance.now();
      let raf = 0;
      const tick = (t: number) => {
        const p = Math.min(1, (t - startTs) / ms);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(from + (to - from) * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, startDelay);
    return () => window.clearTimeout(start);
  }, [from, to, ms, startDelay]);
  return n;
}

/* ── Phase 1: Splash — matches verdict-app/src/app/index.tsx ─ */
function SplashPhase() {
  const letters = "VERDICT".split("");
  return (
    <div className="ph-splash">
      <div className="ph-splash__stack">
        <motion.div
          className="ph-splash__badge"
          initial={{ opacity: 0, scale: 0.72 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.2, 0.9, 0.3, 1.2] }}
        >
          <span className="ph-splash__disc" aria-hidden />
          <svg
            viewBox="0 0 100 100"
            className="ph-splash__mark"
            aria-hidden
          >
            <motion.g
              initial={{ rotate: -38 }}
              animate={{ rotate: [-38, 11, -6, 3, 0] }}
              transition={{
                delay: 0.45,
                duration: 0.9,
                times: [0, 0.52, 0.68, 0.84, 1],
                ease: [0.3, 0.1, 0.3, 1],
              }}
              style={{ originX: "50px", originY: "58px" }}
            >
              <rect x="34" y="34" width="4.5" height="16" fill="#FE4C2E" />
              <rect x="57" y="34" width="4.5" height="16" fill="#FE4C2E" />
              <path
                d="M 40 36 C 45 33, 51 33, 56 36 L 56 48 C 51 45, 45 45, 40 48 Z"
                fill="#FE4C2E"
              />
              <rect x="45" y="47" width="4.5" height="23" fill="#FE4C2E" />
            </motion.g>
            <motion.rect
              x="35"
              y="72"
              width="34"
              height="6"
              fill="#FE4C2E"
              rx="1"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
            />
          </svg>
          <motion.span
            className="ph-splash__ripple"
            aria-hidden
            initial={{ scale: 0.3, opacity: 0.9 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ delay: 0.95, duration: 0.7, ease: "easeOut" }}
          />
        </motion.div>

        <div className="ph-splash__wordmark">
          <div className="ph-splash__word">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 1.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.05 + i * 0.045,
                  duration: 0.4,
                  ease: [0.2, 1.4, 0.4, 1],
                }}
              >
                {l}
              </motion.span>
            ))}
          </div>
          <motion.span
            className="ph-splash__underline"
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1.35,
              duration: 0.5,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          />
          <motion.p
            className="ph-splash__tagline"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.5 }}
          >
            Order in the court
          </motion.p>
        </div>
      </div>

      <motion.div
        className="ph-splash__dots"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.4 }}
      >
        <span /><span /><span />
      </motion.div>
    </div>
  );
}

/* ── Phase 2: Home — matches verdict-app/src/app/(main)/home.tsx ─ */
const HISTORY = [
  { q: "Where do we eat?", result: "Ramen", when: "Yesterday", jurors: 4 },
  { q: "What do we watch?", result: "Shrek 2", when: "Friday", jurors: 5 },
];

function HomePhase() {
  return (
    <div className="ph-home">
      <div className="ph-home__top">
        <div className="ph-home__brand">
          Verdict<span className="ph-home__brand-dot">.</span>
        </div>
        <div className="ph-home__avatar" aria-hidden>A</div>
      </div>

      <p className="ph-home__sub">
        The group-chat debate ender. Question in, decision out — 30 seconds.
      </p>

      <div className="ph-home__chips">
        <div className="ph-home__chip">1 / 3 verdicts</div>
        <div className="ph-home__chip-spacer" />
        <div className="ph-home__chip ph-home__chip--bell" aria-label="Notifications">
          <svg viewBox="0 0 20 20" aria-hidden>
            <path
              d="M4.5 14V9a5.5 5.5 0 1 1 11 0v5l1.5 1.5H3l1.5-1.5z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M8 17a2 2 0 0 0 4 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
          <span className="ph-home__bell-dot" />
        </div>
        <div className="ph-home__chip ph-home__chip--dark">
          History Pro
          <svg viewBox="0 0 16 16" aria-hidden>
            <rect x="4" y="7" width="8" height="6" rx="1" fill="currentColor" />
            <path
              d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="ph-home__section-label">Recent Personal verdicts</div>

      <div className="ph-home__cards">
        {HISTORY.map((h, i) => (
          <motion.div
            key={h.q}
            className="ph-home__card"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + i * 0.12, duration: 0.35 }}
          >
            <div className="ph-home__card-body">
              <div className="ph-home__card-title">{h.q}</div>
              <div className="ph-home__card-sub">
                {h.when} · {h.jurors} jurors
              </div>
            </div>
            <span className="ph-home__stamp">{h.result}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="ph-home__ctas"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.4 }}
      >
        <div className="ph-home__cta-primary">
          New Verdict
          <svg viewBox="0 0 18 18" aria-hidden>
            <path d="M9 3v12M3 9h12" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="ph-home__cta-ghost">
          Join with a code
          <svg viewBox="0 0 18 18" aria-hidden>
            <path
              d="M3 9h12M10 4l5 5-5 5"
              stroke="#1C1820"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Phase 3: Create — matches verdict-app/src/app/(main)/create.tsx ─ */
const PRESETS = [
  { id: "eat", icon: "🌮", q: "Where do we eat?" },
  { id: "watch", icon: "🍿", q: "What do we watch?" },
  { id: "custom", icon: "", q: "Something else…" },
];

function CreatePhase() {
  const options = ["Tacos", "Sushi", "Ramen"];
  return (
    <div className="ph-create">
      <div className="ph-create__topbar">
        <span className="ph-create__back" aria-hidden>‹</span>
        <span className="ph-create__title">New verdict</span>
      </div>

      <div className="ph-create__body">
        <div className="ph-create__label">Question</div>
        <div className="ph-create__presets">
          {PRESETS.map((p, i) => (
            <motion.span
              key={p.id}
              className={`ph-create__preset ${i === 0 ? "is-active" : ""}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.28 }}
            >
              {p.icon && <span>{p.icon}</span>} {p.q}
            </motion.span>
          ))}
        </div>

        <div className="ph-create__label ph-create__label--gap">Options</div>
        <div className="ph-create__opts">
          {options.map((o, i) => (
            <motion.div
              key={o}
              className="ph-create__opt"
              initial={{ opacity: 0, y: 6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.65 + i * 0.28,
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="ph-create__letter">{String.fromCharCode(65 + i)}</span>
              <span className="ph-create__opt-thumb" aria-hidden />
              <span className="ph-create__opt-text">{o}</span>
              <span className="ph-create__opt-x" aria-hidden>×</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="ph-create__cta"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.35 }}
      >
        <div className="ph-create__cta-btn">
          Open the jury
          <svg viewBox="0 0 18 18" aria-hidden>
            <path
              d="M3 9h12M10 4l5 5-5 5"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Phase 4: Lobby — matches verdict-decide.jsx LobbyScreen + lobby.tsx ─ */
const LOBBY_JURORS = [
  { letter: "M", name: "Maya", color: "#FF8A5C", delay: 0.4 },
  { letter: "J", name: "Jordan", color: "#5CB8FF", delay: 1.0 },
  { letter: "S", name: "Sam", color: "#FFC94D", delay: 1.7 },
];

function LobbyPhase() {
  const [toast, setToast] = useState<string | null>(null);
  const joinedCount = useTicker(1, 4, 2000, 200);

  useEffect(() => {
    const timers = LOBBY_JURORS.map((j) =>
      window.setTimeout(() => {
        setToast(j.name);
        window.setTimeout(() => setToast(null), 1400);
      }, j.delay * 1000)
    );
    return () => timers.forEach(window.clearTimeout);
  }, []);

  return (
    <div className="ph-lobby">
      <div className="ph-lobby__topbar">
        <span className="ph-lobby__back" aria-hidden>‹</span>
        <span className="ph-lobby__title">The courtroom is open</span>
      </div>

      <div className="ph-lobby__scroll">
        <div className="ph-lobby__q">Where do we eat?</div>

        <div className="ph-lobby__code-card">
          <div className="ph-lobby__code-body">
            <div className="ph-lobby__code-label">Room code</div>
            <div className="ph-lobby__code">VRD-829</div>
          </div>
          <div className="ph-lobby__code-btn">Copy invite link</div>
        </div>

        <div className="ph-lobby__jury">
          <div className="ph-lobby__jury-head">
            <span className="ph-lobby__section-label">The jury</span>
            <span className="ph-lobby__jury-count">
              {joinedCount} of 5 in
            </span>
          </div>
          <div className="ph-lobby__jury-row">
            <div className="ph-lobby__juror-slot">
              <span
                className="ph-lobby__avatar"
                style={{ background: "#FFC94D" }}
              >
                Y
              </span>
              <span className="ph-lobby__juror-name">You</span>
            </div>
            {LOBBY_JURORS.map((j) => (
              <motion.div
                key={j.letter}
                className="ph-lobby__juror-slot"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: j.delay,
                  duration: 0.35,
                  ease: [0.22, 1.6, 0.36, 1],
                }}
              >
                <span
                  className="ph-lobby__avatar"
                  style={{ background: j.color }}
                >
                  {j.letter}
                </span>
                <span className="ph-lobby__juror-name">{j.name}</span>
              </motion.div>
            ))}
            <div className="ph-lobby__juror-slot">
              <span
                className="ph-lobby__avatar ph-lobby__avatar--ghost"
                aria-hidden
              >
                ?
              </span>
              <span className="ph-lobby__juror-name ph-lobby__juror-name--dim">
                —
              </span>
            </div>
          </div>
          <div className="ph-lobby__toast" aria-live="polite">
            <AnimatePresence>
              {toast && (
                <motion.span
                  key={toast}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {toast} joined the jury
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="ph-lobby__table">
          <span className="ph-lobby__section-label">On the table</span>
          <div className="ph-lobby__pills">
            {["Tacos", "Sushi", "Ramen", "Pizza"].map((o) => (
              <div key={o} className="ph-lobby__pill">{o}</div>
            ))}
          </div>
          <div className="ph-lobby__badges">
            <div className="ph-lobby__badge">
              <svg viewBox="0 0 16 16" aria-hidden>
                <path
                  d="M8 2v12M2 6l6-4 6 4M4 8v5h8V8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              Anonymous
            </div>
            <div className="ph-lobby__badge">
              <svg viewBox="0 0 16 16" aria-hidden>
                <circle
                  cx="8"
                  cy="9"
                  r="5.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                />
                <path
                  d="M8 6v3.5l2 1.5M6 2h4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              Auto-close 30s
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="ph-lobby__actionbar"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.35 }}
      >
        <div className="ph-lobby__nudge" aria-label="Nudge">
          <svg viewBox="0 0 20 20" aria-hidden>
            <path
              d="M4.5 14V9a5.5 5.5 0 1 1 11 0v5l1.5 1.5H3l1.5-1.5z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M8 17a2 2 0 0 0 4 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="ph-lobby__call">Call the vote</div>
      </motion.div>
    </div>
  );
}

/* ── Phase 5: Voting — matches verdict-app/src/app/room/[code]/vote.tsx ─ */
function VotingPhase() {
  const voted = useTicker(3, 8, 3200, 200);

  return (
    <div className="ph-vote">
      <div className="ph-vote__topbar">
        <span className="ph-vote__back" aria-hidden>‹</span>
        <span className="ph-vote__title">Voting</span>
      </div>

      <div className="ph-vote__q">Where do we eat?</div>
      <p className="ph-vote__prompt">Tap the option you&apos;re voting for.</p>

      <div className="ph-vote__ballot">
        <div className="ph-vote__ballot-dots" aria-hidden>
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className={`ph-vote__dot ${i < voted ? "is-filled" : ""}`}
            />
          ))}
        </div>
        <div className="ph-vote__ballot-label">
          {voted} of 12 votes in
        </div>
      </div>

      <div className="ph-vote__opts">
        <VoteRow letter="A" name="Tacos" />
        <VoteRow letter="B" name="Sushi" />
        <VoteRow letter="C" name="Ramen" selected />
      </div>
    </div>
  );
}

function VoteRow({
  letter,
  name,
  selected = false,
}: {
  letter: string;
  name: string;
  selected?: boolean;
}) {
  return (
    <motion.div
      className={`ph-vote__row ${selected ? "is-selected" : ""}`}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.35 }}
    >
      <span className="ph-vote__letter">{letter}</span>
      <span className="ph-vote__name">{name}</span>
      <span className="ph-vote__radio" aria-hidden>
        {selected && (
          <svg viewBox="0 0 14 14">
            <path
              d="M3 7.5l3 3 5-6.5"
              stroke="#FF4D2E"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        )}
      </span>
    </motion.div>
  );
}

/* ── Phase 5: Reveal — matches verdict-app/src/app/room/[code]/reveal.tsx ─ */
function ResultPhase() {
  return (
    <div className="ph-reveal">
      <div className="confetti" id="confetti" />
      <div className="ph-reveal__body">
        <p className="ph-reveal__q">WHERE DO WE EAT?</p>
        <div className="ph-reveal__winner">Ramen</div>
        <div className="ph-reveal__stamp-wrap">
          <span className="stamp stamp--lg">Verdict</span>
        </div>
        <div className="ph-reveal__stats">
          Locked in 0:24 · 12 jurors · 8 of 12 votes
        </div>

        <div className="ph-reveal__breakdown">
          <div className="ph-reveal__breakdown-label">The breakdown</div>
          <div className="ph-reveal__bars">
            <BreakRow name="Ramen" votes={8} pct={100} winner />
            <BreakRow name="Tacos" votes={3} pct={38} color="c-blue" />
            <BreakRow name="Sushi" votes={1} pct={13} color="c-green" />
          </div>
        </div>
      </div>
      <div className="action-bar">
        <div className="ab-primary">Share the verdict</div>
        <div className="ab-row">
          <div className="ab-ghost">Appeal</div>
          <div className="ab-ghost">Done</div>
        </div>
      </div>
    </div>
  );
}

function BreakRow({
  name,
  votes,
  pct,
  winner = false,
  color = "win",
}: {
  name: string;
  votes: number;
  pct: number;
  winner?: boolean;
  color?: "win" | "c-blue" | "c-green";
}) {
  return (
    <div className={`ph-reveal__row ${winner ? "is-winner" : ""}`}>
      <div className="ph-reveal__row-head">
        <span className="ph-reveal__row-name">{name}</span>
        <span className="ph-reveal__row-vv">
          {votes} {votes === 1 ? "vote" : "votes"}
        </span>
      </div>
      <span className="ph-reveal__track">
        <motion.span
          className={`ph-reveal__fill ${color}`}
          initial={{ width: "6%" }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
        />
      </span>
    </div>
  );
}
