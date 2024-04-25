import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(5)
  name: string;
  @IsEmail(
    {},
    {
      message: 'Please enter valid email',
    },
  )
  email: string;
  @IsEnum(['ADMIN', 'CONTRIBUTOR', 'INTERN'], {
    message: 'Allowed values are ADMIN, CONTRIBUTOR and INTERN',
  })
  role: string;
}
