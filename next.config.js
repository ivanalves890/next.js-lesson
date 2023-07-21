/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "store.storeimages.cdn-apple.com",
        port: "",
        pathname: "/4982/as-images.apple.com/is/**",
      },
    ],
  },
};

module.exports = nextConfig;
