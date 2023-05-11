import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdateProduct{
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    category: string
}