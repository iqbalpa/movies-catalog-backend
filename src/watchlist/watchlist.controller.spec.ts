import { Test, TestingModule } from '@nestjs/testing';
import { WatchlistController } from './watchlist.controller';

describe('WatchlistController', () => {
  let controller: WatchlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatchlistController],
    }).compile();

    controller = module.get<WatchlistController>(WatchlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
