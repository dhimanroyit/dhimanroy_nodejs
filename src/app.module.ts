import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserExpenceModule } from './user-expence/user-expence.module';
import { ExpenceTypeModule } from './expence-type/expence-type.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Dhiman_Roy_NodeJS'),
    AuthModule,
    UserExpenceModule,
    ExpenceTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
