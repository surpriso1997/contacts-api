import { IsEmail, IsPhoneNumber, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SignUpDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(6)
  @IsString()
  password: string;

  @ApiProperty()
  @IsPhoneNumber()
  phoneNumber: string;
}
