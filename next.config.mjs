/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/inicial',
        permanent: true,
        locale: false,
      },
    ];
  },
};

export default nextConfig;
