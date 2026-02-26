import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "喜播集团官网 - 中国个人健康与幸福服务平台",
  description: "喜播集团致力于向长期健康的“个人健康与幸福服务平台”转型。依托 TLC 生活方式医学与数字化 AI 数据中台，驱动教育培训与健康生活双曲线共生，帮助十万名女性成为家庭健康掌门人。",
  keywords: "喜播集团, 健康服务平台, TLC 生活方式医学, 女性健康, 教育培训生态, AI数据中台",
  authors: [{ name: "喜播集团" }],
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
