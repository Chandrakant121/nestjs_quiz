import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService,
    private readonly jwtService: JwtService) { }

  async validateUserCreds(email: string, password: string): Promise<any> {

    const user = await this.userService.getUserByEmail(email)
    // console.log({ "auth service user": user })

    if (!user) {
      throw new BadRequestException("Invalid credentials")
    }

    const isMatch = await bcrypt.compare(password, user.password)


    if (!isMatch) {
      throw new UnauthorizedException("Invalid credentials")
    }

    return user
  }

  generateToken(user: any) {
    return {
      access_token: this.jwtService.sign({
        name: user.name,
        sub: user.id,
        email: user.email
      })
    }
  }
}
