"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Users, Home, Settings, LogOut, Clock, AlertTriangle } from 'lucide-react'; // ✅ 引入 AlertTriangle
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';

// ✅ 定义菜单项，加入“危机干预”
const MENU_ITEMS = [
  { icon: Home, label: '工作概览', href: '/counselor/dashboard' },
  { icon: Calendar, label: '排班管理', href: '/counselor/schedule' },
  { icon: Users, label: '咨询记录', href: '/counselor/cases' },
  // 👇 新增高亮菜单
  { icon: AlertTriangle, label: '危机干预', href: '/counselor/interventions', special: true },
];

export default function CounselorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { currentUser } = useAppStore();

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      {/* 侧边栏 */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
           <span className="font-bold text-lg text-[#2C3E50]">咨询师工作台</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            // 判断是否为特殊菜单（危机干预）
            const isSpecial = item.special;

            return (
              <Link key={item.href} href={item.href}>
                <div className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1
                  ${isActive 
                    ? (isSpecial ? 'bg-red-100 text-red-700' : 'bg-[#5D9C59] text-white') // 选中状态：危机红/普通绿
                    : (isSpecial ? 'text-red-600 hover:bg-red-50' : 'text-slate-600 hover:bg-gray-50') // 未选中状态
                  }
                `}>
                  <item.icon className={`w-4 h-4 ${isSpecial && !isActive ? 'text-red-500' : ''}`} />
                  {item.label}
                  
                  {/* 如果是危机干预，加个动态红点提示 */}
                  {isSpecial && (
                    <span className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
           <div className="flex items-center gap-3 mb-4">
             <img src={currentUser?.avatar || "https://github.com/shadcn.png"} className="w-8 h-8 rounded-full bg-slate-200 object-cover" />
             <div className="text-sm">
               <div className="font-bold text-slate-700">{currentUser?.name || '咨询师'}</div>
               <div className="text-xs text-slate-500">在岗</div>
             </div>
           </div>
           <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100" onClick={() => window.location.href='/'}>
             <LogOut className="w-4 h-4 mr-2" /> 退出
           </Button>
        </div>
      </aside>
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
           {children}
        </div>
      </main>
    </div>
  );
}