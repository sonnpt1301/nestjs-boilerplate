import { Inject, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  RmqContext,
  RmqRecordBuilder,
} from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private usersService: ClientProxy) {}
}
