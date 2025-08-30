import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Roadcorp - Building innovative products and solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div style={{ color: "#ffffff", marginBottom: 16 }}>
          Roadcorp
        </div>
        <div
          style={{
            color: "#888888",
            fontSize: 24,
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          The Road to Infinity — building, shipping, iterating.
        </div>
      </div>
    ),
    size
  );
}