import { TypeOrmModule } from '@nestjs/typeorm';
// TypeOrm and Entity
// npm i @nestjs/typeorm typeorm
// npm i pg

export const typeOrmConfig: TypeOrmModule = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'quiz',
  entities: [
    __dirname + '/../**/*.entity{.ts,.js}',
  ],
  // Do not use synchronize in production you will loose your data
  synchronize: true,
  // It will show all the query in console
  logging: true
}