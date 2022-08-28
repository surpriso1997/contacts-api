import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserDto } from '@users/dto/user.dto';
import { Anon } from 'src/common/decorators/public';
import { Serialize } from 'src/common/interceptors/serializer';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('/')
@Serialize(UserDto)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Anon()
  @Post('signin')
  login(@Body() body: LoginDto) {
    const user = this.authService.login(body);
    return user;
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
      console.log(e);
      throw new BadRequestException();
    }
  }
  //   forgotPassword() {}
}
