import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { WatchlistModule } from './watchlist/watchlist.module';

@Module({
  imports: [AuthModule, UsersModule, MoviesModule, WatchlistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
