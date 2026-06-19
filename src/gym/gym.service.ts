import { Injectable } from '@nestjs/common';

@Injectable()
export class GymService {
  private gyms = [
    {
      id: 1,
      name: 'Gold Gym',
      location: 'Mumbai',
    },
    {
      id: 2,
      name: 'Fitness First',
      location: 'Pune',
    },
  ];

  getAllGyms() {
    return {
      success: true,
      message: 'Gym List Retrieved Successfully',
      totalGyms: this.gyms.length,
      data: this.gyms,
    };
  }

  addGym(gym: any) {
    console.log('Received Body:', gym);

    const newGym = {
      id: this.gyms.length + 1,
      ...gym,
    };

    this.gyms.push(newGym);

    return {
      success: true,
      message: 'Gym Added Successfully',
      gym: newGym,
    };
  }
}