"use client";
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Users, AlertTriangle, FileText, CheckCircle, Loader2 } from 'lucide-react';
// ✅ 引入后端 Action
import { getAdminDashboardStats } from '@/app/actions';

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  
  // 初始状态
  const [stats, setStats] = useState({
    students: 0,
    appointments: 0,
    crisis: 0,
    rate: '0%'
  });
  
  const [chartData, setChartData] = useState<any[]>([]);

  // ✅ 加载真实数据
  useEffect(() => {
    async function loadData() {
      const res = await getAdminDashboardStats();
      if (res.success && res.data) {
        setStats(res.data.stats);
        setChartData(res.data.chart);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-[#1e293b]">数据看板 (实时)</h1>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: '注册学生', value: stats.students, icon: Users, color: 'bg-blue-500' },
          { title: '预约总量', value: stats.appointments, icon: FileText, color: 'bg-green-500' },
          { title: '需关注测评', value: stats.crisis, icon: AlertTriangle, color: 'bg-red-500' },
          { title: '个案结案率', value: stats.rate, icon: CheckCircle, color: 'bg-indigo-500' },
        ].map((item, i) => (
          <Card key={i} className="border-0 shadow-sm">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{item.title}</p>
                <h3 className="text-3xl font-bold mt-2 text-[#1e293b]">
                  {loading ? <Loader2 className="w-6 h-6 animate-spin text-slate-300" /> : item.value}
                </h3>
              </div>
              <div className={`p-4 rounded-lg ${item.color} text-white bg-opacity-90`}>
                <item.icon className="w-6 h-6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 图表区域 */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle>近七日预约趋势</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          {loading ? (
             <div className="h-full flex items-center justify-center text-slate-400">
               <Loader2 className="w-8 h-8 animate-spin mr-2" /> 数据分析中...
             </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 12}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 12}} 
                />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}} 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} 
                />
                <Bar 
                  dataKey="visits" 
                  name="预约人次" 
                  fill="#5D9C59" 
                  radius={[4, 4, 0, 0]} 
                  barSize={40} 
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    </div>
  );
}