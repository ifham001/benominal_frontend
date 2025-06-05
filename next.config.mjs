


/** @type {import('next').NextConfig} */
const nextConfig = {
  // crossOrigin: 'anonymous',

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.cloud.google.com',
            port: '',
            pathname: '/benominal/benominal_mains/**',
            search: '',
          },
        ],
      },  
      // headers() {
      //   return [
      //     {
      //       source: '/:path*',
      //       headers: [
              // {
              //   key: 'Access-Control-Allow-Origin',
              //   value: 'http://localhost:3005',
              // },
              // {
              //   key: 'Access-Control-Allow-Methods',
              //   value: 'GET, POST, PUT, DELETE, OPTIONS',
              // },
              // {
              //   key: 'Access-Control-Allow-Headers',
              //   value: 'Content-Type, Authorization',
              // },
             
        //     ],
        //   },
        // ];
      // }
};

export default nextConfig;

