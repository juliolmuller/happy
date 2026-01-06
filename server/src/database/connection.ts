import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient();

// Gracefully disconnect from the database when the process is terminated
['SIGINT', 'SIGTERM'].forEach((signal) => {
  process.on(signal, async () => {
    await prismaClient.$disconnect();
    process.exit(0);
  });
});
