import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #12121A 0%, #0A0A0F 100%)",
          borderRadius: "36px",
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: "110px",
            fontWeight: 700,
            color: "#D4AF37",
            letterSpacing: "0.05em",
            lineHeight: 1,
          }}
        >
          U
        </span>
      </div>
    ),
    { ...size }
  );
}
