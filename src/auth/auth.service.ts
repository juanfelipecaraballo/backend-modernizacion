import { Injectable } from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ){}

    async register(username: string, password: string){
        const user = await this.usersService.create(username, password);
        return {id: user.id, username: user.username};
    }

    async login(username: string, password: string){
        const user = await this.usersService.validateUser(username, password);
        if(!user) return null;
        const payload = {username: user.username, sub: user.id};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
