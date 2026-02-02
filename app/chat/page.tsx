"use client";
import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '@/lib/store';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Send, User, MessageSquare, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
// ✅ 引入后端 Actions
import { getChatContacts, getMessages, sendMessage } from '@/app/actions';

export default function ChatPage() {
  const { currentUser } = useAppStore();
  
  const [contacts, setContacts] = useState<any[]>([]); // 联系人列表
  const [activeContact, setActiveContact] = useState<any>(null); // 当前选中的聊天对象
  const [messages, setMessages] = useState<any[]>([]); // 当前聊天记录
  const [inputText, setInputText] = useState(""); // 输入框内容
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [sending, setSending] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null); // 用于自动滚动到底部

  // 1. 加载联系人列表
  useEffect(() => {
    async function loadContacts() {
      if (currentUser?.id) {
        const res = await getChatContacts(currentUser.id, currentUser.role);
        if (res.success) {
          setContacts(res.data);
        }
        setLoadingContacts(false);
      }
    }
    loadContacts();
  }, [currentUser]);

  // 2. 切换聊天对象时，加载消息
  useEffect(() => {
    let interval: NodeJS.Timeout;

    async function fetchMessages() {
      if (currentUser?.id && activeContact?.id) {
        const res = await getMessages(currentUser.id, activeContact.id);
        if (res.success) {
          setMessages(res.data);
        }
      }
    }

    if (activeContact) {
      fetchMessages(); // 立即加载一次
      // 🔄 简单的轮询机制：每3秒自动刷新消息，实现“伪实时”
      interval = setInterval(fetchMessages, 3000);
    }

    return () => clearInterval(interval);
  }, [currentUser, activeContact]);

  // 3. 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 4. 发送消息
  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || !currentUser || !activeContact) return;

    setSending(true);
    // 乐观更新：先在界面上显示出来，再发请求（提升体验）
    const tempMsg = {
      id: "temp-" + Date.now(),
      content: inputText,
      senderId: currentUser.id,
      createdAt: new Date().toISOString(),
      sender: { name: currentUser.name, avatar: currentUser.avatar }
    };
    setMessages(prev => [...prev, tempMsg]);
    setInputText(""); // 清空输入框

    const res = await sendMessage(currentUser.id, activeContact.id, tempMsg.content);
    if (!res.success) {
      toast.error("发送失败");
    }
    setSending(false);
  };

  if (!currentUser) return <div className="p-10 text-center">请先登录</div>;

  return (
    <div className="h-[calc(100vh-100px)] max-h-[800px] flex gap-4 p-4 md:p-0">
      
      {/* 左侧：联系人列表 */}
      <Card className="w-1/3 min-w-[200px] flex flex-col border-0 shadow-md">
        <div className="p-4 border-b font-bold text-slate-700 bg-slate-50 rounded-t-lg">
          {currentUser.role === 'student' ? '在线咨询师' : '咨询学生列表'}
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {loadingContacts ? (
             <div className="flex justify-center p-4"><Loader2 className="animate-spin text-slate-400" /></div>
          ) : contacts.map(contact => (
            <div 
              key={contact.id}
              onClick={() => setActiveContact(contact)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                activeContact?.id === contact.id ? 'bg-[#5D9C59] text-white shadow-md' : 'hover:bg-slate-100'
              }`}
            >
              <Avatar className="w-10 h-10 border bg-white">
                <AvatarImage src={contact.avatar} />
                <AvatarFallback className="text-slate-500">{contact.name[0]}</AvatarFallback>
              </Avatar>
              <div className="overflow-hidden">
                <div className="font-medium truncate">{contact.name}</div>
                <div className={`text-xs truncate ${activeContact?.id === contact.id ? 'text-green-100' : 'text-slate-400'}`}>
                  {contact.college || '心理中心'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 右侧：聊天窗口 */}
      <Card className="flex-1 flex flex-col border-0 shadow-md overflow-hidden">
        {activeContact ? (
          <>
            {/* 聊天顶部 */}
            <div className="p-4 border-b bg-slate-50 flex items-center gap-3 shadow-sm z-10">
              <Avatar className="w-8 h-8">
                <AvatarImage src={activeContact.avatar} />
                <AvatarFallback>{activeContact.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-bold text-slate-700">{activeContact.name}</div>
                <div className="text-xs text-[#5D9C59] flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#5D9C59] rounded-full animate-pulse"></span> 在线咨询中
                </div>
              </div>
            </div>

            {/* 消息列表区 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8FAF9]">
              {messages.length === 0 ? (
                 <div className="text-center text-slate-400 mt-20 text-sm">
                   👋 打个招呼吧，开始咨询对话
                 </div>
              ) : (
                messages.map((msg) => {
                  const isMe = msg.senderId === currentUser.id;
                  return (
                    <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex gap-2 max-w-[80%] ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                        <Avatar className="w-8 h-8 mt-1 border shadow-sm">
                          <AvatarImage src={isMe ? currentUser.avatar : activeContact.avatar} />
                          <AvatarFallback>{isMe ? currentUser.name[0] : activeContact.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className={`px-4 py-2.5 rounded-2xl shadow-sm text-sm leading-relaxed break-words ${
                          isMe 
                            ? 'bg-[#5D9C59] text-white rounded-tr-none' 
                            : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* 输入框区 */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t flex gap-2">
              <Input 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="请输入咨询内容..."
                className="flex-1 bg-slate-50 border-slate-200 focus-visible:ring-[#5D9C59]"
              />
              <Button type="submit" disabled={sending || !inputText.trim()} className="bg-[#5D9C59] hover:bg-[#3E6D3B]">
                {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400 bg-slate-50/50">
            <MessageSquare className="w-16 h-16 mb-4 opacity-20" />
            <p>请从左侧选择一位咨询师/学生开始对话</p>
          </div>
        )}
      </Card>
    </div>
  );
}