/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ["assets.aceternity.com"],
  },
};

export default nextConfig;
