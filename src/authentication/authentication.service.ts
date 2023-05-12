import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUser, LoginUser } from './dto/input-auth.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthenticationService {
    private readonly bcryptRound: number
    constructor(private prismaService: PrismaService){
        this.bcryptRound = parseInt(process.env['BCRYPT_SALT_ROUND']) || 10
    }

    async registerUser(authDto: CreateUser){
        const hashPassword = bcrypt.hashSync(authDto.password, this.bcryptRound);
        
        return await this.prismaService.user.create({
            data: {
                email: authDto.email,
                password: hashPassword
            }
        })
    }

    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.prismaService.user.findFirst({
            where:{
                email,
            }
        })

        if (!user){
            return null;
        }

        const isPasswordMatch: boolean = bcrypt.compareSync(password, user.password)
        if (!isPasswordMatch){
            return null;
        }

        return user;
    }
}
