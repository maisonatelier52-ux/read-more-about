

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['nodemailer', 'node-cron', 'mongodb'],
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 85],
  },
  // other config options can go here
};

export default nextConfig;


