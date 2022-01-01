import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { databaseConfig } from '../configs.constants';

export const typeOrmConfig: PostgresConnectionOptions = {
  ...databaseConfig,
};
