import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GymDocument = Gym & Document;

@Schema()
export class Gym {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  location!: string;
}

export const GymSchema = SchemaFactory.createForClass(Gym);