import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Static export doesn't support next/image optimization — use unoptimized for now
    unoptimized: true,
  },
};

export default nextConfig;
