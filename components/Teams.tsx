export default function Teams() {
  return (
    <section className="section teams" id="teams">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow reveal">Verdict Teams</div>
          <h2 className="reveal d1">Decisions, for the whole team.</h2>
          <p className="reveal d2">
            Standups, offsite spots, demo order, design directions. Give any
            group that decides together a shared workspace — with a paper
            trail.
          </p>
        </div>
        <div className="team-grid">
          <div className="tcard reveal">
            <div className="tc-ico">🗂️</div>
            <h4>Shared workspace</h4>
            <p>One home for every team decision, open to up to 25 members.</p>
          </div>
          <div className="tcard reveal d1">
            <div className="tc-ico">📜</div>
            <h4>Decision log</h4>
            <p>
              A full audit trail — who decided what, and when. Export to CSV or
              Notion.
            </p>
          </div>
          <div className="tcard reveal d2">
            <div className="tc-ico">⚖️</div>
            <h4>Weighted votes</h4>
            <p>Role-based voting weight. Leads can count for more when it counts.</p>
          </div>
          <div className="tcard reveal d3">
            <div className="tc-ico">💬</div>
            <h4>Slack built in</h4>
            <p>
              Every verdict posts to your channel. Decisions where work
              already happens.
            </p>
          </div>
        </div>
        <div className="reveal d2" style={{ marginTop: 44 }}>
          <a
            className="btn btn--lg"
            href="#pricing"
            style={{ background: "var(--yellow)", color: "var(--ink)" }}
          >
            Start a Teams trial
          </a>
        </div>
      </div>
    </section>
  );
}
