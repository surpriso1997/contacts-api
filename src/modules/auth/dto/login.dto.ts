import { IsOptional, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsOptional()
  phoneNumber?: string;

  @IsOptional()
  email?: string;

  @MinLength(5)
  @MaxLength(20)
  password: string;
}
