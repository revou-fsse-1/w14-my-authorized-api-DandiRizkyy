import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUser, LoginUser } from './dto/input-auth.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthenticationController {
    constructor(private authService: AuthenticationService){}

    // register user
    @Post('register')
    async registerUser(@Body() authDto: CreateUser){
        return await this.authService.registerUser(authDto);
    }

    // login
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async loginUser(@Body() authDto: LoginUser){
        console.log(`${authDto.email} is logging in`)
    }
}
