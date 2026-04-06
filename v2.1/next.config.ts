import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: ["*.ngrok-free.dev"],
};

export default nextConfig;
