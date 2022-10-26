import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // criar
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(@Body() req: CreateUserDTO) {
    return this.usersService.create();
  }
  // listar todos
  // listar um
  // atualizar
  // deletar
}
