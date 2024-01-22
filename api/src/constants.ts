import 'dotenv/config';

export const LYRICS = 'Vi kan dricka lådvin har en hel skåpbil';
export const CLIENT = process.env.CLIENT ?? 'http://localhost:5173';
export const DB = {
  HOST: process.env.DB_HOST ?? 'localhost',
  USER: process.env.DB_USER ?? 'root',
  PASS: process.env.DB_PASS ?? 'root',
};
