/** @type {import('next').NextConfig} */
const nextConfig = {  async redirects() {
    return [
      {
        source: "/",
        destination: '/programming',
        permanent: true,
      },
    ]
  },}

module.exports = nextConfig
