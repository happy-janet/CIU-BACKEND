import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  // Endpoint to get all users
  @Get('users')
  async getUsers() {
    return await this.apiService.getAllUsers(); // Call the service method
  }

  // Endpoint to create a new user
  @Post('users')
  async createUser(@Body() userData: { name: string; email: string; age: number }) {
    return await this.apiService.createUser(userData); // Call the service method
  }
}
