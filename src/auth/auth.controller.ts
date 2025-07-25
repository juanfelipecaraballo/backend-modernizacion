import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(@Body() body: {username: string, password: string}){
        return this.authService.register(body.username, body.password);
    }

    @Post('login')
    async login(@Body() body: {username: string, password: string}){
        const token = await this.authService.login(body.username, body.password);
        if(!token){
            return { error: 'Credenciales inválidas' };
        }
        return token;
    }
}
