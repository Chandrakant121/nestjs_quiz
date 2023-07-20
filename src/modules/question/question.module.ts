/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { Question } from '../entity/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from '../quiz/quiz.service';
import { Quiz } from '../entity/quiz.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Question,Quiz])],
    controllers: [QuestionController],
    providers: [QuestionService,QuizService],
})
export class QuestionModule { }
