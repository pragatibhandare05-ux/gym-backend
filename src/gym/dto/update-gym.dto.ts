import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateGymDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  name?: string;

  @IsOptional()
  @IsString({ message: 'Location must be a string' })
  @MinLength(3, { message: 'Location must be at least 3 characters long' })
  location?: string;
}