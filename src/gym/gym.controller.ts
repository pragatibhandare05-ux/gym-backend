import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';

@Controller('gym')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  // Get All Gyms
  @Get()
  async getAllGyms() {
    return await this.gymService.getAllGyms();
  }

  // Get Gym By ID
  @Get(':id')
  async getGymById(@Param('id') id: string) {
    return await this.gymService.getGymById(id);
  }

  // Create Gym
  @Post()
  async createGym(@Body() createGymDto: CreateGymDto) {
    return await this.gymService.addGym(createGymDto);
  }

  // Update Gym
  @Put(':id')
  async updateGym(
    @Param('id') id: string,
    @Body() updateGymDto: UpdateGymDto,
  ) {
    return await this.gymService.updateGym(id, updateGymDto);
  }

  // Delete Gym
  @Delete(':id')
  async deleteGym(@Param('id') id: string) {
    return await this.gymService.deleteGym(id);
  }
}