import { config } from 'dotenv';

const { NODE_ENV } = process.env;

config({ path: NODE_ENV === 'development' ? '.env' : `.env.${NODE_ENV}` });
