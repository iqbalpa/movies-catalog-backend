import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from '@prisma/client';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async getAll(): Promise<Movie[]> {
    return this.moviesService.getAll();
  }

  @Post()
  async createMovie(
    @Request() request,
    @Body() dto: CreateMovieDto,
  ): Promise<Movie> {
    return this.moviesService.createMovie(dto, request);
  }
}
