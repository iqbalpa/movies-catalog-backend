import { Injectable } from '@nestjs/common';
import { Movie } from '@prisma/client';
import prisma from 'src/utils/prisma/prisma';

@Injectable()
export class MoviesService {
  async getAll(): Promise<Movie[]> {
    const movies: Movie[] = await prisma.movie.findMany();
    return movies;
  }
}
