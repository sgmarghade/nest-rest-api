import { Body, Controller, Get, Param, Post, Patch, Delete, Query } from "@nestjs/common";
import { UsersService } from './users.service';

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UsersService) {
  }

  @Get() // GET /users
  getAllUsers(@Query('role') role?: string, @Query('age') age?: number): string[] {
    return this.userService.getAllUsers();
  }

  @Get(":id") // GET /users/:id
  getUserById(@Param("id") id: string): { id: string } {
    return {
      id
    };
  }

  @Post() // POST /users
  createUser(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  updateUserById(@Param("id") id: string, @Body() userUpdate: {}): {} {
    return {
      id,
      ...userUpdate
    };
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string): string {
      return 'Deleted';
  }
}
