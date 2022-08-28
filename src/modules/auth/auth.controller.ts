import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserDto } from '@users/dto/user.dto';
import { Anon } from 'src/common/decorators/public';
import { Serialize } from 'src/common/interceptors/serializer';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoginResponse } from './dto/login.response.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('/')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Anon()
  @Serialize(LoginResponse)
  @Post('signin')
  async login(@Body() body: LoginDto) {
    const res = await this.authService.login(body);
    return res;
  }

  @Anon()
  @Post('signup')
  signup(@Body() body: SignUpDto) {
    const { email, phoneNumber } = body;

    if (!email && !phoneNumber) {
      throw new BadRequestException('email or phoneNumber is required');
    }

    try {
      const user = this.authService.signup(body);
      return user;
    } catch (e) {
      throw new BadRequestException();
    }
  }
  //   forgotPassword() {}
}
