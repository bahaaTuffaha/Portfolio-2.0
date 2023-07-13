/** @type {import('next').NextConfig} */
const nextConfig = {  async redirects() {
  return [
    {
      source: '/',
      destination: '/programming',
      permanent: true,
    },
  ];
},
output: 'export',
images: {
  unoptimized: true,
},
};

module.exports = nextConfig
