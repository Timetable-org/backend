import { ICreateUser, ILoginData } from '../types/IUser';
import { userService, UserService } from './user.service';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';

export class AuthService {
  constructor(private userService: UserService) {}

  async logIn({ email, password, name }: ILoginData) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new Error('user not found');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error('wrong password');
    }

    const accessToken = jwt.sign(
      { name, email },
      process.env.ACCESS_TOKEN_SECRET as Secret,
      { expiresIn: '10m' },
    );

    const refreshToken = jwt.sign(
      { name, email },
      process.env.REFRESH_TOKEN_SECRET as Secret,
      { expiresIn: '2h' },
    );

    return { accessToken, refreshToken };
  }

  async register(userData: ICreateUser) {
    const { password, name, email } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.userService.createUser({
      name,
      email,
      password: hashedPassword,
    });

    const accessToken = jwt.sign(
      { name, email },
      process.env.ACCESS_TOKEN_SECRET as Secret,
      { expiresIn: '10m' },
    );

    const refreshToken = jwt.sign(
      { name, email },
      process.env.REFRESH_TOKEN_SECRET as Secret,
      { expiresIn: '2h' },
    );

    return { accessToken, refreshToken };
  }
}

export const authService = new AuthService(userService);
