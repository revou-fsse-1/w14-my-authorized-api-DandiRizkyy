import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class PatchProduct{
    @IsString()
    @IsOptional()
    title: string

    @IsString()
    @IsOptional()
    description: string

    @IsString()
    @IsOptional()
    category: string

    @IsNumber()
    @IsOptional()
    userId: number
}