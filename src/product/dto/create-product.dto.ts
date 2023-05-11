import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProduct{
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    category: string

    @IsNumber()
    @IsNotEmpty()
    userId: number
}