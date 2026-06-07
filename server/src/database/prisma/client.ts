import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

import { DATABASE_URL } from './config';
import { PrismaClient } from './generated/client';

const adapter = new PrismaBetterSqlite3({
  url: DATABASE_URL,
});

const prismaClient = new PrismaClient({
  adapter,
  log: ['query', 'info', 'warn', 'error'],
});

export default prismaClient;
