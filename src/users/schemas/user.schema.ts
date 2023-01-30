/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Ingredient } from 'src/ingredients/schemas/ingredient.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  _id: string;

  @Prop()
  username: string;

// crear validadores de campos: email, required etc
  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  shopping_list: Array<Ingredient>;

  @Prop()
  favourites: string;


}

export const UserSchema = SchemaFactory.createForClass(User);
