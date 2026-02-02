"use client";
import { useState, useEffect, useMemo } from 'react';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';
import { toast } from 'sonner';
import { saveAssessment, getAssessmentHistory } from '@/app/actions';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Loader2, 
  Brain, 
  Zap, 
  HeartPulse, 
  ArrowLeft, 
  ArrowRight,
  TrendingUp,
  Bug // 调试图标
} from 'lucide-react';

// ... (ASSESSMENT_TYPES 常量保持不变，为了节省篇幅省略，请保留原来的配置) ...
const ASSESSMENT_TYPES = [
  {
    id: 'phq9',
    title: 'PHQ-9 抑郁症筛查',
    fullName: 'PHQ-9 抑郁症筛查量表',
    icon: <Brain className="w-8 h-8 text-blue-500"/>,
    description: '用于筛查抑郁症及其严重程度，关注情绪低落、兴趣减退等症状。',
    color: '#3b82f6', 
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    questions: [
      "做事时提不起劲或没有兴趣",
      "感到心情低落、沮丧或绝望",
      "入睡困难、睡不安稳或睡眠过多",
      "感到疲倦或没有活力",
      "食欲不振或吃太多",
      "觉得自己很糟或很失败，让自己或家人失望",
      "对报纸或电视内容专注困难",
      "行动或说话缓慢，或烦躁坐立不安",
      "有不如死掉或用某种方式伤害自己的念头"
    ],
    threshold: 10
  },
  {
    id: 'gad7',
    title: 'GAD-7 焦虑症筛查',
    fullName: 'GAD-7 焦虑症筛查量表',
    icon: <Zap className="w-8 h-8 text-yellow-500"/>,
    description: '用于评估广泛性焦虑障碍，关注紧张、担忧、急躁等症状。',
    color: '#eab308',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    questions: [
      "感觉紧张，焦虑或急切",
      "不能停止或控制担忧",
      "对各种各样的事情担忧过多",
      "很难放松下来",
      "由于不安而无法静坐",
      "变得容易烦恼或急躁",
      "感到似乎将有可怕的事情发生"
    ],
    threshold: 9
  },
  {
    id: 'pss',
    title: 'PSS 压力知觉',
    fullName: 'PSS 压力知觉量表',
    icon: <HeartPulse className="w-8 h-8 text-red-500"/>,
    description: '评估您对生活情境感到不可控、不可预测或超负荷的程度。',
    color: '#ef4444',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    questions: [
      "因为发生了意想不到的事情而感到心烦意乱",
      "感觉自己无法控制生活中重要的事情",
      "感到神经紧张和压力",
      "感到自己没有能力处理好必须做的事情",
      "感到事情在按自己的意愿发展 (反向计分)", 
      "发现自己不能处理好所有必须做的事情",
      "能够控制生活中的恼火事 (反向计分)",
      "感到自己能处于事情的顶峰 (反向计分)",
      "因为发生在你控制范围之外的事情而生气",
      "感到困难堆积如山，无法克服"
    ],
    threshold: 14
  }
];

export default function AssessmentPage() {
  const { currentUser } = useAppStore();
  
  const [selectedTest, setSelectedTest] = useState<any>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [activeTab, setActiveTab] = useState('phq9');

  // 加载历史记录
  const fetchHistory = async () => {
    if (currentUser?.id) {
      setLoadingHistory(true);
      try {
        const data = await getAssessmentHistory(currentUser.id);
        console.log("原始历史数据:", data); // 🔥 调试点：在浏览器控制台看数据
        setHistory(Array.isArray(data) ? data : []);
      } catch (error) {
        setHistory([]);
      } finally {
        setLoadingHistory(false);
      }
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [currentUser]);

  // 🔥 核心修复：更智能的数据筛选
  const chartData = useMemo(() => {
    const targetType = ASSESSMENT_TYPES.find(t => t.id === activeTab);
    if (!targetType) return [];
    
    return history
      .filter(item => {
        // 兼容处理：无论存的是 'phq9' 还是 'PHQ-9' 还是 'PHQ-9 抑郁症...' 都能匹配
        const dbType = (item.type || '').toLowerCase();
        const targetId = targetType.id.toLowerCase();
        const targetTitle = targetType.title.toLowerCase();
        
        return dbType.includes(targetId) || dbType.includes(targetTitle);
      })
      .map(item => ({
        ...item,
        // 确保分数是数字
        score: Number(item.score),
        // 确保时间是字符串，防止 Recharts 报错
        createdAt: new Date(item.createdAt).toISOString()
      }))
      .slice(-10); // 只取最近10条
  }, [history, activeTab]);

  const currentTypeConfig = ASSESSMENT_TYPES.find(t => t.id === activeTab);

  const startTest = (test: any) => {
    setSelectedTest(test);
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  const handleAnswer = async (score: number) => {
    const newAnswers = [...answers, score];
    if (step < selectedTest.questions.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      const total = newAnswers.reduce((a, b) => a + b, 0);
      setResult(total);
      
      if (currentUser?.id) {
        try {
          const isRisk = total > selectedTest.threshold;
          const resultText = `${selectedTest.title}: ${total}分 (${isRisk ? '中高风险' : '正常'})`;

          await saveAssessment(
            currentUser.id,
            total,
            resultText,
            selectedTest.id // 存入数据库的是 ID (如 'phq9')
          );
          toast.success("测评完成");
          
          // 🔥 提交后强制刷新历史数据
          setTimeout(() => {
            fetchHistory();
          }, 500);
          
        } catch (error) {
          toast.error("保存失败");
        }
      }
    }
  };

  const reset = () => {
    setSelectedTest(null);
    setResult(null);
    setStep(0);
    setAnswers([]);
  };

  const isHighRisk = result !== null && selectedTest && result > selectedTest.threshold;

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-100 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#2C3E50] flex items-center gap-2">
            <Activity className="w-6 h-6 text-[#5D9C59]" /> 心理测评中心
          </h1>
          <p className="text-slate-500 mt-1 text-sm">选择合适的量表，科学评估您的心理状态</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧区域保持不变，直接渲染 */}
        <div className="lg:col-span-2">
          {!selectedTest && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {ASSESSMENT_TYPES.map((test) => (
                <Card 
                  key={test.id} 
                  className={`cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-slate-200 hover:${test.borderColor} group`}
                  onClick={() => startTest(test)}
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className={`p-3 rounded-full ${test.bgColor} group-hover:scale-110 transition-transform`}>
                      {test.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-800">{test.title}</CardTitle>
                      <CardDescription className="text-xs mt-1">共 {test.questions.length} 题</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500 leading-relaxed">{test.description}</p>
                    <Button variant="ghost" className="w-full mt-4 text-slate-600 hover:text-slate-900 hover:bg-slate-100">
                      开始测评 <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {selectedTest && result === null && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 min-h-[400px] flex flex-col">
              <Button variant="ghost" size="sm" onClick={reset} className="w-fit mb-4 text-slate-400 hover:text-slate-600 pl-0">
                <ArrowLeft className="w-4 h-4 mr-1"/> 返回列表
              </Button>
              <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
                  <span>{selectedTest.title}</span>
                  <span>{step + 1} / {selectedTest.questions.length}</span>
                </div>
                <Progress value={(step / selectedTest.questions.length) * 100} className="h-2 bg-slate-100" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-[#2C3E50] mb-8 leading-relaxed text-center animate-in fade-in duration-300">
                  “ 在过去的两周里，您有多少时间<br/>{selectedTest.questions[step]}？ ”
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[0, 1, 2, 3].map((score) => (
                    <button 
                      key={score} 
                      className={`p-4 rounded-xl border-2 border-slate-100 hover:${selectedTest.borderColor} hover:${selectedTest.bgColor} transition-all text-left font-medium text-slate-600`}
                      onClick={() => handleAnswer(score)}
                    >
                      {['完全不会', '只有几天', '一半以上时间', '几乎每天'][score]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTest && result !== null && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 min-h-[400px] flex flex-col justify-center text-center animate-in fade-in zoom-in duration-500">
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${isHighRisk ? 'bg-red-50' : 'bg-green-50'}`}>
                {isHighRisk ? <AlertTriangle className="w-10 h-10 text-red-500" /> : <CheckCircle2 className="w-10 h-10 text-[#5D9C59]" />}
              </div>
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-2">测评完成</h2>
              <p className="text-slate-500 mb-8">{selectedTest.fullName}</p>
              <div className="bg-slate-50 p-6 rounded-xl max-w-md mx-auto mb-8">
                <div className="text-sm text-slate-500 mb-1">您的得分</div>
                <div className={`text-5xl font-bold ${isHighRisk ? 'text-red-500' : 'text-[#5D9C59]'}`}>{result}</div>
                <div className="mt-2 font-medium text-slate-700">
                  {isHighRisk ? "处于中高风险区间" : "心理状态良好"}
                </div>
              </div>
              {isHighRisk && (
                <Alert variant="destructive" className="bg-red-50 border-red-100 text-left mb-6 max-w-md mx-auto">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>需要关注</AlertTitle>
                  <AlertDescription>
                    系统检测到您在【{selectedTest.title}】中得分较高，可能存在{selectedTest.id === 'gad7' ? '焦虑' : selectedTest.id === 'phq9' ? '抑郁' : '压力'}情绪。建议您预约咨询师聊聊。
                  </AlertDescription>
                </Alert>
              )}
              <div className="flex gap-4 justify-center">
                <Button onClick={reset} variant="outline">返回测评列表</Button>
                {isHighRisk && (
                   <Button onClick={() => window.location.href='/student/booking'} className="bg-[#5D9C59] hover:bg-[#4a8546]">立即预约咨询</Button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 右侧：历史趋势图 */}
        <div className="space-y-6">
          <Card className="border-0 shadow-sm sticky top-6">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#5D9C59]" />
                    <h3 className="font-bold text-[#2C3E50]">历史趋势</h3>
                </div>
                {/* 调试用显示，如果不为空说明有数据 */}
                <div className="text-[10px] text-slate-300 flex items-center gap-1">
                    <Bug className="w-3 h-3"/> {history.length}条记录
                </div>
            </div>
            
            <div className="p-4">
                <Tabs defaultValue="phq9" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-4 bg-slate-100">
                        <TabsTrigger value="phq9" className="text-xs">抑郁</TabsTrigger>
                        <TabsTrigger value="gad7" className="text-xs">焦虑</TabsTrigger>
                        <TabsTrigger value="pss" className="text-xs">压力</TabsTrigger>
                    </TabsList>

                    <div className="h-[280px] w-full bg-white rounded-lg p-2 border border-slate-50">
                        {loadingHistory ? (
                             <div className="h-full flex items-center justify-center text-slate-400">
                                <Loader2 className="animate-spin w-6 h-6 mr-2" /> 加载中...
                             </div>
                        ) : chartData.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                    <XAxis 
                                        dataKey="createdAt" 
                                        tickFormatter={(v) => new Date(v).toLocaleDateString(undefined, {month:'numeric', day:'numeric'})} 
                                        tick={{fontSize: 10}} 
                                        axisLine={false} 
                                        tickLine={false} 
                                        padding={{ left: 10, right: 10 }}
                                    />
                                    <YAxis tick={{fontSize: 10}} axisLine={false} tickLine={false} domain={[0, 'auto']} />
                                    <Tooltip 
                                        labelFormatter={(v) => new Date(v).toLocaleDateString()} 
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <ReferenceLine 
                                        y={currentTypeConfig?.threshold} 
                                        stroke="red" 
                                        strokeDasharray="3 3" 
                                        label={{ position: 'top', value: '警戒线', fill: 'red', fontSize: 10 }} 
                                    />
                                    <Line 
                                        type="monotone" 
                                        dataKey="score" 
                                        stroke={currentTypeConfig?.color || '#5D9C59'} 
                                        strokeWidth={3} 
                                        activeDot={{ r: 6 }}
                                        dot={{r: 4, fill: 'white', strokeWidth: 2}} 
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-sm">
                                <Activity className="w-8 h-8 mb-2 opacity-50" />
                                <p>暂无 {currentTypeConfig?.title} 数据</p>
                                {/* 如果有总数据但当前Tab没数据，提示一下 */}
                                {history.length > 0 && <p className="text-xs mt-1 text-slate-300">但系统里有其他量表的记录</p>}
                            </div>
                        )}
                    </div>
                </Tabs>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}