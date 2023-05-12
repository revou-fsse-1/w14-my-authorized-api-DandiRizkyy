import { Body, Controller, ForbiddenException, Get, Post, UseGuards } from '@nestjs/common';
import * as argon from 'argon2';
import * as bcrypt from 'bcrypt';
import { UserInput } from './dto/user-input.dto';
import { error } from 'console';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { UserService } from './user.service';
import { AuthenticatedGuard } from 'src/authentication/authenticated.guard';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @UseGuards(AuthenticatedGuard)
    @Get()
    async getAllUsers(){
        return await this.userService.getAllUsers();
    }
}
