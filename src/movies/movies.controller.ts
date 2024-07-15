import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from '@prisma/client';
import { CreateMovieDto } from './dto/create-movie.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async getAll(): Promise<Movie[]> {
    return this.moviesService.getAll();
  }

  @UseGuards(AuthGuard)
  @Post()
  async createMovie(
    @Request() request,
    @Body() dto: CreateMovieDto,
  ): Promise<Movie> {
    return this.moviesService.createMovie(request, dto);
  }

  @UseGuards(AuthGuard)
  @Get('watchlist')
  async getUserMovies(@Request() request): Promise<Movie[]> {
    return this.moviesService.getUserMovies(request);
  }

  @UseGuards(AuthGuard)
  @Delete('watchlist/:movieId')
  async deleteMovieFromWatchlist(
    @Request() request: Request,
    @Param('movieId', ParseIntPipe) movieId: number,
  ): Promise<Movie> {
    return this.moviesService.deleteMovieFromWatchlist(request, movieId);
  }
}
