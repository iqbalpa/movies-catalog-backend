import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdateUserRequestDto {
  @MinLength(4)
  name?: string;
}
