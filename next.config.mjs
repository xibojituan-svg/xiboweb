/** @type {import('next').NextConfig} */

// output: 'export' 只在 GitHub Actions 构建 GitHub Pages 时生效
// 本地 npm run dev 时 STATIC_EXPORT 未设置，API Routes 正常工作
const isStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig = {
    ...(isStaticExport ? {
        output: 'export',
        basePath: '',
        assetPrefix: '',
    } : {}),
    images: {
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
