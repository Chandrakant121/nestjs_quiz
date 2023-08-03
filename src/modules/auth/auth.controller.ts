import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
// import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req): Promise<any> {
    // const { email, password } = req.body
    // return { email, password }
    return this.authService.generateToken(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  async user(@Request() req) {
    return req.user
  }
}
