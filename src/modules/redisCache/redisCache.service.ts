import { Injectable, Inject, CACHE_MANAGER, Logger } from '@nestjs/common'
import { Cache, CachingConfig } from 'cache-manager'

@Injectable()
export class RedisCacheService {
    private readonly logger = new Logger()
    constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {
        this.logger.log('REDIS_CONNECTED')
    }

    async get(key: string): Promise<string> {
        return await this.cache.get(key)
    }

    async set(key: string, value: string, options: CachingConfig): Promise<boolean> {
        await this.cache.set(key, value, options)
        return true
    }
}