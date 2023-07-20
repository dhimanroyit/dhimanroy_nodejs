import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from 'src/auth/auth.schema';
import mongoose from 'mongoose';
import { ExpanseType } from 'src/expence-type/expence-type.schema';

export type UserExpenseDocument = HydratedDocument<UserExpense>;

@Schema({ timestamps: true })
export class UserExpense {
  @Prop()
  amount: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  expanse_type_id: ExpanseType;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user_id: User;
}

export const UserExpenseSchema = SchemaFactory.createForClass(UserExpense);
