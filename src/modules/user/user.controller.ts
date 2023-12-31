import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegistrationDto } from '../dto/user-register.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/register')
  async userRegistration(@Body(ValidationPipe) userRegister: UserRegistrationDto) {
    return await this.userService.userRegistration(userRegister)
  }
}
