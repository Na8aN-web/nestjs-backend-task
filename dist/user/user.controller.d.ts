import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(name: string, email: string, password: string): Promise<import("./user.entity").User>;
    getUser(id: number): Promise<import("./user.entity").User>;
    updateUser(id: number, name: string, email: string, password: string): Promise<import("./user.entity").User>;
}
