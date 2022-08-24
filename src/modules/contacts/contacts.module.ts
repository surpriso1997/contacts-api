import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { UsersModule } from '@users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Contact]), UsersModule],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
