import { Injectable, Request } from '@nestjs/common';
import { Movie, User } from '@prisma/client';
import prisma from 'src/utils/prisma/prisma';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  async getAll(): Promise<Movie[]> {
    const movies: Movie[] = await prisma.movie.findMany();
    return movies;
  }

  async createMovie(@Request() request, dto: CreateMovieDto): Promise<Movie> {
    const user = request['user'];
    const movie: Movie = await prisma.movie.create({
      data: {
        ...dto,
        userId: user.id,
      },
    });
    return movie;
  }
}
