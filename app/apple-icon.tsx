import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FF4D2E",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(-7deg)",
            border: "7px solid #FAF5EC",
            borderRadius: 18,
            padding: "8px 22px",
            color: "#FAF5EC",
            fontSize: 78,
            fontWeight: 900,
            letterSpacing: 2,
          }}
        >
          V.
        </div>
      </div>
    ),
    { ...size }
  );
}
