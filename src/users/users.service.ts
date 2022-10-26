import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  async create(): Promise<string> {
    return 'Usuário criado com sucesso!';
  }
  async findAll(): Promise<string> {
    return 'Lista de usuários!';
  }

  async findOne(id: number): Promise<string> {
    return `Usuário ${id}!`;
  }
}
