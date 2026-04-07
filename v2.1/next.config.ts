import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cacn_landing-page",
  assetPrefix: "/cacn_landing-page",
  images: { unoptimized: true },
  allowedDevOrigins: ["*.ngrok-free.dev"],
};

export default nextConfig;
