import { Module } from '@nestjs/common';
import { UserExpenceService } from './user-expence.service';
import { UserExpenceController } from './user-expence.controller';

@Module({
  controllers: [UserExpenceController],
  providers: [UserExpenceService]
})
export class UserExpenceModule {}
