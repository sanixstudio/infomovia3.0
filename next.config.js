/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "image.tmdb.org",
      "https://image.tmdb.org/t/p/w185",
      "secure.gravatar.com",
      "picsum.photos",
      "lh3.googleusercontent.com",
    ],
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
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongodb"],
  },
};

module.exports = nextConfig;
