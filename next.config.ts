import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  experimental: {
    proxyClientMaxBodySize: "20mb",
    globalNotFound: true,
  },
};

export default nextConfig;
