import { Injectable } from '@nestjs/common';
import { CreateExpenceTypeDto } from './dto/create-expence-type.dto';
import { UpdateExpenceTypeDto } from './dto/update-expence-type.dto';

@Injectable()
export class ExpenceTypeService {
  create(createExpenceTypeDto: CreateExpenceTypeDto) {
    return 'This action adds a new expenceType';
  }

  findAll() {
    return `This action returns all expenceType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expenceType`;
  }

  update(id: number, updateExpenceTypeDto: UpdateExpenceTypeDto) {
    return `This action updates a #${id} expenceType`;
  }

  remove(id: number) {
    return `This action removes a #${id} expenceType`;
  }
}
