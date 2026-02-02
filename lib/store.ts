import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// 定义简单的 User 类型 (匹配 Prisma 返回的结构)
interface User {
  id: string;
  name: string;
  username: string;
  role: string;
  college?: string | null;
  avatar?: string | null;
}

interface AppState {
  currentUser: User | null;
  // 这里保留你代码里的 setCurrentUser，
  // 如果你的登录页面用的是 login，你可以把下面这行改成 login: (user: User | null) => void;
  setCurrentUser: (user: User | null) => void; 
  logout: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentUser: null,
      
      // 登录成功后调用这个，把用户信息存到本地
      setCurrentUser: (user) => set({ currentUser: user }),
      
      // 登出
      logout: () => set({ currentUser: null }),
    }),
    {
      name: 'uni-session-storage', // 存储的 key 名称
      
      // ✅ 关键修改：改成 sessionStorage
      // 效果：数据只在当前标签页有效，关闭标签页即清除，多窗口互不干扰
      storage: createJSONStorage(() => sessionStorage), 
    }
  )
);