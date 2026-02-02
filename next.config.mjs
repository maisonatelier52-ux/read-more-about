// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['images.unsplash.com','i.pravatar.cc','e1.pxfuel.com'], // Add this line to include the Unsplash domain
//   },
//   // other config options can go here
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'e1.pxfuel.com',
      },
    ],
  },
  // other config options can go here
};

export default nextConfig;


