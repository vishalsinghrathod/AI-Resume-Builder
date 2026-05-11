/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.4'],
  images: {
    domains: ["images.unsplash.com"]
  }
};

export default nextConfig;