/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
    // limit of 25 deviceSizes values
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // limit of 25 imageSizes values
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['./images/logo_vlclone.png', "https://qr.ecaptcha.vn/api/generate/vcb/6691999999/NGUYEN%20NGOC%20HOANG%20LONG?memo=vlclone%209920&is_mask=0&bg=16"]
  }
}

module.exports = nextConfig
