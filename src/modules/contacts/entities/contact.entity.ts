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

  @Column({ nullable: true })
  namePrefix: string;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  firstName: string;
  @Column({ nullable: true })
  middleName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  nickName: string;

  @Column()
  primaryPhoneNumber: string;

  @Column({ nullable: true })
  secondaryPhoneNumber: string;

  @Column({ nullable: true })
  personalEmail: string;

  @Column({ nullable: true })
  workEmail: string;

  @Column({ nullable: true })
  profilePicture: string;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}
