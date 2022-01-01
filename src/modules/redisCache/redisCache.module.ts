import { Module, CacheModule } from '@nestjs/common';
import { RedisCacheService } from './redisCache.service';

@Module({
  // imports: [
  //     CacheModule.register({
  //         inject: [ConfigurationService],
  //         useFactory: (config: ConfigurationService) => ({
  //             store: redisStore,
  //             host: config.redis_config.host,
  //             port: config.redis_config.port,
  //         }),
  //     }),
  // ],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}
