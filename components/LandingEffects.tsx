"use client";

import { useEffect } from "react";

// Ease-out cubic — starts fast, decelerates smoothly. Feels natural for
// counters that need to "settle" on their final value instead of easing
// linearly (which looks robotic).
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function formatNumber(value: number, format: string | null) {
  // The suffix ("s", "M", etc.) is rendered by a sibling .accent span, so we
  // only produce the numeric portion here — never append it.
  if (format === "compact") {
    // 2.4M style: one decimal below 10M, none above.
    return (value / 1_000_000).toFixed(1);
  }
  return `${Math.round(value)}`;
}

function animateCount(el: HTMLElement) {
  const target = Number(el.getAttribute("data-count") ?? "0");
  const format = el.getAttribute("data-format");
  const num = el.querySelector<HTMLElement>(".stat__num");
  if (!num || target === 0) return;
  const start = performance.now();
  const duration = 1400;
  el.classList.add("is-counting");
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const v = easeOut(t) * target;
    num.textContent = formatNumber(v, format);
    if (t < 1) requestAnimationFrame(tick);
    else {
      // Snap to the crisp final display — avoids rounding drift like "2.3M"
      // when target was 2.4M.
      num.textContent = formatNumber(target, format);
      el.classList.remove("is-counting");
    }
  };
  requestAnimationFrame(tick);
}

export default function LandingEffects() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle("scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            // Stats with a data-count trigger a count-up when they enter view.
            if ((e.target as HTMLElement).dataset.count) {
              animateCount(e.target as HTMLElement);
            }
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => io.observe(el));

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let confettiTimer: ReturnType<typeof setTimeout> | null = null;
    let loopInterval: ReturnType<typeof setInterval> | null = null;

    const popConfetti = () => {
      const host = document.getElementById("confetti");
      if (!host) return;
      // Clear any existing pieces from the previous cycle before firing again.
      host.replaceChildren();
      const W = host.clientWidth || 280;
      const colors = ["#FF4D2E", "#FFC94D", "#5CB8FF", "#7BDB8E", "#C99DF5"];
      for (let i = 0; i < 36; i++) {
        const el = document.createElement("i");
        el.style.left = Math.random() * W + "px";
        el.style.background = colors[i % colors.length];
        if (Math.random() < 0.3) el.style.borderRadius = "50%";
        host.appendChild(el);
        el.animate(
          [
            { transform: "translate(0,0) rotate(0)", opacity: 1 },
            {
              transform: `translate(${(Math.random() - 0.5) * 120}px, 560px) rotate(${
                (Math.random() - 0.5) * 720
              }deg)`,
              opacity: 0.85,
            },
          ],
          {
            duration: 1900 + Math.random() * 1600,
            delay: Math.random() * 500,
            easing: "cubic-bezier(.2,.5,.6,1)",
            fill: "forwards",
          }
        );
      }
    };

    // Force-restart CSS animations on every element under .scr by nulling the
    // animation property, forcing a reflow, then clearing the override so the
    // stylesheet's animation kicks back in. This is the canonical CSS restart
    // trick — cheaper than cloning nodes.
    const restartPhoneCycle = () => {
      const scr = document.querySelector(".scr--reveal");
      if (!scr) return;
      // Restart every animated element in the reveal screen and the action bar
      // below it. Action bar lives outside .scr so we walk from the phone
      // screen root instead.
      const phoneScreen = scr.closest(".phone__screen");
      const root = phoneScreen ?? scr;
      const animated = root.querySelectorAll<HTMLElement>(
        ".rq, .rw, .bar-row, .stamp--lg, .rstats, .breakdown__label, .final-line, .action-bar"
      );
      animated.forEach((el) => {
        el.style.animation = "none";
      });
      // Reading offsetWidth forces the browser to flush the style change so
      // the animation actually resets. Without this the property just gets
      // coalesced with the reset back to the original.
      void (root as HTMLElement).offsetWidth;
      animated.forEach((el) => {
        el.style.animation = "";
      });
    };

    if (!reduceMotion) {
      // Confetti fires with the stamp drop (~1.2s) — the dramatic verdict
      // moment. Breakdown bars then follow as the "proof" (2-3s), then final
      // line + action bar. Full sequence lands by ~4s, then hold for ~5s so
      // viewers can read the whole card before the loop restarts.
      confettiTimer = setTimeout(popConfetti, 1200);
      loopInterval = setInterval(() => {
        restartPhoneCycle();
        setTimeout(popConfetti, 1200);
      }, 9000);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      if (confettiTimer) clearTimeout(confettiTimer);
      if (loopInterval) clearInterval(loopInterval);
    };
  }, []);

  return null;
}
