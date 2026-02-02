"use client";
import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { submitPsychTest } from '@/app/actions';
// ✅ Added Loader2 to imports
import { AlertTriangle, CheckCircle2, ArrowRight, ArrowLeft, ClipboardList, Loader2 } from 'lucide-react';

// ==========================================
// 1. SDS 抑郁自评量表 (标准20题)
// ==========================================
const sdsQuestions = [
    "1. 我感到情绪沮丧，郁闷",
    "2. 我感到早晨心情最好",
    "3. 我要哭或想哭",
    "4. 我夜间睡眠不好",
    "5. 我吃饭象平时一样多",
    "6. 我性功能正常",
    "7. 我感到体重减轻",
    "8. 我为便秘烦恼",
    "9. 我的心跳比平时快",
    "10. 我无故感到疲劳",
    "11. 我的头脑象往常一样清楚",
    "12. 我做事情象平时一样不感到困难",
    "13. 我坐卧不安，难以保持平静",
    "14. 我对未来充满希望",
    "15. 我比平时更容易激怒",
    "16. 我觉得决定什么事很容易",
    "17. 我感到自己有用和不可缺少",
    "18. 我的生活很有意义",
    "19. 假若我死了别人会过得更好",
    "20. 我仍旧喜爱自己平时喜爱的东西"
];

// ==========================================
// 2. SAS 焦虑自评量表 (标准20题)
// ==========================================
const sasQuestions = [
    "1. 我感到比平时容易紧张和着急",
    "2. 我无缘无故感到害怕",
    "3. 我容易心里烦乱或感到惊恐",
    "4. 我觉得我可能将要发疯",
    "5. 我觉得一切都很好，也不会发生什么不幸",
    "6. 我手脚发抖打颤",
    "7. 我因为头痛、颈痛和背痛而苦恼",
    "8. 我感觉容易衰弱和疲乏",
    "9. 我觉得心平气和，并且容易安静坐着",
    "10. 我觉得心跳得很快",
    "11. 我因为一阵阵头晕而苦恼",
    "12. 我有晕倒发作，或觉得要晕倒似的",
    "13. 我吸气呼气都感到很容易",
    "14. 我手脚麻木和刺痛",
    "15. 我因为胃痛和消化不良而苦恼",
    "16. 我尿频",
    "17. 我的手脚常常是干燥温暖的",
    "18. 我脸红发热",
    "19. 我容易入睡，并且一夜睡得很好",
    "20. 我做恶梦"
];

// ==========================================
// 3. SES 自尊量表 (标准10题)
// ==========================================
const sesQuestions = [
    "1. 我认为自己是个有价值的人，至少与别人不相上下",
    "2. 我觉得我有许多优点",
    "3. 总的来说，我倾向于认为自己是一个失败者",
    "4. 我做事可以象大多数人一样做得好",
    "5. 我觉得自己没有什值得自豪的地方",
    "6. 我对自己持肯定态度",
    "7. 总的来说，我对自己感到满意",
    "8. 我希望我能为自己赢得更多尊重",
    "9. 我时常产生自己一无是处的感觉",
    "10. 我时常认为自己一无是处"
];

export default function PsychTestModal({ appointmentId, onSuccess, onCrisis }: { 
    appointmentId: string, 
    onSuccess: () => void,
    onCrisis: () => void 
}) {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1); // 1=SDS, 2=SAS, 3=SES
    const [submitting, setSubmitting] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    
    // 存储答案：数组索引对应题目索引 (初始值为0，代表未填)
    const [answers, setAnswers] = useState<{sds: number[], sas: number[], ses: number[]}>({ 
        sds: new Array(20).fill(0), 
        sas: new Array(20).fill(0), 
        ses: new Array(10).fill(0) 
    });

    // 记录答案
    const handleAnswer = (scale: 'sds'|'sas'|'ses', index: number, val: string) => {
        const newArr = [...answers[scale]];
        newArr[index] = parseInt(val);
        setAnswers({ ...answers, [scale]: newArr });
    };

    // 检查当前步骤是否全部答完
    const canProceed = () => {
        if (step === 1) return answers.sds.every(n => n > 0);
        if (step === 2) return answers.sas.every(n => n > 0);
        if (step === 3) return answers.ses.every(n => n > 0);
        return false;
    };

    // 提交所有数据
    const handleSubmit = async () => {
        setSubmitting(true);
        try {
            const res = await submitPsychTest(appointmentId, answers);
            
            if (res.success) {
                setOpen(false);
                onSuccess(); // 刷新列表状态

                // 如果是高风险，提醒并触发绿色通道逻辑
                if (res.isHighRisk) {
                    toast.error(
                        <div className="flex flex-col gap-1">
                            <div className="font-bold flex items-center gap-2 text-base">
                                <AlertTriangle className="w-5 h-5 text-red-500" /> 心理预警提示
                            </div>
                            <div className="text-sm">您的测评结果显示近期心理压力较大。</div>
                            <div className="font-bold text-red-600 text-sm mt-1">系统已自动为您标记绿色通道，请立即预约咨询。</div>
                        </div>,
                        { duration: 6000 }
                    );
                    onCrisis();
                } else {
                    toast.success("测评提交成功", { description: "感谢您的配合，请按时参加咨询。" });
                }
            } else {
                toast.error("提交失败", { description: res.msg || "请稍后重试" });
            }
        } catch (error) {
            toast.error("网络错误，提交失败");
        } finally {
            setSubmitting(false);
        }
    };

    // 切换步骤时滚动到顶部
    const scrollToTop = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    };

    const nextStep = () => {
        setStep(p => p + 1);
        scrollToTop();
    };

    const prevStep = () => {
        setStep(p => p - 1);
        scrollToTop();
    };

    // 计算当前量表的完成进度
    const getCurrentProgress = () => {
        let completed = 0;
        let total = 0;
        if (step === 1) {
            completed = answers.sds.filter(n => n > 0).length;
            total = 20;
        } else if (step === 2) {
            completed = answers.sas.filter(n => n > 0).length;
            total = 20;
        } else {
            completed = answers.ses.filter(n => n > 0).length;
            total = 10;
        }
        return Math.round((completed / total) * 100);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white font-bold border-2 border-orange-200 shadow-sm animate-pulse">
                    <ClipboardList className="w-4 h-4 mr-2"/> 开始心理前测
                </Button>
            </DialogTrigger>
            
            {/* 弹窗主体 */}
            <DialogContent className="max-w-2xl h-[90vh] flex flex-col p-0 gap-0 overflow-hidden">
                {/* 头部：标题与总进度 */}
                <DialogHeader className="p-6 border-b bg-slate-50 shrink-0">
                    <DialogTitle className="flex justify-between items-center text-[#2C3E50]">
                        <span className="flex items-center gap-2">
                            <ClipboardList className="w-5 h-5 text-[#5D9C59]"/> 心理状态前测量表
                        </span>
                        <Badge variant="outline" className="bg-white">步骤 {step} / 3</Badge>
                    </DialogTitle>
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-xs text-slate-500 font-medium">
                            <span className={step>=1 ? "text-blue-600" : ""}>1. SDS抑郁 ({answers.sds.filter(n=>n>0).length}/20)</span>
                            <span className={step>=2 ? "text-green-600" : ""}>2. SAS焦虑 ({answers.sas.filter(n=>n>0).length}/20)</span>
                            <span className={step>=3 ? "text-purple-600" : ""}>3. SES自尊 ({answers.ses.filter(n=>n>0).length}/10)</span>
                        </div>
                        {/* 总体进度条 */}
                        <Progress value={((step - 1) * 33) + (getCurrentProgress() * 0.33)} className="h-2" />
                    </div>
                </DialogHeader>
                
                {/* 内容区：可滚动 */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 bg-slate-50/30 scroll-smooth">
                    
                    {/* === SDS 部分 (20题) === */}
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800 text-sm leading-6">
                                <strong>指导语：</strong>下面有20条文字，请仔细阅读每一条，把意思弄明白，然后根据您<b>最近一周</b>的实际感觉，选择最符合您情况的等级。
                            </div>
                            <h3 className="font-bold text-xl border-l-4 border-blue-500 pl-3 text-slate-800">SDS 抑郁自评量表</h3>
                            
                            {sdsQuestions.map((q, i) => (
                                <div key={i} className={`p-4 rounded-xl border transition-all ${answers.sds[i] > 0 ? 'bg-white border-blue-200' : 'bg-white border-transparent shadow-sm'}`}>
                                    <Label className="text-base font-medium text-slate-800 leading-6 block mb-3">{q}</Label>
                                    <RadioGroup onValueChange={(v) => handleAnswer('sds', i, v)} value={answers.sds[i]?.toString()} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {[
                                            { val: 1, label: "没有/很少" },
                                            { val: 2, label: "小部分时间" },
                                            { val: 3, label: "相当多时间" },
                                            { val: 4, label: "绝大部分时间" }
                                        ].map(opt => (
                                            <div key={opt.val} className={`flex items-center space-x-2 border rounded-lg p-2 cursor-pointer hover:bg-blue-50 transition-colors ${answers.sds[i] === opt.val ? 'bg-blue-50 border-blue-300' : 'border-slate-100'}`}>
                                                <RadioGroupItem value={opt.val.toString()} id={`sds-${i}-${opt.val}`} />
                                                <Label htmlFor={`sds-${i}-${opt.val}`} className="font-normal text-slate-600 cursor-pointer text-xs sm:text-sm flex-1">{opt.label}</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* === SAS 部分 (20题) === */}
                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-green-800 text-sm leading-6">
                                <strong>指导语：</strong>请根据您<b>最近一周</b>的实际感觉，选择最符合您情况的等级。
                            </div>
                            <h3 className="font-bold text-xl border-l-4 border-green-500 pl-3 text-slate-800">SAS 焦虑自评量表</h3>
                            
                            {sasQuestions.map((q, i) => (
                                <div key={i} className={`p-4 rounded-xl border transition-all ${answers.sas[i] > 0 ? 'bg-white border-green-200' : 'bg-white border-transparent shadow-sm'}`}>
                                    <Label className="text-base font-medium text-slate-800 leading-6 block mb-3">{q}</Label>
                                    <RadioGroup onValueChange={(v) => handleAnswer('sas', i, v)} value={answers.sas[i]?.toString()} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {[
                                            { val: 1, label: "没有/很少" },
                                            { val: 2, label: "小部分时间" },
                                            { val: 3, label: "相当多时间" },
                                            { val: 4, label: "绝大部分时间" }
                                        ].map(opt => (
                                            <div key={opt.val} className={`flex items-center space-x-2 border rounded-lg p-2 cursor-pointer hover:bg-green-50 transition-colors ${answers.sas[i] === opt.val ? 'bg-green-50 border-green-300' : 'border-slate-100'}`}>
                                                <RadioGroupItem value={opt.val.toString()} id={`sas-${i}-${opt.val}`} />
                                                <Label htmlFor={`sas-${i}-${opt.val}`} className="font-normal text-slate-600 cursor-pointer text-xs sm:text-sm flex-1">{opt.label}</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* === SES 部分 (10题) === */}
                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-purple-800 text-sm leading-6">
                                <strong>指导语：</strong>请根据您对自己的一贯看法，选择最符合的等级。
                            </div>
                            <h3 className="font-bold text-xl border-l-4 border-purple-500 pl-3 text-slate-800">SES 自尊量表</h3>
                            
                            {sesQuestions.map((q, i) => (
                                <div key={i} className={`p-4 rounded-xl border transition-all ${answers.ses[i] > 0 ? 'bg-white border-purple-200' : 'bg-white border-transparent shadow-sm'}`}>
                                    <Label className="text-base font-medium text-slate-800 leading-6 block mb-3">{q}</Label>
                                    <RadioGroup onValueChange={(v) => handleAnswer('ses', i, v)} value={answers.ses[i]?.toString()} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        {[
                                            { val: 1, label: "非常不符合" },
                                            { val: 2, label: "不符合" },
                                            { val: 3, label: "符合" },
                                            { val: 4, label: "非常符合" }
                                        ].map(opt => (
                                            <div key={opt.val} className={`flex items-center space-x-2 border rounded-lg p-2 cursor-pointer hover:bg-purple-50 transition-colors ${answers.ses[i] === opt.val ? 'bg-purple-50 border-purple-300' : 'border-slate-100'}`}>
                                                <RadioGroupItem value={opt.val.toString()} id={`ses-${i}-${opt.val}`} />
                                                <Label htmlFor={`ses-${i}-${opt.val}`} className="font-normal text-slate-600 cursor-pointer text-xs sm:text-sm flex-1">{opt.label}</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* 底部按钮区 */}
                <DialogFooter className="p-4 border-t bg-white flex justify-between items-center shrink-0">
                    <div className="text-xs text-slate-400 hidden sm:block">
                        * 请确保所有题目已完成
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                        {step > 1 && (
                            <Button variant="outline" onClick={prevStep} disabled={submitting}>
                                <ArrowLeft className="w-4 h-4 mr-2"/> 上一步
                            </Button>
                        )}
                        
                        {step < 3 ? (
                            <Button onClick={nextStep} disabled={!canProceed()} className="flex-1 sm:flex-none bg-[#5D9C59] hover:bg-[#4a8546]">
                                下一步 <ArrowRight className="w-4 h-4 ml-2"/>
                            </Button>
                        ) : (
                            <Button 
                                onClick={handleSubmit} 
                                disabled={!canProceed() || submitting} 
                                className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 w-32"
                            >
                                {submitting ? <Loader2 className="w-4 h-4 animate-spin"/> : <><CheckCircle2 className="w-4 h-4 mr-2"/> 提交测评</>}
                            </Button>
                        )}
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}