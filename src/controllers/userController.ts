import { Request, Response } from 'express';
import { UserRepositoryFactory } from '../repositories/user/UserRepositoryFactory';

const userService = UserRepositoryFactory.create();

interface CreateUserBody {
  name: string;
  email: string;
}

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.status(201);
  res.send(users);
};

export const getUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = await userService.getUser(userId);
  res.status(201);
  res.send(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = <CreateUserBody>req.body;
  const user = await userService.createUser({ name, email });
  res.send(user);
};
