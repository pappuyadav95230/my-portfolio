/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables linting errors during production build
  },
}

module.exports = nextConfig;
