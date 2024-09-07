import { Request, Response } from 'express';
import { userService } from '../services';

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
  const { name, email, password } = req.body;
  const user = await userService.createUser({ name, email, password });
  res.send(user);
};
