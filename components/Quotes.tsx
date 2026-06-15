export default function Quotes() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow reveal">The verdict on Verdict</div>
          <h2 className="reveal d1">Friendships saved. Dinners served.</h2>
        </div>
        <div className="quotes">
          <div className="quote reveal">
            <p>
              &ldquo;We went from a 40-message thread to a decision before the
              appetizers menu loaded.&rdquo;
            </p>
            <div className="qby">
              <span
                className="av"
                style={{ background: "var(--orange)" }}
              ></span>
              <div>
                <b>Maya R.</b>
                <br />
                <span>Group trip organiser</span>
              </div>
            </div>
          </div>
          <div className="quote reveal d1">
            <p>
              &ldquo;The wheel ended a six-month argument about whose turn it
              was to drive. No blood.&rdquo;
            </p>
            <div className="qby">
              <span
                className="av"
                style={{ background: "var(--blue)" }}
              ></span>
              <div>
                <b>Jordan P.</b>
                <br />
                <span>Carpool survivor</span>
              </div>
            </div>
          </div>
          <div className="quote reveal d2">
            <p>
              &ldquo;Our design team picks directions with weighted votes now.
              The audit log shut down every &lsquo;who decided this?&rsquo;&rdquo;
            </p>
            <div className="qby">
              <span
                className="av"
                style={{ background: "var(--green)" }}
              ></span>
              <div>
                <b>Priya N.</b>
                <br />
                <span>Design lead, Acme</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
