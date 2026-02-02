"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, LogOut, MessageSquare, HeartPulse, User } from "lucide-react"; 
import { toast } from "sonner";

export function SiteHeader() {
  const router = useRouter();
  const { currentUser, logout } = useAppStore();

  // 退出登录逻辑
  const handleLogout = () => {
    logout();
    toast.success("已安全退出");
    router.push("/");
  };

  // 根据角色跳转工作台
  const getDashboardLink = () => {
    if (!currentUser) return "/auth";
    switch (currentUser.role) {
      case "admin": return "/admin/users";
      case "counselor": return "/counselor/dashboard";
      default: return "/student/dashboard";
    }
  };

  // 根据角色跳转咨询页面
  const getChatLink = () => {
    if (!currentUser) return "/auth";
    return currentUser.role === 'counselor' ? '/counselor/chat' : '/student/chat';
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all h-[80px] flex items-center">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* 左侧 Logo */}
        <Link href="/" className="flex items-center gap-3 text-[#5D9C59] hover:opacity-80 transition-opacity">
          <HeartPulse className="w-8 h-8" />
          <span className="text-xl md:text-2xl font-bold tracking-tight">大学心理咨询中心</span>
        </Link>
        
        {/* 右侧功能区 */}
        <div className="flex items-center gap-6">
          
          {currentUser ? (
            // ✅ 已登录状态：显示咨询入口 + 头像菜单
            <div className="flex items-center gap-4">
              
              {/* 1. 在线咨询入口 (管理员不显示) */}
              {currentUser.role !== 'admin' && (
                <Link href={getChatLink()}>
                  <Button variant="ghost" size="icon" className="text-slate-500 hover:text-[#5D9C59] hover:bg-[#F0F7EF]" title="在线咨询">
                    <MessageSquare className="w-6 h-6" />
                  </Button>
                </Link>
              )}

              {/* 2. 欢迎语 */}
              <span className="text-sm text-slate-500 hidden md:inline-block">
                你好, {currentUser.name}
              </span>
              
              {/* 3. 头像下拉菜单 */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border border-slate-200">
                      <AvatarImage src={currentUser.avatar || ""} />
                      <AvatarFallback className="bg-[#5D9C59] text-white">
                        {currentUser.name[0]}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{currentUser.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {currentUser.role === 'student' ? '学生' : currentUser.role === 'counselor' ? '咨询师' : '管理员'}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push(getDashboardLink())} className="cursor-pointer">
                    <LayoutDashboard className="mr-2 h-4 w-4" /> 进入工作台
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" /> 退出登录
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            // ❌ 未登录状态：显示导航链接 + 登录按钮
            <nav className="hidden md:flex items-center gap-8">
              {['首页', '服务项目', '师资团队', '常见问题'].map((item) => (
                <Link key={item} href={`/#${item === '首页' ? 'home' : item === '服务项目' ? 'services' : item === '师资团队' ? 'team' : 'faq'}`} 
                  className="text-gray-600 font-medium hover:text-[#5D9C59] relative group py-2">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5D9C59] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Link href="/auth">
                <button className="bg-[#5D9C59] text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:bg-[#3E6D3B] hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                  登录/注册
                </button>
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}