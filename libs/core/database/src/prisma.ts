import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client';

const connectionString =
  process.env.DATABASE_URL ??
  'postgresql://socializ:socializ@localhost:5432/socializ';

const globalForPrisma = globalThis as typeof globalThis & {
  socializPrisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.socializPrisma ??
  new PrismaClient({
    adapter: new PrismaPg(connectionString),
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.socializPrisma = prisma;
}
