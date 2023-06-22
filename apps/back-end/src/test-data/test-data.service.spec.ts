import { Test, TestingModule } from '@nestjs/testing';
import { TestDataService } from './test-data.service';

describe('TestDataService', () => {
  let service: TestDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestDataService],
    }).compile();

    service = module.get<TestDataService>(TestDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
