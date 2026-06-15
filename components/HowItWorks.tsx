export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="sec-head center">
          <div className="eyebrow reveal">The loop</div>
          <h2 className="reveal d1">Three taps to a final answer.</h2>
          <p className="reveal d2">
            No more polls that nobody answers, no more &ldquo;I&rsquo;m easy,
            you pick.&rdquo; Verdict gives the group a structure — and an
            ending.
          </p>
        </div>
        <div className="steps">
          <div className="step reveal">
            <div className="step__n">1</div>
            <h3>Drop the options</h3>
            <p>
              Pose the question, toss in the contenders. Everyone in the room
              can add their own.
            </p>
            <div className="chips">
              <span className="mini-chip on">Tacos</span>
              <span className="mini-chip">Sushi</span>
              <span className="mini-chip">Ramen</span>
              <span className="mini-chip">+ add</span>
            </div>
          </div>
          <div className="step reveal d1">
            <div className="step__n">2</div>
            <h3>The jury votes</h3>
            <p>
              Share a link — friends join in a tap, no account needed.
              Anonymous votes, ranked choice, or spin the wheel.
            </p>
            <div className="chips">
              <span className="mini-chip">🗳️ Vote</span>
              <span className="mini-chip">🎡 Wheel</span>
              <span className="mini-chip">📊 Rank</span>
            </div>
          </div>
          <div className="step reveal d2">
            <div className="step__n">3</div>
            <h3>Stamped final</h3>
            <p>
              One verdict, stamped and shareable. The debate is closed. No
              relitigating in the group chat.
            </p>
            <div className="chips">
              <span className="mini-chip on">Ramen 🍜</span>
              <span className="mini-chip">⚖️ Case closed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
