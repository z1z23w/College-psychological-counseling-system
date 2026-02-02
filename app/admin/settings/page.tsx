"use client";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Settings, Save, Database, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
// ✅ 引入后端 Action
import { getSystemSettings, updateSystemSettings } from '@/app/actions';

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 表单状态
  const [platformName, setPlatformName] = useState("");
  const [hotline, setHotline] = useState("");
  const [openHours, setOpenHours] = useState("");
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  // ✅ 加载配置
  useEffect(() => {
    async function loadConfig() {
      const res = await getSystemSettings();
      if (res.success && res.data) {
        setPlatformName(res.data.platformName);
        setHotline(res.data.hotline);
        setOpenHours(res.data.openHours);
        setMaintenanceMode(res.data.maintenanceMode);
      }
      setLoading(false);
    }
    loadConfig();
  }, []);

  // ✅ 保存配置
  const handleSave = async () => {
    setSaving(true);
    const res = await updateSystemSettings({
      platformName,
      hotline,
      openHours,
      maintenanceMode
    });

    setSaving(false);
    if (res.success) {
      toast.success("系统配置已保存生效");
    } else {
      toast.error("保存失败，请重试");
    }
  };

  if (loading) {
    return <div className="p-10 flex justify-center text-slate-500"><Loader2 className="animate-spin mr-2" /> 加载设置...</div>;
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-[#1e293b] flex items-center gap-2">
          <Settings className="w-6 h-6 text-[#5D9C59]" /> 系统设置
        </h1>
        <p className="text-slate-500 mt-1">配置平台基础参数、安全策略及通知规则</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="general">基础设置</TabsTrigger>
          <TabsTrigger value="security">安全与访问</TabsTrigger>
          <TabsTrigger value="backup">数据备份</TabsTrigger>
        </TabsList>

        {/* 基础设置 */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>平台信息</CardTitle>
              <CardDescription>设置前台显示的联系方式与公告</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>平台名称</Label>
                <Input value={platformName} onChange={e => setPlatformName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label>危机干预热线</Label>
                <Input value={hotline} onChange={e => setHotline(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label>咨询室开放时间说明</Label>
                <Input value={openHours} onChange={e => setOpenHours(e.target.value)} />
              </div>
              <div className="flex items-center justify-between py-2 border-t mt-4">
                <div className="space-y-0.5">
                  <Label>系统维护模式</Label>
                  <div className="text-sm text-slate-500">开启后学生端将显示维护提示，无法登录</div>
                </div>
                <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button className="bg-[#5D9C59] hover:bg-[#3E6D3B]" onClick={handleSave} disabled={saving}>
                {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2"/>}
                {saving ? "保存中..." : "保存更改"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* 安全设置 (仅展示UI，暂不存库) */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>访问控制</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>强制统一身份认证</Label>
                  <div className="text-sm text-slate-500">仅允许通过学校SSO登录，禁用本地账号登录</div>
                </div>
                <Switch defaultChecked disabled />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>敏感操作二次验证</Label>
                  <div className="text-sm text-slate-500">导出数据或删除用户时需要验证管理员密码</div>
                </div>
                <Switch defaultChecked disabled />
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
               <div className="text-xs text-slate-400">注：安全策略暂由系统底层配置托管，此处不可修改</div>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* 数据备份 (模拟) */}
        <TabsContent value="backup">
           <Card>
            <CardHeader>
              <CardTitle>数据管理</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database className="w-8 h-8 text-[#5D9C59]" />
                  <div>
                    <div className="font-medium">上次自动备份</div>
                    <div className="text-sm text-slate-500">{new Date().toLocaleDateString()} 02:00:00 (大小: 45MB)</div>
                  </div>
                </div>
                <Button variant="outline">下载备份</Button>
              </div>
              <Button variant="secondary" className="w-full mt-4" onClick={() => toast.success("全量备份任务已提交后台队列")}>立即执行全量备份</Button>
            </CardContent>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}