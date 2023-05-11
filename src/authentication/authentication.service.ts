import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUser } from './dto/input-auth.dto';

@Injectable()
export class AuthenticationService {
    private readonly bcryptRound: number
    constructor(private readonly prismaService: PrismaService){
        this.bcryptRound = parseInt(process.env['BCRYPT_SALT_ROUND']) || 10
    }

    registerUser(authDto: CreateUser){
        const hashPassword = bcrypt.hashSync(authDto.password, this.bcryptRound);
        return `Successfully registered ${authDto.email} and ${hashPassword}.`
    }
}
