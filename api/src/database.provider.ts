import { join } from 'path';
import { DataSource } from 'typeorm';
import { DB } from './constants';

export const DATA_SOURCE = 'DATA_SOURCE';
export const databaseProvider = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: DB.HOST,
        port: 5432, // fixme: var
        username: DB.USER,
        password: DB.PASS,
        database: 'test',
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
