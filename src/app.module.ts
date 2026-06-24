import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GymModule } from './gym/gym.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/gymdb'),
    GymModule,
  ],
})
export class AppModule {}