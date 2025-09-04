import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["lh3.googleusercontent.com"]
  },
  eslint: {
    ignoreDuringBuilds: true, // skip lint
  },
  typescript: {
    ignoreBuildErrors: true, // skip type checks
  },
};

export default nextConfig;
