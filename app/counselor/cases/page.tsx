"use client";
import { useState, useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Search, FileEdit, CheckCircle2, Loader2, StickyNote, Activity, User, Phone, BookOpen, AlertCircle, GraduationCap, Users, CalendarClock } from 'lucide-react';
import { toast } from 'sonner';
import { getAppointments, updateConsultationRecord } from '@/app/actions';

export default function CasesPage() {
  const { currentUser } = useAppStore();
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 搜索和弹窗状态
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [editNotes, setEditNotes] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  // 1. 加载数据
  useEffect(() => {
    async function fetchData() {
      if (currentUser?.id) {
        try {
          const data = await getAppointments(currentUser.id, 'counselor');
          const validRecords = data.filter((r: any) => r.status !== 'rejected' && r.status !== 'pending');
          setRecords(validRecords);
        } catch (error) {
          toast.error("加载数据失败");
        } finally {
          setLoading(false);
        }
      }
    }
    fetchData();
  }, [currentUser]);

  // 2. 搜索过滤
  const filteredRecords = records.filter(r => 
    r.student?.name?.includes(searchTerm) || 
    r.studentIdNum?.includes(searchTerm) ||
    r.problemType?.includes(searchTerm)
  );

  // 3. 打开档案详情
  const handleOpenDialog = (record: any) => {
    setSelectedRecord(record);
    setEditNotes(record.notes || ''); 
    setIsDialogOpen(true);
  };

  // 4. 保存记录
  const handleSaveNotes = async () => {
    if (!selectedRecord) return;
    setSaving(true);
    const res = await updateConsultationRecord(selectedRecord.id, editNotes);
    
    if (res.success) {
      toast.success("咨询档案已保存并归档");
      setIsDialogOpen(false);
      setRecords(prev => prev.map(r => 
        r.id === selectedRecord.id ? { ...r, notes: editNotes, status: 'completed' } : r
      ));
    } else {
      toast.error("保存失败");
    }
    setSaving(false);
  };

  const getScoreColor = (score: number, type: 'sds' | 'sas' | 'ses') => {
    if (!score) return "text-slate-500";
    if (type === 'ses') return score < 25 ? "text-red-600 font-bold" : "text-green-600 font-bold"; 
    return score > 50 ? "text-red-600 font-bold" : "text-green-600 font-bold";
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* 页面头部 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#5D9C59]" /> 咨询个案档案库
          </h1>
          <p className="text-slate-500 mt-1 text-sm">管理学生咨询记录，查看详细病史与测评结果。</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <Input 
            placeholder="搜索姓名、学号或问题..." 
            className="pl-9 bg-white shadow-sm border-slate-200" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* 列表区域 */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-1">
        <Table>
          <TableHeader className="bg-slate-50/80">
            <TableRow>
              <TableHead className="w-[220px]">学生基本信息</TableHead>
              <TableHead>咨询问题类型</TableHead>
              <TableHead>预约时间</TableHead>
              <TableHead>测评状态</TableHead>
              <TableHead>档案状态</TableHead>
              <TableHead className="text-right">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center">
                  <div className="flex justify-center items-center gap-2 text-slate-500">
                    <Loader2 className="animate-spin w-4 h-4" /> 数据加载中...
                  </div>
                </TableCell>
              </TableRow>
            ) : filteredRecords.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-48 text-center text-slate-400">
                  没有找到符合条件的咨询记录
                </TableCell>
              </TableRow>
            ) : (
              filteredRecords.map((record) => (
                <TableRow key={record.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-100">
                        {record.student?.name?.[0]}
                      </div>
                      <div>
                        <div className="font-bold text-slate-700">{record.student?.name}</div>
                        <div className="text-xs text-slate-400 font-mono">
                           {record.studentIdNum || '无学号'}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                      {record.problemType || '常规咨询'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700">{new Date(record.date).toLocaleDateString()}</span>
                        <span className="text-xs text-slate-500">{record.time}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {record.testResult ? (
                      <div className="flex flex-col gap-1">
                         <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                           <CheckCircle2 className="w-3 h-3"/> 已完成
                         </span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400 italic">未测评</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {record.status === 'completed' ? (
                      <Badge className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">已归档</Badge>
                    ) : (
                      <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">待记录</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className={`${record.status === 'completed' ? 'text-slate-600' : 'text-[#5D9C59]'} hover:bg-slate-100`}
                      onClick={() => handleOpenDialog(record)}
                    >
                      <FileEdit className="w-4 h-4 mr-1" /> 
                      {record.status === 'completed' ? '查看详情' : '填写病历'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* --- 咨询档案详情弹窗 --- */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {/* 🔥 关键修改：min-w-[85vw] 强制撑开宽度，解决挤压问题 */}
        <DialogContent className="min-w-[85vw] h-[90vh] p-0 gap-0 flex flex-col overflow-hidden bg-white shadow-2xl border-0">
          
          {/* 1. 弹窗头部 */}
          <DialogHeader className="px-6 py-4 border-b shrink-0 bg-white flex flex-row items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2.5 bg-[#F0F7EF] rounded-lg">
                  <Activity className="w-6 h-6 text-[#5D9C59]" />
                </div>
                <div>
                  <DialogTitle className="text-xl font-bold text-slate-800">心理咨询个案记录表</DialogTitle>
                  <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-400">档案编号: {selectedRecord?.id?.slice(-8).toUpperCase()}</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                          <CalendarClock className="w-3 h-3"/> 
                          {new Date(selectedRecord?.date).toLocaleDateString()} {selectedRecord?.time}
                      </span>
                  </div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Badge variant={selectedRecord?.status === 'completed' ? 'default' : 'outline'} className={`px-3 py-1 text-sm ${selectedRecord?.status === 'completed' ? 'bg-green-600' : 'text-orange-600 border-orange-200 bg-orange-50'}`}>
                    {selectedRecord?.status === 'completed' ? '已归档' : '进行中'}
                </Badge>
            </div>
          </DialogHeader>

          {/* 2. 弹窗主体 (左右布局) */}
          <div className="flex-1 flex flex-row overflow-hidden bg-slate-50/30">
            
            {/* --- 左侧栏：档案信息 (固定宽 350px) --- */}
            <div className="w-[350px] shrink-0 border-r bg-white overflow-y-auto p-5 space-y-6">
              
              {/* 学生名片卡 */}
              <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-xl border shadow-sm">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#5D9C59]/10 text-[#5D9C59] flex items-center justify-center font-bold text-2xl border border-[#5D9C59]/20">
                        {selectedRecord?.student?.name?.[0]}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800">{selectedRecord?.student?.name}</h3>
                        <Badge variant="outline" className="mt-1 font-mono text-xs text-slate-500 border-slate-200 bg-white">
                             {selectedRecord?.studentIdNum}
                        </Badge>
                    </div>
                 </div>

                 <div className="space-y-3 text-sm pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                        <span className="text-slate-400 flex items-center gap-2"><GraduationCap className="w-4 h-4"/> 学院</span>
                        <span className="font-medium text-slate-700 truncate max-w-[150px]" title={selectedRecord?.college}>{selectedRecord?.college || '-'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-400 flex items-center gap-2"><BookOpen className="w-4 h-4"/> 专业</span>
                        <span className="font-medium text-slate-700 truncate max-w-[150px]" title={selectedRecord?.major}>{selectedRecord?.major || '-'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-400 flex items-center gap-2"><Users className="w-4 h-4"/> 班级</span>
                        <span className="font-medium text-slate-700 truncate max-w-[150px]">{selectedRecord?.classInfo || '-'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-400 flex items-center gap-2"><Phone className="w-4 h-4"/> 电话</span>
                        <span className="font-mono text-slate-700">{selectedRecord?.phone || '-'}</span>
                    </div>
                 </div>
              </div>

              {/* 健康概况 */}
              <div className="space-y-3">
                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">健康概况</h4>
                 <div className="grid grid-cols-2 gap-3">
                    <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg">
                        <span className="text-xs text-orange-400 block mb-1">主要问题</span>
                        <span className="font-bold text-orange-700 text-sm">{selectedRecord?.problemType || '未填写'}</span>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
                        <span className="text-xs text-blue-400 block mb-1">当前状态</span>
                        <span className="font-bold text-blue-700 text-sm">{selectedRecord?.physicalState || '良好'}</span>
                    </div>
                 </div>
                 
                 <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm">
                    <div className="flex items-center gap-2 mb-2 text-slate-500">
                        <AlertCircle className="w-4 h-4"/> <span className="font-bold text-xs uppercase">精神疾病史</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-xs">
                        {selectedRecord?.mentalHistory && selectedRecord.mentalHistory !== '无' 
                            ? selectedRecord.mentalHistory 
                            : '无相关记录'}
                    </p>
                 </div>
              </div>

              {/* 测评数据 */}
              {selectedRecord?.testResult && (
                <div className="space-y-3">
                   <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-1">测评数据 (PHQ/SAS)</h4>
                   <div className="bg-white border rounded-xl overflow-hidden shadow-sm grid grid-cols-3 divide-x">
                        <div className="p-3 text-center">
                           <div className="text-[10px] text-slate-400 mb-1">SDS</div>
                           <div className={`text-lg font-bold ${getScoreColor(selectedRecord.testResult.sdsScore, 'sds')}`}>
                             {selectedRecord.testResult.sdsScore}
                           </div>
                        </div>
                        <div className="p-3 text-center">
                           <div className="text-[10px] text-slate-400 mb-1">SAS</div>
                           <div className={`text-lg font-bold ${getScoreColor(selectedRecord.testResult.sasScore, 'sas')}`}>
                             {selectedRecord.testResult.sasScore}
                           </div>
                        </div>
                        <div className="p-3 text-center">
                           <div className="text-[10px] text-slate-400 mb-1">SES</div>
                           <div className={`text-lg font-bold ${getScoreColor(selectedRecord.testResult.sesScore, 'ses')}`}>
                             {selectedRecord.testResult.sesScore}
                           </div>
                        </div>
                   </div>
                </div>
              )}
            </div>

            {/* --- 右侧栏：SOAP记录 (自动填满剩余空间) --- */}
            <div className="flex-1 flex flex-col bg-[#F8FAFC] min-w-0">
               {/* 标题栏 */}
               <div className="px-6 py-4 border-b bg-white flex justify-between items-center shrink-0">
                  <Label className="text-base font-bold text-slate-800 flex items-center gap-2">
                     <StickyNote className="w-5 h-5 text-[#5D9C59]"/> 
                     咨询过程记录 (SOAP标准)
                  </Label>
               </div>
               
               {/* 编辑区域 */}
               <div className="flex-1 p-6 overflow-hidden flex flex-col">
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col p-1 focus-within:ring-2 ring-[#5D9C59]/20 transition-all">
                      <Textarea 
                        className="flex-1 w-full border-0 focus-visible:ring-0 resize-none p-6 text-base leading-7 text-slate-700 font-mono"
                        placeholder={`S (Subjective) 主诉:\n- 来访者主要表达了...\n\nO (Objective) 观察:\n- 精神状态、衣着、行为表现...\n- 测评结果分析...\n\nA (Assessment) 评估:\n- 问题性质评估...\n- 风险等级评估...\n\nP (Plan) 计划:\n- 本次干预策略...\n- 课后作业...\n- 下次预约安排...`}
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                      />
                  </div>
               </div>
               
               {/* 底部操作栏 */}
               <div className="px-6 py-4 border-t bg-white flex flex-col md:flex-row justify-between items-center gap-4 shrink-0">
                  <div className="flex items-center gap-3 text-xs text-amber-700 bg-amber-50 px-4 py-2 rounded-full border border-amber-100 w-full md:w-auto">
                     <AlertCircle className="w-4 h-4 shrink-0"/>
                     <span>注意：记录归档后不可修改，涉及危机个案请同步启动线下干预。</span>
                  </div>
                  <div className="flex gap-3 w-full md:w-auto">
                    <Button variant="outline" className="flex-1 md:flex-none border-slate-200" onClick={() => setIsDialogOpen(false)}>取消</Button>
                    <Button 
                        className="bg-[#5D9C59] hover:bg-[#4a8546] flex-1 md:flex-none md:min-w-[160px] text-white shadow-md shadow-green-100" 
                        onClick={handleSaveNotes}
                        disabled={saving}
                    >
                        {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2"/> : <CheckCircle2 className="w-4 h-4 mr-2"/>}
                        {saving ? '归档中...' : '保存并归档'}
                    </Button>
                  </div>
               </div>
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}