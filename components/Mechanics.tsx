import WheelButton from "./WheelButton";

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
          <div className="mech reveal" style={{ background: "#FFF3E8" }}>
            <div
              className="mech__ico"
              style={{ background: "var(--primary)", color: "#fff" }}
            >
              🗳️
            </div>
            <h3>Anonymous vote</h3>
            <p>
              Everyone picks in secret, majority rules. No politics, no peer
              pressure, no &ldquo;well whatever <em>you</em> want.&rdquo;
            </p>
            <span className="tag" style={{ color: "var(--primary)" }}>
              FREE · THE CLASSIC
            </span>
          </div>
          <div className="mech reveal d1" style={{ background: "#EAF4FF" }}>
            <div className="mech__ico" style={{ background: "var(--blue)" }}>
              🎡
            </div>
            <h3>Spin the wheel</h3>
            <WheelButton />
            <p>
              Can&rsquo;t agree? Let fate decide — nobody gets blamed. Tap to
              spin.
            </p>
            <span className="tag" style={{ color: "#2E86C9" }}>
              FREE · CHAOS MODE
            </span>
          </div>
          <div className="mech reveal d2" style={{ background: "#EEF9F0" }}>
            <div className="mech__ico" style={{ background: "var(--green)" }}>
              📊
            </div>
            <h3>Ranked choice</h3>
            <p>
              Rank your picks 1, 2, 3. Verdict finds the option everyone can{" "}
              <em>live with</em> — not just the loudest one.
            </p>
            <span className="tag" style={{ color: "#3DA15B" }}>
              PRO · THE DIPLOMAT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
