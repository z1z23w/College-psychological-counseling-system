"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

// ==========================================
// 1. 用户管理 (管理员用)
// ==========================================

export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return { success: true, data: users };
  } catch (error) {
    console.error("获取用户失败:", error);
    return { success: false, data: [] };
  }
}

export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const role = formData.get("role") as string;
  const college = formData.get("college") as string;

  try {
    await prisma.user.create({
      data: {
        name,
        username,
        role,
        college,
        password: "123456", // 默认密码
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
      },
    });
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    return { success: false, error: "创建失败，学号可能已存在" };
  }
}

export async function updateUser(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const username = formData.get("username") as string;
  const role = formData.get("role") as string;
  const college = formData.get("college") as string;

  try {
    await prisma.user.update({
      where: { id },
      data: { name, username, role, college },
    });
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    return { success: false, error: "更新失败，学号可能冲突" };
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({ where: { id } });
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    return { success: false, error: "删除失败" };
  }
}

// ==========================================
// 2. 认证与查询 (通用)
// ==========================================

export async function loginAction(username: string, role: string) {
  try {
    const user = await prisma.user.findFirst({
      where: { username, role }
    });
    if (!user) return { success: false, error: "用户不存在或角色错误" };
    
    // 返回用户信息（不含密码）
    const { password, ...userInfo } = user;
    return { success: true, data: userInfo };
  } catch (error) {
    return { success: false, error: "数据库连接失败" };
  }
}

export async function getCounselors() {
  return await prisma.user.findMany({
    where: { role: 'counselor' },
    select: { id: true, name: true, college: true, avatar: true } // 明确选择需要的字段
  });
}

// ==========================================
// 3. 预约系统 (核心业务)
// ==========================================

// ✅ 修复：获取预约列表 (去除了 email 字段)
export async function getAppointments(userId: string, role: 'student' | 'counselor') {
  const where = role === 'student' ? { studentId: userId } : { counselorId: userId };
  
  const data = await prisma.appointment.findMany({
    where,
    include: {
      // ⚠️ 关键修改：User表没有email字段，改查 username(学号) 和 college
      student: { select: { name: true, username: true, college: true, avatar: true } },
      counselor: { select: { name: true, college: true, avatar: true } },
      testResult: true, // 获取关联的测评结果
    },
    orderBy: { date: 'desc' }
  });
  return data;
}

// ✅ 创建带详细档案的预约
export async function createAppointmentWithDetails(data: any) {
  // 检查时间冲突
  const existing = await prisma.appointment.findFirst({
    where: {
      counselorId: data.counselorId,
      date: new Date(data.date),
      time: data.time,
      status: 'confirmed' 
    }
  });

  if (existing) return { success: false, msg: "该时段已被占用" };

  try {
    await prisma.appointment.create({
      data: {
        studentId: data.studentId,
        counselorId: data.counselorId,
        date: new Date(data.date),
        time: data.time,
        // 详细信息
        idCard: data.idCard,
        studentIdNum: data.studentIdNum,
        phone: data.phone,
        college: data.college,
        major: data.major,
        grade: data.grade,
        classInfo: data.classInfo,
        mentalHistory: data.mentalHistory,
        physicalState: data.physicalState,
        problemType: data.problemType,
        status: 'pending'
      }
    });

    revalidatePath('/student/booking');
    revalidatePath('/counselor/dashboard');
    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false, msg: "预约创建异常" };
  }
}

// 更新预约状态 (审批/拒绝/完成)
export async function updateAppointmentStatus(id: string, status: string) {
  await prisma.appointment.update({
    where: { id },
    data: { status }
  });
  revalidatePath("/counselor/dashboard");
  revalidatePath("/student/booking");
  return { success: true };
}

// 更新咨询记录 (咨询师写结案记录)
// app/actions.ts

export async function updateConsultationRecord(id: string, notes: string) {
  try {
    await prisma.appointment.update({
      where: { id },
      data: { 
        notes, 
        status: 'completed' 
      }
    });
    revalidatePath("/counselor/dashboard");
    revalidatePath("/counselor/cases"); // 确保刷新档案页面
    return { success: true };
  } catch (error) {
    console.error("保存咨询记录失败:", error); // 打印错误日志方便排查
    return { success: false, error: "保存失败" };
  }
}

// ==========================================
// 4. 心理测评系统 (TestResult)
// ==========================================

// [修改] 提交心理测评结果 (修复版：支持 SDS/SAS 标准分 + 防止重复报错)
// [修改] 提交预约前测 (纯记录版：只存分，不报警，不触发危机干预)
export async function submitPsychTest(appointmentId: string, answers: any) {
  try {
    const { sds, sas, ses } = answers;

    // 1. 计算原始分
    const sdsRaw = (sds || []).reduce((a: number, b: number) => a + b, 0);
    const sasRaw = (sas || []).reduce((a: number, b: number) => a + b, 0);
    const sesScore = (ses || []).reduce((a: number, b: number) => a + b, 0);

    // 2. 计算标准分 (仅做记录)
    const sdsScore = Math.floor(sdsRaw * 1.25);
    const sasScore = Math.floor(sasRaw * 1.25);

    // 3. 这里的 isHighRisk 仅用于单次记录，不再联动系统报警
    let isHighRisk = false;
    let riskLevel = 'normal';

    if (sdsScore >= 53 || sasScore >= 50) {
        isHighRisk = true;
        if (sdsScore >= 63 || sasScore >= 60) {
            riskLevel = 'red';
        } else {
            riskLevel = 'yellow';
        }
    }

    // 4. 保存结果到数据库 (Upsert防止重复报错)
    await prisma.testResult.upsert({
        where: {
            appointmentId: appointmentId
        },
        create: {
            appointmentId,
            sdsScore,
            sasScore,
            sesScore,
            rawAnswers: JSON.stringify(answers),
            isHighRisk, // 存入数据库供咨询师查看，但不触发系统动作
            riskLevel
        },
        update: {
            sdsScore,
            sasScore,
            sesScore,
            rawAnswers: JSON.stringify(answers),
            isHighRisk,
            riskLevel,
            createdAt: new Date()
        }
    });

    // ❌ 已删除：prisma.appointment.update (标记预约为危机) 的代码
    // ❌ 已删除：prisma.user.update (标记学生为红名) 的代码
    // ❌ 已删除：Crisis 相关的页面刷新

    // 5. 仅刷新预约列表
    revalidatePath('/student/booking');
    revalidatePath('/counselor/cases');

    // 返回成功，不再返回 isHighRisk 给前端弹窗
    return { success: true };

  } catch (error) {
    console.error("提交测评失败:", error);
    return { success: false, msg: "提交失败，请重试" };
  }
}

// ==========================================
// 5. 排班系统 (Schedule)
// ==========================================

export async function getCounselorSchedule(counselorId: string) {
  try {
    const schedules = await prisma.schedule.findMany({
      where: { counselorId, isAvailable: true }
    });
    return { success: true, data: schedules };
  } catch (error) {
    return { success: false, data: [] };
  }
}

export async function updateSchedule(counselorId: string, slots: any[]) {
  try {
    const ops = slots.map(slot => 
      prisma.schedule.upsert({
        where: {
          counselorId_dayOfWeek_timeSlot: {
            counselorId,
            dayOfWeek: slot.dayOfWeek,
            timeSlot: slot.timeSlot
          }
        },
        update: { isAvailable: slot.isAvailable },
        create: {
          counselorId,
          dayOfWeek: slot.dayOfWeek,
          timeSlot: slot.timeSlot,
          isAvailable: slot.isAvailable
        }
      })
    );
    
    await prisma.$transaction(ops);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "保存失败" };
  }
}

// ==========================================
// 6. 聊天系统 (Messages)
// ==========================================

export async function getChatContacts(currentUserId: string, role: string) {
  try {
    if (role === 'student') {
      const counselors = await prisma.user.findMany({
        where: { role: 'counselor' },
        select: { id: true, name: true, avatar: true, college: true }
      });
      return { success: true, data: counselors };
    } else {
      const students = await prisma.user.findMany({
        where: { role: 'student' },
        select: { id: true, name: true, avatar: true, college: true }
      });
      return { success: true, data: students };
    }
  } catch (error) {
    return { success: false, data: [] };
  }
}

export async function getMessages(userId1: string, userId2: string) {
  try {
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: userId1, receiverId: userId2 },
          { senderId: userId2, receiverId: userId1 }
        ]
      },
      orderBy: { createdAt: 'asc' },
      include: {
        sender: { select: { name: true, avatar: true } }
      }
    });
    return { success: true, data: messages };
  } catch (error) {
    return { success: false, data: [] };
  }
}

export async function sendMessage(senderId: string, receiverId: string, content: string) {
  try {
    const message = await prisma.message.create({
      data: { senderId, receiverId, content }
    });
    return { success: true, data: message };
  } catch (error) {
    return { success: false, error: "发送失败" };
  }
}

// ==========================================
// 7. 文章系统 (Articles)
// ==========================================

export async function getArticles() {
  const articles = await prisma.article.findMany({
    orderBy: { createdAt: 'desc' }
  });
  return articles.map(a => ({
    ...a,
    createdAt: a.createdAt.toISOString()
  }));
}

export async function getArticleById(id: string) {
  try {
    const article = await prisma.article.findUnique({ where: { id } });
    if (article) return { success: true, data: article };
    return { success: false, error: "文章未找到" };
  } catch (error) {
    return { success: false, error: "查询失败" };
  }
}

export async function createArticle(data: any) {
  await prisma.article.create({
    data: {
      ...data,
      author: '管理员',
      views: 0,
      image: "https://images.unsplash.com/photo-1499209974431-2761eb43a768?w=800&q=80"
    }
  });
  revalidatePath("/student/articles");
  revalidatePath("/admin/content");
  return { success: true };
}

export async function deleteArticle(id: string) {
  try {
    await prisma.article.delete({ where: { id } });
    revalidatePath("/admin/content");
    revalidatePath("/student/articles");
    return { success: true };
  } catch (error) {
    return { success: false, error: "删除失败" };
  }
}

// ==========================================
// 8. 系统管理与看板
// ==========================================

export async function getAdminDashboardStats() {
  try {
    const [studentCount, appointmentCount, completedCount, rawChartData] = await Promise.all([
      prisma.user.count({ where: { role: 'student' } }),
      
      // 统计所有预约 (包括等待中的，用于显示热度)
      prisma.appointment.count(), 

      // 统计已完成
      prisma.appointment.count({ where: { status: 'completed' } }),

      // 图表数据 (统计最近7天)
      prisma.appointment.findMany({
        where: {
          date: { gte: new Date(new Date().setDate(new Date().getDate() - 6)) }
        },
        select: { date: true }
      })
    ]);

    const completionRate = appointmentCount > 0 
      ? Math.round((completedCount / appointmentCount) * 100) + "%" 
      : "0%";

    const chartData = [];
    const weekMap = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const month = d.getMonth() + 1;
      const day = d.getDate();
      const dateKey = `${month}/${day}`;
      const weekLabel = weekMap[d.getDay()];

      const count = rawChartData.filter(apt => {
        const aptDate = new Date(apt.date);
        return aptDate.getDate() === day && aptDate.getMonth() + 1 === month;
      }).length;

      chartData.push({ name: dateKey, day: weekLabel, visits: count });
    }

    return {
      success: true,
      data: {
        stats: {
          students: studentCount,
          appointments: appointmentCount,
          crisis: 0, // 暂无危机预警逻辑
          rate: completionRate
        },
        chart: chartData
      }
    };

  } catch (error) {
    console.error("看板数据加载失败:", error);
    return { success: false, error: "加载失败" };
  }
}

export async function getSystemSettings() {
  try {
    let config = await prisma.systemConfig.findFirst();
    if (!config) {
      config = await prisma.systemConfig.create({ data: {} });
    }
    return { success: true, data: config };
  } catch (error) {
    return { success: false, error: "获取配置失败" };
  }
}

export async function updateSystemSettings(data: any) {
  try {
    const first = await prisma.systemConfig.findFirst();
    if (first) {
      await prisma.systemConfig.update({
        where: { id: first.id },
        data: {
          platformName: data.platformName,
          hotline: data.hotline,
          openHours: data.openHours,
          maintenanceMode: data.maintenanceMode === 'true' || data.maintenanceMode === true
        }
      });
      return { success: true };
    }
    return { success: false, error: "未找到配置记录" };
  } catch (error) {
    return { success: false, error: "保存失败" };
  }
}

// app/actions.ts

// 1. 保存测评结果 (一定要存入 AssessmentResult 表)
export async function saveAssessment(userId: string, score: number, resultText: string, testType: string) {
  try {
    let isHighRisk = false;
    let threshold = 10; 
    
    if (testType === 'gad7') threshold = 9;
    if (testType === 'pss') threshold = 14;

    if (score > threshold) {
      isHighRisk = true;
    }

    // ✅ 必须是 prisma.assessmentResult
    await prisma.assessmentResult.create({
      data: {
        userId,
        score,
        type: testType, // 存入 'phq9', 'gad7' 等
        result: resultText,
        isHighRisk
      }
    });

    if (isHighRisk) {
      await prisma.user.update({
        where: { id: userId },
        data: { riskLevel: 'red' }
      });
    }

    revalidatePath('/student/assessment');
    return { success: true };
  } catch (error) {
    console.error("保存测评失败:", error);
    return { success: false };
  }
}

// 2. 获取测评历史 (一定要查 AssessmentResult 表)
export async function getAssessmentHistory(userId: string) {
  try {
    // ❌ 绝对不能是 prisma.testResult
    // ✅ 必须是 prisma.assessmentResult
    const data = await prisma.assessmentResult.findMany({
      where: { userId },
      orderBy: { createdAt: 'asc' }
    });
    return data;
  } catch (error) {
    console.error("获取历史失败:", error);
    return [];
  }
}

// ==========================================
// 11. 危机干预/主动提醒系统 (Intervention)
// ==========================================

// [咨询师端] 获取需要关注的高风险学生列表
// [修改] 获取需要关注的高风险学生列表
export async function getRiskStudents() {
  try {
    // 步骤 1: 找出所有高分测评的 studentId (分数 > 10)
    const highRiskAssessments = await prisma.assessment.findMany({
        where: { score: { gt: 10 } },
        select: { studentId: true },
        distinct: ['studentId'] // 去重
    });
    const highRiskIds = highRiskAssessments.map(a => a.studentId);

    // 步骤 2: 找出被标记为 red/yellow 的用户
    // 步骤 3: 合并查询 - 只要满足其中一个条件就算高风险
    const riskUsers = await prisma.user.findMany({
      where: {
        role: 'student',
        OR: [
            { riskLevel: { in: ['red', 'yellow'] } }, // 已经被标记的
            { id: { in: highRiskIds } }               // 或者虽未标记但分高的
        ]
      },
      include: {
        // 查最近的干预记录
        studentInterventions: {
          orderBy: { createdAt: 'desc' },
          take: 1
        }
      }
    });
    
    // 步骤 4: 补全数据 (查最近一次分数)
    const enrichedUsers = await Promise.all(riskUsers.map(async (u) => {
      const lastTest = await prisma.assessment.findFirst({
        where: { studentId: u.id },
        orderBy: { createdAt: 'desc' }
      });
      return {
        ...u,
        lastScore: lastTest?.score || 0,
        lastTestTime: lastTest?.createdAt,
        latestIntervention: u.studentInterventions[0] || null
      };
    }));

    // 最后再过滤一遍，确保只显示确实有风险的
    return enrichedUsers.filter(u => u.lastScore > 10 || u.riskLevel === 'red' || u.riskLevel === 'yellow');

  } catch (error) {
    console.error("获取风险名单失败:", error);
    return [];
  }
}

// [咨询师端] 发送提醒
export async function sendInterventionReminder(studentId: string, counselorId: string, message: string) {
  try {
    await prisma.intervention.create({
      data: {
        studentId,
        counselorId,
        message,
        status: 'pending'
      }
    });
    revalidatePath('/counselor/interventions');
    return { success: true };
  } catch (error) {
    return { success: false, error: "发送失败" };
  }
}

// [学生端] 检查是否有未处理的提醒
export async function checkPendingInterventions(studentId: string) {
  try {
    const intervention = await prisma.intervention.findFirst({
      where: {
        studentId,
        status: 'pending' // 只找未处理的
      },
      orderBy: { createdAt: 'desc' },
      include: {
        counselor: { select: { name: true, avatar: true } }
      }
    });
    return intervention;
  } catch (error) {
    return null;
  }
}

// [学生端] 响应提醒 (接受或拒绝)
export async function respondToIntervention(interventionId: string, response: 'accepted' | 'rejected') {
  try {
    await prisma.intervention.update({
      where: { id: interventionId },
      data: { status: response }
    });
    
    if (response === 'accepted') {
       // 如果接受，顺便可以在这里记录日志或者发通知
    }
    
    revalidatePath('/student/dashboard'); // 刷新状态
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

// ==========================================
// 12. 智能预约逻辑 (核心算法)
// ==========================================

export async function getAvailableSlotsForDate(counselorId: string, dateStr: string) {
  try {
    const targetDate = new Date(dateStr);
    
    // 1. 获取“星期几” (注意：JS getDay() 是 0-6 (周日-周六)，我们需要转成 1-7 或者跟你数据库 Schedule 表保持一致)
    // 假设数据库存的是：1=周一 ... 5=周五, 6=周六, 7=周日
    let dayOfWeek = targetDate.getDay();
    if (dayOfWeek === 0) dayOfWeek = 7; // 把周日从0变为7

    // 2. 获取咨询师的【基准排班】(Base Schedule)
    const baseSchedules = await prisma.schedule.findMany({
      where: {
        counselorId,
        dayOfWeek,
        isAvailable: true // 只找老师开放的时间
      },
      select: { timeSlot: true }
    });

    // 如果老师这天压根没排班，直接返回空
    if (baseSchedules.length === 0) {
      return { success: true, data: [] };
    }

    // 3. 获取该日【已被占用】的时段 (Appointments)
    // 我们需要查询状态为 pending(待审核) 和 confirmed(已确认) 的，rejected(已拒绝) 的不占位
    const startOfDay = new Date(dateStr); startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(dateStr); endOfDay.setHours(23, 59, 59, 999);

    const bookedAppointments = await prisma.appointment.findMany({
      where: {
        counselorId,
        date: {
          gte: startOfDay,
          lte: endOfDay
        },
        status: {
          in: ['pending', 'confirmed'] // ⚠️ 关键：待审核和已确认都算占用，防止重复申请
        }
      },
      select: { time: true }
    });

    // 提取已被占用的时间字符串数组
    const bookedTimes = bookedAppointments.map(app => app.time);

    // 4. 计算【逻辑可用】 = 基准排班 - 已被占用
    let availableSlots = baseSchedules
      .map(s => s.timeSlot)
      .filter(slot => !bookedTimes.includes(slot));

    // 5. 【时间过滤】：如果是“今天”，必须过滤掉已经过去的时间
    const now = new Date();
    const isToday = now.toDateString() === targetDate.toDateString();

    if (isToday) {
      // 获取当前时间 "HH:mm" 格式
      const currentHour = now.getHours().toString().padStart(2, '0');
      const currentMinute = now.getMinutes().toString().padStart(2, '0');
      const currentTimeStr = `${currentHour}:${currentMinute}`;

      // 过滤：只保留开始时间晚于当前时间的 slot
      // 假设 slot 格式为 "08:30 - 09:20"，我们取前5位 "08:30" 进行比较
      availableSlots = availableSlots.filter(slot => {
        const startTime = slot.split(' - ')[0]; // 取出 "08:30"
        return startTime > currentTimeStr; // 字符串比较 "09:30" > "08:30" 是有效的
      });
    }

    return { success: true, data: availableSlots.sort() };

  } catch (error) {
    console.error("计算可用时间失败:", error);
    return { success: false, data: [] };
  }
}

// app/actions.ts

// 获取咨询师的预约列表 (含学生档案 + 测评结果)
export async function getCounselorAppointments(counselorId: string) {
  try {
    const appointments = await prisma.appointment.findMany({
      where: { counselorId },
      orderBy: { date: 'desc' },
      include: {
        student: {
          select: { name: true, gender: true, phone: true, avatar: true }
        },
        // ✅ 关键：一定要把 testResult 查出来
        testResult: true 
      }
    });
    
    // 序列化返回值 (防止日期格式报错)
    return appointments.map(apt => ({
      ...apt,
      date: apt.date.toISOString(),
      createdAt: apt.createdAt.toISOString(),
      testResult: apt.testResult ? {
        ...apt.testResult,
        createdAt: apt.testResult.createdAt.toISOString()
      } : null
    }));
  } catch (error) {
    console.error("获取咨询师预约失败:", error);
    return [];
  }
}
