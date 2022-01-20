/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.bottlehouse.ru'],
    deviceSizes: [116, 168, 336],
  },
}

module.exports = nextConfig
