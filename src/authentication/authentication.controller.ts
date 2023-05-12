import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUser, LoginUser } from './dto/input-auth.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthenticatedGuard } from './authenticated.guard';

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
        return `Login Successfully.`
    }

    // logout
    @UseGuards(AuthenticatedGuard)
    @Post('logout')
    logoutUser(@Request() req){
        req.session.destroy();
        return `Logout Successfully.`
    }
}
