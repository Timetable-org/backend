import { ICreateUser, IUser } from '../types/IUser';
import { IUserRepository } from '../repositories/user/IUserRepository';

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async getUsers(): Promise<IUser[]> {
    return this.userRepository.getUsers();
  }

  async getUser(id: number): Promise<IUser | null> {
    return this.userRepository.getUser(id);
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    return this.userRepository.getUserByEmail(email);
  }

  async createUser(userData: ICreateUser): Promise<IUser> {
    return this.userRepository.createUser(userData);
  }
}
