"use client";
import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '@/lib/store';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Search, Loader2, User } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getChatContacts, getMessages, sendMessage } from '@/app/actions';

export default function CounselorChatPage() {
  const { currentUser } = useAppStore();
  
  const [contacts, setContacts] = useState<any[]>([]);
  const [activeContact, setActiveContact] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [loadingChat, setLoadingChat] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. 加载学生列表
  useEffect(() => {
    async function loadData() {
      if (currentUser?.id) {
        const res = await getChatContacts(currentUser.id, 'counselor');
        if (res.success) setContacts(res.data);
        setLoadingContacts(false);
      }
    }
    loadData();
  }, [currentUser]);

  // 2. 智能轮询消息
  useEffect(() => {
    let interval: NodeJS.Timeout;
    async function fetchMsgs(isBackground = false) {
      if (currentUser?.id && activeContact?.id) {
        if (!isBackground) setLoadingChat(true);

        const res = await getMessages(currentUser.id, activeContact.id);
        
        if (!isBackground) setLoadingChat(false);

        if (res.success) {
           setMessages(prev => {
            // ⭐️ 核心优化：如果数据没变，返回旧引用，阻止重渲染
            if (res.data.length === prev.length) {
                if (res.data.length === 0) return prev;
                const lastNew = res.data[res.data.length - 1];
                const lastOld = prev[prev.length - 1];
                if (lastNew.id === lastOld.id) {
                    return prev; 
                }
            }
            return res.data;
          });
        }
      }
    }
    
    if (activeContact) {
      setMessages([]);
      fetchMsgs(false); // 初次加载显示 Loading
      interval = setInterval(() => fetchMsgs(true), 3000); // 静默轮询
    }
    return () => clearInterval(interval);
  }, [currentUser, activeContact]);

  // 3. 自动滚动
  useEffect(() => { 
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' }); 
    }
  }, [messages]);

  // 4. 发送
  const handleSend = async () => {
    if (!input.trim() || !activeContact) return;
    
    const msgContent = input;
    setInput('');

    // 乐观更新
    const tempMsg = {
      id: "temp-" + Date.now(),
      content: msgContent,
      senderId: currentUser?.id,
      createdAt: new Date().toISOString()
    };
    setMessages(prev => [...prev, tempMsg]);

    if (currentUser?.id) await sendMessage(currentUser.id, activeContact.id, msgContent);
  };

  return (
    <div className="h-[calc(100vh-120px)] bg-white rounded-2xl shadow-sm border border-slate-200 flex overflow-hidden">
      {/* 左侧：学生列表 */}
      <div className="w-80 border-r border-gray-100 flex flex-col bg-slate-50">
        <div className="p-4 border-b border-gray-100 bg-slate-100">
           <div className="text-sm font-bold text-slate-700 mb-2">咨询学生列表</div>
           <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <Input placeholder="搜索学生..." className="pl-9 bg-white" />
          </div>
        </div>
        <ScrollArea className="flex-1">
          {loadingContacts ? (
             <div className="flex justify-center p-10"><Loader2 className="animate-spin text-slate-400"/></div>
          ) : contacts.length === 0 ? (
             <div className="text-center p-10 text-slate-400">暂无咨询记录</div>
          ) : (
            contacts.map((contact) => (
              <div 
                key={contact.id} 
                onClick={() => setActiveContact(contact)}
                className={`p-4 flex gap-3 cursor-pointer hover:bg-white transition-colors border-b border-slate-100 ${activeContact?.id === contact.id ? 'bg-white border-l-4 border-[#5D9C59]' : ''}`}
              >
                <Avatar>
                  <AvatarImage src={contact.avatar} />
                  <AvatarFallback>{contact.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-slate-800">{contact.name}</div>
                  <div className="text-xs text-slate-500">{contact.college || '学生'}</div>
                </div>
              </div>
            ))
          )}
        </ScrollArea>
      </div>

      {/* 右侧：聊天框 */}
      <div className="flex-1 flex flex-col bg-white">
        {activeContact ? (
          <>
            <div className="h-16 border-b border-gray-100 flex items-center px-6 font-bold text-slate-800 bg-slate-50/50">
              {activeContact.name} 同学
            </div>
            
            <ScrollArea className="flex-1 p-6 bg-[#F8FAFC]">
              {loadingChat ? (
                  <div className="flex justify-center mt-10"><Loader2 className="animate-spin text-slate-300"/></div>
              ) : (
                <div className="space-y-4">
                  {messages.map((m) => {
                    const isMe = m.senderId === currentUser?.id;
                    return (
                      <div key={m.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-2xl text-sm max-w-[70%] shadow-sm ${isMe ? 'bg-[#5D9C59] text-white rounded-tr-none' : 'bg-white text-slate-700 border rounded-tl-none'}`}>
                          {m.content}
                        </div>
                      </div>
                    );
                  })}
                  <div ref={scrollRef} />
                </div>
              )}
            </ScrollArea>
            
            <div className="p-4 border-t flex gap-2 bg-white">
              <Input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="回复学生..." 
                className="bg-slate-50 border-slate-200 focus-visible:ring-[#5D9C59]"
              />
              <Button onClick={handleSend} className="bg-[#5D9C59] hover:bg-[#3E6D3B]"><Send className="w-4 h-4"/></Button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
            <User className="w-16 h-16 mb-4 opacity-10" />
            <p>请选择一个学生进行回复</p>
          </div>
        )}
      </div>
    </div>
  );
}