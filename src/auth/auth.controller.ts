import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { responseHandler } from 'src/utils/responseHandler';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async create(@Body() createAuthDto: CreateAuthDto) {
    const user = await this.authService.create(createAuthDto);
    return responseHandler('user create successfully', HttpStatus.CREATED);
  }
  @Post('/login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    const user = await this.authService.login(loginAuthDto);

    return responseHandler(
      'user create successfully',
      HttpStatus.CREATED,
      user,
    );
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
