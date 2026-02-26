import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // 启用静态导出，这是 GitHub Pages 运行 Next.js 的必要设置
  basePath: isProd ? "/xiboweb" : "", // 生产环境下匹配 GitHub 仓库子路径
  assetPrefix: isProd ? "/xiboweb/" : "", // 确保 CSS/JS 资源路径正确
  images: {
    unoptimized: true, // 静态导出模式下，必须禁用默认的图片优化
  },
};

export default nextConfig;
