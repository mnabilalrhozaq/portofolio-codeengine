import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Enable Turbopack (Next.js 16 default)
  turbopack: {},

  // Suppress console warnings
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;
