import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { softDeleteExtension } from 'nest-prisma-soft-delete';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL as string,
    });
    super({ adapter });
    return this.$extends(
      softDeleteExtension({
        models: ['Usuario'], // ATENÇÃO: O nome deve ser em PascalCase, exatamente como definido no schema Prisma!
      }),
    ) as any;
  }
}
