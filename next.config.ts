import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [], // example standard config to avoid empty object issues
  allowedDevOrigins: ['http://127.0.0.1:3000', '127.0.0.1', 'localhost'],
} as NextConfig & { allowedDevOrigins?: string[] }; // Fallback type casting in case Next.js types don't have it yet

export default nextConfig;
