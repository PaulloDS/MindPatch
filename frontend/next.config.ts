import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRemoveOverlay: true, // 🔥 remove o Dev Overlay
  },
};

export default nextConfig;
