import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const logoData = readFileSync(join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #12281a 0%, #0a190f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={140} height={102} alt="" />
        <div
          style={{
            marginTop: 32,
            fontSize: 76,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -1,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 34,
            color: "#bfeba1",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 16,
            fontSize: 22,
            color: "#93ae8e",
          }}
        >
          <span>Youth-Led</span>
          <span>&middot;</span>
          <span>100% Free</span>
          <span>&middot;</span>
          <span>Gamified Learning</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
