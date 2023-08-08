import { Transform, Type } from 'class-transformer';
import { ApiProperty ,ApiPropertyOptional} from '@nestjs/swagger'; 

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
import { scoutRole } from '../Enum/enum';

export class ScoutDto {
  
  @IsNotEmpty()
  @IsAlpha()
  @IsString()
  @ApiProperty({
    type: String,
    description: ' User name This is a required property',
    example: 'Riya'
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    type: String,
    description: ' User email This is a required property',
    example: 'riyakushwah@gmail.com'
  })
  email: string;

  @IsInt()
  @ApiProperty({
    type: Number,
    description:'user Phone no',
    example:'916265070258'
  })
  phoneNo: number;

  @IsInt()
  @Min(15)
  @Max(60)
  @ApiProperty({
    type:Number,
    description:'Users  Age ,Age is greater than 15 and less than 60',
    example:23
  })
  age: number;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  @Type(() => Date)
  @ApiProperty({
    type:Date,
    description:'date of birth DD/MM/YYYY',
    example:"14/08/2000"
    
  })
  dateOfBirth: Date;

  @IsDateString()
  @ApiPropertyOptional({
    type:Date,
    description:'it is optional failed'
  })
  dateOfJoin:Date;

  @IsArray()
  @ApiProperty({
    type:Array,
    description: 'user qualifiaction in string array',
    example:'["10th","12th"]'
  })
  @IsString({ each: true })
  qualification: string[];

  @IsEnum(scoutRole)
  @ApiProperty({
    type:String,
    description:'use only two values member and trainer',
    example:"trainer"
  })
  role: scoutRole;

  @IsBoolean()
  @ApiProperty({
    type:Boolean,
    description:'It accept boolean values True and False'
  })
  trained: boolean;

  
}
