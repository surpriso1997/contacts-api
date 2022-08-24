import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty()
  @IsPhoneNumber()
  primaryPhoneNumber: string;

  @ApiProperty()
  @IsOptional()
  @IsPhoneNumber()
  secondaryPhoneNumber;

  @ApiProperty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  personalEmail: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  workEmail: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  nickname: string;

  @ApiProperty()
  @IsOptional()
  namePrefix: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  userId: number;
}
