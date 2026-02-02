"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { loginAction } from '@/app/actions'; // ✅ 引入后端验证
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2, UserCircle2, KeyRound } from 'lucide-react';

export default function AuthPage() {
  const router = useRouter();
  
  // ⚠️ 重点：只解构 setCurrentUser，千万别解构 login
  const { setCurrentUser } = useAppStore(); 

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'student'
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. 调用后端数据库验证
      const res = await loginAction(formData.username, formData.role);

      if (res.success) {
        // 2. 验证通过，把用户信息存到前端状态
        setCurrentUser(res.data);
        toast.success("登录成功", { description: `欢迎回来，${res.data.name}` });

        // 3. 根据角色跳转
        if (formData.role === 'admin') router.push('/admin/users');
        else if (formData.role === 'counselor') router.push('/counselor/dashboard');
        else router.push('/student/dashboard');
      } else {
        toast.error("登录失败", { description: res.error || "账号或角色不匹配" });
      }
    } catch (error) {
      toast.error("系统错误", { description: "无法连接到服务器" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F7EF] p-4 bg-[url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      <Card className="w-full max-w-md shadow-2xl border-0 relative z-10 bg-white/95 backdrop-blur">
        <CardHeader className="space-y-1 text-center pb-8">
          <div className="mx-auto w-12 h-12 bg-[#5D9C59] rounded-full flex items-center justify-center mb-4">
            <UserCircle2 className="text-white w-7 h-7" />
          </div>
          <CardTitle className="text-2xl font-bold text-[#2C3E50]">欢迎回来</CardTitle>
          <CardDescription>高校心理咨询预约系统</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">登录账号</TabsTrigger>
              <TabsTrigger value="register" disabled>注册账号</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label>我是...</Label>
                  <Select 
                    value={formData.role} 
                    onValueChange={(val) => setFormData({...formData, role: val})}
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="选择身份" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">学生 (Student)</SelectItem>
                      <SelectItem value="counselor">心理咨询师 (Counselor)</SelectItem>
                      <SelectItem value="admin">管理员 (Admin)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>账号 (学号/工号)</Label>
                  <div className="relative">
                    <UserCircle2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input 
                      placeholder="请输入学号或工号" 
                      className="pl-9 bg-white"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>密码</Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input 
                      type="password" 
                      placeholder="默认密码: 123456" 
                      className="pl-9 bg-white"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#5D9C59] hover:bg-[#3E6D3B] text-white h-11 mt-4 text-base"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "立即登录"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <div className="text-center py-10 text-slate-500 text-sm">
                <p>为确保数据安全，目前仅支持管理员后台添加账号。</p>
                <p className="mt-2">请联系辅导员或心理中心开通权限。</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="justify-center border-t py-4 text-xs text-slate-400">
          © 2024 Campus Counseling System. All rights reserved.
        </CardFooter>
      </Card>
    </div>
  );
}