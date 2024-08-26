import { PrismaClient } from '@prisma/client';
import { IUserRepository } from './IUserRepository';
import { ICreateUser, IUser } from '../../types/IUser';

export class PrismaUserRepository implements IUserRepository {
  private repository: PrismaClient['user'];
  constructor(user: PrismaClient['user']) {
    this.repository = user;
  }

  async getUsers(): Promise<IUser[]> {
    return await this.repository.findMany();
  }
  async getUser(id: number): Promise<IUser | null> {
    // todo: find || get unless throw an error;

    return await this.repository.findUnique({
      where: {
        id,
      },
    });
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    // todo: find || get unless throw an error;
    return await this.repository.findUnique({
      where: {
        email,
      },
    });
  }
  async createUser({ name, email }: ICreateUser): Promise<IUser> {
    return await this.repository.create({
      data: { name, email },
    });
  }
}
