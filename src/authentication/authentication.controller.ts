import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUser } from './dto/input-auth.dto';

@Controller('auth')
export class AuthenticationController {
    constructor(private authService: AuthenticationService){}

    @Post('register')
    registerUser(@Body() authDto: CreateUser){
        return this.authService.registerUser(authDto);
    }
}
