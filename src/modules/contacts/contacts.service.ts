import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '@users/users.service';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact) private repo: Repository<Contact>,
    private userService: UsersService,
  ) {}

  async create(createContactDto: CreateContactDto) {
    const { userId } = createContactDto;
    const user = await this.userService.findOne(userId);

    if (!user) {
      throw new BadRequestException('user not found');
    }

    const contact = this.repo.create({ ...createContactDto });
    contact.user = user;

    return this.repo.save(contact);
  }

  async findAll(): Promise<Contact[]> {
    return await this.repo.find();
  }

  findOne(id: number) {
    if (!id) {
      throw new BadRequestException();
    }
    return this.repo.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateContactDto: Partial<CreateContactDto>,
  ): Promise<Contact> {
    const contact = await this.findOne(id);

    if (!contact) {
      throw new BadRequestException('Contact not found');
    }

    Object.assign(contact, updateContactDto);

    return await this.repo.save(contact);
  }

  async remove(id: number) {
    const contact = await this.findOne(id);

    if (!contact) {
      throw new BadRequestException('Contact not found');
    }

    return this.repo.remove(contact);
  }
}
