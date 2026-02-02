"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare, MoreVertical, ShieldCheck, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function VideoRoom() {
  const router = useRouter();
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [duration, setDuration] = useState(0);
  const [isConnected, setIsConnected] = useState(false);

  // 模拟连接过程和计时器
  useEffect(() => {
    const connectTimer = setTimeout(() => {
      setIsConnected(true);
      toast.success("已建立加密连接");
    }, 1500);

    const timer = setInterval(() => {
      if(isConnected) setDuration(d => d + 1);
    }, 1000);

    return () => {
      clearTimeout(connectTimer);
      clearInterval(timer);
    };
  }, [isConnected]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    if(confirm("确定要结束本次咨询吗？")) {
      router.push('/student/dashboard');
      toast.info("咨询已结束");
    }
  };

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col bg-[#F8FAFC] p-4 md:p-6 gap-6">
      {/* 顶部状态栏 */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
            <span className="font-bold text-[#2C3E50]">{isConnected ? '咨询进行中' : '正在建立连接...'}</span>
          </div>
          <div className="h-4 w-px bg-slate-200"></div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <ShieldCheck className="w-4 h-4 text-[#5D9C59]" />
            <span>端到端加密保护</span>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-lg font-medium text-[#2C3E50] bg-slate-50 px-3 py-1 rounded-md border border-slate-100">
          <Clock className="w-4 h-4 text-slate-400" />
          {formatTime(duration)}
        </div>
      </div>

      {/* 视频主区域 */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-0">
        
        {/* 大窗口：咨询师 */}
        <div className="lg:col-span-3 relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center group">
          {/* 模拟咨询师画面 */}
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            alt="Counselor" 
          />
          <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm flex items-center gap-2">
            <Avatar className="w-6 h-6 border border-white/50">
              <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100" />
              <AvatarFallback>李</AvatarFallback>
            </Avatar>
            李静 博士
            <Mic className="w-3 h-3 text-green-400" />
          </div>

          {/* 右下角：学生自己的小窗口 */}
          <div className="absolute bottom-4 right-4 w-48 h-36 bg-slate-800 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl">
            {cameraOn ? (
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80" className="w-full h-full object-cover transform scale-x-[-1]" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-900">
                <VideoOff className="w-8 h-8" />
              </div>
            )}
            <div className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-2 py-0.5 rounded">我</div>
          </div>
        </div>

        {/* 右侧：工具与笔记 */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <Card className="flex-1 border-0 shadow-sm p-4 flex flex-col">
            <div className="font-bold text-[#2C3E50] mb-4">咨询备忘录</div>
            <textarea 
              className="flex-1 w-full bg-[#F0F7EF] rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#5D9C59]"
              placeholder="在这里记录咨询师的建议或自己的感悟（仅自己可见）..."
            ></textarea>
          </Card>
          
          <Card className="border-0 shadow-sm p-4">
            <div className="font-bold text-[#2C3E50] mb-3">情绪状态</div>
            <div className="flex gap-2">
              {['平静', '焦虑', '低落', '激动'].map(mood => (
                <Badge key={mood} variant="outline" className="cursor-pointer hover:bg-[#5D9C59] hover:text-white transition-colors py-1.5">
                  {mood}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* 底部控制栏 */}
      <div className="flex justify-center pb-4">
        <div className="bg-white px-8 py-3 rounded-full shadow-lg border border-slate-100 flex items-center gap-6">
          <button 
            onClick={() => setMicOn(!micOn)}
            className={`p-3 rounded-full transition-all ${micOn ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-red-50 text-red-500'}`}
          >
            {micOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
          </button>
          
          <button 
            onClick={() => setCameraOn(!cameraOn)}
            className={`p-3 rounded-full transition-all ${cameraOn ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-red-50 text-red-500'}`}
          >
            {cameraOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
          </button>

          <Button 
            onClick={handleEndCall}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 h-12 text-base font-bold shadow-md shadow-red-200"
          >
            <PhoneOff className="w-5 h-5 mr-2" /> 结束咨询
          </Button>

          <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">
            <MessageSquare className="w-6 h-6" />
          </button>
          
          <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}