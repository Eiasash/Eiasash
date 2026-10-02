/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ANALYZER_URL: process.env.ANALYZER_URL || 'http://localhost:8888',
  }
}

export default nextConfig
