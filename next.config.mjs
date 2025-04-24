import svgr from "next-svgr";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Any other Next.js config here
  experimental: {
    // If you're using turbopack (optional, but helps with latest builds)
    // turbotrace: true,
  },
  // Add the SVGR plugin
  ...svgr(),
};

export default nextConfig;
