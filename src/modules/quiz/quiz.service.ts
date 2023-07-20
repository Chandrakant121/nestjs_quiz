import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Repository } from "typeorm"
import { Quiz } from '../entity/quiz.entity';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>) { }

  getQuiz() {
    return [1, 2, 3]
  }

  createQuiz(quizData) {
    return quizData
  }


  async getQuizById(id:number): Promise<Quiz> {
    return await this.quizRepository.findOne({ where: { id: id }, relations: { questions: true } })

  }

  async createNewQuiz(quiz: CreateQuizDto): Promise<CreateQuizDto> {
    return await this.quizRepository.save(quiz)
  }



}
