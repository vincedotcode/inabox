/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ]
  },
  typescript: {
   
    ignoreBuildErrors: true,
  },
    transpilePackages: ['geist']
};

module.exports = nextConfig;
