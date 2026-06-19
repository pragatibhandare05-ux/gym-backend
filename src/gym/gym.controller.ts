import { Controller, Get, Post, Body } from '@nestjs/common';
import { GymService } from './gym.service';

@Controller('gym')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  @Get()
  getGyms() {
    return this.gymService.getAllGyms();
  }

  @Post()
  createGym(@Body() body: any) {
    return this.gymService.addGym(body);
  }
}