import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignUpRequestDto } from './dto/signup.dto';
import { User } from '@prisma/client';
import { PasswordHelper } from 'src/utils/hash/password-hash.helper';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(dto: SignUpRequestDto): Promise<User> {
    return this.usersService.create(dto);
  }

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    // user not found
    const user: User | null = await this.usersService.findOne(email);
    if (!user) {
      throw new UnauthorizedException();
    }

    // password invalid
    const isMatch: boolean = await PasswordHelper.comparePassword(
      password,
      user.password,
    );
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    // jwt signing
    user.password = '';
    const payload = {
      user: user,
    };
    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }
}
