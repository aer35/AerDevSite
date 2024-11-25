/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'docs',
    basePath: '/docs',
    assetPrefix: "/AerDevSite/",
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
