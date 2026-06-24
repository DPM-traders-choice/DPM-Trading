import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: 'my.dpmtrade.com' },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "https://my.dpmtrade.com/my/login",
      },
      {
        source: "/register",
        destination: "https://my.dpmtrade.com/my/register/",
      },
      {
        source: "/my/:path*",
        destination: "https://my.dpmtrade.com/my/:path*",
      },
    ];
  },
};

export default nextConfig;
