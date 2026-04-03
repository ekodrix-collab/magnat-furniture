import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.storieshomes.com",
      },
      {
        protocol: "https",
        hostname: "www.vilangadanfurniture.com",
      },
    ],
  },
};

export default nextConfig;
