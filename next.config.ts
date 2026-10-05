/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    qualities: [75, 90, 100],
  },
}

module.exports = nextConfig;
