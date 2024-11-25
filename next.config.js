/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'docs',
    images: {
        path: '/images',
        loader: 'default',
    }
};

module.exports = nextConfig;

// module.exports = {
//   assetPrefix: "/AerDevSite/",
// };
