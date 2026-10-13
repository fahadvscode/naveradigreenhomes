import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Navera at Mayfield Village, detached homes by Digreen Homes at Countryside Drive and Torbram Road, Brampton";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#FAF7F0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "42%",
            background: "#1D2F25",
            color: "#FAF7F0",
            padding: "64px",
          }}
        >
          <div style={{ display: "flex", fontSize: 68, fontFamily: "Georgia", lineHeight: 1 }}>Navera</div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 28 }}>at Mayfield Village</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "58%",
            padding: "64px",
            color: "#1D2F25",
          }}
        >
          <div style={{ display: "flex", fontSize: 36, fontFamily: "Georgia" }}>Detached homes in Brampton</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 26 }}>Countryside Drive and Torbram Road</div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 26 }}>38 and 41 Series, from $999,999</div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 24, color: "#8F5B38" }}>Digreen Homes, coming this fall</div>
        </div>
      </div>
    ),
    size,
  );
}
