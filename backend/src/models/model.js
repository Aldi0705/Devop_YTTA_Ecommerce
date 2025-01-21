import { Sequelize, DataTypes } from 'sequelize';

// Load environment variables
const DB_NAME = process.env.DB_NAME || 'ecommerce';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_DIALECT = process.env.DB_DIALECT || 'mysql';

// Set up Sequelize
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: false, // Disable Sequelize logging
});

export { db, DataTypes };
