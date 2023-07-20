import { PartialType } from '@nestjs/mapped-types';
import { CreateUserExpenceDto } from './create-user-expence.dto';

export class UpdateUserExpenceDto extends PartialType(CreateUserExpenceDto) {}
