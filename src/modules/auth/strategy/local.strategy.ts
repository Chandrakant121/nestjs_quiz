import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) { super({ username: 'email' }) }
  //  by default it will take username and password if we want to custimize then we have to add obj in super.

  async validate(email: string, password: string) {
    const user = await this.authService.validateUserCreds(email, password)
    if (!user) {
      throw new UnauthorizedException("Invalid credentials")
    }
    return user
  }
}