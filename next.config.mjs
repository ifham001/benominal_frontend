


/** @type {import('next').NextConfig} */
const nextConfig = {
  // crossOrigin: 'anonymous',

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.googleapis.com',
            pathname: '/benominal/products/**',
          },
          {
            protocol: 'https',
            hostname: 'storage.cloud.google.com',
            pathname: '/benominal/benominal_mains/**',
          },
        ],
      },  
      
};

export default nextConfig;

