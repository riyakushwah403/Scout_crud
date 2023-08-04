import { Test, TestingModule } from '@nestjs/testing';
import { ScoutController } from '../scout.controller';
import { scout } from 'src/scout/scout.interface';

describe('EmployeesController', () => {
  let controller: ScoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoutController],
    }).compile();

    controller = module.get<ScoutController>(ScoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
