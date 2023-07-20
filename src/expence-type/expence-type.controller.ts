import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExpenceTypeService } from './expence-type.service';
import { CreateExpenceTypeDto } from './dto/create-expence-type.dto';
import { UpdateExpenceTypeDto } from './dto/update-expence-type.dto';

@Controller('expence-type')
export class ExpenceTypeController {
  constructor(private readonly expenceTypeService: ExpenceTypeService) {}

  @Post()
  create(@Body() createExpenceTypeDto: CreateExpenceTypeDto) {
    return this.expenceTypeService.create(createExpenceTypeDto);
  }

  @Get()
  findAll() {
    return this.expenceTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expenceTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExpenceTypeDto: UpdateExpenceTypeDto,
  ) {
    return this.expenceTypeService.update(+id, updateExpenceTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expenceTypeService.remove(+id);
  }
}
