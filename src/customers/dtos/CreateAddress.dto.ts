import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateAddressDto {

  @IsNumber()
  no: number;

  @IsNotEmpty()
  line1:string;

  line2:string;

  @IsNotEmpty()
  zip:string
  }