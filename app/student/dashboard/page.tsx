"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// ✅ 1. 新增 Bot 图标引用
import { CalendarDays, BookOpen, Activity, Clock, User, Bot } from 'lucide-react';
import { getAppointments, getArticles } from '@/app/actions';

export default function StudentDashboard() {
  const { currentUser } = useAppStore();
  
  const [appointments, setAppointments] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 进页面加载数据
  useEffect(() => {
    async function loadData() {
      if (currentUser?.id) {
        try {
          // 并行请求数据
          const [apptData, artData] = await Promise.all([
            getAppointments(currentUser.id, 'student'),
            getArticles()
          ]);
          
          setAppointments(apptData || []); 
          setArticles(artData || []);
        } catch (error) {
          console.error("数据加载失败", error);
        } finally {
          setLoading(false);
        }
      }
    }
    loadData();
  }, [currentUser]);

  // 计算即将到来的预约
  const upcomingAppointments = appointments.filter(apt => 
    apt.status === 'confirmed' || apt.status === 'pending'
  );

  return (
    <div className="space-y-8">
      {/* 欢迎头部 */}
      <div className="flex justify-between items-end border-b border-gray-100 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#2C3E50]">
            早安，{currentUser?.name || '同学'} 👋
          </h1>
          <p className="text-slate-500 mt-2">今天是 {new Date().toLocaleDateString()}，祝你拥有美好的一天。</p>
        </div>
        <Link href="/student/booking">
          <Button className="bg-[#5D9C59] hover:bg-[#3E6D3B] text-white shadow-md">
            + 发起新预约
          </Button>
        </Link>
      </div>

      {/* 快捷入口卡片区域 */}
      {/* ✅ 2. 修改布局：适配 4 个卡片 (大屏显示4列，中屏显示2列) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* 卡片1: 心理咨询 */}
        <Link href="/student/booking">
          <Card className="hover:shadow-lg transition-all cursor-pointer border-t-4 border-t-[#5D9C59] group h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F0F7EF] flex items-center justify-center text-[#5D9C59] group-hover:bg-[#5D9C59] group-hover:text-white transition-colors">
                <CalendarDays className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#2C3E50]">心理咨询</h3>
                <p className="text-sm text-slate-500">预约专业咨询师</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* ✅ 3. 新增卡片: AI 心理助手 */}
        <Link href="/student/ai-companion">
          <Card className="hover:shadow-lg transition-all cursor-pointer border-t-4 border-t-purple-500 group h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#2C3E50]">AI 心理助手</h3>
                <p className="text-sm text-slate-500">24h 智能陪伴</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 卡片3: 心理测评 */}
        <Link href="/student/assessment">
          <Card className="hover:shadow-lg transition-all cursor-pointer border-t-4 border-t-blue-500 group h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#2C3E50]">心理测评</h3>
                <p className="text-sm text-slate-500">了解当下状态</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 卡片4: 知识库 */}
        <Link href="/student/articles">
          <Card className="hover:shadow-lg transition-all cursor-pointer border-t-4 border-t-orange-500 group h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#2C3E50]">知识库</h3>
                <p className="text-sm text-slate-500">阅读自助文章</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧：我的预约 */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-[#2C3E50] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#5D9C59]" /> 我的预约
            </h2>
            <Link href="/student/booking" className="text-sm text-[#5D9C59] hover:underline">查看全部</Link>
          </div>

          <div className="space-y-4">
            {loading ? (
               <div className="text-center py-10 text-slate-400">数据加载中...</div>
            ) : upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((apt) => (
                <div key={apt.id} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                       <User className="text-slate-400 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2C3E50]">{apt.counselor.name} 老师</h4>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                        <CalendarDays className="w-3 h-3" />
                        <span>{new Date(apt.date).toLocaleDateString()}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>{apt.time}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={apt.status === 'confirmed' ? 'default' : 'secondary'} 
                    className={apt.status === 'confirmed' ? "bg-[#5D9C59]" : "bg-orange-100 text-orange-600 hover:bg-orange-100"}>
                    {apt.status === 'confirmed' ? '预约成功' : '等待确认'}
                  </Badge>
                </div>
              ))
            ) : (
              <div className="bg-slate-50 rounded-xl p-8 text-center border border-dashed border-slate-200">
                <p className="text-slate-500 mb-4">暂无待进行的预约</p>
                <Link href="/student/booking">
                  <Button variant="outline">去预约</Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* 右侧：推荐阅读 */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-[#2C3E50] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-500" /> 推荐阅读
            </h2>
            <Link href="/student/articles" className="text-sm text-slate-400 hover:text-slate-600">更多</Link>
          </div>

          <div className="space-y-4">
            {articles.slice(0, 3).map((article) => (
              <Link href="/student/articles" key={article.id}>
                <div className="group bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={article.image || "https://images.unsplash.com/photo-1499209974431-2761eb43a768?w=800&q=80"} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs bg-[#F0F7EF] text-[#3E6D3B] hover:bg-[#F0F7EF] border-0">
                        {article.category}
                      </Badge>
                      <h4 className="font-bold text-[#2C3E50] text-sm line-clamp-2 group-hover:text-[#5D9C59] transition-colors">
                        {article.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {articles.length === 0 && !loading && (
              <div className="text-center text-slate-400 text-sm py-4">暂无推荐文章</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}