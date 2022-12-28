/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'github.com', 'resume-strapi-backend.onrender.com', 'api.djilali.tabbouche.net']
  }
}

module.exports = nextConfig
