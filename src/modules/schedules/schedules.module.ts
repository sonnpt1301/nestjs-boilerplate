import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulesService } from './schedules.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [SchedulesService],
})
export class SchedulesModule {}
