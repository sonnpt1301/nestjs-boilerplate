import redisConfig from './redis.config';
import rabbitmqConfig from './rabbitmq.config';
import mongooseConfig from './databases/mongoose.config';
import jwtConfig from './jwt.config';

export default [redisConfig, rabbitmqConfig, mongooseConfig, jwtConfig];
