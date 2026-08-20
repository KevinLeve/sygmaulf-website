import { ImageResponse } from "next/og";

export const alt = "Sygmaulf — Gaming. Media. Community.";
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
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a0a0b",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c9a24a",
            marginBottom: 24,
          }}
        >
          Gaming · Media · Community
        </div>
        <div
          style={{
            fontSize: 140,
            fontWeight: 800,
            color: "#f3f1ea",
            textTransform: "uppercase",
            lineHeight: 0.9,
            letterSpacing: -2,
          }}
        >
          Sygmaulf
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#a3a09a",
            maxWidth: 900,
          }}
        >
          Competitive gaming, creator-led content and community experiences.
        </div>
      </div>
    ),
    { ...size }
  );
}
