import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(name: string, email: string, password: string): Promise<User> {
    const newUser = this.userRepository.create({ name, email, password });
    return await this.userRepository.save(newUser);
  }

  async getUserById(id: number): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  async updateUser(id: number, name: string, email: string, password: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (user) {
      user.name = name;
      user.email = email;
      user.password = password;
      return await this.userRepository.save(user);
    }
    return null;
  }
}
