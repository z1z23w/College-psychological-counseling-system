"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { User, CalendarCheck, X } from 'lucide-react';
import { checkPendingInterventions, respondToIntervention } from '@/app/actions';
import { toast } from 'sonner';

export default function CrisisAlert({ studentId }: { studentId: string }) {
  const [intervention, setIntervention] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // 1. 检查是否有未处理的提醒
  useEffect(() => {
    async function check() {
      if (!studentId) return;
      const data = await checkPendingInterventions(studentId);
      if (data) {
        setIntervention(data);
        setOpen(true);
      }
    }
    check();
  }, [studentId]);

  // 2. 处理接受
  const handleAccept = async () => {
    if (!intervention) return;
    await respondToIntervention(intervention.id, 'accepted');
    setOpen(false);
    toast.success("已接受建议，正在跳转预约...");
    router.push('/student/booking'); // 跳转到预约页
  };

  // 3. 处理拒绝
  const handleReject = async () => {
    if (!intervention) return;
    await respondToIntervention(intervention.id, 'rejected');
    setOpen(false);
    toast.info("您已拒绝此次预约建议");
  };

  if (!intervention) return null;

return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md border-t-4 border-t-[#5D9C59]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
             <div className="p-2 bg-green-50 rounded-full">
                <User className="w-6 h-6 text-[#5D9C59]" />
             </div>
             来自咨询师的留言
          </DialogTitle>
          
          <DialogDescription className="pt-4 text-base text-slate-700 leading-relaxed">
             <span className="font-bold text-[#2C3E50]">{intervention.counselor.name} 老师</span> 给您发来了一条消息：
             
             {/* 🔴 修复点：将 div 改为 span，并添加 'block' 类名 */}
             <span className="block mt-3 p-4 bg-slate-50 rounded-lg border border-slate-100 italic text-slate-600">
                "{intervention.message}"
             </span>
             
          </DialogDescription>
        </DialogHeader>
        
        {/* ... Footer 部分不变 */}
        <DialogFooter className="flex gap-2 sm:justify-between mt-4">
          <Button variant="ghost" onClick={handleReject} className="text-slate-400 hover:text-slate-600">
             <X className="w-4 h-4 mr-2"/> 暂时不需要
          </Button>
          <Button onClick={handleAccept} className="bg-[#5D9C59] hover:bg-[#4a8546] w-full sm:w-auto">
             <CalendarCheck className="w-4 h-4 mr-2"/> 立即去预约
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}