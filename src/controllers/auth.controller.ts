import { Request, Response } from 'express';
import { authService } from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  const tokens = await authService.register(req.body);
  res.send(tokens);
};

export const logIn = async (req: Request, res: Response) => {
  const tokens = await authService.logIn(req.body);
  res.send(tokens);
};
