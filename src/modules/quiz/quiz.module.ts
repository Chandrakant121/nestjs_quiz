import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from '../entity/quiz.entity';
import { UserService } from '../user/user.service';
import { User } from '../entity/user.entity';


@Module({
  controllers: [QuizController],
  providers: [QuizService,UserService],
  imports: [TypeOrmModule.forFeature([Quiz,User])]
})

export class QuizModule { }
