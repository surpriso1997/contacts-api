import { IsEmail, IsPhoneNumber, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  @IsString()
  password: string;

  @IsPhoneNumber()
  phoneNumber: string;
}
