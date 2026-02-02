"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Loader2 } from 'lucide-react';
import { getArticleById } from '@/app/actions';

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 安全获取 ID
  const id = params?.id as string;

  useEffect(() => {
    async function loadArticle() {
      if (id) {
        const res = await getArticleById(id);
        if (res.success) {
          setArticle(res.data);
        }
      }
      setLoading(false);
    }
    loadArticle();
  }, [id]);

  if (loading) {
    return <div className="h-screen flex justify-center items-center"><Loader2 className="animate-spin w-8 h-8 text-[#5D9C59]" /></div>;
  }

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
        <div className="text-slate-500">文章不存在或已被删除</div>
        <Button variant="outline" onClick={() => router.back()}>返回列表</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* 顶部返回栏 */}
      <div className="mb-6">
        <Button variant="ghost" onClick={() => router.back()} className="text-slate-500 hover:text-[#5D9C59]">
          <ArrowLeft className="w-4 h-4 mr-2" /> 返回列表
        </Button>
      </div>

      {/* 文章主体 */}
      <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        
        {/* ✅ 修改重点：改回原生 img 标签 */}
        {/* 原生标签没有域名限制，只要 URL 对就能显示 */}
        <div className="w-full h-64 md:h-[400px] overflow-hidden bg-slate-100">
          {article.image ? (
            <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover" // object-cover 保证图片充满且不变形
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400">
                暂无封面图片
            </div>
          )}
        </div>

        <div className="p-8 md:p-12">
          {/* 头部信息 */}
          <div className="mb-8 text-center">
            <div className="flex justify-center gap-2 mb-4">
               <Badge className="bg-[#F0F7EF] text-[#3E6D3B] hover:bg-[#F0F7EF] border-0">{article.category}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {article.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(article.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          {/* 正文内容 */}
          <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-loose whitespace-pre-wrap">
            {article.content}
          </div>
        </div>

        {/* 底部提示 */}
        <div className="bg-slate-50 p-6 text-center text-sm text-slate-400 border-t border-slate-100">
          <p>本文仅供心理科普与参考，如有严重心理困扰请及时预约咨询。</p>
        </div>
      </article>
    </div>
  );
}