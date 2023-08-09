import { AuthModule } from './modules/auth/auth.module';

import { UserModule } from './modules/user/user.module';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './modules/question/question.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { OptionModule } from './modules/option/option.module';
import { typeOrmAsyncConfig } from './modules/config/typeorm.config';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //envFilePath we can set env file here default it will take .env
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    QuizModule,
    OptionModule,
    QuestionModule,
    UserModule,
    AuthModule,
    MulterModule.register({ dest: './uploads' })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }

// Configuration for Middleware
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(ApiTokenCheckMiddleware).forRoutes({ path: "*", method: RequestMethod.GET })
//   }
// }
