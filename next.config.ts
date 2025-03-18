import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fakestoreapi.com'], // Allowing src for images from api
  },
};

export default nextConfig;
