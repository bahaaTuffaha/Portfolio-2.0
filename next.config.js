/** @type {import('next').NextConfig} */
const nextConfig = {  async redirects() {
    return [
      output: 'export',
      {
        source: "/",
        destination: '/programming',
        permanent: true,
      },
    ]
  },}

module.exports = nextConfig
