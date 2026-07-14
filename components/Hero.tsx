import type { CSSProperties } from "react";
import WaitlistForm from "./WaitlistForm";
import Phone from "./Phone";

type FloatChipStyle = CSSProperties & {
  "--r"?: string;
  "--in-x"?: string;
  "--in-y"?: string;
  "--delay"?: string;
};

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
            Drop the options, invite the jury, everyone votes. Verdict turns
            the endless &ldquo;idk, what do <em>you</em> want?&rdquo; into one
            final answer, stamped and closed.
          </p>
          <div className="hero__cta reveal d2">
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
              iOS &amp; Android - out now
            </span>
            <span>
              <span
                className="dot"
                style={{ background: "var(--yellow)" }}
              ></span>{" "}
              Sign in with email, Apple, or Google
            </span>
          </div>
        </div>

        <div className="hero__art reveal d2">
          {/* Fixed-width scene so chip positions are anchored to the phone,
              not to the (variable) hero__art column. Chip left/right offsets
              in pixels sit safely outside the 300px phone. */}
          <div className="phone-scene">
            {/* Chips reflect the app's real templates — Food, Watch, Do.
                Each carries --in-x / --in-y: the pixel vector back toward the
                phone center. Entry animation uses those to fly chips OUT
                from behind the phone to their orbital positions. --delay
                stagger creates a clockwise circle-formation reveal. */}
            {/* left/right offsets are `-chipWidth - 12px` so the chip's inner
                edge sits ~12px outside the phone body — chips never get sliced
                by the phone silhouette. `right` uses fixed pixels rather than
                percent so widths stay stable across breakpoints. */}
            <div
              className="float-chip"
              style={
                {
                  top: "6%",
                  right: "calc(100% + 20px)",
                  "--r": "-6deg",
                  "--in-x": "160px",
                  "--in-y": "160px",
                  "--delay": "0.5s",
                } as FloatChipStyle
              }
            >
              <span className="em">🌮</span>Tacos
            </div>
            <div
              className="float-chip"
              style={
                {
                  top: "8%",
                  left: "calc(100% + 20px)",
                  "--r": "7deg",
                  "--in-x": "-160px",
                  "--in-y": "160px",
                  "--delay": "0.7s",
                } as FloatChipStyle
              }
            >
              <span className="em">🍜</span>Ramen
            </div>
            <div
              className="float-chip"
              style={
                {
                  top: "44%",
                  left: "calc(100% + 20px)",
                  "--r": "5deg",
                  "--in-x": "-180px",
                  "--in-y": "0px",
                  "--delay": "0.9s",
                } as FloatChipStyle
              }
            >
              <span className="em">🎮</span>Mario Kart
            </div>
            <div
              className="float-chip"
              style={
                {
                  bottom: "8%",
                  left: "calc(100% + 20px)",
                  "--r": "-5deg",
                  "--in-x": "-160px",
                  "--in-y": "-160px",
                  "--delay": "1.1s",
                } as FloatChipStyle
              }
            >
              <span className="em">🍣</span>Sushi
            </div>
            <div
              className="float-chip"
              style={
                {
                  bottom: "8%",
                  right: "calc(100% + 20px)",
                  "--r": "5deg",
                  "--in-x": "160px",
                  "--in-y": "-160px",
                  "--delay": "1.3s",
                } as FloatChipStyle
              }
            >
              <span className="em">🎳</span>Bowling
            </div>
            <div
              className="float-chip"
              style={
                {
                  top: "44%",
                  right: "calc(100% + 20px)",
                  "--r": "-4deg",
                  "--in-x": "200px",
                  "--in-y": "0px",
                  "--delay": "1.5s",
                } as FloatChipStyle
              }
            >
              <span className="em">🎬</span>Movie night
            </div>

            <Phone />
          </div>
        </div>
      </div>
    </header>
  );
}
