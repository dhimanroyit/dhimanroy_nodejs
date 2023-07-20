import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserExpenseDocument = HydratedDocument<ExpanseType>;

@Schema({ timestamps: true })
export class ExpanseType {
  @Prop()
  expanse_type: string;
}

export ExpanseTypeSchema = SchemaFactory.createForClass(ExpanseType);
