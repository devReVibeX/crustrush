/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "snapcalorie-webflow-website.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;