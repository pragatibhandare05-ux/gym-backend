import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';

@Controller('gym')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  @Get()
  getGyms() {
    return this.gymService.getAllGyms();
  }

  @Get(':id')
  getGymById(@Param('id') id: string) {
    console.log('Route Parameter:', id);

    return {
      message: 'Gym Found',
      id: id,
    };
  }

  @Post()
  createGym(@Body() createGymDto: CreateGymDto) {
    return this.gymService.addGym(createGymDto);
  }
}