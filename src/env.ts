import { config } from 'dotenv';
import * as path from 'path';
import process from 'process';

const { NODE_ENV = 'development' } = process.env;

// Load environment variables based on NODE_ENV
const envFile =
  NODE_ENV === 'development' ? '.env.development' : `.env.${NODE_ENV}`;
config({ path: path.resolve(process.cwd(), envFile) });

// Load .env file as fallback
config({ path: path.resolve(process.cwd(), '.env') });
