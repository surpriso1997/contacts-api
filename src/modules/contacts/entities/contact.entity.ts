import { User } from '@users/entities/user.entity';
import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column()
  namePrefix: string;

  @Column()
  firstName: string;
  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  nickName: string;

  @Column()
  primaryPhoneNumber: string;

  @Column()
  secondaryPhoneNumber: string;

  @Column()
  personalEmail: string;

  @Column()
  workEmail: string;

  @Column()
  profilePicture: string;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}
