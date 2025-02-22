import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Despesa } from '../modules/despesa/entities/despesa.entity';
import { DespesaCategoria } from '../modules/despesa/entities/despesa_categoria.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Despesa, DespesaCategoria],
  synchronize: process.env.NODE_ENV !== 'prd' ? true : false,
  migrations: ['src/db/migrations/*.js'],
});
