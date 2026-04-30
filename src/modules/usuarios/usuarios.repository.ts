import { Injectable } from '@nestjs/common';
import { SoftDeleteRepository } from 'nest-prisma-soft-delete';
import { Usuario, Prisma } from '@prisma/client';
import { PrismaService } from 'src/plugins/database/services/prisma.service';

@Injectable()
export class UsersRepository extends SoftDeleteRepository<Usuario, Prisma.UsuarioWhereInput> {
  constructor(prisma: PrismaService) {
    super(prisma, 'Usuario', 'usuarios');
  }
}