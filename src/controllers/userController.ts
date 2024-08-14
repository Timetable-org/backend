import { Request, Response } from 'express';
import { UserService } from '../services';

interface CreateUserBody {
  name: string;
  email: string;
}

const service = new UserService();

export const getUsers = async (req: Request, res: Response) => {
  const users = await service.getUsers();
  res.status(201);
  res.send(users);
};

export const getUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = await service.getUser(userId);
  res.status(201);
  res.send(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = <CreateUserBody>req.body;
  const user = await service.createUser(name, email);
  res.send(user);
};
