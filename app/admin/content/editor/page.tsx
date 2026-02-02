"use client";
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Save, Image as ImageIcon, Loader2, X, UploadCloud } from 'lucide-react';
import { toast } from 'sonner';
import { createArticle } from '@/app/actions';

export default function ArticleEditor() {
  const router = useRouter();
  const { currentUser } = useAppStore();
  const [loading, setLoading] = useState(false);

  // 表单状态
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('自我成长');
  const [summary, setSummary] = useState('');
  
  // ✅ 新增：图片相关的状态
  const [imagePreview, setImagePreview] = useState<string>(''); // 用于显示和存储Base64
  const fileInputRef = useRef<HTMLInputElement>(null); // 用于触发隐藏的input

  // ✅ 新增：处理图片上传
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. 限制大小 (例如 2MB)，防止数据库字段溢出或传输太慢
    if (file.size > 2 * 1024 * 1024) {
      toast.error("图片过大", { description: "请上传 2MB 以内的图片" });
      return;
    }

    // 2. 读取文件转为 Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImagePreview(base64String); // 既是预览图，也是要存入数据库的数据
    };
    reader.readAsDataURL(file);
  };

  // ✅ 新增：移除图片
  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // 防止触发点击上传
    setImagePreview('');
    if (fileInputRef.current) {
        fileInputRef.current.value = ''; // 清空 input
    }
  };

  const handlePublish = async () => {
    if (!title.trim()) {
      toast.error("请输入文章标题");
      return;
    }
    if (!content.trim()) {
      toast.error("请输入正文内容");
      return;
    }

    setLoading(true);

    try {
      // ✅ 默认随机图 (如果没有上传图片，还是用随机图兜底)
      const randomImage = `https://images.unsplash.com/photo-${Math.random() > 0.5 ? '1516321318423-f06f85e504b3' : '1499209974431-2761eb43a768'}?w=800&q=80`;

      const result = await createArticle({
        title,
        category,
        content,
        summary: summary || content.slice(0, 50) + "...",
        author: currentUser?.name || "管理员", 
        status: 'published',
        // ✅ 关键修改：如果有上传的图就用上传的，没有就用随机图
        image: imagePreview || randomImage
      });

      if (result.success) {
        toast.success("文章发布成功！");
        setTimeout(() => {
            // 返回上一页或者去列表页
            router.back(); 
        }, 500);
      } else {
        toast.error("发布失败", { description: "数据库写入错误" });
      }
    } catch (error) {
      console.error(error);
      toast.error("系统错误", { description: "请检查网络连接或图片是否过大" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* 顶部操作栏 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-[#1e293b]">撰写新文章</h1>
            <p className="text-slate-500 text-sm">发布心理科普知识或中心公告</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" disabled={loading}>存为草稿</Button>
          <Button className="bg-[#5D9C59] hover:bg-[#3E6D3B]" onClick={handlePublish} disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
            {loading ? "正在写入..." : "正式发布"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 左侧：主要内容编辑 */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <Label className="text-lg font-semibold">文章标题</Label>
            <Input 
              placeholder="请输入引人注目的标题..." 
              className="text-lg py-6 font-bold"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label>文章正文</Label>
            <div className="border rounded-md shadow-sm bg-white min-h-[500px] flex flex-col">
              <div className="border-b bg-slate-50 p-2 flex gap-2">
                {['B', 'I', 'U', 'H1', 'H2', '“'].map(tool => (
                  <Button key={tool} variant="ghost" size="sm" className="h-8 w-8 font-serif font-bold text-slate-600">{tool}</Button>
                ))}
              </div>
              <Textarea 
                className="flex-1 border-0 resize-none p-4 focus-visible:ring-0 text-base leading-relaxed" 
                placeholder="在此输入正文内容..." 
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 右侧：属性设置 */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label>发布栏目</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择分类" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="自我成长">自我成长</SelectItem>
                    <SelectItem value="学业压力">学业压力</SelectItem>
                    <SelectItem value="人际交往">人际交往</SelectItem>
                    <SelectItem value="情绪调节">情绪调节</SelectItem>
                    <SelectItem value="中心公告">中心公告</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* ✅ 修改：封面图片上传区域 */}
              <div className="space-y-2">
                <Label>封面图片</Label>
                
                {/* 隐藏的文件输入框 */}
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" // 只接受图片
                    onChange={handleImageUpload}
                />

                {imagePreview ? (
                    // 状态A: 已经选择了图片，显示预览
                    <div className="relative rounded-lg overflow-hidden border border-slate-200 group">
                        <img src={imagePreview} alt="封面预览" className="w-full h-40 object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="destructive" size="sm" onClick={handleRemoveImage}>
                                <X className="w-4 h-4 mr-1"/> 移除图片
                            </Button>
                        </div>
                    </div>
                ) : (
                    // 状态B: 未选择图片，显示上传按钮
                    <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 hover:border-[#5D9C59] transition-colors cursor-pointer"
                    >
                        <UploadCloud className="w-8 h-8 mb-2" />
                        <span className="text-sm">点击上传本地封面</span>
                        <span className="text-xs text-slate-300 mt-1">支持 JPG, PNG (Max 2MB)</span>
                    </div>
                )}
              </div>

              <div className="space-y-2">
                <Label>作者/来源</Label>
                <Input defaultValue={currentUser?.name || "管理员"} disabled />
              </div>

              <div className="space-y-2">
                <Label>摘要</Label>
                <Textarea 
                  placeholder="简短描述文章内容..." 
                  className="h-24 resize-none"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}