
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.pravatar.cc',
//       },
//       {
//         protocol: 'https',
//         hostname: 'e1.pxfuel.com',
//       },
//     ],
//   },
//   // other config options can go here
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // External image domains that are allowed
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
    
    // Enable modern image formats (AVIF is 20-30% smaller than WebP)
    formats: ['image/avif', 'image/webp'],
    
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    
    // Sizes for smaller images (icons, thumbnails)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Cache images for 60 seconds
    minimumCacheTTL: 60,
    
    // Security: prevent SVG attacks
    dangerouslyAllowSVG: false,
  },
  
  // Enable compression
  compress: true,
  
  // Use SWC for faster builds
  swcMinify: true,
};

export default nextConfig;
