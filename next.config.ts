import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'dev-to-uploads.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.freecodecamp.org',
      },
      {
        protocol: 'https',
        hostname: 'css-tricks.com',
      },
      {
        protocol: 'https',
        hostname: 'www.smashingmagazine.com',
      },
      {
        protocol: 'https',
        hostname: 'www.docker.com',
      },
      {
        protocol: 'https',
        hostname: 'www.apollographql.com',
      },
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.auth0.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
      },
      {
        protocol: 'https',
        hostname: 'wiki.postgresql.org',
      },
    ],
  },
};

export default nextConfig;
