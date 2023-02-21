import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/get-hello')
  getHello() {
    return this.authService.getHello();
  }

  @Get('/token')
  getToken() {
    return this.authService.getToken();
  }
}
