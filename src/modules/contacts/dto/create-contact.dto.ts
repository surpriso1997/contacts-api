import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateContactDto {
  @IsPhoneNumber()
  primaryPhoneNumber: string;
  @IsOptional()
  @IsPhoneNumber()
  secondaryPhoneNumber;

  @IsString()
  fullName: string;

  @IsOptional()
  @IsEmail()
  personalEmail: string;

  @IsOptional()
  @IsEmail()
  workEmail: string;

  @IsOptional()
  @IsString()
  nickname: string;

  @IsOptional()
  namePrefix: string;

  @IsNumber()
  @IsPositive()
  userId: number;
}
