import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const databaseConfig: PostgresConnectionOptions = {
  type: 'postgres',
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  synchronize: true,
  entities: [`${__dirname}/**/*.entity.{js,ts}`],
};

export const appConfig = {
  port: process.env.APP_PORT,
};

export const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.JWT_EXPIRES_IN,
};

export const redisConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
};

export const awsAccessBucket = {
  endpoint: process.env.AWS_END_POINT,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};

export const awsBucket = process.env.BUCKET;

export const awsFolder = {
  images: 'images/',
  files: 'files/',
  videos: 'videos/',
};
