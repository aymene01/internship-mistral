import 'server-only';

import { PrismaClient } from '@prisma/client';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('Missing DATABASE_URL environment variable.');
}

declare global {
  // eslint-disable-next-line no-var, vars-on-top
  var cachedPrisma: PrismaClient | undefined;
}

if (!global.cachedPrisma) {
  global.cachedPrisma = new PrismaClient();
}

export const database = global.cachedPrisma;