import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) =>
  res.send('get all users');

export const getUser = (req: Request, res: Response) => res.send('get user');

export const createUser = (req: Request, res: Response) =>
  res.send('create a users');
