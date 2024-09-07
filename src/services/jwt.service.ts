import jwt, { Secret } from 'jsonwebtoken';

export class JwtService {
  private createToken(id: string, secret: string, expiresIn: string) {
    const token = jwt.sign({ id }, secret as Secret, { expiresIn });
    return token;
  }

  createAccessToken(id: string) {
    return this.createToken(
      id,
      process.env.ACCESS_TOKEN_SECRET as string,
      '20m',
    );
  }

  createRefreshToken(id: string) {
    return this.createToken(
      id,
      process.env.REFRESH_TOKEN_SECRET as string,
      '7d',
    );
  }

  createTokens(id: string) {
    const accessToken = this.createAccessToken(id);
    const refreshToken = this.createRefreshToken(id);

    return { accessToken, refreshToken };
  }
}

export const jwtService = new JwtService();
