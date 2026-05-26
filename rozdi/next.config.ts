import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push({ canvas: 'canvas' });
    return config;
  },
};

export default nextConfig;
