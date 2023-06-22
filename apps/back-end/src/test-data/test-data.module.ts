import { Module } from '@nestjs/common';
import { TestDataController } from './test-data.controller';
import { TestDataService } from './test-data.service';
import { PrismaService } from '../app/prisma.service';

@Module({
  imports: [],
  controllers: [TestDataController],
  providers: [PrismaService, TestDataService],
})
export class TestDataModule {}
