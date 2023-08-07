import { Transform, Type } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsAlpha,
  IsArray,
  Min,
  Max,
  IsEnum,
  IsBoolean,
  IsDateString,
  IsDate,
} from 'class-validator';
import { scoutRole } from './enum';

export class ScoutDto {
  @IsNotEmpty()
  @IsAlpha()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  phoneNo: number;

  @IsInt()
  @Min(15)
  @Max(60)
  age: number;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  @Type(() => Date)
  dateOfBirth: Date;

  @IsDateString()
  dateOfJoin:Date;

  @IsArray()
  @IsString({ each: true })
  qualification: string[];

  @IsEnum(scoutRole)
  role: scoutRole;

  @IsBoolean()
  trained: boolean;
}
