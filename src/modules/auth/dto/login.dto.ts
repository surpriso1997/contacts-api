import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @IsPhoneNumber()
  @IsString()
  phoneNumber?: string;

  @IsEmail()
  email?: string;

  @IsEmail()
  @MinLength(5)
  @MaxLength(20)
  password: string;
}
