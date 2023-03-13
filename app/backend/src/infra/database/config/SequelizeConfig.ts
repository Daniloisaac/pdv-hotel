import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: 'PDV_HOTEL',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 33060,
  dialect: 'mysql',
}

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(config)

export default sequelize;

