/** @type {import('next').NextConfig} */
const nextConfig = {
  // Move out of experimental to fix Next.js 16 warning
  serverExternalPackages: ["razorpay"],

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  compress: true,

  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "framer-motion", "swiper"],
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
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