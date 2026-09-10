/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverExternalPackages: ["razorpay"],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.frisbi.in',
          },
        ],
        destination: 'https://frisbi.in/:path*',
        permanent: true, // This issues a 301 permanent redirect for SEO
      },
    ];
  },
};

export default nextConfig;