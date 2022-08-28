import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from '@users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthJwtStrategy } from './jwt/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthJwtStrategy, JwtService],
  imports: [UsersModule],
  exports: [AuthService, AuthJwtStrategy],
})
export class AuthModule {}
