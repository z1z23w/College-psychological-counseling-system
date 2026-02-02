"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Calendar, MessageSquare, Activity, Compass, Settings, LogOut, Video } from 'lucide-react';
import { useAppStore } from '@/lib/store';
// ✅ 1. 引入危机干预提醒组件
import CrisisAlert from '@/components/CrisisAlert';

const MENU_ITEMS = [
  { icon: Home, label: '概览', href: '/student/dashboard' },
  { icon: Video, label: '在线咨询', href: '/student/video', special: true },
  { icon: Calendar, label: '我的预约', href: '/student/booking' },
  { icon: Compass, label: '心理知识', href: '/student/articles' },
  { icon: Activity, label: '心理测评', href: '/student/assessment' },
  { icon: MessageSquare, label: '消息中心', href: '/student/chat' },
];

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { currentUser } = useAppStore();

  return (
    <div className="flex h-screen overflow-hidden bg-[#F0F7EF]"> 
      {/* 侧边栏：白色背景 + 绿色高亮 */}
      <aside className="w-20 lg:w-64 hidden md:flex flex-col border-r border-gray-200 bg-white">
        <div className="h-[80px] flex items-center gap-3 px-6 border-b border-gray-100">
           <div className="w-8 h-8 rounded-lg bg-[#5D9C59] flex items-center justify-center text-white">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
           </div>
           <span className="font-bold text-lg hidden lg:block text-[#2C3E50]">学生中心</span>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#E8F5E9] text-[#2E7D32] font-semibold' 
                    : 'text-slate-500 hover:bg-gray-50 hover:text-slate-900'
                }`}>
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-[#2E7D32]' : 'text-slate-400'}`} />
                  <span className="hidden lg:block">{item.label}</span>
                </div>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 p-2">
            <img src={currentUser?.avatar} className="w-9 h-9 rounded-full bg-slate-200 object-cover" />
            <div className="hidden lg:block overflow-hidden">
              <div className="text-sm font-semibold text-slate-700 truncate">{currentUser?.name}</div>
              <div className="text-xs text-slate-400">学生账号</div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 relative overflow-y-auto p-4 md:p-8">
        {/* ✅ 2. 插入全局提醒组件 (如果用户已登录) */}
        {/* 这个组件不可见，只有当有 pending 状态的干预记录时才会弹出 Dialog */}
        {currentUser?.id && <CrisisAlert studentId={currentUser.id} />}

        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}