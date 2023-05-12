import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserInput } from './dto/user-input.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { error } from 'console';
import * as argon from 'argon2';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async getAllUsers(){
        return await this.prisma.user.findMany({
            select: {
                id: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            }
        })
    }
    
}
