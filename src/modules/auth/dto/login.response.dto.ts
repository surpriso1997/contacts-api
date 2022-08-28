import { UserDto } from '@users/dto/user.dto';
import { Expose } from 'class-transformer';

export class LoginResponse extends UserDto {
  // @Expose()
  // user: UserDto;
  @Expose()
  accessToken: string;
}
