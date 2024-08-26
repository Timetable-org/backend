import prisma from '../../lib/prisma';
import { IUserRepository } from './IUserRepository';
import { PrismaUserRepository } from './PrismaUserRepository';

export class UserRepositoryFactory {
  static create(): IUserRepository {
    switch (process.env.ORM_TYPE) {
      case 'prisma':
        return new PrismaUserRepository(prisma.user);

      default:
        throw new Error('Unknown repository type');
    }
  }
}
