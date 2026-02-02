"use client";
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { User, Shield, Bell, Save, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ProfilePage() {
  const { currentUser } = useAppStore();

  const handleSave = () => {
    toast.success("个人资料已更新");
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] flex items-center gap-2">
        <User className="w-6 h-6 text-[#5D9C59]" /> 个人档案
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 左侧：头像与概览 */}
        <Card className="border-0 shadow-sm h-fit">
          <CardContent className="pt-6 text-center">
            <div className="relative inline-block">
              <Avatar className="w-24 h-24 mx-auto border-4 border-[#F0F7EF]">
                <AvatarImage src={currentUser?.avatar} />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#5D9C59] border-2 border-white rounded-full"></div>
            </div>
            <h2 className="mt-4 text-xl font-bold text-[#2C3E50]">{currentUser?.name}</h2>
            <p className="text-slate-500 text-sm">计算机科学与技术学院</p>
            <div className="mt-4 flex justify-center gap-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100">2021级</Badge>
              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-100">本科生</Badge>
            </div>
          </CardContent>
        </Card>

        {/* 右侧：详细设置表单 */}
        <div className="md:col-span-2 space-y-6">
          
          {/* 基本信息 */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">基本信息</CardTitle>
              <CardDescription>您的校园身份信息（只读，如需修改请联系教务处）</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>学号</Label>
                  <Input defaultValue="2021001" disabled className="bg-slate-50 text-slate-500" />
                </div>
                <div className="space-y-2">
                  <Label>姓名</Label>
                  <Input defaultValue={currentUser?.name} disabled className="bg-slate-50 text-slate-500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>手机号码</Label>
                <Input defaultValue="138****8888" />
              </div>
              <div className="space-y-2">
                <Label>电子邮箱</Label>
                <Input defaultValue="student@university.edu.cn" />
              </div>
            </CardContent>
          </Card>

          {/* 紧急联系人 (关键功能) */}
          <Card className="border-0 shadow-sm border-l-4 border-l-orange-400">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-500" /> 紧急联系人
              </CardTitle>
              <CardDescription>用于危机情况下的紧急联络，请务必保持真实有效</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>联系人姓名</Label>
                  <Input placeholder="父母或辅导员姓名" />
                </div>
                <div className="space-y-2">
                  <Label>关系</Label>
                  <Input placeholder="如：父亲" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>联系电话</Label>
                <Input placeholder="请输入紧急联系人电话" />
              </div>
            </CardContent>
          </Card>

          {/* 隐私与通知 */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">隐私与通知</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">咨询提醒</Label>
                  <div className="text-sm text-slate-500">咨询开始前 30 分钟通过短信通知</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">咨询记录保护</Label>
                  <div className="text-sm text-slate-500">仅允许负责我的咨询师查看过往记录</div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end pt-4 border-t">
              <Button className="bg-[#5D9C59] hover:bg-[#3E6D3B]" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" /> 保存所有更改
              </Button>
            </CardFooter>
          </Card>

        </div>
      </div>
    </div>
  );
}

// 补充定义 Badge 组件，防止未导入错误
function Badge({ children, variant, className }: any) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </span>
  )
}