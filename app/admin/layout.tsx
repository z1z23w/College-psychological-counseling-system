"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, FileText, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#1e293b]"> {/* 深色侧边栏 */}
      <aside className="w-64 bg-[#0f172a] text-slate-300 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
           <span className="font-bold text-lg text-white">系统管理后台</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: LayoutDashboard, label: '数据看板', href: '/admin/dashboard' },
            { icon: Users, label: '用户管理', href: '/admin/users' },
            { icon: FileText, label: '内容发布', href: '/admin/content' },
            { icon: Settings, label: '系统设置', href: '/admin/settings' },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <div className={`flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors ${
                pathname === item.href ? 'bg-[#5D9C59] text-white' : 'hover:bg-slate-800'
              }`}>
                <item.icon className="w-4 h-4" />
                {item.label}
              </div>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
           <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800" onClick={() => window.location.href='/'}>
             <LogOut className="w-4 h-4 mr-2" /> 退出系统
           </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto bg-[#F1F5F9] p-8 text-slate-800">
        {children}
      </main>
    </div>
  );
}