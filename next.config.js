/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    URL_BACKEND: "https://fazzpay.herokuapp.com",
    URL_CLOUDINARY: "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/",
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/main/home",
      },
    ];
  },
};
module.exports = nextConfig;
