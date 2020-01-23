import dotenv from 'dotenv';
import fs from 'fs';
import { logger } from './logger';

if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}
export const ENVIRONMENT = process.env.NODE_ENV;
export const {
  PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  HOST,
  JWT_SECRET_KEY,
  JWT_EXPIRE,
  JWT_COOKIE_EXPIRE,
} = process.env;
