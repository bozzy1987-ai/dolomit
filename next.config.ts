import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: { remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/jpuisiv8/**" }] },
};

export default nextConfig;
