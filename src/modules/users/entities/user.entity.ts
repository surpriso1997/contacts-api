import { Contact } from '@contacts/entities/contact.entity';
import { Exclude } from 'class-transformer';
import { Role } from 'src/common/utils/roles';
import {
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ default: Role.user })
  role: string;

  @Column({ unique: true })
  phoneNumber: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}
