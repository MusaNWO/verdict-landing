"use client";

import { motion } from "framer-motion";

const SOCIALS = [
  {
    href: "https://x.com/verdictapp",
    label: "Verdict on X",
    d: "M17.53 3H20.7l-6.92 7.9L22 21h-6.38l-5-6.54L4.9 21H1.72l7.4-8.45L1.6 3h6.53l4.52 5.98L17.53 3zm-1.12 16.13h1.75L7.68 4.78H5.8L16.4 19.13z",
  },
  {
    href: "https://www.instagram.com/verdictapp",
    label: "Verdict on Instagram",
    d: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.26.82-.38.38-.62.75-.82 1.26-.15.39-.33.97-.38 2.04C2.71 8.8 2.7 9.15 2.7 12.3s.01 3.5.07 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.33 2.04.38 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.33-.97.38-2.04.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 00-.82-1.26 3.4 3.4 0 00-1.26-.82c-.39-.15-.97-.33-2.04-.38C15.5 4.01 15.15 4 12 4zm0 3.06a5.14 5.14 0 110 10.28 5.14 5.14 0 010-10.28zm0 8.48a3.34 3.34 0 100-6.68 3.34 3.34 0 000 6.68zm5.35-8.7a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
  },
  {
    href: "https://www.linkedin.com/company/verdictapp",
    label: "Verdict on LinkedIn",
    d: "M4.98 3.5A2.5 2.5 0 117.48 6 2.5 2.5 0 014.98 3.5zM3 8.75h4.96V21H3V8.75zm7.4 0h4.75v1.67h.07a5.2 5.2 0 014.68-2.58c5 0 5.92 3.3 5.92 7.58V21h-4.94v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8H10.4V8.75z",
  },
];

type Link = { label: string; href: string; external?: boolean };
type Col = { heading: string; links: Link[] };

const COLS: Col[] = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "/#how" },
      { label: "Ways to decide", href: "/#mechanics" },
      { label: "For teams", href: "/#teams" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Get the app", href: "/#get" },
      { label: "Contact", href: "mailto:hello@verdictapp.co", external: true },
      { label: "Back to top", href: "/#top" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Data requests", href: "mailto:privacy@verdictapp.co", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.32, 1.2, 0.4, 1] }}
    >
      <div className="wrap">
        <div className="footer__in">
          <div className="footer__brand">
            <a className="nav__brand footer__brand-mark" href="/" aria-label="Verdict - home">
              <span className="nav__brand-word">
                Verdict<span className="nav__brand-dot">.</span>
              </span>
            </a>
            <p>
              The group-chat debate ender. Question in, decision out - in about
              30 seconds.
            </p>
            <div className="footer__social">
              {SOCIALS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener"
                  className="footer__social-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="footer__cols">
            {COLS.map((col) => (
              <div key={col.heading} className="fcol">
                <h5>{col.heading}</h5>
                {col.links.map((l) => (
                  <a
                    key={l.href + l.label}
                    href={l.href}
                    {...(l.external
                      ? { target: "_blank", rel: "noopener" }
                      : {})}
                    className="fcol__link"
                  >
                    <span className="fcol__label">{l.label}</span>
                    <span className="fcol__arrow" aria-hidden>
                      →
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer__base">
          <span>© 2026 Verdict. All decisions final.</span>
          <span className="footer__base-flex" />
          <span>Made for the friend who finally ends the debate.</span>
        </div>
      </div>
    </motion.footer>
  );
}
