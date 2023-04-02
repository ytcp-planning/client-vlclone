/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
    deviceSizes: [320, 640, 768, 1024, 1600],
  },
  images: ['./images/logo_vlclone.png']
}

module.exports = nextConfig
