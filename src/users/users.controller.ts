import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get() // GET /users
  getAllUsers(@Query('role') role?: 'INTERN' | 'ADMIN' | 'CONTRIBUTOR') {
    return this.userService.findAll(role);
  }

  @Get(':id') // GET /users/:id
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUserById(id);
  }

  @Post() // POST /users
  createUser(@Body(ValidationPipe) createUserDto: Prisma.UserCreateInput) {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':id') // PATCH /users/:id
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
