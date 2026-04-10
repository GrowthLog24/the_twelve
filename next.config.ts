import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [],
  allowedDevOrigins: ['http://127.0.0.1:3000', '127.0.0.1', 'localhost'],
  devIndicators: false,
} as NextConfig & { allowedDevOrigins?: string[] };

export default nextConfig;
