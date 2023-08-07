import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


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

// Strategy and passport Authentication
// npm i --D @types/passport-local @types/passport
// npm install @nestjs/passport

// JWT
// npm i @nestjs/jwt passport-jwt
//  npm i -D @types/passport-jwt  

// Swagger
// npm install --save @nestjs/swagger

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  // We can use pipes globally
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true,
  //   transform: true,
  // }));
  const config = new DocumentBuilder()
    .setTitle('Quiz Manager')
    .setDescription('The Quiz Manager API description')
    .setVersion('1.0')
    .addTag('Quiz')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
