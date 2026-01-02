import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pestana.com",
      },
      {
        protocol: "https",
        hostname: "www.ncl.com", 
      },
      {
        protocol: "https",
        hostname: "mediaim.expedia.com",
      }
    ]
  }
  
};

export default nextConfig;
