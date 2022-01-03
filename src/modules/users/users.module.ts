import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { rabbitMQConfig } from 'src/configs/configs.constants';
@Module({
  imports: [ConfigModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'USERS_SERVICE',
      useFactory: () => {
        const { host, password, queueName, user } = rabbitMQConfig;

        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://${user}:${password}@${host}`],
            queue: queueName,
            queueOptions: {
              durable: true,
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class UsersModule {}
