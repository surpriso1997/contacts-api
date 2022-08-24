import { IsOptional, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  @IsOptional()
  phoneNumber?: string;

  @ApiProperty()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @MinLength(5)
  @MaxLength(20)
  password: string;
}
