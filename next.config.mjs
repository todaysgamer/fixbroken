/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
export default {
  async headers() {
    return [
      {
        source: "/:path*", // Apply to all routes
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};



