import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_KEY: process.env.NASA_API_KEY,
  },
  sassOptions: {
    implementation: "sass-embedded",
  },
};

export default nextConfig;
