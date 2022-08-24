import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@users/entities/user.entity';
import { SignUpDto } from '@auth/dto/signup.dto';

export interface findArgs {
  email?: string;
  phoneNumber?: string;
  id?: number;
}

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(body: SignUpDto) {
    const { email, password, phoneNumber } = body;

    const user = this.repo.create({ email, password, phoneNumber });

    return this.repo.save(user);
  }

  findAll() {
    return this.repo.find({
      take: 20,
    });
  }

  findOne(id: number) {
    if (!id) {
      throw new BadRequestException();
    }
    return this.repo.findOne({ where: { id } });
  }

  findWithFilters(args: findArgs) {
    if (!args) {
      throw new BadRequestException('bad paramerrts');
    }

    return this.repo.findOne({ where: { ...args } });
  }

  async update(id: number, updateUserDto: Partial<User>) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, updateUserDto);

    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.repo.remove(user);
  }
}
