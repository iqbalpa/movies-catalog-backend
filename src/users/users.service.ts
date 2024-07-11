import { Injectable, Request } from '@nestjs/common';
import { User } from '@prisma/client';
import prisma from 'src/utils/prisma/prisma';
import { CreateUserRequestDto } from './dto/create-user.dto';
import { PasswordHelper } from 'src/utils/hash/password-hash.helper';

@Injectable()
export class UsersService {
  async create(dto: CreateUserRequestDto): Promise<User> {
    const hashedPassword: string = await PasswordHelper.hash(dto.password);
    const user: User = await prisma.user.create({
      data: {
        ...dto,
        password: hashedPassword,
      },
    });
    user.password = '';
    return user;
  }

  async findOne(email: string): Promise<User | null> {
    const user: User | null = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  async getUsersCount(): Promise<number> {
    const count: number = await prisma.user.count();
    return count;
  }

  async getAll(): Promise<User[]> {
    const users: User[] = await prisma.user.findMany({});
    return users.map((user) => {
      user.password = '';
      return user;
    });
  }

  async getUserWithPagination(skip: number, take: number): Promise<User[]> {
    const users: User[] = await prisma.user.findMany({
      skip,
      take,
    });
    return users.map((user) => {
      user.password = '';
      return user;
    });
  }

  async getUserById(id: string): Promise<User | null> {
    const idInt: number = parseInt(id);
    const user: User = await prisma.user.findUnique({
      where: { id: idInt },
    });
    user.password = '';
    return user;
  }

  async updateUser(@Request() request, name: string): Promise<User> {
    const user = request['user'];
    const updated = await prisma.user.update({
      where: { email: user.email },
      data: { name: name },
    });
    updated.password = '';
    return updated;
  }

  async deleteUser(@Request() request): Promise<User> {
    const user = request['user'];
    const deleted = await prisma.user.delete({
      where: { email: user.email },
    });
    deleted.password = '';
    return deleted;
  }
}
