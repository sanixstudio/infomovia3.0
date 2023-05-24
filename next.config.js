/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/w1280/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/id/**/**/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
