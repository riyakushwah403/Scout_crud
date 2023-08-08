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
import { ApiProperty } from '@nestjs/swagger';

export class UpdateScoutDto {
  @IsOptional()
  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Name Of The scout',
    required: false,
    example: 'riyaa',
  })
  name?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({
    description: 'Emai Of The scout',
    required: false,
    example: 'xyz@gmail.com',
  })
  email?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({
    description: 'PhoneNo Of The scout',
    required: false,
    example: '917436756435',
  })
  phoneNo?: number;

  @IsOptional()
  @IsInt()
  @Min(15)
  @Max(60)
  @ApiProperty({
    description: 'age Of the scout',
    example: 24,
  })
  age?: number;

  // @IsDate()
  // dateOfBirth?: Date
}
