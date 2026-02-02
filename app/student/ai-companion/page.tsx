"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bot, User, Send, Loader2 } from 'lucide-react';

// 定义消息结构
type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function AICompanionPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  // 发送消息处理函数
  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    // 1. 用户消息立即上屏
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    };
    
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInput('');
    setIsLoading(true);

    try {
      // 2. 发起请求
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newHistory.map(m => ({ role: m.role, content: m.content })) }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || response.statusText);
      }

      if (!response.body) throw new Error('No response body');

      // 3. 准备接收 AI 回复
      const aiMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: aiMsgId, role: 'assistant', content: '' }]);

      // 4. 解析 SSE 流
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let aiContent = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // 解码当前数据块
        buffer += decoder.decode(value, { stream: true });
        
        // 处理可能包含多行的情况
        const lines = buffer.split('\n');
        // 最后一行可能是不完整的，留到下一次循环处理
        buffer = lines.pop() || ''; 

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed === 'data: [DONE]') continue;
          
          if (trimmed.startsWith('data: ')) {
            try {
              const jsonStr = trimmed.replace('data: ', '');
              const json = JSON.parse(jsonStr);
              const delta = json.choices[0]?.delta?.content || '';
              
              if (delta) {
                aiContent += delta;
                // 实时更新最后一条消息
                setMessages(prev => {
                  const others = prev.slice(0, -1);
                  return [...others, { id: aiMsgId, role: 'assistant', content: aiContent }];
                });
              }
            } catch (err) {
              console.warn("Stream parse error:", err);
            }
          }
        }
      }

    } catch (error: any) {
      console.error("Chat Error:", error);
      // 发生错误时，给用户一个提示
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'assistant', 
        content: `(系统提示: 连接出错了 - ${error.message})` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] max-w-3xl mx-auto p-4">
      {/* 顶部提示 */}
      <div className="bg-blue-50 text-blue-700 p-3 rounded-lg text-sm mb-4 text-center shadow-sm">
        🤖 <b>AI 陪伴助手小暖</b> (24小时在线)<br/>
        <span className="text-xs opacity-80">我是一个人工智能，回复仅供参考。</span>
      </div>

      {/* 消息列表 */}
      <ScrollArea ref={scrollRef} className="flex-1 pr-4 border rounded-xl p-4 bg-white shadow-sm mb-4">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-slate-400">
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <Bot className="w-8 h-8 text-[#5D9C59]" />
             </div>
             <p>你好呀！我是小暖。</p>
          </div>
        )}
        
        {messages.map((m) => (
          <div key={m.id} className={`flex gap-3 mb-6 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.role !== 'user' && (
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/ai-avatar.png" />
                <AvatarFallback className="bg-[#E8F5E9]"><Bot className="w-4 h-4 text-[#5D9C59]" /></AvatarFallback>
              </Avatar>
            )}
            <div className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
              m.role === 'user' 
                ? 'bg-[#5D9C59] text-white rounded-br-none' 
                : 'bg-white border border-slate-100 text-slate-700 rounded-bl-none'
            }`}>
              {m.content}
            </div>
            {m.role === 'user' && (
              <Avatar className="w-8 h-8 border">
                <AvatarFallback className="bg-slate-100"><User className="w-4 h-4 text-slate-600" /></AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        
        {isLoading && (
           <div className="flex gap-3 mb-4 justify-start">
             <Avatar className="w-8 h-8 border">
                <AvatarFallback className="bg-[#E8F5E9]"><Bot className="w-4 h-4 text-[#5D9C59]" /></AvatarFallback>
              </Avatar>
              <div className="flex items-center text-xs text-slate-400">
                <Loader2 className="w-3 h-3 animate-spin mr-1" /> 小暖正在思考...
              </div>
          </div>
        )}
      </ScrollArea>

      {/* 输入框 */}
      <form onSubmit={handleSend} className="flex gap-2 items-center bg-white p-2 rounded-xl border shadow-sm">
        <Input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="在这里输入你想说的话..." 
          className="flex-1 border-0 focus-visible:ring-0 shadow-none bg-transparent"
        />
        <Button 
          type="submit" 
          disabled={isLoading || !input.trim()} 
          className="bg-[#5D9C59] hover:bg-[#4a8546] text-white rounded-lg w-10 h-10 p-0 flex items-center justify-center transition-all"
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </Button>
      </form>
    </div>
  );
}