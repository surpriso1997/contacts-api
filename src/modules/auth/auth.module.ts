import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from '@users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthJwt } from './jwt/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthJwt, JwtService],
  imports: [UsersModule],
  exports: [AuthService, AuthJwt],
})
export class AuthModule {}
