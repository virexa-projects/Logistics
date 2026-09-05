/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  experimental: {
    serverExternalPackages: ["razorpay"],
  },
};
  
  export default nextConfig;
  