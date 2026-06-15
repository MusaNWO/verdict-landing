export default function FinalCta() {
  return (
    <section className="section cta-final" id="get">
      <div className="wrap reveal">
        <span className="stamp stamp--lg">Case closed</span>
        <h2>The debate ends here.</h2>
        <p
          style={{
            color: "var(--muted)",
            fontWeight: 500,
            fontSize: 19,
            marginTop: 18,
            maxWidth: "30em",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Be the friend who finally ends it. Verdict is free to start — your
          group chat will thank you.
        </p>
        <div className="store-row">
          <a className="store-btn" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 12.6c0-2.9 2.4-4.3 2.5-4.35-1.36-2-3.48-2.27-4.23-2.3-1.8-.18-3.5 1.05-4.42 1.05-.9 0-2.3-1.02-3.8-1-1.96.03-3.76 1.14-4.77 2.9-2.03 3.53-.52 8.76 1.46 11.62.96 1.4 2.1 2.98 3.6 2.92 1.44-.06 1.98-.93 3.72-.93 1.74 0 2.23.93 3.76.9 1.55-.03 2.53-1.43 3.48-2.84 1.1-1.62 1.55-3.2 1.57-3.28-.03-.02-3-1.16-3.04-4.6zM14.2 4.32c.8-.97 1.34-2.3 1.2-3.64-1.15.05-2.55.77-3.37 1.73-.74.86-1.38 2.22-1.2 3.53 1.28.1 2.58-.65 3.37-1.62z" />
            </svg>
            <span style={{ textAlign: "left" }}>
              <span className="sb-top">Download on the</span>
              <br />
              <span className="sb-main">App Store</span>
            </span>
          </a>
          <a className="store-btn" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.6 2.3c-.2.2-.32.55-.32 1v17.4c0 .45.12.8.33 1l.1.08L13.4 12v-.2L3.7 2.22l-.1.08zM17 15.3l-3.27-3.3L17 8.7l3.86 2.2c1.1.63 1.1 1.66 0 2.3L17 15.3zM13.73 12L16.4 9.3 4.92 2.78c-.36-.2-.7-.22-.97-.07L13.73 12zM4 21.2c.27.15.6.13.97-.08L16.4 14.7 13.73 12 4 21.2z" />
            </svg>
            <span style={{ textAlign: "left" }}>
              <span className="sb-top">Get it on</span>
              <br />
              <span className="sb-main">Google Play</span>
            </span>
          </a>
        </div>
        <p
          style={{
            fontSize: 13.5,
            color: "var(--muted)",
            fontWeight: 600,
            marginTop: 20,
          }}
        >
          No account needed to join a verdict · Free forever for voters
        </p>
      </div>
    </section>
  );
}
