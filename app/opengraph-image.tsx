import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SubSecond Labs | High-Performance Web Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await fetch(
    new URL("../public/logo.svg", import.meta.url)
  ).then((res) => res.arrayBuffer());

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
          backgroundColor: "#050505",
          backgroundImage: "linear-gradient(to bottom right, #050505, #111)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <img
            src={logoData as unknown as string}
            alt="SubSecond Labs logo"
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              color: "white",
            }}
          >
            SubSecond<span style={{ color: "#A7FF54" }}>Labs</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          We Engineer Sub-Second Websites for High-Ticket Contractors.
        </div>
      </div>
    ),
    { ...size }
  );
}
