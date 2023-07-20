import { Injectable } from '@nestjs/common';
import { CreateUserExpenceDto } from './dto/create-user-expence.dto';
import { UpdateUserExpenceDto } from './dto/update-user-expence.dto';

@Injectable()
export class UserExpenceService {
  create(createUserExpenceDto: CreateUserExpenceDto) {
    return 'This action adds a new userExpence';
  }

  findAll() {
    return `This action returns all userExpence`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userExpence`;
  }

  update(id: number, updateUserExpenceDto: UpdateUserExpenceDto) {
    return `This action updates a #${id} userExpence`;
  }

  remove(id: number) {
    return `This action removes a #${id} userExpence`;
  }
}
