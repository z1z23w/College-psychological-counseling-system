"use client";
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { UserCog, Plus, Loader2, Pencil, Trash2 } from 'lucide-react'; // ✅ 引入新图标
import { toast } from 'sonner';

// ✅ 引入后端所有函数
import { createUser, getUsers, deleteUser, updateUser } from "@/app/actions";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // ✅ 新增：记录当前正在编辑的用户 ID (null 代表是新增模式)
  const [editingId, setEditingId] = useState<string | null>(null);

  // 表单状态
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('student');
  const [college, setCollege] = useState('');

  // 1. 加载数据
  async function loadData() {
    const res = await getUsers();
    if (res.success) {
      setUsers(res.data);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  // ✅ 2. 打开新增窗口
  const openAddDialog = () => {
    setEditingId(null); // 标记为新增
    setName(''); setUsername(''); setRole('student'); setCollege(''); // 清空表单
    setIsDialogOpen(true);
  };

  // ✅ 3. 打开编辑窗口
  const openEditDialog = (user: any) => {
    setEditingId(user.id); // 标记为编辑
    setName(user.name); 
    setUsername(user.username); 
    setRole(user.role); 
    setCollege(user.college || '');
    setIsDialogOpen(true);
  };

  // ✅ 4. 统一处理提交 (新增或编辑)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("role", role);
    formData.append("college", college);

    let result;
    if (editingId) {
      // 编辑模式
      result = await updateUser(editingId, formData);
    } else {
      // 新增模式
      result = await createUser(formData);
    }

    setIsSubmitting(false);

    if (result.success) {
      toast.success(editingId ? "用户信息已更新" : "新用户已添加");
      setIsDialogOpen(false);
      loadData(); // 刷新列表
    } else {
      toast.error(result.error || "操作失败");
    }
  };

  // ✅ 5. 处理删除
  const handleDelete = async (id: string, userName: string) => {
    if (confirm(`确定要永久删除用户 "${userName}" 吗？此操作不可恢复。`)) {
      const res = await deleteUser(id);
      if (res.success) {
        toast.success("用户已删除");
        // 乐观更新：直接在界面移除，不用等接口刷新
        setUsers(users.filter(u => u.id !== id));
      } else {
        toast.error("删除失败");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#1e293b] flex items-center gap-2">
            <UserCog className="w-6 h-6 text-[#5D9C59]" /> 用户管理
          </h1>
          <p className="text-slate-500 mt-1">管理系统内所有用户账号信息</p>
        </div>
        
        {/* ✅ 修改：点击按钮调用 openAddDialog */}
        <Button className="bg-[#5D9C59] hover:bg-[#3E6D3B]" onClick={openAddDialog}>
          <Plus className="w-4 h-4 mr-2" /> 新增用户
        </Button>
      </div>

      {/* 弹窗组件 (新增/编辑共用) */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingId ? "编辑用户" : "添加新用户"}</DialogTitle>
            <DialogDescription>
              {editingId ? "修改用户信息并保存。" : "新用户默认密码为 123456。"}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">姓名</Label>
              <Input className="col-span-3" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">学号/工号</Label>
              <Input className="col-span-3" value={username} onChange={e => setUsername(e.target.value)} required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">角色</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="col-span-3"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">学生</SelectItem>
                  <SelectItem value="counselor">咨询师</SelectItem>
                  <SelectItem value="admin">管理员</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">学院</Label>
              <Input className="col-span-3" value={college} onChange={e => setCollege(e.target.value)} />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-[#5D9C59]" disabled={isSubmitting}>
                {isSubmitting ? "保存中..." : "保存更改"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* 数据表格 */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        {isLoading ? (
          <div className="flex justify-center p-10"><Loader2 className="animate-spin text-[#5D9C59]" /></div>
        ) : users.length === 0 ? (
          <div className="text-center p-10 text-slate-500">暂无数据</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>姓名</TableHead>
                <TableHead>学号/工号</TableHead>
                <TableHead>角色</TableHead>
                <TableHead>学院</TableHead>
                <TableHead className="text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>
                    {user.role === 'student' && <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">学生</Badge>}
                    {user.role === 'counselor' && <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">咨询师</Badge>}
                    {user.role === 'admin' && <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">管理员</Badge>}
                  </TableCell>
                  <TableCell>{user.college || '-'}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      {/* ✅ 编辑按钮 */}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                        onClick={() => openEditDialog(user)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      
                      {/* ✅ 删除按钮 */}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-red-600 hover:text-red-800 hover:bg-red-50"
                        onClick={() => handleDelete(user.id, user.name)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}