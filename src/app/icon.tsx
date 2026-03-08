import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0F",
          borderRadius: "4px",
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: "22px",
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
