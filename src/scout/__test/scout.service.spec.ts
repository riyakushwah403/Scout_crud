import { Test, TestingModule } from '@nestjs/testing';
import { ScoutService } from 'src/scout/scout.service';

describe('EmployeesService', () => {
  let service: ScoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScoutService],
    }).compile();

    service = module.get<ScoutService>(ScoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
