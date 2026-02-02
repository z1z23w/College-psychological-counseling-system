"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, AlertTriangle, FileText, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DATA = [
  { name: '周一', visits: 40 },
  { name: '周二', visits: 30 },
  { name: '周三', visits: 55 },
  { name: '周四', visits: 45 },
  { name: '周五', visits: 80 },
  { name: '周六', visits: 20 },
  { name: '周日', visits: 15 },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">系统概览</h1>
        <Button variant="outline" onClick={() => window.location.href = '/'}>退出登录</Button>
      </div>

      {/* 核心指标 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: '总用户数', value: '1,284', icon: Users, color: 'text-blue-600' },
          { title: '本周预约', value: '342', icon: FileText, color: 'text-purple-600' },
          { title: '危机预警', value: '3', icon: AlertTriangle, color: 'text-red-600' },
          { title: '服务满意度', value: '98%', icon: Activity, color: 'text-green-600' },
        ].map((item, i) => (
          <Card key={i} className="shadow-sm border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 图表区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-sm border-0">
          <CardHeader><CardTitle>预约流量趋势</CardTitle></CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA}>
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{borderRadius: '8px', border: 'none'}} />
                <Bar dataKey="visits" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0">
          <CardHeader><CardTitle>最近危机工单</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-red-50/50 rounded-xl border border-red-100">
                  <div className="flex gap-3 items-center">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="font-medium text-red-900">PHQ-9 评分过高警告</div>
                      <div className="text-xs text-red-700">学生 ID: 202100{i} · 10分钟前</div>
                    </div>
                  </div>
                  <Button size="sm" variant="destructive" className="h-8">立即介入</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}