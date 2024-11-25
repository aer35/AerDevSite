/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: '/AerDevSite',
    distDir: 'docs',
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
