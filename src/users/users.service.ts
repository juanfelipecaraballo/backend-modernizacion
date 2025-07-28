import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { username } });
  }

  async create(userData: Partial<User>): Promise<User> {
    console.log('RECIBIDO DESDE POSTMAN:', userData);
    const user = this.userRepo.create(userData);
    return this.userRepo.save(user);
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.findByUsername(username);
    // Aquí agregarías bcrypt.compare()
    return user && user.password === password ? user : null;
  }
}
