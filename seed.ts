import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 开始生成指定用户数据...')

  // 1. 创建学生：张键
  const student = await prisma.user.upsert({
    where: { username: '2023051604093' },
    update: {},
    create: {
      username: '2023051604093', // 学号作为账号
      password: '123456',
      name: '张键',
      role: 'student',
      college: '计算机学院', // 默认学院，可自行修改
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZhangJian',
    },
  })
  console.log(`✅ 学生创建成功: ${student.name} (账号: 2023051604093)`)

  // 2. 创建管理员：张慧芝
  const admin = await prisma.user.upsert({
    where: { username: '2023051604088' },
    update: {},
    create: {
      username: '2023051604088',
      password: '123456',
      name: '张慧芝',
      role: 'admin', // 管理员角色
      college: '行政管理中心',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZhangHuizhi',
    },
  })
  console.log(`✅ 管理员创建成功: ${admin.name} (账号: 2023051604088)`)

  // 3. 创建咨询师 (账号: 2023051604085)
  const counselor = await prisma.user.upsert({
    where: { username: '2023051604085' },
    update: {},
    create: {
      username: '2023051604085',
      password: '123456',
      name: '心理咨询师', // 既然没提供具体名字，暂时叫这个
      role: 'counselor',
      college: '心理健康教育中心',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Doctor',
    },
  })
  console.log(`✅ 咨询师创建成功: ${counselor.name} (账号: 2023051604085)`)

  // 4. 给这位咨询师自动生成排班 (否则学生没法预约他)
  await prisma.schedule.deleteMany({ where: { counselorId: counselor.id } }); // 先清空旧排班防止冲突
  await prisma.schedule.createMany({
    data: [
      { counselorId: counselor.id, dayOfWeek: 1, timeSlot: '09:00-10:00' }, // 周一
      { counselorId: counselor.id, dayOfWeek: 1, timeSlot: '14:00-15:00' },
      { counselorId: counselor.id, dayOfWeek: 2, timeSlot: '10:00-11:00' }, // 周二
      { counselorId: counselor.id, dayOfWeek: 3, timeSlot: '09:00-10:00' }, // 周三
      { counselorId: counselor.id, dayOfWeek: 4, timeSlot: '15:00-16:00' }, // 周四
      { counselorId: counselor.id, dayOfWeek: 5, timeSlot: '10:00-11:00' }, // 周五
    ],
    skipDuplicates: true,
  })
  console.log('📅 已为咨询师生成排班数据')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })