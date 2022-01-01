import { Injectable, Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { join } from 'path';

@Injectable()
export class ConfigurationService {
  private readonly logger = new Logger('ConfigurationService');
  private currentEnv: string = process.env.NODE_ENV || 'development';
  constructor() {
    if (this.currentEnv == 'development') {
      const result = dotenv.config();
      if (result.error) {
        throw result.error;
      }
    }
  }

  get(key: string): string {
    return process.env[key];
  }

  get port(): string | number {
    return process.env.PORT || 3000;
  }

  get domain(): string {
    return process.env.domain;
  }

  get isDevelopment(): boolean {
    return this.currentEnv === 'development';
  }

  get mongoUri(): string {
    return process.env.MONGO_URI;
  }

  get freeTrialDay(): number {
    return Number(process.env.FREE_TRIAL_DAY);
  }

  get monthlyDay(): number {
    return Number(process.env.MONTHLY_DAY);
  }

  get JWT() {
    return {
      Key: process.env.JWT_KEY || 'DEMO_KEY',
      AccessTokenTtl: parseInt(process.env.ACCESS_TOKEN_TTL, 10) || 60 * 120, // 120m
      RefreshTokenTtl: parseInt(process.env.REFRESH_TOKEN_TTL, 10) || 80 * 120, // 3000 seconds
      authHeaderPrefix: 'JWT',
    };
  }

  get redis_config() {
    return {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    };
  }

  get aws() {
    return {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
      region: process.env.region,
      bucket: process.env.bucket,
      basePath: process.env.basePath,
      fileSize: 1 * 1024 * 1024,
    };
  }

  get db() {
    return {
      type: 'mongodb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      synchronize: false,
      cache: {
        type: 'redis',
        options: {
          host: process.env.REDIS_HOST,
          port: process.env.REDIS_PORT,
        },
      },
      entities: [join(__dirname, '../../schemas/*.schema{.ts,.js}')],
    };
  }
}
