"use client";
import { useState, useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar as CalendarIcon, Save, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
// ✅ 引入后端 Action
import { getCounselorSchedule, updateSchedule } from '@/app/actions';

// 定义时间槽 (必须和后端存的一致)
const TIME_SLOTS = [
  "08:30 - 09:20", "09:30 - 10:20", "10:30 - 11:20", 
  "14:00 - 14:50", "15:00 - 15:50", "16:00 - 16:50"
];

const WEEK_DAYS = [
  { day: '周一', dayIndex: 1 },
  { day: '周二', dayIndex: 2 },
  { day: '周三', dayIndex: 3 },
  { day: '周四', dayIndex: 4 },
  { day: '周五', dayIndex: 5 },
];

export default function SchedulePage() {
  const { currentUser } = useAppStore();
  // 状态：key 为 "dayIndex-timeSlot", value 为 true(开放) / false(关闭)
  // 注意：和之前的逻辑反过来了，true 代表开放(Available)
  const [scheduleMap, setScheduleMap] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 1. 加载现有排班
  useEffect(() => {
    async function loadData() {
      if (currentUser?.id) {
        const res = await getCounselorSchedule(currentUser.id);
        if (res.success) {
          const map: Record<string, boolean> = {};
          // 转换后端数据到前端 Map
          res.data.forEach((item: any) => {
            map[`${item.dayOfWeek}-${item.timeSlot}`] = true;
          });
          setScheduleMap(map);
        }
        setLoading(false);
      }
    }
    loadData();
  }, [currentUser]);

  // 2. 切换状态
  const toggleSlot = (dayIndex: number, timeSlot: string) => {
    const key = `${dayIndex}-${timeSlot}`;
    setScheduleMap(prev => ({
      ...prev,
      [key]: !prev[key] // 取反
    }));
  };

  // 3. 保存排班
  const handleSave = async () => {
    if (!currentUser?.id) return;
    setSaving(true);

    // 把 Map 转换回数组格式
    const slotsToSave = [];
    for (const day of WEEK_DAYS) {
      for (const time of TIME_SLOTS) {
        const key = `${day.dayIndex}-${time}`;
        slotsToSave.push({
          dayOfWeek: day.dayIndex,
          timeSlot: time,
          isAvailable: scheduleMap[key] || false // 如果 Map 里没值就是 false (不开放)
        });
      }
    }

    const res = await updateSchedule(currentUser.id, slotsToSave);
    
    if (res.success) {
      toast.success("排班设置已更新", { description: "学生端将即时看到您的最新可用时间。" });
    } else {
      toast.error("保存失败");
    }
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#2C3E50] flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-[#5D9C59]" /> 排班管理
          </h1>
          <p className="text-slate-500 mt-1">点击格子设置您下周的咨询开放时间段 (绿色为开放)</p>
        </div>
        <Button onClick={handleSave} className="bg-[#5D9C59] hover:bg-[#3E6D3B] text-white" disabled={saving || loading}>
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin"/> : <Save className="w-4 h-4 mr-2" />}
          {saving ? "保存中..." : "保存设置"}
        </Button>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#5D9C59] rounded-sm"></div> 开放预约</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-100 border border-slate-200 rounded-sm"></div> 休息/忙碌</div>
          </div>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          {loading ? (
             <div className="p-10 flex justify-center"><Loader2 className="animate-spin text-slate-400" /></div>
          ) : (
            <div className="grid grid-cols-6 divide-x divide-slate-100 min-w-[600px]">
              {/* 时间列头 */}
              <div className="bg-slate-50">
                <div className="h-12 border-b border-slate-100 bg-slate-100"></div>
                {TIME_SLOTS.map((time, i) => (
                  <div key={i} className="h-16 flex items-center justify-center text-xs text-slate-500 font-medium border-b border-slate-100 px-2 bg-slate-50">
                    {time}
                  </div>
                ))}
              </div>

              {/* 周一到周五 */}
              {WEEK_DAYS.map((day) => (
                <div key={day.dayIndex} className="bg-white">
                  <div className="h-12 border-b border-slate-100 flex flex-col items-center justify-center bg-slate-50/30">
                    <span className="text-sm font-bold text-[#2C3E50]">{day.day}</span>
                  </div>
                  {TIME_SLOTS.map((time, sIndex) => {
                    const isAvailable = scheduleMap[`${day.dayIndex}-${time}`];
                    return (
                      <div 
                        key={sIndex} 
                        onClick={() => toggleSlot(day.dayIndex, time)}
                        className={`h-16 border-b border-slate-100 cursor-pointer transition-all flex items-center justify-center relative group
                          ${isAvailable 
                            ? 'bg-[#5D9C59] text-white hover:bg-[#4a8546]' 
                            : 'bg-white hover:bg-slate-50'
                          }`}
                      >
                        {isAvailable ? (
                          <span className="text-xs font-medium">开放</span>
                        ) : (
                          <span className="hidden group-hover:inline-block text-xs text-slate-400 select-none">点击开放</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}