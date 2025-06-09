import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.module.rules.push({
        test: /pdf\.worker\.min\.js$/,
        use: { loader: "worker-loader" },
      });
    }
    return config;
  },
};

export default nextConfig;
