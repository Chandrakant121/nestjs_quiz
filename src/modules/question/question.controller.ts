import { Controller, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { QuestionService } from './question.service';
import { Question } from '../entity/question.entity';
import { QuizService } from '../quiz/quiz.service';
import { ApiTags, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Question')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService,
    private readonly quizService: QuizService) { }



  @Post('')
  @UsePipes(ValidationPipe)
  @ApiCreatedResponse({ description: "Created Question object as response", type: Question })
  @ApiBadRequestResponse({ description: "Question cannot be created" })
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizId)
    return await this.questionService.createQuestion(question, quiz)
  }
}
