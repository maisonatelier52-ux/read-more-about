// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['images.unsplash.com','i.pravatar.cc','e1.pxfuel.com'], // Add this line to include the Unsplash domain
//   },
//   // other config options can go here
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     formats: ['image/avif', 'image/webp'],     // ← add this
//   },
//   // other config options can go here
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85], // Add this line to support both quality levels
  },
  // other config options can go here
};

export default nextConfig;


