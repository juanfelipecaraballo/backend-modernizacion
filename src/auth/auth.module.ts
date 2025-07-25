import { Module } from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {UsersModule} from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy} from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule, 
    JwtModule.register({
      secret: 'jwt-secret-key',
      signOptions: {expiresIn: '1h'},
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
