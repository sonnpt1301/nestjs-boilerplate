import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/configs/databases/typeorm.config';
import { UsersModule } from 'src/modules/users/users.module';
import { PaginationModule } from 'src/shared/pagination/pagination.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    PaginationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
