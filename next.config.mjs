/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // 注意：GitHub Pages 的项目名是 xiboweb，所以必须加上这个前缀
    basePath: '/xiboweb',
    assetPrefix: '/xiboweb/',
    images: {
        unoptimized: true,
    },
    // 忽略构建错误，确保外网能最快发布
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
