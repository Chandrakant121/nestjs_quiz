import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
// import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { ApiTags, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { UserLoginDto } from '../dto/login.dto';
@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiOkResponse({ description: 'Successfully logged in and generated token' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized: Invalid credentials' })
  async login(@Request() req:UserLoginDto): Promise<any> {
    return this.authService.generateToken(req)
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  @ApiOkResponse({ description: 'Successfully retrieved user information from token' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized: Invalid or missing token' })
  async user(@Request() req) {
    return req.user
  }
}
