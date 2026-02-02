"use client";
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, BookOpen, Clock, ChevronRight, Loader2 } from 'lucide-react';
// ✅ 1. 引入后端 Action
import { getArticles } from '@/app/actions';

const CATEGORIES = ["全部", "自我成长", "学业压力", "人际交往", "情绪调节", "中心公告"];

export default function ArticlesPage() {
  // ✅ 2. 改用本地 State 存储数据库数据 (初始化为空数组，防止崩溃)
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [activeCategory, setActiveCategory] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ 3. 页面加载时请求数据库
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getArticles();
        // 双重保险：确保回来的是数组
        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error("加载文章失败:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // ✅ 4. 安全的筛选逻辑 (加了 ?. 和 || [])
  const safeArticles = articles || [];
  const filteredArticles = safeArticles.filter(article => {
    if (!article) return false;
    const matchesCategory = activeCategory === "全部" || article.category === activeCategory;
    const matchesSearch = (article.title || '').includes(searchQuery) || (article.summary || '').includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-10">
      {/* 头部区域 */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-100 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#2C3E50] flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#5D9C59]" /> 心理知识库
          </h1>
          <p className="text-slate-500 mt-2 text-sm">在这里探索心理学的奥秘，获取自助成长的力量</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <Input 
            placeholder="搜索文章关键词..." 
            className="pl-9 bg-white border-slate-200 focus-visible:ring-[#5D9C59]" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-[#5D9C59] text-white shadow-md' 
                : 'bg-white text-slate-600 hover:bg-[#F0F7EF] border border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 文章列表 */}
      <div className="grid grid-cols-1 gap-6">
        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="animate-spin text-[#5D9C59] w-8 h-8" /></div>
        ) : filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div 
              key={article.id}
              className="group bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:border-[#5D9C59] hover:shadow-md transition-all flex flex-col md:flex-row gap-6 cursor-pointer"
            >
              {/* 图片 */}
              <div className="w-full md:w-64 h-40 rounded-lg overflow-hidden relative flex-shrink-0 bg-gray-100">
                <img src={article.image || "https://images.unsplash.com/photo-1499209974431-2761eb43a768?w=800&q=80"} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* 内容 */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-[#F0F7EF] text-[#3E6D3B] hover:bg-[#F0F7EF] rounded-md font-normal">
                      {article.category || '未分类'}
                    </Badge>
                    <span className="text-xs text-slate-400">by {article.author || '管理员'}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-2 group-hover:text-[#5D9C59] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-4 md:mt-0">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5 min read</span>
                    <span>{article.createdAt ? new Date(article.createdAt).toLocaleDateString() : '刚刚'} 发布</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-[#5D9C59] hover:bg-[#F0F7EF] hover:text-[#3E6D3B] p-0 h-auto font-medium">
                    阅读全文 <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
            <p className="text-slate-500">暂无文章，请联系管理员发布内容。</p>
          </div>
        )}
      </div>
    </div>
  );
}