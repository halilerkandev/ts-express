import { Sequelize } from 'sequelize';
import {
  HOST, POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER,
} from '../util/secrets';

export const dbContext = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: HOST,
  dialect: 'postgres',
});
