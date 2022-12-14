import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from '@auth/dto/signup.dto';
import { UsersService } from '@users/users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';

import { promisify } from 'util';
import { JwtService } from '@nestjs/jwt';

const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(body: LoginDto) {
    const { email = null, password, phoneNumber = null } = body;
    const user = await this.userService.findWithFilters({ email, phoneNumber });

    if (!user) {
      throw new BadRequestException('user not found');
    }

    const [salt, storedHash] = user.password.split('.');

    /// generate hash of the user password
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('username of password is wrong');
    }

    const accessToken = this.createJwtToken({
      userId: user.id,
      uuid: user.uuid,
    });

    return { ...user, accessToken };
  }

  async signup(body: SignUpDto) {
    console.log(body);

    const { email, password, phoneNumber } = body;

    const user = await this.userService.findWithFilters({
      email: email,
      phoneNumber: phoneNumber,
    });

    if (user) {
      throw new BadRequestException(
        `user with ${body.phoneNumber} or ${body.email} already exists`,
      );
    }

    /// gen hash
    const salt = randomBytes(16).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const hashedPass = salt + '.' + hash.toString('hex');

    return this.userService.create({
      email,
      password: hashedPass,
      phoneNumber,
    });
  }

  private createJwtToken(payload: jwtPayloadArgs) {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }
}

interface jwtPayloadArgs {
  userId: number;
  uuid: string;
}
