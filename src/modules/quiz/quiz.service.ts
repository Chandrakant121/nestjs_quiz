import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Repository } from "typeorm"
import { Quiz } from '../entity/quiz.entity';
import { Question } from '../entity/question.entity';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>) { }

  async getAllQuiz() {
    // return await this.quizRepository.createQueryBuilder('q')
    //   .leftJoinAndSelect('q.questions', 'qt').getMany()
    return await this.quizRepository.createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt').leftJoinAndSelect('qt.options', 'o').getMany()
  }

  createQuiz(quizData) {
    return quizData
  }


  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({ where: { id: id }, relations: ['questions', 'questions.options'] })

  }

  async createNewQuiz(quiz: CreateQuizDto): Promise<CreateQuizDto> {
    return await this.quizRepository.save(quiz)
  }



}
