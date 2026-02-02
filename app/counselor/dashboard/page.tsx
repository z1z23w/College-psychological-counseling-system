"use client";
import { useEffect, useState } from 'react';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CheckCircle, XCircle, User, Calendar, ClipboardList, AlertTriangle, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { getAppointments, updateAppointmentStatus } from '@/app/actions';

// ==========================================
// 1. 题库常量定义 (用于还原答卷)
// ==========================================
const QUESTIONS_DB = {
  sds: [
    "1. 我觉得闷闷不乐，情绪低沉", "2. 我觉得一天之中早晨最好", "3. 我一阵阵哭出来或觉得想哭", "4. 我晚上睡眠不好", 
    "5. 我吃得跟平常一样多", "6. 我与异性亲密接触时和以往一样感到愉快", "7. 我发觉我的体重在下降", "8. 我有便秘的苦恼", 
    "9. 我心跳比平时快", "10. 我无缘无故地感到疲乏", "11. 我的头脑跟平常一样清楚", "12. 我觉得做 unchanging 事情很容易", 
    "13. 我觉得不安而平静不下来", "14. 我对将来抱有希望", "15. 我比平常容易激怒", "16. 我觉得作出决定是容易的", 
    "17. 我觉得自己是有用的和不可缺少的人", "18. 我的生活很有意义", "19. 假若我死了别人会过得更好", "20. 我平常感兴趣的事我仍然感兴趣"
  ],
  sas: [
    "1. 我觉得比平时容易紧张和着急", "2. 我无缘无故地感到害怕", "3. 我容易心里烦乱或觉得惊恐", "4. 我觉得我可能将要发疯", 
    "5. 我觉得一切都很好，也不会发生什么不幸", "6. 我手脚发抖打颤", "7. 我因为头痛、颈痛和背痛而苦恼", "8. 我觉得容易衰弱和疲乏", 
    "9. 我觉得心平气和，并且容易安静坐着", "10. 我觉得心跳得很快", "11. 我因为一阵阵头晕而苦恼", "12. 我有晕倒发作，或觉得要晕倒似的", 
    "13. 我吸气呼气都不那么容易", "14. 我手脚麻木和刺痛", "15. 我因为胃痛和消化不良而苦恼", "16. 我常常要小便", 
    "17. 我的手常常是温暖干热的", "18. 我脸红发热", "19. 我容易入睡，并且一夜睡得很好", "20. 我做恶梦，并且容易惊醒"
  ],
  ses: [
    "1. 我认为自己是个有价值的人，至少与别人不相上下", "2. 我觉得我有许多优点", "3. 总的来说，我倾向于觉得自己是一个失败者", 
    "4. 我能像大多数人一样把事情做好", "5. 我觉得这里没有多少值得我骄傲的地方", "6. 我对自己持肯定态度", 
    "7. 总的来说，我对自己是满意的", "8. 我希望我能为自己赢得更多尊重", "9. 我时常觉得自己一无是处", "10. 我时常认为自己一无是处"
  ]
};

const OPTIONS_MAP = ["没有或很少时间", "小部分时间", "相当多时间", "绝大部分时间"];

export default function CounselorDashboard() {
  const { currentUser } = useAppStore();
  const [appointments, setAppointments] = useState<any[]>([]);

  const loadData = () => {
    if (currentUser?.id) {
      getAppointments(currentUser.id, 'counselor').then(setAppointments);
    }
  };

  useEffect(() => { loadData() }, [currentUser]);

  const handleProcess = async (id: string, status: string) => {
    await updateAppointmentStatus(id, status);
    toast.success(status === 'confirmed' ? "已批准预约" : "已拒绝预约");
    loadData();
  };

  // 分类数据
  const pendingApps = appointments.filter(a => a.status === 'pending');
  const confirmedApps = appointments.filter(a => a.status === 'confirmed');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-slate-800">咨询师工作台</h1>
      </div>
      
      {/* --- 待处理区域 --- */}
      <Card className="border-l-4 border-l-blue-500 shadow-sm">
        <CardHeader><CardTitle className="text-blue-700 flex items-center gap-2">待审批预约 ({pendingApps.length})</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingApps.length === 0 ? <p className="text-slate-400 text-sm">暂无待处理事项</p> : 
              pendingApps.map((apt) => (
                <div key={apt.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg bg-slate-50 gap-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border shadow-sm font-bold text-blue-600">
                      {apt.student.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 flex items-center gap-2">
                          {apt.student.name}
                          <Badge variant="outline" className="bg-white">{apt.problemType}</Badge>
                      </div>
                      <div className="text-sm text-slate-500 mt-1">
                        申请时间: {new Date(apt.date).toLocaleDateString()} {apt.time}
                      </div>
                      <AppointmentDetailDialog apt={apt} trigger={
                          <Button variant="link" className="p-0 h-auto text-blue-600 text-xs mt-1 hover:underline">
                              查看详细档案 &gt;
                          </Button>
                      }/>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 w-full md:w-auto">
                    <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50 flex-1 md:flex-none" onClick={() => handleProcess(apt.id, 'rejected')}>
                      <XCircle className="w-4 h-4 mr-1" /> 拒绝
                    </Button>
                    <Button size="sm" className="bg-[#5D9C59] hover:bg-[#4a8546] flex-1 md:flex-none" onClick={() => handleProcess(apt.id, 'confirmed')}>
                      <CheckCircle className="w-4 h-4 mr-1" /> 批准
                    </Button>
                  </div>
                </div>
              ))
            }
          </div>
        </CardContent>
      </Card>

      {/* --- 即将进行的咨询 --- */}
      <Card>
        <CardHeader><CardTitle>即将进行的咨询 ({confirmedApps.length})</CardTitle></CardHeader>
        <CardContent>
            <div className="space-y-4">
                {confirmedApps.map((apt) => (
                    <div key={apt.id} className="p-4 border rounded-lg flex flex-col md:flex-row justify-between gap-4 items-center hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 w-full">
                            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center font-bold text-green-700 text-lg">
                                {apt.student.name[0]}
                            </div>
                            <div>
                                <div className="font-bold text-lg flex items-center gap-2">
                                    {apt.student.name}
                                    {apt.testResult ? (
                                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 text-[10px]">
                                            已测评
                                        </Badge>
                                    ) : (
                                        <Badge variant="outline" className="text-slate-400 text-[10px]">未测评</Badge>
                                    )}
                                </div>
                                <div className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                                    <Calendar className="w-3 h-3"/> {new Date(apt.date).toLocaleDateString()} {apt.time}
                                </div>
                            </div>
                        </div>

                        <AppointmentDetailDialog apt={apt} trigger={
                            <Button variant="outline" className="w-full md:w-auto">
                                查看详情 & 答卷
                            </Button>
                        }/>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

// =========================================================
// ✅ [组件] 独立的详情弹窗 (包含 还原答卷 功能)
// =========================================================
function AppointmentDetailDialog({ apt, trigger }: { apt: any, trigger: React.ReactNode }) {
    const [parsedAnswers, setParsedAnswers] = useState<any>(null);

    // 解析 JSON 答卷
    useEffect(() => {
        if (apt.testResult?.rawAnswers) {
            try {
                // 这里处理可能是字符串或对象的情况
                const raw = typeof apt.testResult.rawAnswers === 'string' 
                    ? JSON.parse(apt.testResult.rawAnswers) 
                    : apt.testResult.rawAnswers;
                setParsedAnswers(raw);
            } catch (e) {
                console.error("解析答卷失败", e);
            }
        }
    }, [apt.testResult]);

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
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[85vh] flex flex-col p-0 gap-0 overflow-hidden">
                <DialogHeader className="p-6 border-b shrink-0 bg-white z-10">
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        <User className="w-5 h-5 text-blue-500"/> 学生档案：{apt.student.name}
                    </DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="info" className="flex-1 flex flex-col overflow-hidden">
                    <div className="px-6 pt-4 shrink-0 bg-slate-50/50">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="info">基本资料 & 主诉</TabsTrigger>
                            <TabsTrigger value="test">
                                心理测评 & 原始答卷
                                {apt.testResult && <span className="ml-2 w-2 h-2 rounded-full bg-blue-500 block"></span>}
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 bg-slate-50/30">
                        {/* Tab 1: 个人信息 */}
                        <TabsContent value="info" className="space-y-4 mt-0">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-white p-4 rounded-xl border shadow-sm">
                                    <span className="text-slate-500 block mb-1 text-xs">学院/专业</span>
                                    <span className="font-medium text-slate-800">{apt.college || '未填'} {apt.major}</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl border shadow-sm">
                                    <span className="text-slate-500 block mb-1 text-xs">联系电话</span>
                                    <span className="font-medium text-slate-800">{apt.phone || '未填'}</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl border shadow-sm col-span-2">
                                    <span className="text-slate-500 block mb-1 text-xs">既往病史</span>
                                    <p className="font-medium text-slate-800 leading-relaxed">{apt.mentalHistory || '无'}</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border shadow-sm col-span-2">
                                    <span className="text-slate-500 block mb-1 text-xs">目前身体状态</span>
                                    <p className="font-medium text-slate-800 leading-relaxed">{apt.physicalState || '无'}</p>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Tab 2: 测评结果 + 答卷还原 */}
                        <TabsContent value="test" className="mt-0 h-full">
                            {apt.testResult && parsedAnswers ? (
                                <div className="space-y-6">
                                    {/* 1. 总分看板 */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <Card className="shadow-sm border-blue-100 bg-blue-50/50">
                                            <CardHeader className="p-4 pb-2"><CardTitle className="text-sm text-slate-500">SDS 抑郁</CardTitle></CardHeader>
                                            <CardContent className="p-4 pt-0">
                                                <div className="text-3xl font-bold text-slate-800">{apt.testResult.sdsScore}</div>
                                                <div className="text-xs mt-1">{getScoreLabel(apt.testResult.sdsScore, 'sds')}</div>
                                            </CardContent>
                                        </Card>
                                        <Card className="shadow-sm border-orange-100 bg-orange-50/50">
                                            <CardHeader className="p-4 pb-2"><CardTitle className="text-sm text-slate-500">SAS 焦虑</CardTitle></CardHeader>
                                            <CardContent className="p-4 pt-0">
                                                <div className="text-3xl font-bold text-slate-800">{apt.testResult.sasScore}</div>
                                                <div className="text-xs mt-1">{getScoreLabel(apt.testResult.sasScore, 'sas')}</div>
                                            </CardContent>
                                        </Card>
                                        <Card className="shadow-sm">
                                            <CardHeader className="p-4 pb-2"><CardTitle className="text-sm text-slate-500">SES 自尊</CardTitle></CardHeader>
                                            <CardContent className="p-4 pt-0">
                                                <div className="text-3xl font-bold text-slate-800">{apt.testResult.sesScore}</div>
                                                <div className="text-xs text-slate-400 mt-1">参考: 10-40</div>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* 2. 答卷详情还原 (核心功能) */}
                                    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                                        <div className="p-4 border-b bg-slate-50 flex items-center justify-between">
                                            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                                <FileText className="w-4 h-4 text-blue-600"/> 原始答卷还原
                                            </h3>
                                            <span className="text-xs text-slate-400">红色选项表示程度较重</span>
                                        </div>
                                        
                                        <ScrollArea className="h-[400px]">
                                            <div className="p-6 space-y-8">
                                                {/* SDS 部分 */}
                                                <div>
                                                    <h4 className="font-bold text-sm text-slate-900 mb-4 border-l-4 border-blue-500 pl-2">SDS 抑郁自评量表</h4>
                                                    <div className="space-y-3">
                                                        {parsedAnswers.sds?.map((val: number, idx: number) => (
                                                            <div key={`sds-${idx}`} className="grid grid-cols-[1fr_120px] gap-4 text-sm border-b border-slate-50 pb-2 last:border-0">
                                                                <span className="text-slate-600">{QUESTIONS_DB.sds[idx]}</span>
                                                                <span className={`font-medium text-right ${val >= 3 ? 'text-red-500' : 'text-slate-800'}`}>
                                                                    {OPTIONS_MAP[val - 1]} ({val}分)
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* SAS 部分 */}
                                                <div>
                                                    <h4 className="font-bold text-sm text-slate-900 mb-4 border-l-4 border-orange-500 pl-2">SAS 焦虑自评量表</h4>
                                                    <div className="space-y-3">
                                                        {parsedAnswers.sas?.map((val: number, idx: number) => (
                                                            <div key={`sas-${idx}`} className="grid grid-cols-[1fr_120px] gap-4 text-sm border-b border-slate-50 pb-2 last:border-0">
                                                                <span className="text-slate-600">{QUESTIONS_DB.sas[idx]}</span>
                                                                <span className={`font-medium text-right ${val >= 3 ? 'text-red-500' : 'text-slate-800'}`}>
                                                                    {OPTIONS_MAP[val - 1]} ({val}分)
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* SES 部分 */}
                                                <div>
                                                    <h4 className="font-bold text-sm text-slate-900 mb-4 border-l-4 border-green-500 pl-2">SES 自尊量表</h4>
                                                    <div className="space-y-3">
                                                        {parsedAnswers.ses?.map((val: number, idx: number) => (
                                                            <div key={`ses-${idx}`} className="grid grid-cols-[1fr_120px] gap-4 text-sm border-b border-slate-50 pb-2 last:border-0">
                                                                <span className="text-slate-600">{QUESTIONS_DB.ses[idx]}</span>
                                                                <span className="font-medium text-right text-slate-800">
                                                                    {val}分
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollArea>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border shadow-sm">
                                        <FileText className="w-8 h-8 opacity-50"/>
                                    </div>
                                    <p>该学生尚未完成前测问卷</p>
                                </div>
                            )}
                        </TabsContent>
                    </div>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}