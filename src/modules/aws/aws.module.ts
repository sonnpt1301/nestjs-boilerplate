import { Module } from '@nestjs/common';
import { S3ManagerService } from './s3-manager.service';
import { SESManagerService } from './ses-manager.service';
@Module({
  imports: [],
  controllers: [],
  providers: [S3ManagerService, SESManagerService],
  exports: [S3ManagerService, SESManagerService],
})
export class AwsModule {}
