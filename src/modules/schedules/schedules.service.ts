/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Logger } from '@nestjs/common';

@Injectable()
export class SchedulesService {
  private logger = new Logger('Schedules Service');
  constructor() {}

  // @Cron(CronExpression.EVERY_10_MINUTES)
  // async handleCron() {
  //   this.logger.log('Cron job started');
  // }
}
