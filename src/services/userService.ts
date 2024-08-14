import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UserService {
  getUsers() {
    return prisma.user.findMany();
  }

  getUser(id: number) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  createUser(name: string, email: string) {
    return prisma.user.create({
      data: { name, email },
    });
  }
}

export const userService = new UserService();
