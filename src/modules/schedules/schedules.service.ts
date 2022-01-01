/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Logger } from '@nestjs/common';

@Injectable()
export class SchedulesService {
  private logger = new Logger('Schedules Service');
  constructor() {}

  @Cron('0 1 * * *')
  async handleCronSubscriptionPayment() {}

  @Cron('* 1 * * *')
  async handleCronCheckNotStartCandidateStatus() {}

  // @Cron('* 2 * * *')
  // async handleCronCheckInProgressCandidateStatus() {
  //     try {
  //         await this.candidateAssessmentService.syncCandidateAssessments(['In Progress'])
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  @Cron('0 3 * * *')
  async handleCronNotificationPaymentUnsuccess(): Promise<void> {}
}
