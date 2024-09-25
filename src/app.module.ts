import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { PrismaService } from './prisma/prisma.service'; // Import the PrismaService

@Module({
  imports: [],
  controllers: [AppController, ApiController],
  providers: [AppService, ApiService, PrismaService], // Add PrismaService here
})
export class AppModule {}
