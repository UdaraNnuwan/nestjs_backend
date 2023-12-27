import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    username: string;

    @IsNotEmpty()
    @MinLength(10)
    password:string
}