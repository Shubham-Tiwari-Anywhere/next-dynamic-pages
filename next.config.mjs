/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.iconscout.com",
      },
      {
        hostname:"source.unsplash.com"
      }
    ],
  },
};

export default nextConfig;
