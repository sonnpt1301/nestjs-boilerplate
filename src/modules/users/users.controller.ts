import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ClientProxy,
  Ctx,
  MessagePattern,
  RmqContext,
} from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private usersService: ClientProxy, // private readonly usersService: UsersService
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.send(
      {
        cmd: 'add-user',
      },
      createUserDto,
    );
  }
}
