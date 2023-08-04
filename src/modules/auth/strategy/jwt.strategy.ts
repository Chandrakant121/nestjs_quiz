import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import appConfig from "src/modules/config/app.config";


@Injectable()
export class JwtStratey extends PassportStrategy(Strategy) {
  constructor() {

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: appConfig().appSecrete
    })
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      name: payload.name,
      email: payload.email
    }
  }
}


