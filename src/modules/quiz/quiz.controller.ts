import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { AdminRoleGuard } from '../auth/guard/admin-role.guard';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/guard/roles.decorator';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) { }

  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz()
  }


  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.getQuizById(id)
  }

  // npm i class-validator => for Dto validations
  // npm i class-transformer => for using pipes with validations
  @Post('/create-quiz')
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  @UseGuards(RolesGuard)
  // @UseGuards(AdminRoleGuard)
  @Roles('admin')
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createNewQuiz(quizData)
  }

}
