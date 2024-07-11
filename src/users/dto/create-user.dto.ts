import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserRequestDto {
  @IsNotEmpty()
  @MinLength(4)
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
