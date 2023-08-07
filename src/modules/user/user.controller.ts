import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegistrationDto } from '../dto/user-register.dto';
import { ApiCreatedResponse, ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../entity/user.entity';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/register')
  @ApiCreatedResponse({ description: "Created User object as response", type: User })
  @ApiBadRequestResponse({ description: "User cannot register" })
  async userRegistration(@Body(ValidationPipe) userRegister: UserRegistrationDto) {
    return await this.userService.userRegistration(userRegister)
  }
}
