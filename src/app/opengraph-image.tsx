import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Hampstead Property Services Group";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#F7F4EE",
          color: "#16263F",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ width: 80, height: 2, backgroundColor: "#B68A3E" }} />
        <div style={{ marginTop: 28, fontSize: 54, lineHeight: 1.15, fontWeight: 600 }}>
          Hampstead Property Services Group
        </div>
        <div style={{ marginTop: 20, fontSize: 28, color: "#6F6B63" }}>
          Kitchen, bathroom and light refurbishment for North West London
        </div>
        <div style={{ marginTop: 40, fontSize: 22 }}>020 7101 3168</div>
      </div>
    ),
    size,
  );
}
