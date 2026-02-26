/** @type {import('next').NextConfig} */

// 仅在生产构建（npm run build）时启用 GitHub Pages 路径前缀
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    // 本地开发时不设置前缀，部署到 GitHub Pages 时才加上
    basePath: isProd ? '/xiboweb' : '',
    assetPrefix: isProd ? '/xiboweb/' : '',
    images: {
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
