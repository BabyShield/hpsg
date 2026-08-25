import { ImageResponse } from "next/og";

import { site } from "@/data/site";
import { brand } from "@/lib/brand";

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
          backgroundColor: brand.navy,
          color: brand.bone,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div style={{ width: 84, height: 3, backgroundColor: brand.gold }} />
        <div
          style={{
            marginTop: 32,
            fontSize: 58,
            lineHeight: 1.12,
            fontWeight: 500,
            letterSpacing: -1,
          }}
        >
          Hampstead Property Services Group
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "rgba(247, 244, 238, 0.72)" }}>
          Kitchen, bathroom and light refurbishment for North West London
        </div>
        <div style={{ marginTop: 44, fontSize: 24, color: brand.gold, letterSpacing: 2 }}>
          {site.phoneDisplay}
        </div>
      </div>
    ),
    size,
  );
}
