import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

const connectionString = process.env.DATABASE_URL!
const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool as any); // eslint-disable-line @typescript-eslint/no-explicit-any

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter } as any); // eslint-disable-line @typescript-eslint/no-explicit-any

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
