/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user-dto';
import { EncondePass } from './helpers';

@Injectable()
export class UserService {

  constructor(@InjectModel('users') private readonly userModel: Model<CreateUserDto>) {}

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const newUser = await new this.userModel(createUserDto)
    newUser.password = await EncondePass.EncoderPassword(createUserDto.password)
  
    return newUser.save()
  }
}
