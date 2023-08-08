import { Controller, Post, Body, ValidationPipe, UsePipes, UseGuards } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { QuestionService } from './question.service';
import { Question } from '../entity/question.entity';
import { QuizService } from '../quiz/quiz.service';
import { Quiz } from '../entity/quiz.entity';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService,
    private readonly quizService: QuizService) { }



  @Post('')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizId)
    return await this.questionService.createQuestion(question, quiz)
  }
}
