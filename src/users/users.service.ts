import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  // Create a new user
  async create(userData: Partial<User>): Promise<User> {
    const newUser = new this.userModel(userData);
    return newUser.save();
  }

  // Find user by email
  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email });
  }

  // Find user by ID
  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id);
  }

  // Analytics API
  async getAnalytics() {
    console.time('Analytics Query');
    
    console.log('========== Analytics API Called ==========');

    const result = await this.userModel.aggregate([
      {
        $facet: {
          totalUsers: [
            {
              $count: 'count',
            },
          ],
          adminCount: [
            {
              $match: {
                role: 'admin',
              },
            },
            {
              $count: 'count',
            },
          ],
          userCount: [
            {
              $match: {
                role: 'user',
              },
            },
            {
              $count: 'count',
            },
          ],
        },
      },
    ]);

    console.log(
      'Aggregation Result:\n',
      JSON.stringify(result, null, 2),
    );
console.timeEnd('Analytics Query');
    return {
      totalUsers: result[0].totalUsers[0]?.count || 0,
      adminCount: result[0].adminCount[0]?.count || 0,
      userCount: result[0].userCount[0]?.count || 0,
    };
  }
}