import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async authLogin(@Body() req) {
    const { login, password } = req;
    console.log('Login: ', login);
    console.log('Senha: ', password);
    if (!login) {
      throw new HttpException('Login não informado', HttpStatus.BAD_REQUEST);
    }

    return this.authService.authLogin(login, password);
  }
}

//criamos uma rota chamada auth
//ela pega o localhost:3000
//rest API TRABALHA COM VERBOS OU AÇÕES
//OS VERBOS SÃO GET(TODOS)-POST(CADASTRADO)-PUT(ALTERAÇÃO)-DELETE(EXCLUSÃO)
//o GET sempre vem duas vezes , um getAll e um getOne
//SE TUDO DER CERTO, O RETORNO É SEMPRE 200//CADASTRO QUE GERA 201
//o post login pega o localhost:3000/auth/login
//e o body pega o login e a senha