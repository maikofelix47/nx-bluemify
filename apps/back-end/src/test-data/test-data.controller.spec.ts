import { Test, TestingModule } from '@nestjs/testing';
import { TestDataController } from './test-data.controller';

describe('TestDataController', () => {
  let controller: TestDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestDataController],
    }).compile();

    controller = module.get<TestDataController>(TestDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
