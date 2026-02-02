import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader"; 

const notoSans = Noto_Sans_SC({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "重庆师范大学心理健康教育与咨询中心",
  description: "守护心灵，温暖相伴",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={notoSans.className}>
        
        {/* ✅ 使用封装好的 Header 组件 */}
        <SiteHeader />
        
        {/* 主要内容区 (增加顶部内边距，因为 Header 是 fixed 的) */}
        <div className="pt-[80px] min-h-screen">
          {children}
        </div>

        {/* 页脚 */}
        <footer className="bg-[#2b2b2b] text-gray-300 py-16">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-white text-lg font-bold mb-6 pb-2 border-b-2 border-[#5D9C59] inline-block">关于中心</h4>
              <p className="leading-relaxed text-sm">致力于为全校师生提供专业、规范、温暖的心理健康服务，传播心理健康知识，提升心理素质。</p>
            </div>
            <div>
               <h4 className="text-white text-lg font-bold mb-6 pb-2 border-b-2 border-[#5D9C59] inline-block">快速链接</h4>
               <ul className="space-y-3 text-sm">
                 <li><Link href="#" className="hover:text-[#5D9C59] transition-colors">隐私政策</Link></li>
                 <li><Link href="/auth" className="hover:text-[#5D9C59] transition-colors">管理后台</Link></li>
               </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-6 pb-2 border-b-2 border-[#5D9C59] inline-block">联系我们</h4>
              <p className="text-sm mb-2">地址：学生活动中心 305室</p>
              <p className="text-sm">电话：010-88888888</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
            &copy; 2025 重庆师范大学心理健康教育与咨询中心 | Designed for Students
          </div>
        </footer>

        <Toaster />
      </body>
    </html>
  );
}