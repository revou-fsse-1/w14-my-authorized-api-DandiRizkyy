import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateUser{
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    password: string
}