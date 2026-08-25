import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Sources are 1280x720; nothing wider is useful and each extra width is
    // another Cloudflare transform.
    deviceSizes: [640, 768, 1024, 1280],
    imageSizes: [256, 384, 512],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.hpsg.co.uk" }],
        destination: "https://hpsg.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
