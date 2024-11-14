// import { Sequelize, DataTypes } from 'sequelize';

// const db = new Sequelize('ecommerce', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql',
//   port : 3306
// });

// export { db, DataTypes };

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('.env') });
import { Sequelize, DataTypes } from 'sequelize';
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: 3306,
});

export {db, DataTypes};