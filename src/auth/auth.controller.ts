import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('/login')
  login(@Body() loginDtO: any) {
    return loginDtO;
  }
}
