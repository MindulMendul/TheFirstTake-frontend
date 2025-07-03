import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {},
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
