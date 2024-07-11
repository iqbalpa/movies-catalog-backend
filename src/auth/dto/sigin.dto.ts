import { IsNotEmpty, MinLength } from 'class-validator';

export class SignInRequestDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
