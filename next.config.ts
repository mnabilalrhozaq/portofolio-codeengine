import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Suppress console warnings
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;
