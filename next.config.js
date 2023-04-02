/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },
  images: ['./images/logo_vlclone.png']
}

module.exports = nextConfig
