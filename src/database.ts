import { DataSource } from "typeorm";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,  // Automatically sync database schema
  logging: false,
  entities: [__dirname + '/entities/*.ts'],
});