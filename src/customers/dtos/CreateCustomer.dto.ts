import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, IsString, ValidateNested, isNumberString } from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  id: number;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(()=>CreateAddressDto)
  address:CreateAddressDto
}