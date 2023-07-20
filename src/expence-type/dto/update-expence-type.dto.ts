import { PartialType } from '@nestjs/mapped-types';
import { CreateExpenceTypeDto } from './create-expence-type.dto';

export class UpdateExpenceTypeDto extends PartialType(CreateExpenceTypeDto) {}
