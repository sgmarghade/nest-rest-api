import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get() // GET /users
  getAllUsers(@Query('role') role?: string) {
    return this.userService.findAll(role);
  }

  @Get(':id') // GET /users/:id
  getUserById(@Param('id') id: string): {} {
    return this.userService.findUserById(+id);
  }

  @Post() // POST /users
  createUser(@Body() user: { name: string; email: string; role: string }) {
    return this.userService.createUser(user);
  }

  @Patch(':id') // PATCH /users/:id
  updateUserById(
    @Param('id') id: string,
    @Body() userUpdate: { name?: string; email?: string; role?: string },
  ): {} {
    return this.userService.updateUser(+id, userUpdate);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string): string {
    return this.userService.deleteUser(+id);
  }
}
