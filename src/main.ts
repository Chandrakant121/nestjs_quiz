import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


// Cli Command
// nest g module modules/quiz
// nest g controller modules/quiz
// npm i class-validator => for Dto validations
// npm i class-transformer => for using pipes with validations

// TypeOrm and Entity
// npm i @nestjs/typeorm typeorm
// npm i pg

// Config service
//  npm i --save @nestjs/config

// User Registration
// npm i bcrypt @types/bcrypt

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // We can use pipes globally
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true,
  //   transform: true,
  // }));
}
bootstrap();
