// lib/db.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // 会在终端显示 SQL 查询语句，方便调试
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;