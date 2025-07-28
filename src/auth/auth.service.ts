import { Injectable } from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import { User } from '../users/user.entity';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ){}

    async register(userData: Partial<User>) {
        const user = await this.usersService.create(userData);
        return {id: user.userId, username: user.username};
    }

    async login(username: string, password: string){
        const user = await this.usersService.validateUser(username, password);
        if(!user) return null;
        const payload = {username: user.username, sub: user.userId};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
