import { User } from '@users/entities/user.entity';
import { Expose, Transform } from 'class-transformer';

export class ContactResponseDto {
  @Expose()
  primaryPhoneNumber: string;

  @Expose()
  secondaryPhoneNumber;

  @Expose()
  fullName: string;

  @Expose()
  personalEmail: string;

  @Expose()
  workEmail: string;

  @Expose()
  nickName: string;

  @Expose()
  namePrefix: string;

  @Transform(({ value }) => value.user.id)
  userId: User;

  @Expose()
  profilePicture: string;

  @Expose()
  uuid: string;
}
