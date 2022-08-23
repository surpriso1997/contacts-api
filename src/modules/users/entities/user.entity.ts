import { Exclude } from 'class-transformer';
import { Role } from 'src/common/utils/roles';
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ default: Role.user })
  role: string;

  @Column()
  phoneNumber: string;
}
