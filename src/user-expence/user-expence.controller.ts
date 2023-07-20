import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserExpenceService } from './user-expence.service';
import { CreateUserExpenceDto } from './dto/create-user-expence.dto';
import { UpdateUserExpenceDto } from './dto/update-user-expence.dto';

@Controller('user-expence')
export class UserExpenceController {
  constructor(private readonly userExpenceService: UserExpenceService) {}

  @Post()
  create(@Body() createUserExpenceDto: CreateUserExpenceDto) {
    return this.userExpenceService.create(createUserExpenceDto);
  }

  @Get()
  findAll() {
    return this.userExpenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userExpenceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserExpenceDto: UpdateUserExpenceDto,
  ) {
    return this.userExpenceService.update(+id, updateUserExpenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userExpenceService.remove(+id);
  }
}
