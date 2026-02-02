"use client";
import { useState, useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, User, FileText, Activity, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { getCounselorAppointments } from '@/app/actions';

export default function CounselorAppointmentsPage() {
  const { currentUser } = useAppStore();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser?.id) {
      getCounselorAppointments(currentUser.id).then(data => {
        setAppointments(data);
        setLoading(false);
      });
    }
  }, [currentUser]);

  // 辅助函数：解析分数含义
  const getScoreLabel = (score: number, type: 'sds' | 'sas') => {
    if (type === 'sds') {
       if (score >= 72) return <span className="text-red-600 font-bold">重度抑郁</span>;
       if (score >= 63) return <span className="text-orange-600 font-bold">中度抑郁</span>;
       if (score >= 53) return <span className="text-yellow-600 font-bold">轻度抑郁</span>;
       return <span className="text-green-600">正常</span>;
    } else {
       if (score >= 69) return <span className="text-red-600 font-bold">重度焦虑</span>;
       if (score >= 60) return <span className="text-orange-600 font-bold">中度焦虑</span>;
       if (score >= 50) return <span className="text-yellow-600 font-bold">轻度焦虑</span>;
       return <span className="text-green-600">正常</span>;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">预约管理</h1>

      <div className="space-y-4">
        {appointments.map((apt) => (
          <Card key={apt.id} className="p-5 flex flex-col md:flex-row justify-between items-center gap-4 hover:shadow-md transition-shadow">
            {/* 左侧：基本信息 */}
            <div className="flex items-center gap-4 w-full md:w-auto">
               <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                  {apt.student.name[0]}
               </div>
               <div>
                  <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                     {apt.student.name}
                     <Badge variant="outline">{apt.problemType || '常规咨询'}</Badge>
                     {/* 如果有关联的高危结果，显示标记 */}
                     {apt.testResult?.isHighRisk && <Badge className="bg-red-500">⚠ 心理风险</Badge>}
                  </h3>
                  <div className="text-sm text-slate-500 flex items-center gap-3 mt-1">
                     <span className="flex items-center"><Calendar className="w-3 h-3 mr-1"/> {new Date(apt.date).toLocaleDateString()}</span>
                     <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {apt.time}</span>
                  </div>
               </div>
            </div>

            {/* 右侧：操作按钮 */}
            <div className="flex gap-3">
               {/* 查看详情弹窗 */}
               <Dialog>
                  <DialogTrigger asChild>
                     <Button variant="outline">查看档案 & 测评</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                     <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-xl">
                           <User className="w-5 h-5 text-blue-500"/> 学生档案：{apt.student.name}
                        </DialogTitle>
                     </DialogHeader>
                     
                     <Tabs defaultValue="info" className="mt-4">
                        <TabsList className="grid w-full grid-cols-2">
                           <TabsTrigger value="info">基本资料 & 主诉</TabsTrigger>
                           <TabsTrigger value="test">
                              心理测评结果 
                              {apt.testResult && <span className="ml-2 w-2 h-2 rounded-full bg-red-500 block"></span>}
                           </TabsTrigger>
                        </TabsList>

                        {/* Tab 1: 个人信息 */}
                        <TabsContent value="info" className="space-y-4 py-4">
                           <div className="grid grid-cols-2 gap-4 text-sm">
                              <div className="bg-slate-50 p-3 rounded">
                                 <span className="text-slate-500 block mb-1">学院/专业</span>
                                 <span className="font-medium">{apt.college} {apt.major}</span>
                              </div>
                              <div className="bg-slate-50 p-3 rounded">
                                 <span className="text-slate-500 block mb-1">联系电话</span>
                                 <span className="font-medium">{apt.phone}</span>
                              </div>
                              <div className="bg-slate-50 p-3 rounded col-span-2">
                                 <span className="text-slate-500 block mb-1">既往病史</span>
                                 <span className="font-medium">{apt.mentalHistory || '无'}</span>
                              </div>
                              <div className="bg-slate-50 p-3 rounded col-span-2">
                                 <span className="text-slate-500 block mb-1">目前身体状态</span>
                                 <span className="font-medium">{apt.physicalState || '无'}</span>
                              </div>
                           </div>
                        </TabsContent>

                        {/* Tab 2: 测评结果 (重点) */}
                        <TabsContent value="test" className="py-4">
                           {apt.testResult ? (
                              <div className="space-y-6">
                                 {/* 风险总评 */}
                                 <div className={`p-4 rounded-lg border-l-4 ${apt.testResult.isHighRisk ? 'bg-red-50 border-red-500' : 'bg-green-50 border-green-500'}`}>
                                    <div className="flex items-center gap-2 font-bold text-lg mb-1">
                                       {apt.testResult.isHighRisk ? <AlertTriangle className="text-red-500"/> : <CheckCircle2 className="text-green-500"/>}
                                       {apt.testResult.isHighRisk ? '存在心理风险' : '心理状态平稳'}
                                    </div>
                                    <p className="text-sm text-slate-600">
                                       测评时间：{new Date(apt.testResult.createdAt).toLocaleString()}
                                    </p>
                                 </div>

                                 {/* 分数详情 */}
                                 <div className="grid grid-cols-3 gap-4">
                                    <div className="border p-4 rounded-xl text-center">
                                       <div className="text-sm text-slate-500 mb-2">SDS 抑郁标准分</div>
                                       <div className="text-3xl font-bold text-slate-800 mb-1">{apt.testResult.sdsScore}</div>
                                       <div className="text-xs">{getScoreLabel(apt.testResult.sdsScore, 'sds')}</div>
                                    </div>
                                    <div className="border p-4 rounded-xl text-center">
                                       <div className="text-sm text-slate-500 mb-2">SAS 焦虑标准分</div>
                                       <div className="text-3xl font-bold text-slate-800 mb-1">{apt.testResult.sasScore}</div>
                                       <div className="text-xs">{getScoreLabel(apt.testResult.sasScore, 'sas')}</div>
                                    </div>
                                    <div className="border p-4 rounded-xl text-center">
                                       <div className="text-sm text-slate-500 mb-2">SES 自尊量表分</div>
                                       <div className="text-3xl font-bold text-slate-800 mb-1">{apt.testResult.sesScore}</div>
                                       <div className="text-xs text-slate-500">参考区间: 10-40</div>
                                    </div>
                                 </div>
                              </div>
                           ) : (
                              <div className="flex flex-col items-center justify-center h-40 text-slate-400 bg-slate-50 rounded-xl border border-dashed">
                                 <FileText className="w-8 h-8 mb-2 opacity-50"/>
                                 <p>学生尚未完成前测问卷</p>
                              </div>
                           )}
                        </TabsContent>
                     </Tabs>
                  </DialogContent>
               </Dialog>

               {/* 其他操作按钮 (如接单、拒绝) */}
               {apt.status === 'pending' && (
                   <Button className="bg-[#5D9C59]">接单</Button>
               )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}