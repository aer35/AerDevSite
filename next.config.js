/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/AerDevSite' : '',
    images: {
        path: '/images',
        loader: 'default',
        unoptimized: true,
    }
};

module.exports = nextConfig;

// module.exports = {
//   assetPrefix: "/AerDevSite/",
// };
