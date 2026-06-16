import type { CSSProperties } from "react";
import WaitlistForm from "./WaitlistForm";

type FloatChipStyle = CSSProperties & { "--r"?: string };

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <div className="eyebrow reveal">The group-chat debate ender</div>
          <h1 className="reveal d1">
            Order in the <span className="hl">group chat.</span>
          </h1>
          <p className="hero__sub reveal d2">
            Drop the options, summon the jury, let everyone vote. Verdict turns
            the 45-minute &ldquo;idk, what do <em>you</em> want?&rdquo; spiral
            into one final answer — in about 30 seconds.
          </p>
          <div className="reveal d2">
            <WaitlistForm />
            <div className="hero__cta-secondary">
              <a className="hero__link" href="#how">
                or see how it works ↓
              </a>
            </div>
          </div>
          <div className="hero__meta reveal d3">
            <span>
              <span className="dot"></span> Free to start
            </span>
            <span>
              <span
                className="dot"
                style={{ background: "var(--blue)" }}
              ></span>{" "}
              iOS &amp; Android
            </span>
            <span>
              <span
                className="dot"
                style={{ background: "var(--yellow)" }}
              ></span>{" "}
              No account needed to vote
            </span>
          </div>
        </div>

        <div className="hero__art reveal d2">
          <div
            className="float-chip"
            style={{ top: "6%", left: "-2%", "--r": "-5deg" } as FloatChipStyle}
          >
            <span className="em">🌮</span>Tacos
          </div>
          <div
            className="float-chip"
            style={
              {
                top: "24%",
                right: "-4%",
                "--r": "6deg",
                animationDelay: ".8s",
              } as FloatChipStyle
            }
          >
            <span className="em">🍜</span>Ramen
          </div>
          <div
            className="float-chip"
            style={
              {
                bottom: "16%",
                left: "-6%",
                "--r": "4deg",
                animationDelay: "1.5s",
              } as FloatChipStyle
            }
          >
            <span className="em">🍕</span>Pizza
          </div>
          <div
            className="float-chip"
            style={
              {
                bottom: "6%",
                right: "2%",
                "--r": "-4deg",
                animationDelay: ".4s",
              } as FloatChipStyle
            }
          >
            <span className="em">🍣</span>Sushi
          </div>

          <div className="phone">
            <div className="phone__notch"></div>
            <div className="phone__screen">
              <div className="confetti" id="confetti"></div>
              <div className="scr scr--reveal">
                <p className="rq">Where do we eat?</p>
                <div className="rw">Ramen</div>
                <span className="stamp stamp--lg">Verdict</span>
                <div className="bars">
                  <div className="bar-row">
                    <span className="bl">Ramen</span>
                    <span className="bar-track">
                      <span
                        className="bar-fill win"
                        style={{ width: "100%" }}
                      ></span>
                    </span>
                  </div>
                  <div className="bar-row">
                    <span className="bl">Tacos</span>
                    <span className="bar-track">
                      <span
                        className="bar-fill"
                        style={{ width: "50%" }}
                      ></span>
                    </span>
                  </div>
                  <div className="bar-row">
                    <span className="bl">Sushi</span>
                    <span className="bar-track">
                      <span
                        className="bar-fill"
                        style={{ width: "25%" }}
                      ></span>
                    </span>
                  </div>
                </div>
                <div className="rstats">
                  Locked in 0:27 · 5 jurors · 3 of 5 votes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
