"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Plus, Edit, Trash2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
// ✅ 引入后端 Actions
import { getArticles, deleteArticle } from '@/app/actions';

export default function ContentPage() {
  // ✅ 1. 定义状态存储数据库数据
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ 2. 页面加载时获取数据
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const data = await getArticles();
      setArticles(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error("加载失败");
    } finally {
      setLoading(false);
    }
  }

  // ✅ 3. 真实的删除逻辑
  const handleDelete = async (id: string) => {
    if (confirm('确定要永久删除这篇文章吗？')) {
      const res = await deleteArticle(id);
      if (res.success) {
        toast.success('文章已删除');
        // 重新加载列表（或者直接在本地过滤掉）
        setArticles(prev => prev.filter(a => a.id !== id));
      } else {
        toast.error('删除失败，请稍后重试');
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#1e293b] flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#5D9C59]" /> 内容发布
          </h1>
          <p className="text-slate-500 mt-1">管理心理知识科普文章、通知公告</p>
        </div>
        
        {/* 跳转到编辑器 */}
        {/* ⚠️ 注意：请确保你创建了 app/admin/content/new/page.tsx 或者是 editor 页面 */}
        <Link href="/admin/content/editor"> 
          <Button className="bg-[#5D9C59] hover:bg-[#3E6D3B]">
            <Plus className="w-4 h-4 mr-2" /> 发布新文章
          </Button>
        </Link>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">文章标题</TableHead>
                <TableHead>分类</TableHead>
                <TableHead>作者</TableHead>
                <TableHead>发布时间</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>阅读量</TableHead>
                <TableHead className="text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center">
                    <div className="flex justify-center items-center gap-2 text-slate-500">
                      <Loader2 className="animate-spin w-4 h-4" /> 加载中...
                    </div>
                  </TableCell>
                </TableRow>
              ) : articles.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center text-slate-500">
                    暂无文章，点击右上角发布一篇吧！
                  </TableCell>
                </TableRow>
              ) : (
                articles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium">
                      {article.title}
                    </TableCell>
                    <TableCell><Badge variant="outline">{article.category}</Badge></TableCell>
                    <TableCell>{article.author}</TableCell>
                    <TableCell>
                      {/* ✅ 格式化日期 */}
                      {new Date(article.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {/* 既然目前主要是发布，这里简化显示 */}
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0">
                        {article.status === 'draft' ? '草稿' : '已发布'}
                      </Badge>
                    </TableCell>
                    <TableCell>{article.views || 0}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-red-600" 
                          onClick={() => handleDelete(article.id)} // ✅ 传入真实 ID
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}