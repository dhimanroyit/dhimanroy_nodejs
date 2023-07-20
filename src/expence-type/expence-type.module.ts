import { Module } from '@nestjs/common';
import { ExpenceTypeService } from './expence-type.service';
import { ExpenceTypeController } from './expence-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpanseType } from './expence-type.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: ExpanseType.name, schema: }])],
  controllers: [ExpenceTypeController],
  providers: [ExpenceTypeService],
})
export class ExpenceTypeModule {}
