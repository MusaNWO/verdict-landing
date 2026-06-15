function Tick() {
  return (
    <span className="tick">
      <svg viewBox="0 0 12 10" fill="none">
        <path
          d="M1 5l3.5 3.5L11 1"
          stroke="#1C1820"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow reveal">Pricing</div>
          <h2 className="reveal d1">Only the creator pays.</h2>
          <p className="reveal d2">
            Everyone you invite votes free, forever. Pick a plan when
            you&rsquo;re ready for more.
          </p>
        </div>
        <div className="price-grid">
          <div className="tier reveal">
            <div className="tier__name">Free</div>
            <div className="tier__price">
              $0<small> / forever</small>
            </div>
            <div className="tier__blurb">
              Everything you need to end the dinner debate.
            </div>
            <ul className="tier__feats">
              <li>
                <Tick />
                Up to 3 active verdicts
              </li>
              <li>
                <Tick />
                Unlimited voters
              </li>
              <li>
                <Tick />
                Vote &amp; spin the wheel
              </li>
              <li>
                <Tick />
                Share result cards
              </li>
            </ul>
            <a className="btn btn--ghost" href="#get">
              Get started
            </a>
          </div>
          <div className="tier pop reveal d1">
            <span className="tier__pop">Most popular</span>
            <div className="tier__name">Verdict Pro</div>
            <div className="tier__price">
              $4.99<small> / mo</small>
            </div>
            <div className="tier__blurb">
              For the one who always organises the group.
            </div>
            <ul className="tier__feats">
              <li>
                <Tick />
                Unlimited verdicts
              </li>
              <li>
                <Tick />
                Ranked choice &amp; weighted wheel
              </li>
              <li>
                <Tick />
                Timed verdicts &amp; history
              </li>
              <li>
                <Tick />
                Custom stamps &amp; themes
              </li>
            </ul>
            <a className="btn" href="#get">
              Start 7 days free
            </a>
          </div>
          <div className="tier reveal d2">
            <div className="tier__name">Teams</div>
            <div className="tier__price">
              $9.99<small> / mo</small>
            </div>
            <div className="tier__blurb">
              For work teams, clubs, and anyone deciding at scale.
            </div>
            <ul className="tier__feats">
              <li>
                <Tick />
                Everything in Pro
              </li>
              <li>
                <Tick />
                Shared workspace · 25 seats
              </li>
              <li>
                <Tick />
                Audit log + CSV / Notion
              </li>
              <li>
                <Tick />
                Slack &amp; weighted votes
              </li>
            </ul>
            <a className="btn btn--ink" href="#get">
              Start Teams trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
