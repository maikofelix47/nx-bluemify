import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { Test } from '@prisma/client';

@Injectable()
export class TestDataService {
  constructor(private prisma: PrismaService) {}
  findAll(): Promise<Test[]> {
    return this.prisma.test.findMany();
  }
  insertOne(data: { testData: string }): Promise<Test> {
    return this.prisma.test.create({
      data: {
        testData: data.testData,
      },
    });
  }
  findOne(id: number): Promise<Test> {
    return this.prisma.test.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }
}
