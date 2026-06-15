function CheckIcon() {
  return (
    <svg viewBox="0 0 12 10" fill="none">
      <path
        d="M1 5l3.5 3.5L11 1"
        stroke="#1C1820"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProSplit() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap split">
        <div className="reveal">
          <div className="eyebrow">Verdict Pro</div>
          <h2
            style={{
              fontSize: "clamp(30px,4vw,50px)",
              marginTop: 14,
            }}
          >
            For the friend who plans everything.
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 1.55,
              marginTop: 18,
            }}
          >
            Paid by one, enjoyed by the whole group. Unlock the power tools and
            keep the receipts.
          </p>
          <div className="feat-list">
            <div className="feat">
              <span className="feat__check">
                <CheckIcon />
              </span>
              <div>
                <b>Ranked-choice &amp; weighted wheel</b>
                <p>Smarter mechanics for the decisions that matter.</p>
              </div>
            </div>
            <div className="feat">
              <span className="feat__check">
                <CheckIcon />
              </span>
              <div>
                <b>Timed verdicts</b>
                <p>
                  Set a clock — the room auto-closes when it&rsquo;s up. No
                  more ghosting the vote.
                </p>
              </div>
            </div>
            <div className="feat">
              <span className="feat__check">
                <CheckIcon />
              </span>
              <div>
                <b>Full history &amp; archive</b>
                <p>
                  &ldquo;Wait, what did we decide last time?&rdquo; Every
                  verdict, searchable, forever.
                </p>
              </div>
            </div>
            <div className="feat">
              <span className="feat__check">
                <CheckIcon />
              </span>
              <div>
                <b>Custom stamps &amp; themes</b>
                <p>Brand the verdict card with your own word and a premium theme.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cluster reveal d1">
          <div
            className="pcard"
            style={{
              top: "6%",
              left: "4%",
              transform: "rotate(-4deg)",
              zIndex: 2,
            }}
          >
            <div className="pc-label">Ranked choice</div>
            <div className="pc-row">
              <span className="rank-badge on">1</span>
              <b style={{ fontFamily: "var(--display)" }}>Bowling</b>
            </div>
            <div className="pc-row">
              <span className="rank-badge">2</span>
              <b style={{ fontFamily: "var(--display)" }}>Karaoke</b>
            </div>
            <div className="pc-row">
              <span className="rank-badge">3</span>
              <b style={{ fontFamily: "var(--display)" }}>Arcade</b>
            </div>
          </div>
          <div
            className="pcard"
            style={{
              bottom: "18%",
              right: "2%",
              transform: "rotate(5deg)",
              zIndex: 3,
              width: 230,
            }}
          >
            <div className="pc-label">Auto-close timer</div>
            <div className="pc-row" style={{ justifyContent: "space-between" }}>
              <b style={{ fontFamily: "var(--display)", fontSize: 18 }}>
                Friday plan?
              </b>
              <svg className="ring" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  fill="none"
                  stroke="var(--soft)"
                  strokeWidth="4"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="107"
                  strokeDashoffset="32"
                  transform="rotate(-90 20 20)"
                />
              </svg>
            </div>
          </div>
          <div
            className="pcard"
            style={{
              bottom: 0,
              left: "10%",
              transform: "rotate(-2deg)",
              zIndex: 1,
              width: 200,
              background: "var(--ink)",
              color: "var(--cream)",
              borderColor: "var(--ink)",
            }}
          >
            <div className="pc-label" style={{ color: "var(--yellow)" }}>
              Custom stamp
            </div>
            <div style={{ textAlign: "center", padding: "8px 0 4px" }}>
              <span
                className="stamp"
                style={{
                  color: "var(--yellow)",
                  borderColor: "var(--yellow)",
                }}
              >
                Brunch ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
