import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Verdict — End the group-chat debate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#FAF5EC",
          color: "#1C1820",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: -1,
          }}
        >
          <span>Verdict</span>
          <span style={{ color: "#FF4D2E" }}>.</span>
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#FF4D2E",
            display: "flex",
          }}
        >
          The group-chat debate ender
        </div>

        <div
          style={{
            marginTop: 18,
            fontSize: 110,
            fontWeight: 900,
            letterSpacing: -3,
            lineHeight: 1,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span>Order in the&nbsp;</span>
          <span
            style={{
              position: "relative",
              color: "#FF4D2E",
              display: "flex",
              padding: "0 10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 14,
                height: 32,
                background: "#FFC94D",
                borderRadius: 4,
                transform: "rotate(-1deg)",
              }}
            />
            <span style={{ position: "relative" }}>group chat.</span>
          </span>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            fontWeight: 500,
            color: "#6E675F",
            maxWidth: 900,
            lineHeight: 1.35,
            display: "flex",
          }}
        >
          One tap, one vote, one final answer — in about 30 seconds.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 96,
            display: "flex",
            transform: "rotate(-6deg)",
            border: "5px solid #FF4D2E",
            color: "#FF4D2E",
            padding: "10px 26px",
            borderRadius: 14,
            fontSize: 44,
            fontWeight: 900,
            letterSpacing: 4,
            textTransform: "uppercase",
            background: "#FAF5EC",
          }}
        >
          Case closed
        </div>
      </div>
    ),
    { ...size }
  );
}
