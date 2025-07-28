import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(@Body() body: any){
        return this.authService.register({
            username: body.username,
            password: body.password,
            idNumber: body.idNumber,
            name: body.name,
            last: body.last,
            address: body.address,
            phone: body.phone,
            salary: body.salary,
            roleId: body.roleId,
        });
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
