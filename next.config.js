/* eslint-env node */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages. There is no image server, so images ship at the size they are committed.
  output: 'export',
  images: {unoptimized: true},
  pageExtensions: ['tsx', 'ts'],
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
};

module.exports = nextConfig;
