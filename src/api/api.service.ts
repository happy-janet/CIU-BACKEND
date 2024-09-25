import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ApiService {
  constructor(private readonly prisma: PrismaService) {}

  // Method to get all users
  async getAllUsers() {
    const users = await this.prisma.user.findMany(); // Use the actual model name 'user'
    return users;
  }

  // Method to create a new user
  async createUser(data: { name: string; email: string; age: number }) {
    return await this.prisma.user.create({
      data, // Ensure this matches the fields in your User model
    });
  }

  // Additional methods can be added here...
}
