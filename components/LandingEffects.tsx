"use client";

import { useEffect } from "react";

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
    if (!reduceMotion) {
      const popConfetti = () => {
        const host = document.getElementById("confetti");
        if (!host || host.dataset.done) return;
        host.dataset.done = "1";
        const W = host.clientWidth || 280;
        const colors = [
          "#FF4D2E",
          "#FFC94D",
          "#5CB8FF",
          "#7BDB8E",
          "#C99DF5",
        ];
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
      confettiTimer = setTimeout(popConfetti, 700);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      if (confettiTimer) clearTimeout(confettiTimer);
    };
  }, []);

  return null;
}
