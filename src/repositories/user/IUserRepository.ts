import { ICreateUser, IUser } from '../../types/IUser';

export interface IUserRepository {
  getUsers(): Promise<IUser[]>;
  getUser(id: number): Promise<IUser | null>;
  getUserByEmail(email: string): Promise<IUser | null>;
  createUser(userData: ICreateUser): Promise<IUser>;
}
