import { PaginateService } from 'src/shared/services/paginate.service';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { UsersRepository } from './usuarios.repository';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, PaginateService, UsersRepository],
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  exports: [UsuariosService, UsersRepository],
})
export class UsuariosModule {}
