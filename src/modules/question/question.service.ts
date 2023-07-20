import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entity/question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Quiz } from '../entity/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(@InjectRepository(Question) private readonly questionRepository: Repository<Question>) { }

  async createQuestion(question: CreateQuestionDto, quiz: Quiz) {

    const newQuestion = await this.questionRepository.save({ question: question.question })

    // quiz is array so we have to save old one and new one
    quiz.questions = [...quiz.questions, newQuestion]
    await quiz.save()

    return newQuestion 
  }
}
