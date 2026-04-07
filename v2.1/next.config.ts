import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cacn_landing_page",
  assetPrefix: "/cacn_landing_page",
  images: { unoptimized: true },
  allowedDevOrigins: ["*.ngrok-free.dev"],
};

export default nextConfig;
