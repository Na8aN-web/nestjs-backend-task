import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(name: string, email: string, password: string): Promise<User>;
    getUserById(id: number): Promise<User>;
    updateUser(id: number, name: string, email: string, password: string): Promise<User>;
}
