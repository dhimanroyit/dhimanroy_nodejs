import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './auth.schema';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModule: Model<User>,
    private jwtService: JwtService,
  ) {}
  async create(createAuthDto: CreateAuthDto) {
    const isPhoneExist = await this.userModule.findOne({
      phone: createAuthDto.phone,
    });
    console.log(isPhoneExist);

    if (!isPhoneExist) throw new BadRequestException('user already exist');
    const saltOrRounds = 10;

    const hash = await bcrypt.hash(createAuthDto.password, saltOrRounds);
    createAuthDto.password = hash;
    const user = new this.userModule(createAuthDto);
    await user.save();
    return user;
  }
  async login(loginAuthDto: LoginAuthDto) {
    const isUserExist = await this.userModule.findOne({
      phone: loginAuthDto.phone,
    });

    if (!isUserExist) throw new BadRequestException('user not found');
    console.log(isUserExist);
    const isMatch = await bcrypt.compare(
      loginAuthDto.password,
      isUserExist.password,
    );
    if (!isMatch) throw new UnauthorizedException();

    const payload = { userId: isUserExist._id, username: isUserExist.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
