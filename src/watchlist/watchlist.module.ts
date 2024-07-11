import { Module } from '@nestjs/common';
import { WatchlistController } from './watchlist.controller';
import { WatchlistService } from './watchlist.service';

@Module({
  controllers: [WatchlistController],
  providers: [WatchlistService]
})
export class WatchlistModule {}
