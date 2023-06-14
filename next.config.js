/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
    ],
    domains: ['localhost']
  },
  env: {
    X_API_Key: process.env.X_API_Key
  }
}

module.exports = nextConfig
