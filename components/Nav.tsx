"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#how", label: "How it works" },
  { href: "/#mechanics", label: "Ways to decide" },
  { href: "/#teams", label: "For teams" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

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
      <nav className="nav" id="nav">
        <div className="wrap nav__row">
          <a className="nav__brand" href="/" aria-label="Verdict - home">
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
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <a className="nav__primary" href="/#get">
            <span>Get the app</span>
            <span className="nav__primary-arrow" aria-hidden>→</span>
          </a>

          <button
            type="button"
            className={`nav__burger ${open ? "is-open" : ""}`}
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
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
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
