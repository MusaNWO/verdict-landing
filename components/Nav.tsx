"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";

const LINKS = [
  { href: "/#how", label: "How it works" },
  { href: "/#mechanics", label: "Ways to decide" },
  { href: "/#teams", label: "For teams" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

const DRAWER_LINKS = [
  ...LINKS,
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <nav className={`nav ${entered ? "nav--entered" : ""}`} id="nav">
        <div className="wrap nav__row">
          <a className="nav__brand nav__anim nav__anim--1" href="/" aria-label="Verdict - home">
            <Image
              src="/verdict-logo.png"
              alt=""
              width={32}
              height={32}
              priority
              className="nav__brand-mark"
            />
            <span className="nav__brand-word">
              Verdict<span className="nav__brand-dot">.</span>
            </span>
          </a>

          <div className="nav__links">
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav__anim nav__anim--${i + 2}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="nav__end">
            <a className="nav__primary nav__anim nav__anim--7" href="/#get">
              <span>Get the app</span>
              <span className="nav__primary-arrow" aria-hidden>
                →
              </span>
            </a>

            <button
              type="button"
              className={`nav__burger nav__anim nav__anim--7 ${open ? "is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="nav-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="nav-drawer"
        className={`nav-drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="nav-drawer__panel">
          <div className="nav-drawer__links">
            {DRAWER_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-drawer__link"
                style={{ "--i": i } as CSSProperties}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-drawer__cta">
            <a
              className="btn btn--ink"
              href="/#get"
              onClick={() => setOpen(false)}
            >
              Get the app
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
