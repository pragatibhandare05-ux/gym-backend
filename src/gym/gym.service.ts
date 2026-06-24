import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Gym, GymDocument } from './schemas/gym.schema';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';

@Injectable()
export class GymService {
  constructor(
    @InjectModel(Gym.name)
    private readonly gymModel: Model<GymDocument>,
  ) {}

  // Create Gym
  async addGym(createGymDto: CreateGymDto) {
    const newGym = new this.gymModel(createGymDto);
    return await newGym.save();
  }

  // Get All Gyms
  async getAllGyms() {
    return await this.gymModel.find();
  }

  // Get Gym By ID
  async getGymById(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid Gym ID');
    }

    const gym = await this.gymModel.findById(id);

    if (!gym) {
      throw new NotFoundException('Gym not found');
    }

    return gym;
  }

  // Update Gym
  async updateGym(id: string, updateGymDto: UpdateGymDto) {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid Gym ID');
    }

    const updatedGym = await this.gymModel.findByIdAndUpdate(
      id,
      updateGymDto,
      {
        new: true,
      },
    );

    if (!updatedGym) {
      throw new NotFoundException('Gym not found');
    }

    return updatedGym;
  }

  // Delete Gym
  async deleteGym(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid Gym ID');
    }

    const deletedGym = await this.gymModel.findByIdAndDelete(id);

    if (!deletedGym) {
      throw new NotFoundException('Gym not found');
    }

    return {
      success: true,
      message: 'Gym deleted successfully',
    };
  }
}