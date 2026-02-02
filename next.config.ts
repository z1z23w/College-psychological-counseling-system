import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // 👇 1. 解除 1MB 上传限制 (关键配置)
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // 设置为 10MB，足够传图片了
    },
  },

  // 👇 2. 允许加载网络图片 (如 Unsplash)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;