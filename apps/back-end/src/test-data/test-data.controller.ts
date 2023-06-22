import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TestDataService } from './test-data.service';
import { TestDataDto } from './dtos/test-data';

@Controller('test-data')
export class TestDataController {
  constructor(private testDataService: TestDataService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testDataService.findOne(parseInt(id));
  }
  @Get()
  findAll() {
    return this.testDataService.findAll();
  }
  @Post()
  insertOne(@Body() body: TestDataDto) {
    return this.testDataService.insertOne(body);
  }
}
