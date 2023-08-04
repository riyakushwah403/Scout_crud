import {
  IsAlpha,
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class UpdatescoutDto {
  @IsOptional()
  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsInt()
  @Length(10, 10)
  phoneNo?: number;

  @IsOptional()
  @IsInt()
  @Min(15)
  @Max(60)
  age?: number;

  // @IsDate()
  // dateOfBirth?: Date
}
