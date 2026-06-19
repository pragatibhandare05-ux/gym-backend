import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateGymDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  name!: string;

  @IsString({ message: 'Location must be a string' })
  @IsNotEmpty({ message: 'Location is required' })
  @MinLength(3, { message: 'Location must be at least 3 characters long' })
  location!: string;
}