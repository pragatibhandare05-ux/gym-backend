import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  _id!: Types.ObjectId;

  @Prop()
  name!: string;

  @Prop({ unique: true })
  email!: string;

  @Prop()
  password!: string;

  @Prop({
  type: String,
  enum: ['user', 'admin'],
  default: 'user',
})
role!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);