import { ICreateUser, ILoginData } from '../types/IUser';
import { JwtService, jwtService } from './jwt.service';
import { userService, UserService } from './user.service';
import bcrypt from 'bcrypt';

export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async logIn({ email, password }: ILoginData) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new Error('user not found');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error('wrong password');
    }

    return this.jwtService.createTokens(user.id.toString());
  }

  async register(userData: ICreateUser) {
    const { password, name, email } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userService.createUser({
      name,
      email,
      password: hashedPassword,
    });

    return this.jwtService.createTokens(user.id.toString());
  }
}

export const authService = new AuthService(userService, jwtService);
