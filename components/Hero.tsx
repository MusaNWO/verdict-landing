import Phone from "./Phone";
import RotatingWord from "./RotatingWord";
import { APP_STORE_URL, PLAY_STORE_URL } from "./storeUrls";

const CHIPS = [
  { label: "Tacos", tone: "chip--coral", pos: "chip--a" },
  { label: "Ramen", tone: "chip--gold", pos: "chip--b" },
  { label: "Movie night", tone: "chip--sky", pos: "chip--c" },
  { label: "Bowling", tone: "chip--mint", pos: "chip--d" },
];

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__atmos" aria-hidden>
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
        <span className="hero__blob hero__blob--c" />
        <span className="hero__paper" />
      </div>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <div className="hero__kicker reveal">
            <p className="hero__brand">
              Verdict<span className="hero__brand-dot">.</span>
            </p>
            <span className="hero__kicker-stamp">Out now</span>
          </div>
          <p className="hero__eyebrow reveal d1">
            The group-chat debate ender
          </p>

          <h1 className="hero__title">
            <span className="hero__line hero__line--1">Order in the</span>
            <span className="hero__line hero__line--2">
              <RotatingWord />
            </span>
          </h1>

          <p className="hero__sub reveal d2">
            Drop the options, invite the jury, everyone votes. Verdict turns
            the endless &ldquo;idk, what do <em>you</em> want?&rdquo; into one
            final answer, stamped and closed.
          </p>

          <div className="hero__cta reveal d2">
            <div className="store-row hero__stores">
              <a
                className="store-btn"
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.05 12.6c0-2.9 2.4-4.3 2.5-4.35-1.36-2-3.48-2.27-4.23-2.3-1.8-.18-3.5 1.05-4.42 1.05-.9 0-2.3-1.02-3.8-1-1.96.03-3.76 1.14-4.77 2.9-2.03 3.53-.52 8.76 1.46 11.62.96 1.4 2.1 2.98 3.6 2.92 1.44-.06 1.98-.93 3.72-.93 1.74 0 2.23.93 3.76.9 1.55-.03 2.53-1.43 3.48-2.84 1.1-1.62 1.55-3.2 1.57-3.28-.03-.02-3-1.16-3.04-4.6zM14.2 4.32c.8-.97 1.34-2.3 1.2-3.64-1.15.05-2.55.77-3.37 1.73-.74.86-1.38 2.22-1.2 3.53 1.28.1 2.58-.65 3.37-1.62z" />
                </svg>
                <span style={{ textAlign: "left" }}>
                  <span className="sb-top">Download on the</span>
                  <br />
                  <span className="sb-main">App Store</span>
                </span>
              </a>
              <a
                className="store-btn"
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3.6 2.3c-.2.2-.32.55-.32 1v17.4c0 .45.12.8.33 1l.1.08L13.4 12v-.2L3.7 2.22l-.1.08zM17 15.3l-3.27-3.3L17 8.7l3.86 2.2c1.1.63 1.1 1.66 0 2.3L17 15.3zM13.73 12L16.4 9.3 4.92 2.78c-.36-.2-.7-.22-.97-.07L13.73 12zM4 21.2c.27.15.6.13.97-.08L16.4 14.7 13.73 12 4 21.2z" />
                </svg>
                <span style={{ textAlign: "left" }}>
                  <span className="sb-top">Get it on</span>
                  <br />
                  <span className="sb-main">Google Play</span>
                </span>
              </a>
            </div>
            <a className="hero__link" href="#how">
              See how it works ↓
            </a>
          </div>
        </div>

        <div className="hero__art reveal d2">
          <div className="hero__stage">
            {CHIPS.map((c) => (
              <span
                key={c.label}
                className={`chip ${c.tone} ${c.pos}`}
                aria-hidden
              >
                {c.label}
              </span>
            ))}
            <div className="hero__phone-glow" aria-hidden />
            <div className="hero__spotlight" aria-hidden />
            <Phone />
            <div className="hero__ground" aria-hidden />
          </div>
        </div>
      </div>
    </header>
  );
}
