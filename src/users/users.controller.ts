import { Body, Controller, ParseUUIDPipe, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
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
  // listar todos localhost:3000/users
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  // listar um localost:3000/users/1
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: number) {
    return this.usersService.findOne(id);
  }
  // atualizar
  // deletar
}
