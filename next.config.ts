import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  async redirects() {
    return [
      // Pillar/cornerstone content authored with top-level vanity URLs but
      // stored as blog posts. Permanent (308) so search engines and AI
      // crawlers update their canonical to the blog URL.
      {
        source: "/homers-odyssey-definitive-guide",
        destination: "/blog/homers-odyssey-definitive-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
