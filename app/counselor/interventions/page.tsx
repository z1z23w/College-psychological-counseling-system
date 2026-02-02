"use client";
import { useState, useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Send, CheckCircle2, XCircle, Clock, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { getRiskStudents, sendInterventionReminder } from '@/app/actions';

export default function RiskManagementPage() {
  const { currentUser } = useAppStore();
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const data = await getRiskStudents();
    setStudents(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRemind = async (studentId: string) => {
    if (!currentUser?.id) return;
    
    // 发送前给个提示
    const toastId = toast.loading("正在发送提醒...");

    const res = await sendInterventionReminder(
      studentId, 
      currentUser.id, 
      "同学你好，系统检测到你最近压力可能较大，建议来心理中心聊聊，我们随时都在。"
    );

    if (res.success) {
      toast.success("已发送提醒通知", { id: toastId });
      loadData(); // 刷新列表状态
    } else {
      toast.error("发送失败", { id: toastId });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <AlertTriangle className="text-red-500" /> 心理预警与干预
        </h1>
        <Button variant="outline" size="sm" onClick={loadData} disabled={loading}>
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} /> 刷新列表
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.length === 0 && !loading && (
           <div className="col-span-3 text-center py-10 text-slate-400 bg-white rounded-xl border border-dashed">
             目前没有触发高风险预警的学生
           </div>
        )}
        
        {students.map((stu) => {
          // 🔥 核心修复逻辑：判断是否为“新一轮”的风险
          // 如果没有干预记录，或者 最新测评时间 > 最近干预时间，则视为新风险
          const isNewRisk = !stu.latestIntervention || 
            (stu.lastTestTime && new Date(stu.lastTestTime).getTime() > new Date(stu.latestIntervention.createdAt).getTime());

          return (
            <Card key={stu.id} className="border-l-4 border-l-red-500 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              {/* 如果是新风险，显示一个角标 */}
              {isNewRisk && stu.latestIntervention && (
                <div className="absolute top-0 right-0 bg-red-100 text-red-600 text-[10px] px-2 py-1 rounded-bl-lg font-bold">
                  新预警
                </div>
              )}

              <CardContent className="p-5 space-y-4">
                {/* 头部信息 */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center font-bold text-lg">
                      {stu.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        {stu.name}
                        {/* 如果风险等级是红色，加个标记 */}
                        {stu.riskLevel === 'red' && <Badge className="bg-red-600 border-0 text-[10px] h-5">高危</Badge>}
                      </h3>
                      <p className="text-xs text-slate-500">{stu.college} · {stu.username}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{stu.lastScore}</div>
                    <div className="text-xs text-slate-400">测评得分</div>
                  </div>
                </div>

                {/* 状态描述 */}
                <div className="text-sm bg-slate-50 p-3 rounded text-slate-600 flex flex-col gap-1">
                   <div className="flex justify-between">
                     <span>最新测评:</span>
                     <span className="font-medium text-slate-800">{stu.lastTestTime ? new Date(stu.lastTestTime).toLocaleDateString() : '未知'}</span>
                   </div>
                   {!isNewRisk && stu.latestIntervention && (
                     <div className="flex justify-between text-xs text-slate-400">
                       <span>上次干预:</span>
                       <span>{new Date(stu.latestIntervention.createdAt).toLocaleDateString()}</span>
                     </div>
                   )}
                </div>

                {/* 操作区：逻辑重写 */}
                <div className="pt-2">
                  {isNewRisk ? (
                     // 🔥 情况1：新风险 (无论以前状态如何，优先显示发送按钮)
                     <Button onClick={() => handleRemind(stu.id)} className="w-full bg-red-600 hover:bg-red-700 text-white shadow-red-100 shadow-lg">
                        <Send className="w-4 h-4 mr-2"/> 发送干预提醒
                     </Button>
                  ) : (
                     // 🔥 情况2：旧风险 (显示当前流程状态)
                     <>
                        {stu.latestIntervention?.status === 'pending' ? (
                           <Button disabled className="w-full bg-orange-100 text-orange-600 border-0 cursor-not-allowed opacity-80">
                              <Clock className="w-4 h-4 mr-2"/> 等待学生回复
                           </Button>
                        ) : stu.latestIntervention?.status === 'accepted' ? (
                           <Button disabled className="w-full bg-green-100 text-green-600 border-0 cursor-not-allowed opacity-80">
                              <CheckCircle2 className="w-4 h-4 mr-2"/> 学生已接受预约
                           </Button>
                        ) : (
                           // rejected
                           <div className="space-y-2">
                              <Button disabled className="w-full bg-slate-100 text-slate-500 border-0 h-8 text-xs">
                                <XCircle className="w-3 h-3 mr-2"/> 上次已拒绝
                              </Button>
                              <Button onClick={() => handleRemind(stu.id)} variant="outline" className="w-full text-red-500 border-red-200 hover:bg-red-50">
                                再次发送提醒
                              </Button>
                           </div>
                        )}
                     </>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}