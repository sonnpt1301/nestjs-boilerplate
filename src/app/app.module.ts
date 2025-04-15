import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/users/users.module';
import { PaginationModule } from 'src/shared/pagination/pagination.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from '../configs/configuration';
import { RedisModule } from '../shared/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', `.env.${process.env.NODE_ENV}`],
      load: configuration,
    }),
    UsersModule,
    PaginationModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
