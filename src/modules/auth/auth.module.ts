import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { LocalStrategy } from './strategy/local.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStratey } from './strategy/jwt.strategy';
import { jwtConfig } from '../config/jwt.config';

@Module({
    imports: [UserModule, PassportModule, JwtModule.registerAsync(jwtConfig)],
    controllers: [AuthController,],
    providers: [AuthService, LocalStrategy,JwtStratey],
})

export class AuthModule { }
