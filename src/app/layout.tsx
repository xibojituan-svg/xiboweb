import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "喜播教育官网 - 专注新职业技能培训 | 有声主播 | AI短视频 | 影视剪辑",
  description: "喜播教育（Xibo Education）是由喜马拉雅出品的新职业在线教育品牌。提供有声书演播、有声书配音、短视频剪辑、网文写作、AI数字人等专业课程，助力职业成长。面向普通用户，手机、PC 端完美支持。",
  keywords: "喜播教育, 有声主播培训, 配音学习, 影视剪辑, 短视频创作, AI技能培训",
  authors: [{ name: "喜播教育" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
