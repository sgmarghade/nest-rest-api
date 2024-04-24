import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Swapnil',
      email: 'swapnil@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Pankaj',
      email: 'pankaj@gmail.com',
      role: 'CONTRIBUTOR',
    },
  ];

  findAll(role?: string): {} {
    return this.users.filter((input) => {
      return role ? input.role.toLowerCase() === role.toLowerCase() : input;
    });
  }

  findUserById(id: number) {
    return this.users.find((input) => {
      return input.id === id;
    });
  }

  createUser(user: { name: string; email: string; role: string }) {
    const newUser = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(
    id: number,
    user: { name?: string; email?: string; role?: string },
  ) {
    const existingUser = this.users.find((input) => {
      return input.id === id;
    });

    if (!user) {
      return;
    }

    user = { ...existingUser, ...user };
    return user;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((input) => input.id !== id);
    return 'User deleted';
  }
}
