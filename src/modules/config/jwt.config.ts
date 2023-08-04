import { JwtModuleAsyncOptions } from "@nestjs/jwt";
import appConfig from "./app.config";

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: appConfig().appSecrete,
      signOptions: { expiresIn: '1d' }
    }
  }
}