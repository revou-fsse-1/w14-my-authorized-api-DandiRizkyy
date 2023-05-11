import { Body, Controller, ForbiddenException, Get, Post } from '@nestjs/common';
import * as argon from 'argon2';
import * as bcrypt from 'bcrypt';
import { UserInput } from './dto/user-input.dto';
import { error } from 'console';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    async createUser(@Body() userDto: UserInput){
        return this.userService.createUser(userDto);
        // const hashPassword = await argon.hash(userDto.password);

        // try{
        //     return this.prisma.user.create({
        //         data: {
        //             name: userDto.name,
        //             email: userDto.email,
        //             password: hashPassword,
        //         }
        //     })
        // }
        // catch{error}{
        //     if (error instanceof PrismaClientKnownRequestError) {
        //         if (error.code === 'P2002') {
        //           throw new ForbiddenException('Credential already taken');
        //         }
        //       }
        //       throw error;
        // }
    }

    @Get()
    async getAllUsers(){
        return await this.userService.getAllUsers();
    }
}
