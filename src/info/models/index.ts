import { UpdateInfoRequest as UpdateInfoRequestInterface } from '../interfaces';
import { UpdateUserInfoRequest as UpdateUserInfoRequestInterface } from '../interfaces';

import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class UpdateInfoRequest implements UpdateInfoRequestInterface {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
}

export class UpdateUserInfoRequest implements UpdateUserInfoRequestInterface {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(150)
  age: number;

  @IsBoolean()
  @ValidateIf((o, value) => value !== undefined)
  married?: boolean;

  @IsNotEmpty()
  @IsDateString()
  birthdate: string;
}
