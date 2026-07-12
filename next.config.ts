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
      // Thea profile slug shortened - dropped the non-canonical "sato" surname.
      // Permanent (308) so the old blog URL passes its authority to the new one.
      {
        source: "/blog/meet-thea-sato",
        destination: "/blog/meet-thea",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
