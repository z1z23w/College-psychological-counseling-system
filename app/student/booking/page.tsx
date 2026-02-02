"use client";
import { useState, useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { ClipboardList, History, Loader2, User, FileText, Clock, AlertCircle, CalendarDays, X } from 'lucide-react';
import { getCounselors, createAppointmentWithDetails, getAppointments, getAvailableSlotsForDate } from '@/app/actions';
import PsychTestModal from '@/components/PsychTestModal';

// 知情同意书
const CONSENT_TEXT = `
【心理咨询知情同意书】

欢迎您来到心理咨询中心。为了保障您的权益，确保咨询工作的顺利进行，请您在预约前仔细阅读以下内容：

一、咨询性质
心理咨询是咨询师运用心理学专业知识和技术，帮助来访者通过自我探索解决心理困扰、促进个人成长的过程。

二、保密原则
1. 咨询师将严格遵守职业伦理，对您的个人信息和咨询内容进行保密。
2. 您的档案资料将由专人保管，除法律规定外，不会向任何第三方透露。

三、保密例外
在以下特殊情况下，为了保护您和他人的安全，咨询师有权打破保密原则：
1. 您有明显的自杀企图或自伤行为，且风险较高时；
2. 您有伤害他人的冲动或行为，危及公共安全时；
3. 涉及未成年人受虐待或其他法律规定的强制报告情形。

点击“我已阅读并同意”即表示您已充分理解上述内容，并愿意接受心理咨询服务。
`;

export default function BookingPage() {
  const { currentUser } = useAppStore();
  const [activeTab, setActiveTab] = useState("new");
  
  const [counselors, setCounselors] = useState<any[]>([]);
  const [myAppointments, setMyAppointments] = useState<any[]>([]);
  
  // 预约状态
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  
  const [targetCounselorId, setTargetCounselorId] = useState<string | null>(null);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [loadingSlots, setLoadingSlots] = useState(false);
  
  const [formData, setFormData] = useState({
    idCard: '', studentIdNum: '', phone: '', college: '', major: '', 
    grade: '', classInfo: '', mentalHistory: '无', physicalState: '良好', problemType: ''
  });

  const loadData = () => {
     if (currentUser?.id) {
      getCounselors().then(setCounselors);
      getAppointments(currentUser.id, 'student').then(setMyAppointments);
    }
  };

  useEffect(() => { loadData() }, [currentUser, activeTab]);

  // 排班查询
  useEffect(() => {
    async function fetchSlots() {
      if (!targetCounselorId || !selectedDate) return;
      
      setLoadingSlots(true);
      setSelectedTime(""); 
      setAvailableSlots([]);

      try {
        const res = await getAvailableSlotsForDate(
            targetCounselorId, 
            selectedDate.toISOString()
        );
        if (res.success) setAvailableSlots(res.data);
      } catch (e) {
        toast.error("加载时间失败");
      } finally {
        setLoadingSlots(false);
      }
    }
    fetchSlots();
  }, [targetCounselorId, selectedDate]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDialogChange = (open: boolean, counselorId: string | null) => {
      setTargetCounselorId(open ? counselorId : null);
      if (!open) setTimeout(() => setHasAgreed(false), 300);
  };

  const handleBook = async () => {
    if (!selectedDate || !selectedTime || !formData.idCard || !formData.phone || !formData.problemType) {
      toast.error("请完整填写所有必填项及预约时间");
      return;
    }

    const res = await createAppointmentWithDetails({
      studentId: currentUser!.id,
      counselorId: targetCounselorId,
      date: selectedDate.toISOString(),
      time: selectedTime,
      ...formData
    });

    if (res.success) {
      toast.success("预约申请成功！");
      setActiveTab("history");
      handleDialogChange(false, null);
      // 清空表单
      setFormData({
        idCard: '', studentIdNum: '', phone: '', college: '', major: '', 
        grade: '', classInfo: '', mentalHistory: '无', physicalState: '良好', problemType: ''
      });
    } else {
      toast.error(res.msg || "预约失败");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#2C3E50]">心理咨询预约</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="new">发起预约</TabsTrigger>
          <TabsTrigger value="history">我的记录</TabsTrigger>
        </TabsList>

        {/* 发起预约 Tab */}
        <TabsContent value="new" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {counselors.map((c) => (
                <div key={c.id} className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
                        {c.avatar ? <img src={c.avatar} className="w-full h-full object-cover"/> : <User className="text-slate-400"/>}
                     </div>
                     <div>
                         <h3 className="font-bold text-lg">{c.name}</h3>
                         <p className="text-sm text-slate-500">{c.college || '心理咨询中心'}</p>
                     </div>
                  </div>
                  
                  <Dialog 
                      open={targetCounselorId === c.id} 
                      onOpenChange={(open) => handleDialogChange(open, c.id)}
                  >
                    <DialogTrigger asChild>
                        <Button className="w-full bg-[#5D9C59] hover:bg-[#4a8546]">立即预约</Button>
                    </DialogTrigger>
                    
                    {/* 宽屏弹窗 */}
                    <DialogContent className="!max-w-7xl w-[95vw] h-[90vh] p-0 gap-0 overflow-hidden flex flex-col bg-white">
                      {!hasAgreed ? (
                        <div className="flex flex-col h-full p-8">
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2 text-2xl text-[#2C3E50]">
                                    <FileText className="w-6 h-6 text-[#5D9C59]"/> 心理咨询知情同意书
                                </DialogTitle>
                                <DialogDescription className="text-base mt-2">为了您的权益，请仔细阅读以下条款。</DialogDescription>
                            </DialogHeader>
                            <div className="flex-1 overflow-y-auto p-6 my-6 border rounded-xl bg-slate-50 text-base leading-8 text-slate-700 whitespace-pre-wrap shadow-inner">
                                {CONSENT_TEXT}
                            </div>
                            <DialogFooter className="flex justify-between items-center border-t pt-6">
                                <span className="text-sm text-slate-400 flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4"/> 您的隐私将受到法律严格保护
                                </span>
                                <div className="flex gap-4">
                                    <Button variant="outline" size="lg" onClick={() => handleDialogChange(false, null)}>取消</Button>
                                    <Button className="bg-[#5D9C59] hover:bg-[#4a8546]" size="lg" onClick={() => setHasAgreed(true)}>我已阅读并同意</Button>
                                </div>
                            </DialogFooter>
                        </div>
                      ) : (
                        <div className="flex flex-col lg:flex-row h-full">
                            {/* 左侧：日历 */}
                            <div className="w-full lg:w-[320px] bg-[#F8FAFC] border-r border-slate-200 flex flex-col h-full shrink-0">
                                <div className="p-5 border-b border-slate-200 bg-white">
                                    <h3 className="font-bold text-base text-slate-800 flex items-center gap-2">
                                        <CalendarDays className="w-5 h-5 text-[#5D9C59]"/> 1. 日期与时间
                                    </h3>
                                </div>
                                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                                    <div className="bg-white p-2 rounded-xl border shadow-sm flex justify-center">
                                        <Calendar 
                                            key={selectedDate?.toISOString()} 
                                            mode="single" 
                                            selected={selectedDate} 
                                            onSelect={setSelectedDate}
                                            defaultMonth={selectedDate} 
                                            className="rounded-md"
                                            disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                                        />
                                    </div>
                                    <div>
                                        <Label className="text-xs text-slate-600 font-bold mb-3 block px-1">
                                            {selectedDate ? `${selectedDate.toLocaleDateString()} 可用时段` : '请先选择日期'}
                                        </Label>
                                        {loadingSlots ? (
                                            <div className="flex flex-col items-center justify-center h-32 text-slate-400 bg-white rounded-xl border border-dashed">
                                                <Loader2 className="animate-spin w-6 h-6 mb-2 text-[#5D9C59]"/>
                                                <span className="text-xs">查询排班中...</span>
                                            </div>
                                        ) : availableSlots.length > 0 ? (
                                            <div className="grid grid-cols-2 gap-2">
                                                {availableSlots.map(slot => (
                                                    <Button 
                                                        key={slot} 
                                                        variant={selectedTime === slot ? 'default' : 'outline'} 
                                                        className={`h-10 text-xs font-medium transition-all shadow-sm ${
                                                            selectedTime === slot 
                                                            ? 'bg-[#5D9C59] hover:bg-[#4a8546] text-white' 
                                                            : 'hover:border-[#5D9C59] hover:text-[#5D9C59] text-slate-600 bg-white'
                                                        }`}
                                                        onClick={() => setSelectedTime(slot)}
                                                    >
                                                        {slot}
                                                    </Button>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center h-32 text-slate-400 bg-white rounded-xl border border-dashed">
                                                <Clock className="w-8 h-8 mb-2 opacity-20"/>
                                                <p className="text-xs font-medium">暂无可用时段</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* 右侧：表单 */}
                            <div className="flex-1 flex flex-col h-full bg-white min-w-0">
                                <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white">
                                    <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                                        <FileText className="w-5 h-5 text-[#5D9C59]"/> 2. 填写预约信息
                                    </h3>
                                    <Button variant="ghost" size="icon" onClick={() => handleDialogChange(false, null)}>
                                        <X className="w-5 h-5 text-slate-400"/>
                                    </Button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-6">
                                    <div className="max-w-4xl mx-auto space-y-6">
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-sm text-slate-900 border-l-4 border-[#5D9C59] pl-3">个人信息</h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1"><Label className="text-xs">姓名</Label><Input value={currentUser?.name} disabled className="h-9 bg-slate-50"/></div>
                                                <div className="space-y-1"><Label className="text-xs">学号 *</Label><Input className="h-9" placeholder="必填" onChange={e=>handleInputChange('studentIdNum', e.target.value)} value={formData.studentIdNum}/></div>
                                                <div className="space-y-1"><Label className="text-xs">身份证 *</Label><Input className="h-9" placeholder="必填" onChange={e=>handleInputChange('idCard', e.target.value)} value={formData.idCard}/></div>
                                                <div className="space-y-1"><Label className="text-xs">手机号 *</Label><Input className="h-9" placeholder="必填" onChange={e=>handleInputChange('phone', e.target.value)} value={formData.phone}/></div>
                                                <div className="space-y-1"><Label className="text-xs">学院</Label><Input className="h-9" onChange={e=>handleInputChange('college', e.target.value)} value={formData.college}/></div>
                                                <div className="space-y-1"><Label className="text-xs">专业</Label><Input className="h-9" onChange={e=>handleInputChange('major', e.target.value)} value={formData.major}/></div>
                                                <div className="space-y-1"><Label className="text-xs">年级</Label><Input className="h-9" onChange={e=>handleInputChange('grade', e.target.value)} value={formData.grade}/></div>
                                                <div className="space-y-1"><Label className="text-xs">班级</Label><Input className="h-9" onChange={e=>handleInputChange('classInfo', e.target.value)} value={formData.classInfo}/></div>
                                            </div>
                                        </div>
                                        <div className="h-px bg-slate-100 w-full"></div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-sm text-slate-900 border-l-4 border-[#5D9C59] pl-3">咨询详情</h4>
                                            <div className="space-y-2">
                                                <Label className="text-xs">咨询问题类型 *</Label>
                                                <Select value={formData.problemType} onValueChange={v=>handleInputChange('problemType', v)}>
                                                    <SelectTrigger className="h-10"><SelectValue placeholder="请选择类型" /></SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="学业压力">学业压力</SelectItem>
                                                        <SelectItem value="人际关系">人际关系</SelectItem>
                                                        <SelectItem value="情感问题">情感问题</SelectItem>
                                                        <SelectItem value="情绪困扰">情绪困扰</SelectItem>
                                                        <SelectItem value="生涯规划">生涯规划</SelectItem>
                                                        <SelectItem value="危机干预">危机干预</SelectItem>
                                                        <SelectItem value="其他">其他</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-xs">个人及家庭精神疾病史</Label>
                                                <Textarea className="min-h-[60px] text-sm" value={formData.mentalHistory} placeholder="如有，请简述；如无，请填'无'" onChange={e=>handleInputChange('mentalHistory', e.target.value)} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-xs">目前身体及心理状态</Label>
                                                <Textarea className="min-h-[60px] text-sm" value={formData.physicalState} placeholder="简述目前的睡眠、饮食、情绪状态..." onChange={e=>handleInputChange('physicalState', e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
                                    <Button variant="ghost" onClick={() => setHasAgreed(false)} className="text-slate-500">返回协议</Button>
                                    <div className="flex items-center gap-6">
                                        {selectedDate && selectedTime && (
                                            <div className="text-right hidden md:block">
                                                <div className="text-xs text-slate-500">已选时间</div>
                                                <div className="font-bold text-lg text-[#5D9C59]">{selectedDate.toLocaleDateString()} {selectedTime}</div>
                                            </div>
                                        )}
                                        <Button onClick={handleBook} disabled={!selectedTime} className="bg-[#5D9C59] h-12 px-8 text-lg hover:bg-[#4a8546] shadow-lg shadow-green-100/50">
                                            提交预约申请
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
             ))}
          </div>
        </TabsContent>

        {/* 历史记录 Tab (纯净版：只显示测评是否完成，不显示红色警告) */}
        <TabsContent value="history" className="mt-6">
          <div className="space-y-4">
            {myAppointments.map((apt) => (
              <div key={apt.id} className="p-5 bg-white border rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 transition-all hover:shadow-md">
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="bg-slate-100 p-3 rounded-full"><History className="text-slate-500 w-6 h-6"/></div>
                  <div>
                    <div className="font-bold text-lg text-slate-800 flex items-center gap-2">
                        {apt.counselor.name} 老师
                    </div>
                    <div className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                       <Badge variant="outline" className="font-normal">{apt.problemType || '常规咨询'}</Badge>
                       <span>{new Date(apt.date).toLocaleDateString()} {apt.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  {apt.status === 'pending' && <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-3 py-1">待审批</Badge>}
                  {apt.status === 'rejected' && <Badge variant="destructive" className="px-3 py-1">已拒绝</Badge>}
                  
                  {/* 状态：通过但未测 (提供按钮，但不强制) */}
                  {apt.status === 'confirmed' && !apt.testResult && (
                      <div className="flex flex-col items-end gap-1">
                          {/* 移除 'handleCrisisTrigger' 的回调，只保留数据刷新 */}
                          <PsychTestModal 
                              appointmentId={apt.id} 
                              onSuccess={loadData} 
                              onCrisis={() => loadData()} // 即使高风险也只是默默刷新
                          />
                      </div>
                  )}

                  {/* 状态：已完成测评 */}
                  {apt.status === 'confirmed' && apt.testResult && (
                      <div className="flex items-center gap-2">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0 px-3 py-1 flex gap-1 items-center">
                              <ClipboardList className="w-3 h-3"/> 测评已完成
                          </Badge>
                      </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}